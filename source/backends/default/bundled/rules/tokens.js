"use strict";
exports.__esModule = true;
exports.SELLexer = exports.Tokens = exports.RParen = exports.LParen = exports.GreaterEqual = exports.LesserEqual = exports.Identifier = exports.False = exports.True = exports.Booleans = exports.Subtraction = exports.Addition = exports.AdditiveOperators = exports.LessThan = exports.GreaterThan = exports.StrictEqual = exports.ComparisonOperators = exports.WhiteSpace = exports.NumberLiteral = exports.StringLiteral = exports.Null = exports.DotAccessor = exports.Variable = void 0;
var chevrotain_1 = require("chevrotain");
var index = {
    "kn.sel.variable": "kn.sel.variable"
};
exports.Variable = (0, chevrotain_1.createToken)({
    name: "kn.sel.variable",
    pattern: /[A-z]\w+/
});
exports.DotAccessor = (0, chevrotain_1.createToken)({
    name: "kn.sel.variable.dot-accessor",
    pattern: /\./
});
exports.Null = (0, chevrotain_1.createToken)({ name: "kn.sel.null", pattern: /null/ });
exports.StringLiteral = (0, chevrotain_1.createToken)({
    name: "kn.sel.string", pattern: /"(?:[^\\"]|\\(?:[bfnrtv"\\/]|u[0-9a-fA-F]{4}))*"/
});
exports.NumberLiteral = (0, chevrotain_1.createToken)({
    name: "kn.sel.number", pattern: /-?(0|[1-9]\d*)(\.\d+)?([eE][+-]?\d+)?/
});
exports.WhiteSpace = (0, chevrotain_1.createToken)({
    name: "kn.sel.whitespace",
    pattern: /\s+/,
    group: chevrotain_1.Lexer.SKIPPED
});
exports.ComparisonOperators = (0, chevrotain_1.createToken)({
    name: "kn.sel.logic.compare",
    pattern: chevrotain_1.Lexer.NA
});
exports.StrictEqual = (0, chevrotain_1.createToken)({
    name: "kn.sel.logic.compare.strict-equal",
    pattern: /===/,
    categories: exports.ComparisonOperators
});
exports.GreaterThan = (0, chevrotain_1.createToken)({
    name: "kn.sel.logic.compare.greater-than",
    pattern: />/,
    categories: exports.ComparisonOperators
});
exports.LessThan = (0, chevrotain_1.createToken)({
    name: "kn.sel.logic.compare.lesser-than",
    pattern: /</,
    categories: exports.ComparisonOperators
});
exports.AdditiveOperators = (0, chevrotain_1.createToken)({
    name: "kn.sel.logic.addition",
    pattern: chevrotain_1.Lexer.NA
});
exports.Addition = (0, chevrotain_1.createToken)({
    name: "kn.sel.logic.addition.addition",
    pattern: /\+/,
    categories: exports.AdditiveOperators
});
exports.Subtraction = (0, chevrotain_1.createToken)({
    name: "kn.sel.logic.addition.subtract",
    pattern: /-/,
    categories: exports.AdditiveOperators
});
exports.Booleans = (0, chevrotain_1.createToken)({
    name: "kn.sel.boolean",
    pattern: chevrotain_1.Lexer.NA
});
exports.True = (0, chevrotain_1.createToken)({
    name: "kn.sel.boolean.true",
    pattern: /true/,
    categories: exports.Booleans
});
exports.False = (0, chevrotain_1.createToken)({
    name: "kn.sel.boolean.false",
    pattern: /false/,
    categories: exports.Booleans
});
exports.Identifier = (0, chevrotain_1.createToken)({ name: "kn.sel.identifier", pattern: /[A-z]\w+/ });
exports.LesserEqual = (0, chevrotain_1.createToken)({ name: "kn.sel.logic.compare.lesser-equal", pattern: /=</ });
exports.GreaterEqual = (0, chevrotain_1.createToken)({ name: "kn.sel.logic.compare.greater-equal", pattern: />=/ });
exports.LParen = (0, chevrotain_1.createToken)({ name: "LParen", pattern: /\(/ });
exports.RParen = (0, chevrotain_1.createToken)({ name: "RParen", pattern: /\)/ });
exports.Tokens = [
    exports.WhiteSpace, exports.StringLiteral, exports.NumberLiteral, exports.ComparisonOperators, exports.LesserEqual, exports.GreaterEqual, exports.StrictEqual, exports.GreaterThan, exports.LessThan, exports.AdditiveOperators, exports.Addition, exports.Subtraction, exports.DotAccessor, exports.Booleans, exports.False, exports.True, exports.LParen, exports.RParen, exports.Variable,
];
exports.SELLexer = new chevrotain_1.Lexer(exports.Tokens, {
    ensureOptimizations: true
});
//# sourceMappingURL=tokens.js.map