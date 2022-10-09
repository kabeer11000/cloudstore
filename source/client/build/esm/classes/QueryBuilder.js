var QueryBuilder = /** @class */ (function () {
    function QueryBuilder(id) {
        this.query = {
            id: undefined,
            filters: [],
            limit: null
        };
        this.query.id = id;
    }
    QueryBuilder.prototype.orderBy = function (field, direction) {
        this.query.orderBy = {
            field: field,
            direction: direction
        };
        return this;
    };
    QueryBuilder.prototype.limit = function (n) {
        this.query.limit = n;
        return this;
    };
    QueryBuilder.prototype.where = function (field, op, value) {
        this.query.filters.push({ field: field, op: op, value: value });
        return this;
    };
    Object.defineProperty(QueryBuilder.prototype, "_query", {
        // @ts-ignore
        get: function () {
            return this.query;
        },
        enumerable: false,
        configurable: true
    });
    return QueryBuilder;
}());
export default QueryBuilder;
