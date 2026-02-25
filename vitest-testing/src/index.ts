import express from "express"
import z, { success } from "zod";
import PrismaClient from "./db";
export const app = express();
app.use(express.json());
const prisma = PrismaClient;
const sumInput = z.object({
    a: z.number(),
    b: z.number()
})

app.post("/sum", (req, res) => {

    const parsedInputs = sumInput.safeParse(req.body);

    if (!parsedInputs.success) {
        return res.status(411).json({
            error: "cannot parse the inputs"
        })
    }
    const answer = parsedInputs.data.a + parsedInputs.data.b;

    res.json({
        answer
    })
})

app.get("/sum", (req, res) => {
    const parsedInputs = sumInput.safeParse({
        a: Number(req.headers["a"]),
        b: Number(req.headers["b"])
    })
    if (!parsedInputs.success) {
        return res.status(411).json({
            error: "cannot parse the inputs"
        })
    }


    const answer = parsedInputs.data.a + parsedInputs.data.b;

    res.json({
        answer
    })

})