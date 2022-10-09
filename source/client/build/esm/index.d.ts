import { ICloudStoreConstructor, IInternalState } from "@/types";
import QueryBuilder from "@/classes/QueryBuilder";
import Collection from "@/classes/Collection";
export default class CloudStore {
    static utils: {};
    private internals;
    constructor(config: ICloudStoreConstructor);
    connect(): void;
    private QueryWithCallback;
    get query(): QueryBuilder;
    collection(name: string): Collection;
    get info(): IInternalState;
}
export * as Adapters from "@/adapters";
export * as Types from "@/types";
