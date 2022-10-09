import {SEL} from "./parser";
import {SELLexer} from "./tokens";
import createCSTInterpreter from "./interpreter";

export const ParseExpression = () => {
    const lexingResult = SELLexer.tokenize("apple === \"anapple\"");
    console.log("Fuck s")
    console.log(lexingResult.tokens.map(({tokenType}) => tokenType), lexingResult)
    // "input" is a setter which will reset the parser's state.
    const parser = new SEL();
    parser.input = lexingResult.tokens;
    const BaseVisitor = parser.getBaseCstVisitorConstructor();
    // @ts-ignore
    const ctx = parser.default();
    console.log(JSON.stringify(ctx))
    console.log(ctx, lexingResult, lexingResult.tokens.map(({tokenType}) => tokenType))
    const CSTVisitor = createCSTInterpreter(BaseVisitor);
    const interpreter = new CSTVisitor();
    console.log(interpreter.visit(ctx));
}