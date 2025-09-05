export default function (BaseCstVisitor: any): {
    new (): {
        [x: string]: any;
        result: boolean;
        default(context: any): any;
        Expression(context: any): string;
        ComparisonExpression(context: any): void;
        AtomicExpression(context: any): void;
        BracketedExpression(context: any): void;
        Boolean(context: any): void;
    };
    [x: string]: any;
};
