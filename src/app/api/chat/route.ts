import { AssistantResponse } from "ai";
import openAi from "openai";

const openai = new openAi({
  apiKey: process.env.OPENAI_API_KEY || "",
});

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  // Parse the request body
  const input: {
    threadId: string | null;
    message: string;
  } = await req.json();

  if (input.threadId === "temp") {
    input.threadId = null;
  }
  const today = new Date().toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const datePrompt = `(Today is: ${today})`;
  const titlePrompt =
    "Please provide a title a short (max 25 chars) and descriptive title for the chat thread at the end of the message, in the language provided by the user, following the format after a new line: 'Title: Your Title Here'";
  const noTitlePrompt =
    "Please Does't end the message with a 'Title', only need for the first message";
  const finalMessage = `\n\n${datePrompt}\n${titlePrompt}`;
  const messageWithDate = input.threadId
    ? `${input.message}\n${noTitlePrompt}`
    : `${input.message}${finalMessage}`;

  // Create a thread if needed
  const threadId = input.threadId ?? (await openai.beta.threads.create({})).id;

  // Add a message to the thread
  const createdMessage = await openai.beta.threads.messages.create(threadId, {
    role: "user",
    content: messageWithDate,
  });

  return AssistantResponse(
    { threadId, messageId: createdMessage.id },
    async ({ forwardStream, sendDataMessage }) => {
      // Run the assistant on the thread
      const runStream = openai.beta.threads.runs.stream(threadId, {
        assistant_id:
          process.env.ASSISTANT_ID ??
          (() => {
            throw new Error("ASSISTANT_ID is not set");
          })(),
      });

      // forward run status would stream message deltas
      let runResult = await forwardStream(runStream);

      // status can be: queued, in_progress, requires_action, cancelling, cancelled, failed, completed, or expired
      while (
        runResult?.status === "requires_action" &&
        runResult.required_action?.type === "submit_tool_outputs"
      ) {
        const toolOutputs = runResult.required_action.submit_tool_outputs.tool_calls.map(
          (toolCall: any) => {
            const parameters = JSON.parse(toolCall.function.arguments);

            switch (toolCall.function.name) {
              // configure your tool calls here

              default:
                throw new Error(`Unknown tool call function: ${toolCall.function.name}`);
            }
          }
        );

        runResult = await forwardStream(
          openai.beta.threads.runs.submitToolOutputsStream(threadId, runResult.id, {
            tool_outputs: toolOutputs,
          })
        );
      }
    }
  );
}
