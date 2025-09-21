"use strict";
exports.__esModule = true;
exports.ParseExpression = void 0;
var parser_1 = require("./parser");
var tokens_1 = require("./tokens");
var interpreter_1 = require("./interpreter");
var ParseExpression = function () {
    var lexingResult = tokens_1.SELLexer.tokenize("apple === \"anapple\"");
    console.log("Fuck s");
    console.log(lexingResult.tokens.map(function (_a) {
        var tokenType = _a.tokenType;
        return tokenType;
    }), lexingResult);
    var parser = new parser_1.SEL();
    parser.input = lexingResult.tokens;
    var BaseVisitor = parser.getBaseCstVisitorConstructor();
    var ctx = parser["default"]();
    console.log(JSON.stringify(ctx));
    console.log(ctx, lexingResult, lexingResult.tokens.map(function (_a) {
        var tokenType = _a.tokenType;
        return tokenType;
    }));
    var CSTVisitor = (0, interpreter_1["default"])(BaseVisitor);
    var interpreter = new CSTVisitor();
    console.log(interpreter.visit(ctx));
};
exports.ParseExpression = ParseExpression;
//# sourceMappingURL=lexer.js.map