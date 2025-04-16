import { countVowels, isPalindrome, treeToSentence, WordTree } from "../../src/part2/part2";

describe("Assignment 1 - Part 2", () => {

    describe("countVowels", () => {

        it("should count vowels in a simple word", () => {
            expect(countVowels("hello")).toBe(2);
        });

        it("should count vowels in uppercase and lowercase", () => {
            expect(countVowels("HELLO")).toBe(2);
        });

        it("should handle empty strings", () => {
            expect(countVowels("")).toBe(0);
        });
    
        it("should return 0 for strings with no vowels", () => {
            expect(countVowels("Rhythm")).toBe(0);
        });
    
        it("should count all vowels in a sentence with spaces", () => {
            expect(countVowels("The quick brown fox jumps over the lazy dog")).toBe(11);
        });
    
        it("should handle strings with only vowels", () => {
            expect(countVowels("aeiouAEIOU")).toBe(10);
        });
    
        it("should handle strings with special characters", () => {
            expect(countVowels("Hello, World!")).toBe(3);
        });
    });

    describe("isPalindrome", () => {

        it("should return true for a simple palindrome", () => {
            expect(isPalindrome("racecar")).toBe(true);
        });

        it("should return true for a palindrome with mixed case", () => {
            expect(isPalindrome("RaceCar")).toBe(true);
        });

        it("should handle empty strings", () => {
            expect(isPalindrome("")).toBe(true);
        });
    
        it("should handle single character strings", () => {
            expect(isPalindrome("a")).toBe(true);
        });
    
        it("should ignore spaces, punctuation, and capitalization", () => {
            expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
        });
    
        it("should return false for non-palindromes", () => {
            expect(isPalindrome("hello world")).toBe(false);
        });
    
        it("should handle palindromes with numbers", () => {
            expect(isPalindrome("12321")).toBe(true);
        });
    
        it("should handle complex palindromes with mixed characters", () => {
            expect(isPalindrome("No 'x' in Nixon")).toBe(true);
        });
        
        it("should handle complex palindromes with mixed characters and numbers", () => {
            expect(isPalindrome("N9o 'x' in Nixo9n")).toBe(true);
        });
        it("should handle complex palindromes with mixed characters and numbers", () => {
            expect(isPalindrome("No 'x' in Nixo9n")).toBe(false);
        });
    });

    describe("treeToSentence", () => {

        it("should concatenate words in pre-order traversal", () => {
            const tree: WordTree = {
                root: "Hello",
                children: [
                    { root: "from", children: [] },
                    { root: "PPL", children: [] },
                    { root: "team!", children: [] },
                ],
            };

            expect(treeToSentence(tree)).toBe("Hello from PPL team!");
        });

        it("should handle deeper nesting", () => {
            const tree: WordTree = {
                root: "Hello",
                children: [
                    {
                        root: "students",
                        children: [{ root: "how", children: [] }],
                    },
                    { root: "are", children: [] },
                    { root: "you?", children: [] },
                ],
            };

            expect(treeToSentence(tree)).toBe("Hello students how are you?");
        });

        it("should concatenate words in pre-order traversal", () => {
            const tree: WordTree = {
                root: "",
                children: [
                    { root: "x", children: [] },
                ],
            };

            expect(treeToSentence(tree)).toBe(" x");
        });

        it("should concatenate words in pre-order traversal", () => {
            const tree: WordTree = {
                root: "",
                children: [
                    { root: "x", children: [
                         { root: "y", children: [] },
                         { root: "z", children: [] }
                        ] },
                ],
            };

            expect(treeToSentence(tree)).toBe(" x y z");
        });
        it("should concatenate words in pre-order traversal", () => {
            const tree: WordTree = {
                root: "",
                children: [
                    { root: "", children: [
                         { root: "", children: [] },
                         { root: "", children: [] }
                        ] },
                ],
            };

            expect(treeToSentence(tree)).toBe("   ");
        });

        it("should handle a tree with just a root node", () => {
            const tree: WordTree = {
                root: "SingleWord",
                children: []
            };
            expect(treeToSentence(tree)).toBe("SingleWord");
        });
    
        it("should handle a complex nested structure", () => {
            const tree: WordTree = {
                root: "Level1",
                children: [
                    { 
                        root: "Level2A", 
                        children: [
                            { 
                                root: "Level3A", 
                                children: [
                                    { root: "Level4", children: [] }
                                ] 
                            }
                        ] 
                    },
                    { 
                        root: "Level2B", 
                        children: [
                            { root: "Level3B", children: [] }
                        ] 
                    }
                ]
            };
            expect(treeToSentence(tree)).toBe("Level1 Level2A Level3A Level4 Level2B Level3B");
        });
    
        it("should handle trees with nodes containing multiple words", () => {
            const tree: WordTree = {
                root: "this is",
                children: [
                    { root: "a multi-word", children: [] },
                    { root: "node test", children: [] }
                ]
            };
            expect(treeToSentence(tree)).toBe("this is a multi-word node test");
        });
    
        it("should handle a tree with empty string root but no children", () => {
            const tree: WordTree = {
                root: "",
                children: []
            };
            expect(treeToSentence(tree)).toBe("");
        });
    
        it("should correctly handle unbalanced trees", () => {
            const tree: WordTree = {
                root: "root",
                children: [
                    { 
                        root: "branch1", 
                        children: [
                            { root: "leaf1", children: [] },
                            { root: "leaf2", children: [] }
                        ] 
                    },
                    { root: "branch2", children: [] }
                ]
            };
            expect(treeToSentence(tree)).toBe("root branch1 leaf1 leaf2 branch2");
        });
        // Your tests here (optional)

    });

});
