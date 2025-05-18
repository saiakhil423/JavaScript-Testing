import { describe, test, it, expect} from "vitest";
import { fizzBuzz, max } from "../src/intro";
describe('max',()=>{
    it('should return first one if it is greater', ()=>{
        //AAA
        //Arrange
        const a = 3;
        const b = 1;
        //Act
        const res = max(a,b);
        //Assert
        expect(res).toBe(3);
    })


    it('should return 2nd arg if second is greater',()=>{
        expect(max(1,4)).toBe(4)
    })
})


describe('fizzBuzz',()=>{
    it('it should divide by 3 and 5',()=>{
        const n = 15;
        const result = fizzBuzz(n);
        expect(result).toBe("FizzBuzz");
    })
    it('it should divide by 3',()=>{
        // const n = 15;
        expect(fizzBuzz(9)).toBe("Fizz");
    })
    it('it should divide by 3',()=>{
        // const n = 15;
        expect(fizzBuzz(10)).toBe("Buzz");
    })
})