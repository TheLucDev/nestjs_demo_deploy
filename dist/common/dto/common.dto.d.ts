export declare class PaginateReqDto {
    constructor();
    Standardized(): void;
    page: number;
    limit: number;
}
export declare class GetOptionsProperty {
    property: string;
}
export declare class PaginateResDto<T> {
    page: number;
    limit: number;
    total: number;
    data: T[];
}
export declare class SearchBaseDto {
    limit: number;
    page: number;
    Validation(): void;
}
export declare class CheckFunctionalDto {
    functional_name: string[];
    user_id: string;
}
