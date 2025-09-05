import yaml from "js-yaml";
import {readFile} from "fs/promises";
import {join} from "path";

type IVariables = "request" | "operation" | "database";
export const ParseRules = async () => {
    try {
        return yaml.load((await readFile(join(__dirname, "../../default-rules.yaml"))).toString()) as {
            databases: Array<{
                name: string,
                rules: {
                    collections: {
                        [x: string]: {
                            '.write': string,
                            '.read': string
                        }
                    }
                }
            }>
        }
    } catch (e) {
        console.error("yaml exception caught: ", e);
    }
}
