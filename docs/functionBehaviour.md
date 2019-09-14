# What
All of the functions in this kata are expected to behave in certain ways.
I'm just outlining some of them here.

# map
## parameters:
* array 

* callback
  * currentValue
  * index - The index of the current value, into the original array

## Returns
Returns an array that contains all of the values of the first array, after they've been passed through the callback.

## specific behaviours
* Map is Should not mutate the state of the first array.
* Map should call the callback on each value in the first array, no more
* Map should pass the index of the current value, into the callback.

# reduce
## parameters:
* array
* callback
  * a
  * x
  * index
* initialValue?

## specific behaviours:
* When the reduce function is called, with no initial value, the first value of the array becomes the initial value
* When there's only one item in the initial array, with no intial value, callback is called but x = undefined

# Filter
## Parameters:
* Array
* callback that returns a truthy value
  * current value, index
* index - the starting index of this sub arrays starting position in the original array

## Returns
* A new, array, with only the filtered values.

## Expected beheviour
The function will
* Call the callback on each value in the array
* If the callback returns a truthy value, that value will go into the new array
* If the callback returns a falsy value, that value won't go into the new array

## specific behaviours
* The array returned must be a new array
* the state of the original array must not be mutated
* The callback is called on each element in the array, once, and no more
