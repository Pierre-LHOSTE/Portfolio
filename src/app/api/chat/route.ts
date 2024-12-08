import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

export const prerender = false;

export async function POST(request: Request) {
  const { messages } = await request.json();
  console.log("🚀 ~ messages:", messages);

  const result = streamText({
    model: openai("gpt-4o-mini"),
    system: "You are a helpful assistant.",
    messages,
  });

  return result.toDataStreamResponse();
}
