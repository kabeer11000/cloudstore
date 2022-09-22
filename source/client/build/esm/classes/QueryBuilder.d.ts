import { IFilterOperations, IOrderByDirections } from "@server-types";
export default class QueryBuilder {
    protected query: {
        id: string | undefined;
        filters: Array<{
            field: string;
            op: IFilterOperations;
            value: string | object;
        }>;
        orderBy?: {
            field: string;
            direction: IOrderByDirections;
        };
        limit: number | null;
    };
    constructor(id: string);
    orderBy(field: string, direction: IOrderByDirections): this;
    limit(n: number): this;
    where(field: string, op: IFilterOperations, value: string | object): this;
    get _query(): {
        id: string;
        filters: {
            field: string;
            op: IFilterOperations;
            value: string | object;
        }[];
        orderBy?: {
            field: string;
            direction: IOrderByDirections;
        };
        limit: number;
    };
}
