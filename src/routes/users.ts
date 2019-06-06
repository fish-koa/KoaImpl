import Router from "koa-router";

const router = new Router();

router.get("/users", async (ctx, next) => {
    ctx.body = [{name: "Jon Snow"}];
    await next();
});

router.get("/users/:id", async (ctx, next) => {
    ctx.body = {
        id: ctx.params.id,
        name: "Jon Snow",
    };
    await next();
});

export default router;
