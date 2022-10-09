import yaml from "js-yaml";
import {readFile} from "fs/promises";
import {join} from "path";
import defaultConfig from "./default.yaml";


type IVariables = "request" | "operation" | "database";
export const ParseRules = async () => {
    return yaml.load(defaultConfig);
}
