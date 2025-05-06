import { log } from "@/lib/shared/Logger";
import { getCloudflareContext } from "@opennextjs/cloudflare";

/*export default {
  async fetch(request, env): Promise<Response> {
    const { prompt } = await request.json<{ prompt: string }>();
    const response = await env.AI.run("@cf/meta/llama-3.1-8b-instruct", {
      prompt,
      max_tokens: 1000,
    });

    const data = JSON.stringify(response);
    log(data);
    return new Response(JSON.stringify(response));
  },
} satisfies ExportedHandler<Env>;*/

export async function POST(request: Request) {
  const { env } = await getCloudflareContext({ async: true });
  const ai = env.AI;
  if (!ai) {
    return Response.json({ error: "AI binding not found" }, { status: 500 });
  }
  const { prompt } = await request.json<{ prompt: string }>();
  const aiResp = await ai.run("@cf/meta/llama-3-8b-instruct", {
    prompt,
    max_tokens: 1000,
  });

  /* const aiResp = await fetch(
    "https://api.cloudflare.com/client/v4/accounts/xxx/ai/run/@cf/meta/llama-2-7b-chat-int8",
    {
      method: "POST",
      headers: { Authorization: `Bearer ${process.env.CF_AI_TOKEN}` },
      body: JSON.stringify({ prompt }),
    }
  ); */
  const data = JSON.stringify(aiResp);
  log(data);
  return new Response(JSON.stringify(aiResp));
}
