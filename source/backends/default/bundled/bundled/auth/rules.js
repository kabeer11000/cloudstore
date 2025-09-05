"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseRules = void 0;
const js_yaml_1 = __importDefault(require("js-yaml"));
const promises_1 = require("fs/promises");
const path_1 = require("path");
const ParseRules = () => __awaiter(void 0, void 0, void 0, function* () {
    return js_yaml_1.default.load((yield (0, promises_1.readFile)((0, path_1.join)(__dirname, "./default.yaml"))).toString());
});
exports.ParseRules = ParseRules;
//# sourceMappingURL=rules.js.map