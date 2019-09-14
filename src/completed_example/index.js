/*
  return an array, 
  That's the given array, but all the values have been passed into the callback
  
*/
export function map( array, callback, index=0 ){
  if( array.length == 0 ){
    return [];
  }

  const [ currentValue, ...rest ] = array;

  const currentIteration = callback( currentValue, index );

  return [ currentIteration, ...map( rest, callback, index + 1 ) ]
}

/*
  callback( accumulator, currentValue, index );
*/
export function reduce( array, callback, initialValue, index=0){
  if( array.length == 0 ){
    return initialValue;
  }

  const [ firstValue, ...firstRest ] = array;
  const [ secondValue, ...secondRest ] = firstRest;

  const actualFirstValue = initialValue != undefined ? initialValue : firstValue;
  const actualSecondValue = initialValue != undefined ? firstValue : secondValue;
  const actualRest = initialValue != undefined ? firstRest : secondRest;

  const currentValue = callback( actualFirstValue, actualSecondValue, index );

  return reduce( actualRest, callback, currentValue, index + 1 ); 
}

/*
  callback( value, index )
  if callback returns true, then the value stays in the array,
  if callback returns false, then the value is removed
*/
export function filter( array, callback, index=0 ){
  const [ current, ...rest ] = array;
  
  const currentIteration = callback( current, index ) ? [ current ] : [];
    
  const nextArray = rest.length ? filter( rest, callback, index + 1 ) : [];

  return [ ...currentIteration, ...nextArray ];
}
