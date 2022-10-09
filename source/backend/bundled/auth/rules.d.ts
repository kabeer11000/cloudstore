export declare const ParseRules: () => Promise<{
    databases: {
        name: string;
        rules: {
            collections: {
                [x: string]: {
                    '.write': string;
                    '.read': string;
                };
            };
        };
    }[];
} | undefined>;
