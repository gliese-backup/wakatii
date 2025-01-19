import { OpenAPIHono } from '@hono/zod-openapi';
import { pinoLogger } from 'hono-pino';
// import { logger } from 'hono/logger';
import { notFound, onError } from 'stoker/middlewares';

const app = new OpenAPIHono();

function logger() {
  return pinoLogger({
    http: {
      reqId: () => crypto.randomUUID(),
    },
  });
}

// app.use(pinoLogger());
app.use(logger());
app.notFound(notFound);
app.onError(onError);

app.get('/err', (c) => {
  throw new Error("What's this");
});

app.get('/', (c) => {
  return c.json({ message: 'Hello from our API' });
});

export default app;
