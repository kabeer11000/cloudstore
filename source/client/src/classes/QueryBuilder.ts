import {IFilterOperations, IOrderByDirections} from "@server-types";

export default class QueryBuilder {
    protected query: {
        id: string | undefined, filters: Array<{ field: string, op: IFilterOperations, value: string | object }>, orderBy?: {
            field: string,
            direction: IOrderByDirections
        }, limit: number | null
    } = {
        id: undefined,
        filters: [],
        limit: null
    }

    constructor(id: string) {
        this.query.id = id;
    }

    public orderBy(field: string, direction: IOrderByDirections) {
        this.query.orderBy = {
            field, direction
        }
        return this
    }

    public limit(n: number) {
        this.query.limit = n;
        return this;
    }

    public where(field: string, op: IFilterOperations, value: string | object) {
        this.query.filters.push({field, op, value});
        return this;
    }

    // @ts-ignore
    get _query() {
        return this.query;
    }
}
