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
function default_1(BaseCstVisitor) {
    return (function (_super) {
        __extends(SELLInterpreter, _super);
        function SELLInterpreter() {
            var _this = _super.call(this) || this;
            _this.result = false;
            _this.validateVisitor();
            return _this;
        }
        SELLInterpreter.prototype["default"] = function (context) {
            console.log(context);
            return this.visit(context.Expression);
        };
        SELLInterpreter.prototype.Expression = function (context) {
            console.log(context);
            return "nah";
        };
        SELLInterpreter.prototype.ComparisonExpression = function (context) {
            console.log(context);
        };
        SELLInterpreter.prototype.AtomicExpression = function (context) {
            console.log(context);
        };
        SELLInterpreter.prototype.BracketedExpression = function (context) {
            console.log(context);
        };
        SELLInterpreter.prototype.Boolean = function (context) {
            console.log(context);
        };
        return SELLInterpreter;
    }(BaseCstVisitor));
}
exports["default"] = default_1;
//# sourceMappingURL=interpreter.js.map