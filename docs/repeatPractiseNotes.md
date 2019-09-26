# What are these:
These are the absolute bare minimum notes i need to repeat the exercise.

## Setup
These are the required minimum params, additional params may be added after the first set

### map
export function map = ( array, callback )
callback = ( value, index ) => returns the mapped value

### filter
export function filter = ( array, callback );
callback = ( value, index ) => returns bool

### reduce
export function reduce = ( array, callback, initialValue? );
callback = ( accumulator, nextValue, index ) => The result of accumulator with nextValue;
