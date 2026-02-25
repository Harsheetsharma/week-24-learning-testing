import { describe, expect, it, vi } from "vitest";
import request from "supertest";
import { app } from "../index";

vi.mock('..db/', () => ({
    PrismaClient: { sum: { create: vi.fn() } }
}))

describe('POST /sum', () => {
    it("to check the sum of the number", async () => {
        const res = await request(app).post("/sum").send({
            a: Number(0),
            b: Number(3)
        })
        console.log(res);
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(3);
    })
    it("to check the sum of the number", async () => {
        const res = await request(app).post("/sum").send({
            a: Number(2),
            b: Number(5)
        })
        console.log(res);
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(7);
    })
})
