function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Null arguments are not allowed.');
    // or
    // return 0; // Return a default value
  }
  // ...
}