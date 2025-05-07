// OR (||)
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false

// If an operand is not a boolean, it's converted to a boolean for evaluation
if (1 || 0) { // works just like if( true || false )
  alert( 'truthy!' );
}

// AND (&&)
alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false

// NOT (!)

alert( !!"non-empty string" ); // true
alert( !!null ); // false