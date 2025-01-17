import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.json({ message: "bhai diploy karna hai pehele" });
});

export default app;
