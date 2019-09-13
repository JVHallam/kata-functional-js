import { reduce } from "../index.js";

/*
  * Check that the function does not mutate the original array
  * Check that the function keeps track of the index value
*/
describe("Library can implement reduce", () => {
  it("Checking that the reduce function is imported", () => {
    expect( reduce ).toBeDefined();
  });

  it("We can sum all the numbers in an array", () => {
    const callback = ( a, x ) => a + x;
    const testArray = [...Array(10)].map( (_ ,index) => index );
    const expectedResult = testArray.reduce( callback );
    const actualResult = reduce( testArray, callback );
    expect( actualResult ).toBe( expectedResult );
  });

  it("We can sum them all, with a starting value", () => {
    const startingValue = 10;
    const callback = ( a, x ) => a + x;
    const testArray = [...Array(10)].map( (_ ,index) => index );
    const expectedResult = testArray.reduce( callback, startingValue );
    const actualResult = reduce( testArray, callback, startingValue );
    expect( actualResult ).toBe( expectedResult );
  });

  it("The callback is called the expected number of times, without a starting value", () => {

  });

  it("The callback is called the expected number of times, when there is a starting value", () => {

  });

  it("Test how it handles a one item array", () => {
    const testValue = 1;
    const testArray = [ testValue ];

    const callback = ( a, x ) => {
      expect( a ).toBe( testValue );
      expect( x ).toBe( undefined );
      return a;
    };

    const expectedResult = testValue;
    const actualResult = reduce( testArray, callback );

    expect( actualResult ).toBe( expectedResult );
  });

  it("Test if we can use reduce, with a one item array and an initial value", () => {
    const testArray = [ 1 ];
    const callback = ( a, b ) => a + b;

    const expectedResult = testArray.reduce( callback, 2 );
    const actualResult = reduce( testArray, callback, 2 );

    expect( actualResult ).toBe( expectedResult );
  });
  
  it("Test how it handles a two item array", () => {

  });

  it("Test how it handles a two item array with an initial Value",  () => {

  });

  it("Test how it handles a three item array", () => {

  });
});


