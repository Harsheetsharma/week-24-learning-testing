import { describe, expect, it } from "@jest/globals";
import { sum, multiply } from "../index";

describe("testing sum function", () => {
    it("should sum 1 and 2 correctly", () => {
        expect(sum(1, 2)).toBe(3);
    })
    it("should return the sum of negatively numbers corect", () => {
        expect(sum(-2, -4)).toBe(-6);
    })
})
describe("testing multiply function", () => {
    it("should multiply 1 and 2 correctly", () => {
        expect(multiply(1, 2)).toBe(2);
    })
    it("should return the mul of negatively numbers corect", () => {
        expect(multiply(-2, -4)).toBe(8);
    })
})