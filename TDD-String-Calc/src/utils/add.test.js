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


})