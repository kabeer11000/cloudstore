"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.SEL = void 0;
var chevrotain_1 = require("chevrotain");
var Tokens = require("./tokens");
var SEL = (function (_super) {
    __extends(SEL, _super);
    function SEL() {
        var _this = _super.call(this, Tokens.Tokens) || this;
        var $ = _this;
        $.RULE("default", function () {
            $.SUBRULE($.AtomicExpression);
        });
        $.RULE("Boolean", function () {
            $.OR([
                { ALT: function () { return $.CONSUME(Tokens.True); } },
                { ALT: function () { return $.CONSUME(Tokens.False); } }
            ]);
        });
        $.RULE("BracketedExpression", function () {
            $.CONSUME(Tokens.LParen);
            $.SUBRULE($.Expression);
            $.CONSUME(Tokens.RParen);
        });
        $.RULE("Expression", function () {
            $.OR([
                {
                    ALT: function () {
                        $.SUBRULE($.Boolean, { LABEL: "Boolean" });
                    }
                },
                {
                    ALT: function () {
                        $.SUBRULE($.ComparisonExpression, { LABEL: "Comparison" });
                    }
                }
            ]);
        });
        $.RULE("ComparisonExpression", function () {
            $.SUBRULE($.AtomicExpression);
            $.OR([
                {
                    ALT: function () { return $.CONSUME(Tokens.StrictEqual); }
                },
                {
                    ALT: function () { return $.CONSUME(Tokens.GreaterThan); }
                },
                {
                    ALT: function () { return $.CONSUME(Tokens.LessThan); }
                },
                {
                    ALT: function () { return $.CONSUME(Tokens.GreaterEqual); }
                },
                {
                    ALT: function () { return $.CONSUME(Tokens.LesserEqual); }
                },
            ]);
            $.SUBRULE2($.AtomicExpression);
        });
        $.RULE("AtomicExpression", function () {
            $.OR([
                {
                    ALT: function () { return $.SUBRULE($.BracketedExpression); }
                },
                {
                    ALT: function () { return $.CONSUME(Tokens.Variable); }
                },
                {
                    ALT: function () { return $.CONSUME(Tokens.StringLiteral); }
                },
                {
                    ALT: function () { return $.CONSUME(Tokens.NumberLiteral); }
                },
            ]);
        });
        $.performSelfAnalysis();
        return _this;
    }
    return SEL;
}(chevrotain_1.CstParser));
exports.SEL = SEL;
//# sourceMappingURL=parser.js.map