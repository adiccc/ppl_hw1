import * as R from "ramda";

const stringToArray = R.split("");

/* Question 1 */
const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
export const countVowels: (x:string) => number = (x:string)=>(stringToArray(x).filter(n=>vowels.filter((y)=>y==n||y==n.toLowerCase()).length>0)).length;

/* Question 2 */
const f:(t:string[])=>Boolean =(t:string[])=>t.length==0 || t[0]===t[t.length-1];
export const isPalindrome: (x:string)=>boolean = (x:string)=> f(stringToArray(x).filter((x)=>x!=' '&&x!=','&&x!='!'&&x!='.'&&x!='@').map((x)=>x.toLowerCase())) ? (x.length>1? isPalindrome(x.slice(1,x.length-1)):true) :false
 

  
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
