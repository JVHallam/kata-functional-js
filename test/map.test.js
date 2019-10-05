import { map } from "../index.js";

/*
  * Check that the function does not mutate the original array
  * Check that the function keeps track of the index value
*/
describe("Library can implement map", () => {
  it("Testing the map import", () => {
    expect( map ).toBeDefined();
  });

  it("Testing that the map function doesn't mutate the state of the first array", () => {

    const mapCallback = number => number * 2;
    const originalArray = [...Array(10)].map( (_ ,index) => index );
    const testArray = [...originalArray];

    const mappedArray = map( testArray, mapCallback );

    //Make sure it's to returning the orinal array
    expect( testArray ).not.toBe( mappedArray ); 

    //Make sure it's not mutating the original state
    expect( testArray ).toEqual( originalArray );
  });
  
  it("Testing that the map function calls match those of the original array values", () => {
    const mapCallback = number => number * 2;
    const mockCallback = jest.fn( mapCallback );
    const originalArray = [...Array(10)].map( (_ ,index) => index );
    const testArray = [...originalArray];

    const mappedArray = map( testArray, mockCallback );

    //mockCallback.calls= [ [0,0], [1,1] ... etc. ]
    //flatten it into just the first value [ 0, 1, 2 ... etc ]
    const callsValueOnly = mockCallback.mock.calls.map( ([number, index]) => number );

    //Turn the calls of the mock into a single flat array
    expect( callsValueOnly ).toEqual( originalArray );
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


