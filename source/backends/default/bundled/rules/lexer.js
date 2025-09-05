"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseExpression = void 0;
const parser_1 = require("./parser");
const tokens_1 = require("./tokens");
const interpreter_1 = __importDefault(require("./interpreter"));
const ParseExpression = () => {
    const lexingResult = tokens_1.SELLexer.tokenize("apple === \"anapple\"");
    console.log("Fuck s");
    console.log(lexingResult.tokens.map(({ tokenType }) => tokenType), lexingResult);
    const parser = new parser_1.SEL();
    parser.input = lexingResult.tokens;
    const BaseVisitor = parser.getBaseCstVisitorConstructor();
    const ctx = parser.default();
    console.log(JSON.stringify(ctx));
    console.log(ctx, lexingResult, lexingResult.tokens.map(({ tokenType }) => tokenType));
    const CSTVisitor = (0, interpreter_1.default)(BaseVisitor);
    const interpreter = new CSTVisitor();
    console.log(interpreter.visit(ctx));
};
exports.ParseExpression = ParseExpression;
//# sourceMappingURL=lexer.js.map