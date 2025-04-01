import * as R from "ramda";

const stringToArray = R.split("");

/* Question 1 */
const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
export const countVowels: (x:string) => number = (x:string)=>(stringToArray(x).filter(n=>vowels.filter((y)=>y==n||y==n.toLowerCase()).length>0)).length;

/* Question 2 */
//const createStack=(items:string[]) =>
//export const isPalindrome: (x:string)=>boolean = (x:string)=>stringToArray(x).filter((x)=>x!=' '&&x!=','&&x!='!'&&x!='.'&&x!='@').map((x)=>x.toLowerCase())
  
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
