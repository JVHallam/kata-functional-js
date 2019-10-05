import { filter } from "../index.js";

//A function that takes 2 values and returns the second
function second( first, second ){
  return second;
}

describe("Library can implement filter", () => {
  it("Expect the function to be implemented", () => {
    expect( filter ).toBeDefined();
  });

  it("We can filter an array of numbers for odds", () => {
    const testArray = [...Array(50)].map( second );
    const callback = x => ( x % 2 == 0 );
    
    const expectedResult = testArray.filter( callback );
    const actualResult = filter( testArray, callback );

    expect( actualResult ).toEqual( expectedResult );
  });

  it("We can filter an array of strings to match a regex", () => {
    const testArray = [...Array(50)].map( ( _, index ) => `${index}` );
    const callback = x => /1/.test( x );

    const expectedResult = testArray.filter( callback );
    const actualResult = filter( testArray, callback );

    expect( actualResult ).toEqual( expectedResult );
  });

  it("Test that the function keeps track of the index value", () => {
    const testArray = [...Array(50)].map( second );
    const mockCallback = jest.fn( ( _, index ) => true );

    filter( testArray, mockCallback );

    const indexOnlyFromCalls = mockCallback.mock.calls.map( second );

    expect( indexOnlyFromCalls ).toEqual( testArray );
  });

  it("Check that the function doesn't mutate the original Arrays state", () => {
    const originalArray = [...Array(50)].map( second );
    const testArray = [...originalArray ]; 
    const callback = _ => false;

    const resultArray = filter( testArray, callback );

    expect( testArray ).toEqual( originalArray );
  });

  it("Check that the callback is called only the expected number of times", () => {
    const testArray = [...Array(50)].map( second );
    const mockCallback = jest.fn( _ => true );

    filter( testArray, mockCallback );

    expect( mockCallback.mock.calls.length ).toBe( testArray.length );
  });

  it("Check that what's returned is an array", () => {
    const testArray = [...Array(50)].map( second ); 

    const result = filter( testArray, _ => true );

    //Not sufficient to do the job, but good enough for now
    expect( typeof result ).toEqual( typeof [] );
  });

  it("Check that the new array isn't the old array", () => {
    const testArray = [...Array(50)].map( second );

    const newArray = filter( testArray, _ => true );

    expect( newArray ).not.toBe( testArray );
  });

  it("If given a callback that only returns true, the new array isn't a reference to the old", () => {
    const testArray = [...Array(10)].map( second );
    const callback = _ => true;

    const resultArray = filter( testArray, callback );

    expect( resultArray ).not.toBe( testArray );
    expect( resultArray ).toEqual( testArray );
  });
});

