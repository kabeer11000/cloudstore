export declare const ParseRules: () => Promise<{
    databases: Array<{
        name: string;
        rules: {
            collections: {
                [x: string]: {
                    ".write": string;
                    ".read": string;
                };
            };
        };
    }>;
}>;
