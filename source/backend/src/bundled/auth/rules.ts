import yaml from "js-yaml";
import {readFile} from "fs/promises";
import {join} from "path";

type IVariables = "request" | "operation" | "database";
export const ParseRules = async () => {
    return yaml.load((await readFile(join(__dirname, "./default.yaml"))).toString());
}
