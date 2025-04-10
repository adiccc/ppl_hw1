import * as R from "../../src/lib/result";
import * as F from "../../src/part3/find";

describe("Assignment 1 - Part 3", () => {
    describe("findResult", () => {
        it("returns a Failure when no element was found", () => {
            const my_list: string[] = ["dog", "cat", "rat"]
            expect(F.findResult(x => x.length > 3, my_list)).toSatisfy(R.isFailure);
        });

        it("returns an Ok when an element was found", () => {
            const my_list: string[] = ["raccoon", "ostrich", "slug"]
            expect(F.findResult(x => x.length > 3, my_list)).toSatisfy(R.isOk);
        });
        
        // Additional tests for findResult
        it("returns the first matching element", () => {
            const my_list: number[] = [1, 2, 3, 4, 5]
            const result = F.findResult(x => x % 2 === 0, my_list);
            expect(R.isOk(result) && result.value).toEqual(2);
        });

        it("works with empty arrays", () => {
            const empty: number[] = [];
            expect(F.findResult(x => x > 0, empty)).toSatisfy(R.isFailure);
        });

        it("works with complex predicates", () => {
            const objects = [
                { id: 1, name: "Alice" }, 
                { id: 2, name: "Bob" }, 
                { id: 3, name: "Charlie" }
            ];
            const result = F.findResult(x => x.id > 1 && x.name.length > 3, objects);
            expect(R.isOk(result) && result.value).toEqual({ id: 3, name: "Charlie" });
        });
    });

    describe("returnSquaredIfFoundEven", () => {
        it("returns an Ok of the first even number squared in v2", () => {
            expect(F.returnSquaredIfFoundEven_v2([1, 2, 3])).toEqual(R.makeOk(4));
        });

        it("return a Failure if no even numbers are in the array in v2", () => {
            expect(F.returnSquaredIfFoundEven_v2([1, 3, 5])).toSatisfy(R.isFailure);
        });

        // Additional tests for returnSquaredIfFoundEven_v2
        it("handles empty arrays in v2", () => {
            expect(F.returnSquaredIfFoundEven_v2([])).toSatisfy(R.isFailure);
        });

        it("finds the first even number when multiple exist in v2", () => {
            expect(F.returnSquaredIfFoundEven_v2([5, 7, 4, 2, 8])).toEqual(R.makeOk(16));
        });

        // Tests for returnSquaredIfFoundEven_v3
        it("returns squared value when an even number exists in v3", () => {
            expect(F.returnSquaredIfFoundEven_v3([1, 2, 3])).toEqual(4);
        });

        it("returns -1 when no even numbers exist in v3", () => {
            expect(F.returnSquaredIfFoundEven_v3([1, 3, 5])).toEqual(-1);
        });

        it("handles empty arrays in v3", () => {
            expect(F.returnSquaredIfFoundEven_v3([])).toEqual(-1);
        });

        it("finds the first even number when multiple exist in v3", () => {
            expect(F.returnSquaredIfFoundEven_v3([5, 7, 4, 2, 8])).toEqual(16);
        });
    });
});