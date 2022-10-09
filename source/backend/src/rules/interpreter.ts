export default function (BaseCstVisitor: any) {
    return class SELLInterpreter extends BaseCstVisitor {
        result: boolean = false;
        constructor() {
            super()
            // This helper will detect any missing or redundant methods on this visitor
            this.validateVisitor();
        }
        default(context: any) {
            console.log(context);
            return this.visit(context.Expression);
        }
        Expression(context: any) {
            console.log(context);
            return "nah"
        }
        ComparisonExpression(context: any) {
            console.log(context);
        }
        AtomicExpression(context: any) {
            console.log(context);
        }
        BracketedExpression(context: any) {
            console.log(context);
        }
        Boolean(context: any) {
            console.log(context);
        }
    }
}