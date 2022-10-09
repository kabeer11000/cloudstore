# Expression language for database rules

## Community solutions
- Mozilla mozjexl, https://github.com/mozilla/mozjexl
- Google Cel, https://github.com/google/cel-spec

## Our own solution: CSEL
Cloud Store Expression Language, using chevrotain to lex, parse and implement the expression language
```js 
[WhiteSpace, Variable, StringLiteral, NumberLiteral, ComparisonOperators, StrictEqual, AdditiveOperators, Addition, Subtraction, DotAccessor, Booleans, False, True, Identifier]
```
where expression would look like 
- ```true``` 
- ``` variable === anotherVariable ```
- ``` variable.property === anotherVariable ```
- ``` variable === false | true | null ```

[chevrotain: npm](https://npmjs.com/package/chevrotain)