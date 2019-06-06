"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const router = new koa_router_1.default();
router.get("/users", async (ctx, next) => {
    console.log(ctx.req.headers);
    ctx.body = [{ name: "Jon Snow" }];
    //await next();
});
router.get("/", async (ctx, next) => {
    console.log(ctx.req.headers);
    ctx.body = [{ name: "Jon Snow" }];
    //await next();
});
router.get("/users/:id", async (ctx, next) => {
    console.log(ctx.req.headers);
    ctx.body = {
        id: ctx.params.id,
        name: "Jon Snow",
    };
    ctx.res.end("sdfsd");
    //await next();
});
exports.default = router;
