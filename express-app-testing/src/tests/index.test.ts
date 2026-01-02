import { describe, expect, it } from "@jest/globals";
import request from "supertest";
import { app } from "../index";

describe("POST /sum", () => {
    it("should reutrn the sum of two number", async () => {
        const res = await request(app).post("/sum").send({
            a: 1,
            b: 2
        });

        console.log(res);
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe(3)
    })
})