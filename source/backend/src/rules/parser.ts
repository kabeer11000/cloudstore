import {CstParser} from "chevrotain";
import * as Tokens from "./tokens";

export class SEL extends CstParser {
    constructor() {
        super(Tokens.Tokens);
        const $ = this;
        $.RULE("default", () => {
            // @ts-ignore
            $.SUBRULE($.AtomicExpression)
        })
        $.RULE("Boolean", () => {
            $.OR([
                {ALT: () => $.CONSUME(Tokens.True)},
                {ALT: () => $.CONSUME(Tokens.False)}
            ])
        });
        $.RULE("BracketedExpression", () => {
            $.CONSUME(Tokens.LParen);
            // @ts-ignore
            $.SUBRULE($.Expression);
            $.CONSUME(Tokens.RParen);
        })
        $.RULE("Expression", () => {
            $.OR([
                // Literal (Boolean)
                {
                    ALT: () => {
                        // @ts-ignore
                        $.SUBRULE($.Boolean, {LABEL: "Boolean"})
                    }
                },
                // Full Expression
                {
                    ALT: () => {
                        // @ts-ignore
                        $.SUBRULE($.ComparisonExpression, {LABEL: "Comparison"});
                    }
                }
            ]);
        });
        $.RULE("ComparisonExpression", () => {
            // @ts-ignore
            $.SUBRULE($.AtomicExpression);
            $.OR([
                {
                    ALT: () => $.CONSUME(Tokens.StrictEqual)
                },
                {
                    ALT: () => $.CONSUME(Tokens.GreaterThan)
                },
                {
                    ALT: () => $.CONSUME(Tokens.LessThan)
                },
                {
                    ALT: () => $.CONSUME(Tokens.GreaterEqual)
                },
                {
                    ALT: () => $.CONSUME(Tokens.LesserEqual)
                },
            ]);
            // @ts-ignore
            $.SUBRULE2($.AtomicExpression);
        });
        $.RULE("AtomicExpression", () => {
            $.OR([
                {
                    // @ts-ignore
                    ALT: () => $.SUBRULE($.BracketedExpression)
                },
                {
                    ALT: () => $.CONSUME(Tokens.Variable)
                },
                {
                    ALT: () => $.CONSUME(Tokens.StringLiteral)
                },
                {
                    ALT: () => $.CONSUME(Tokens.NumberLiteral)
                },
            ])
        });
        $.performSelfAnalysis();
    }
}