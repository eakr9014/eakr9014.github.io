describe("isEmpty", function() {

  describe("should handle various edge cases", function(){

        //Spec for non-empty string
        it("should return false for a non-empty string", function() {
            expect(isEmpty("rawr")).toBe(false);
        });

        //Spec for empty string
        it("should return true for an empty string", function() {
            expect(isEmpty("")).toBe(true);
        });

        //Spec for undefined string
        it("should return true for an undefined input", function() {
            expect(isEmpty(undefined)).toBe(true);
        });

    });
});
