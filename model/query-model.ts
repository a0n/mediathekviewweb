export interface Query {
    matches?: Match[] | Match;
    filters?: IFilter[] | IFilter;
    sortField?: string;
    sortOrder?: SortOrder;
    offset?: number;
    size?: number;
}

export interface Match {
    fields: string[] | string;
    text: string;
}

export enum FilterType {
    RangeFilter = 0
}

export interface IFilter {
    field: string;
    type: FilterType;
}

export interface RangeFilter extends IFilter {
    gte?: number;
    gt?: number;
    lte?: number;
    lt?: number;
}

export enum SortOrder {
    Ascending = 0,
    Descending = 1
}

export class Field {
    static Channel = 'channel';
    static Topic = 'topic';
    static Title = 'title';
    static Timestamp = 'timestamp';
    static Duration = 'duration';
    static Size = 'size';
    static Description = 'description';
    static Website = 'website';
};
