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

  // Append the date to the user's message if it's the first message
  const today = new Date().toLocaleDateString("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const messageWithDate = input.threadId ? input.message : `${input.message}\n(Today is: ${today})`;

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
