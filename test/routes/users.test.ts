import assert from "assert";
import request from "supertest";

import app from "../../src/app";

describe("users 路由", () => {
    it("Get /users", async () => {
        const result = await request(app.callback()).get("/users");
        const resultObj = JSON.parse(result.text);

        // 应该返回一个数组
        expect(resultObj).toBeInstanceOf(Array);
    });

    it("Get /users/:id", async () => {
        const result = await request(app.callback()).get("/users/9527");
        const resultObj = JSON.parse(result.text);

        // 返回的用户信息应该有id
        expect(resultObj.id).toEqual("9527");
    });
});
