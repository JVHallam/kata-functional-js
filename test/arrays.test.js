import { map, reduce } from "../index.js";

/*
  * Check that the function does not mutate the original array
  * Check that the function keeps track of the index value
*/
describe("Library can implement map", () => {
  it("Testing the map import", () => {
    expect( map ).toBeDefined();
  });

  it("Testing that the map function doesn't mutate the state of the first array", () => {
    expect( "Test" ).toBe( "Implemented" );
  });
  
  it("Testing that the map function calls match those of the original array values", () => {
    expect( "Test" ).toBe( "Implemented" );
  });

  it("Testing the map function", () => {
    const mapCallback = number => number * 2;
    const testArray = [...Array(10)].map( (_ ,index) => index );
    const expectedMappedArray = testArray.map( mapCallback );
    const actualMappedArray = map( testArray, mapCallback );
    expect( actualMappedArray ).toEqual( expectedMappedArray );
  });

  it("Testing that the map function keeps track of the index", () => {
    const mapCallback = ( value, index ) => index;
    const testArray = [...Array(10)].map( mapCallback );
    const expectedArray = testArray.map( mapCallback );
    const actualArray = map( testArray, mapCallback );
    expect( actualArray ).toEqual( expectedArray );
  });

  it("Testing that the map function is called the expected number of times", () => {
    const mapCallback = ( value, index ) => index;
    const mockFunction = jest.fn( mapCallback );
    const testArray = [...Array(10)].map( mapCallback );
    const expectedArray = testArray.map( mockFunction );
    const actualArray = map( testArray, mapCallback );
    expect( actualArray ).toEqual( expectedArray );
    expect( mockFunction.mock.calls.length ).toBe( testArray.length );
  });
});

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

describe("Library can implement filter", () => {
  it("first", () => {
    expect( "suite" ).toBe( "implemented" );
  });
});

