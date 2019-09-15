
# filter
* filter appears at the top of ls test, so i started there
* opened up the filter section in functionBehaviour.md
* exported a function that matched the signature there

## Function structure:
All recursive functions are simple while loops. 
My hypothosis is that a good function is structured as follows:

### Step by step solution
* Write out what the break condition of the function is, when should we stop recursing?
  * In this case, it's when the array given to us has no value

* Figure out what value is being created on this recursion, then create it.

* Figure out what the args of the next recursion is 

* Get the value from the rest of the recursion ( call the function itself, again )

* Figure out what you're going to return
  * Return the value from this call + the value from the recursion

With this exact setup, i've managed to do in 10 minutes what took me about 3 hours last night. Wonderful!

### Side note:
Filter is a many to few function. That means we can either return:
  * current value + final recursion value
  or
  * final recursion value

# Map
map and filter are arguably one to one solutions. Therefore, they both work more or less the same.

# reduce
Reduce is a folding function, a.k.a. a many to one function.
Due to that, it differs in the way the next recursion's value and the current recursions' value combine.
In the sense that, they don't.
It revolves around the return values, and those differ based on the break conditions:
* if the break condition is met ( i.e. the array is empty ), return the accumulating value
* if the break condition isn't met, return the value that's returned from the next recursion
