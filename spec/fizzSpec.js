describe("fizzBuzz", function() {
    
    beforeEach(function() {
        fizz = new fizzBuzz();
    });
    
    describe("fizzBuzz tests", function() {
       it("should exist", function() {
            expect(fizzBuzz).toBeDefined();
        });
        it("should return FizzBuzz", function() {
            var result = fizzBuzz(15)
           expect(result).toBe("FizzBuzz") 
        });
        it("should return Fizz", function() {
           var result = fizzBuzz(9)
           expect(result).toBe("Fizz")
        });
        it("should return Buzz", function() {
            var result = fizzBuzz(20)
            expect(result).toBe("Buzz")
        });
        it("should return number if not divisble by 3 and or 5", function() {
           var result = fizzBuzz(7)
           expect(result).toBe(result)
        });
    });
});