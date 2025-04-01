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

export const findResult = <T>(
    pred: (x: T) => boolean,
    a: T[]
  ): Result<T> =>
    a.reduce<Result<T>>(
      (acc, curr) =>
        acc.tag === "Failure" && pred(curr)
          ? { tag: "Ok", value: curr }
          : acc,
      { tag: "Failure", message: "not found" }
    );

/* Client code */
const returnSquaredIfFoundEven_v1 = (a: number[]): number => {
    try {
        const x = findOrThrow(x => x % 2 === 0, a);
        return x * x;
    } catch (e) {
        return -1;
    }
}

export const returnSquaredIfFoundEven_v2 : (a:number[])=>Result<number> = (a:number[])=>bind(findResult<number>((x:number)=>x%2===0,a),(x:number)=> ({tag:"Ok",value:x*x}))

export const returnSquaredIfFoundEven_v3 : undefined = undefined;