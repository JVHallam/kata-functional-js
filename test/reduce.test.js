import { reduce } from "../index.js";

//Utility functions
const and = ( a, x ) => a && x;

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

  it("The function doesn't mutate the original state of the original array", () => {
    const originalArray = [...Array(50)].map( (_, index) => index % 2 == 0 );
    const testArray = [...originalArray];

    // Testing without an initial Value
    reduce( testArray, and );
    expect( testArray ).toEqual( originalArray );

    // Testing with an initial Value
    reduce( testArray, and, true );
    expect( testArray ).toEqual( originalArray );
  });

  it("The callback is called the expected number of times, without a starting value", () => {
    const mockCallback = jest.fn( (a, x) => a + x );
    const testArray = [...Array(10)].map( (_, index) => index );

    reduce( testArray, mockCallback );
    expect( mockCallback.mock.calls.length ).toBe( testArray.length - 1 );
  });

  /*
    I had issues in the past when doing
      if( intialValue ), as initalValue can be a falsy value, whilst still being valid.
      If intialValue is false, or 0, then if( initialValue ), wont execute, which
      i need it to.

      Make sure to use if( intialValue != undefined ), instead.
  */
  it("The function uses the initial value even when they're falsy values", () => {
    const array = [ true, true, true ];
    const result = reduce( array, and, false ); 
    expect( result ).toBe( false );
  });

  it("The function does not use the initial value when it's undefined", () => {
    const array = [ true, true, true ];
    const result = reduce( array, and );
    expect( result ).toBe( true );
  });

  it("The callback is called the expected number of times, when there is a starting value", () => {
    const mockCallback = jest.fn( (a, x) => a + x );
    const testArray = [...Array(10)].map( (_, index) => index );

    reduce( testArray, mockCallback, 0 );
    expect( mockCallback.mock.calls.length ).toBe( testArray.length );
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
    const firstValue = 1;
    const secondValue = 2;
    const testArray = [ firstValue, secondValue ];

    const callback = ( a, x ) => {
      expect( a ).toBe( firstValue );
      expect( x ).toBe( secondValue );
      return a + x;
    };

    const mockCallback = jest.fn( callback );

    const expectedResult = firstValue + secondValue;
    const actualResult = reduce( testArray, mockCallback );

    expect( mockCallback.mock.calls.length ).toBe( 1 );
    expect( actualResult ).toBe( expectedResult );
  });

  it("Test how it handles a two item array with an initial Value",  () => {
    const firstValue = 1;
    const secondValue = 2;
    const initialValue = 3;
    const testArray = [ firstValue, secondValue ];

    const callback = ( a, x ) => {
      return a + x;
    };

    const mockCallback = jest.fn( callback );

    const expectedResult = firstValue + secondValue + initialValue;
    const actualResult = reduce( testArray, mockCallback, initialValue );

    expect( actualResult ).toBe( expectedResult );
    expect( mockCallback.mock.calls.length ).toBe( 2 );
  });

  it("Test how it handles a three item array", () => {
    const testArray = [ 1, 2, 3 ];

    const callback = ( a, x ) => {
      return a + x;
    };

    const mockCallback = jest.fn( callback );

    const expectedResult = testArray.reduce( callback );
    const actualResult = reduce( testArray, mockCallback );

    expect( actualResult ).toBe( expectedResult );
    expect( mockCallback.mock.calls.length ).toBe( testArray.length - 1 );
  });
  
  it("Test that it's correctly handling index", () => {
    const testArray = [...Array(10)].map( (_, index) => index * 2 );

    const mockCallback = jest.fn( ( a, x ) => a + x );

    const output = reduce( testArray, mockCallback );
    
    //Expecting 9 calls to reduce 10 values
    const expectedIndex = [...Array(9)].map( ( _, index ) => index );
    const onlyIndexFromCalls = mockCallback.mock.calls.map( ([a,x,index]) => index );
  
    expect( onlyIndexFromCalls ).toEqual( expectedIndex );
    expect( mockCallback.mock.calls.length ).toBe( expectedIndex.length );
  });
});
