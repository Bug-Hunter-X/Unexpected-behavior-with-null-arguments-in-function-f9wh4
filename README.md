# Unexpected Null Behavior in JavaScript Function

This repository demonstrates a common error in JavaScript related to handling null values as function arguments. The `foo` function unexpectedly terminates without explicit error handling when null is passed as an argument.

## Bug Description
The `foo` function does not gracefully handle null arguments.  When either `a` or `b` is null, the function implicitly returns without providing any indication of an error or handling the null case.

## Solution
The solution involves adding explicit checks for null arguments and handling them appropriately, either by throwing an error or returning a default value.