import {createToken, Lexer} from "chevrotain";

const index = {
    "kn.sel.variable": "kn.sel.variable"
}
export const Variable = createToken({
    name: "kn.sel.variable",
    pattern: /[A-z]\w+/ // /[0-9a-zA-Z_$]w/ // /[a-z_]\\w*/
});
export const DotAccessor = createToken({
    name: "kn.sel.variable.dot-accessor",
    pattern: /\./
});
export const Null = createToken({name: "kn.sel.null", pattern: /null/});
export const StringLiteral = createToken({
    name: "kn.sel.string", pattern: /"(?:[^\\"]|\\(?:[bfnrtv"\\/]|u[0-9a-fA-F]{4}))*"/
});
export const NumberLiteral = createToken({
    name: "kn.sel.number", pattern: /-?(0|[1-9]\d*)(\.\d+)?([eE][+-]?\d+)?/
});
export const WhiteSpace = createToken({
    name: "kn.sel.whitespace",
    pattern: /\s+/,
    group: Lexer.SKIPPED
});
export const ComparisonOperators = createToken({
    name: "kn.sel.logic.compare",
    pattern: Lexer.NA
});
export const StrictEqual = createToken({
    name: "kn.sel.logic.compare.strict-equal",
    pattern: /===/,
    categories: ComparisonOperators,
});
export const GreaterThan = createToken({
    name: "kn.sel.logic.compare.greater-than",
    pattern: />/,
    categories: ComparisonOperators,
});
export const LessThan = createToken({
    name: "kn.sel.logic.compare.lesser-than",
    pattern: /</,
    categories: ComparisonOperators,
});

export const AdditiveOperators = createToken({
    name: "kn.sel.logic.addition",
    pattern: Lexer.NA
});
export const Addition = createToken({
    name: "kn.sel.logic.addition.addition",
    pattern: /\+/,
    categories: AdditiveOperators,
});
export const Subtraction = createToken({
    name: "kn.sel.logic.addition.subtract",
    pattern: /-/,
    categories: AdditiveOperators,
});
export const Booleans = createToken({
    name: "kn.sel.boolean",
    pattern: Lexer.NA,
});
export const True = createToken({
    name: "kn.sel.boolean.true",
    pattern: /true/,
    categories: Booleans
});
export const False = createToken({
    name: "kn.sel.boolean.false",
    pattern: /false/,
    categories: Booleans
});
export const Identifier = createToken({name: "kn.sel.identifier", pattern: /[A-z]\w+/});
// Null,


export const LesserEqual = createToken({name: "kn.sel.logic.compare.lesser-equal", pattern: /=</})
export const GreaterEqual = createToken({name: "kn.sel.logic.compare.greater-equal", pattern: />=/})

export const LParen = createToken({name: "LParen", pattern: /\(/})
export const RParen = createToken({name: "RParen", pattern: /\)/})

export const Tokens = [
    WhiteSpace, StringLiteral, NumberLiteral, ComparisonOperators, LesserEqual, GreaterEqual, StrictEqual, GreaterThan, LessThan, AdditiveOperators, Addition, Subtraction, DotAccessor, Booleans, False, True, LParen, RParen, Variable, // Identifier
];
export const SELLexer = new Lexer(Tokens, {
    // safeMode: true,
    ensureOptimizations: true,
});