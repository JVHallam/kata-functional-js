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


