import Koa from "koa";

import rootRouter from "./routes/root";
import usersRouter from "./routes/users";

const app = new Koa();

app.use(rootRouter.routes());
app.use(usersRouter.routes());

export default app;
