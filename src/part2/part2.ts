import * as R from "ramda";
import { slice } from "ramda";

const stringToArray = R.split("");

/* Question 1 */
const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
export const countVowels: (x:string) => number = (x:string)=>(stringToArray(x).filter(n=>vowels.filter((y)=>y==n||y==n.toLowerCase()).length>0)).length;

/* Question 2 */
// const f:(t:string[])=>Boolean =(t:string[])=>t.length==0 || t[0]===t[t.length-1];
// export const isPalindrome: (x:string)=>boolean = (x:string)=> f(stringToArray(x).filter((x)=>x!=' '&&x!=','&&x!='!'&&x!='.'&&x!='@').map((x)=>x.toLowerCase())) ? 
// (x.length>1? isPalindrome(x.slice(1,x.length-1)):true) :false
 
/* Question 2 */
const isLetter = (char: string): boolean => 
    (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
  
  // Process string to get only lowercase letters
  const processString = R.pipe(
    stringToArray,
    R.filter(isLetter),
    R.map((c: string) => c.toLowerCase())
  );
  
  // Recursive palindrome checker that works on processed array
  const isPalindromeRecursive = (chars: string[]): boolean => 
    chars.length === 0 || 
    chars.length === 1 || 
    (chars[0] === chars[chars.length - 1] && 
     isPalindromeRecursive(R.slice(1, chars.length - 1, chars)));
  
  // Main function that first processes the string then checks recursively
  export const isPalindrome = R.pipe(
    processString,
    isPalindromeRecursive
  );

  
/* Question 3 */
export type WordTree = {
    root: string;
    children: WordTree[];
}
export const treeToSentence = (x: WordTree): string =>
    x.root +
    (x.children.length > 0
      ? " " + x.children.map((y) => treeToSentence(y)).join(" ")
      : "");
