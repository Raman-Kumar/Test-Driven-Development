import { add } from './add'

describe('testing add function', ()=> {

    test(' add("") should be 0 ', ()=> {
        expect(add("")).toBe(0)

    })

    test(' add("1") should be 1 ', ()=> {
        expect(add("1")).toBe(1)
    })

    test(' add("1,2") should be 3 ', ()=> {
        expect(add("1,2")).toBe(3)
    })

    test(' add("1\n2,3") should be 6 ', ()=> {
        expect(add("1\n2\n3")).toBe(6)
    })


    test(' add("//;\n1;2") should be 3 ', ()=> {
        expect(add("//;\n1;2")).toBe(3)
    })

    it("should throw an exception for a single negative number", () => {
        expect(() => add("1,-2,3")).toThrow("negative numbers not allowed: -2");
    });

    it("should throw an exception listing all negative numbers", () => {
        expect(() => add("-1,-2,3,-4")).toThrow("negative numbers not allowed: -1,-2,-4");
    });
})