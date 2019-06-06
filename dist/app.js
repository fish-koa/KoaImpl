"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const users_1 = __importDefault(require("./routes/users"));
const app = new koa_1.default();
// app.use(async (ctx, next) => {
//     console.log("Hello World");
//     // ctx.res.end("sdfsfs")
//     await next()
// });
app.use(users_1.default.routes);
app.use(users_1.default.allowedMethods());
exports.default = app;
