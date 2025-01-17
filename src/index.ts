import { Hono } from "hono";

const app = new Hono();

app.get("/", async (c) => {
  return c.json({ message: "Wakati API is active" });
});

app.post("/analyze", async (c) => {
  const body = await c.req.json();

  const result = await c.env.AI.run("@cf/meta/llama-3.1-8b-instruct", {
    messages: [
      {
        role: "user",
        content: body.prompt,
      },
    ],
  });

  return c.json({ result });
});

export default app;
