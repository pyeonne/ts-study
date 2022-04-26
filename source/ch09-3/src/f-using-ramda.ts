import * as R from 'ramda'

export const exp = (N: number) => (x: number): number => x ** N
export const square = exp(2)

type NumberToNumberFunc = (number) => number
export const f= (a: number, b: number, c: number): NumberToNumberFunc =>
         (x: number): number => R.add( 
           R.add(
             R.multiply(a)(square(x))
           )( R.multiply(b)(x) ),  
           c
          )