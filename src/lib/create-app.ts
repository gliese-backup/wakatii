import { OpenAPIHono } from "@hono/zod-openapi";
import { notFound, onError } from "stoker/middlewares";
import logger from "@/middleware/logger";

export default function createApp() {
  const app = new OpenAPIHono({
    strict: false,
  });

  app.use(logger());
  app.notFound(notFound);
  app.onError(onError);

  return app;
}
