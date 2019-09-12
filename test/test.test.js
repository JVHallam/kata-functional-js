import Main, { second } from "../index.js";

describe("This is the set of tests with regards to my dick", () => {
  it("This is just checking that shit works!", () => {
    const a = { b : 1 };
    const b = a;
    console.log( b );

    expect( Main() ).toBe( 1 );
    expect( second() ).toBe( 2 );
  });
});
