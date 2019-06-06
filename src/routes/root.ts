import Router from "koa-router";

const router = new Router();

router.get("/", async (ctx, next) => {
    ctx.body = "Hello world";
    await next();
});

export default router;
