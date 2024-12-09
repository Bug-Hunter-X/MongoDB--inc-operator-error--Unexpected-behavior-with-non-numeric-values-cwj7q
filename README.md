# MongoDB $inc operator error: Unexpected behavior with non-numeric values
This example demonstrates an incorrect usage of the `$inc` operator in MongoDB, specifically when attempting to increment a non-numeric field.  The `$inc` operator is designed to increment numeric values only. Attempting to use it with a string value results in an error. The solution demonstrates correct usage of `$inc`.

## Bug
The bug lies in the incorrect usage of the `$inc` operator. The `field` value is assigned a string ('abc'), leading to an error during execution.

## Solution
The solution ensures that the value being incremented is a number before using the `$inc` operator.  Alternative methods of updating string fields are also shown, as needed.