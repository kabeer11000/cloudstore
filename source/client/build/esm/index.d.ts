import { ICloudStoreConstructor, IInternalState } from "@/types";
import QueryBuilder from "@/classes/QueryBuilder";
import Collection from "@/classes/Collection";
export default class CloudStore {
    static utils: {};
    private internals;
    private QueryWithCallback;
    constructor(config: ICloudStoreConstructor);
    connect(): void;
    get query(): QueryBuilder;
    collection(name: string): Collection;
    get info(): IInternalState;
}
export * as Adapters from "./adapters";
