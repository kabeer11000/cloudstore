"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(BaseCstVisitor) {
    return class SELLInterpreter extends BaseCstVisitor {
        constructor() {
            super();
            this.result = false;
            this.validateVisitor();
        }
        default(context) {
            console.log(context);
            return this.visit(context.Expression);
        }
        Expression(context) {
            console.log(context);
            return "nah";
        }
        ComparisonExpression(context) {
            console.log(context);
        }
        AtomicExpression(context) {
            console.log(context);
        }
        BracketedExpression(context) {
            console.log(context);
        }
        Boolean(context) {
            console.log(context);
        }
    };
}
exports.default = default_1;
//# sourceMappingURL=interpreter.js.map