import packageJSON from "../../package.json";
import type { OpenAPIHono } from "@hono/zod-openapi";

export default function configureOpenAPI(app: OpenAPIHono) {
  app.doc("/doc", {
    openapi: "3.0.0",
    info: {
      version: packageJSON.version,
      title: "My API",
    },
  });
}
