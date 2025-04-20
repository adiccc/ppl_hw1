import { reduce, T } from "ramda";
import { Result, makeFailure, makeOk, bind, either, isFailure } from "../lib/result";
type Ok<T> = {
    tag: "Ok";
    value: T;
}

type Failure = {
    tag: "Failure";
    message: string;
}

/* Library code */
const findOrThrow = <T>(pred: (x: T) => boolean, a: T[]): T => {
    for (let i = 0; i < a.length; i++) {
        if (pred(a[i])) return a[i];
    }
    throw "No element found.";
}

const iterate = <T>(pred: (x:T) => boolean,a: T[],i:number): Result<T> =>
    i>=a.length ? makeFailure("no element found!"): 
    pred(a[i]) ? makeOk(a[i]) : iterate(pred,a,i+1)

export const findResult = <T>(pred: (x: T) => boolean, arr: T[]): Result<T> => 
    iterate(pred,arr,0)

/* Client code */
const returnSquaredIfFoundEven_v1 = (a: number[]): number => {
    try {
        const x = findOrThrow(x => x % 2 === 0, a);
        return x * x;
    } catch (e) {
        return -1;
    }
}

export const returnSquaredIfFoundEven_v2 : (a:number[])=>Result<number> = 
(a:number[])=>bind(findResult<number>((x:number)=>x%2===0,a),(x:number)=> (makeOk(x*x)))

export const returnSquaredIfFoundEven_v3 : (a:number[])=>number = (a:number[])=>
    either(
        findResult((x)=>x%2===0,a),
        (x:number)=>x*x,
        (x:string)=>-1);