export interface IDatabaseConfig {
    mongodb: {
        uri: string;
        databaseName: string;
    };
    redis: {
        uri: string;
    };
}

export interface IRedisClient {
    get(key: string): Promise<string | null>;
    set(key: string, value: string, ttl?: number): Promise<void>;
    del(key: string): Promise<number>;
    exists(key: string): Promise<number>;
}

export interface ITokenVerificationResult {
    valid: boolean;
    tenantId?: string;
    userId?: string;
    permissions?: string[];
    expiresAt?: Date;
}

export interface ITenantToken {
    id: string;
    tenantId: string;
    token: string;
    permissions: string[];
    createdAt: Date;
    expiresAt?: Date;
    isActive: boolean;
}