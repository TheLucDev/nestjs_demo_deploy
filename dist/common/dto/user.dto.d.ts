import { SearchBaseDto } from './common.dto';
export declare class GetUserDto extends SearchBaseDto {
    search: string;
}
export declare class GetDetailDto {
    id: string;
}
export declare enum StaffActionEnum {
    'ADD' = "ADD",
    'REMOVE' = "REMOVE"
}
export declare class UpdateDetailStoreDto {
    store_id: string;
    action: StaffActionEnum;
}
export declare class UpdateDetailGroupRoleDto {
    groupRole_id: string;
    action: StaffActionEnum;
}
export declare class UpdateStaffDto {
    readonly full_name: string;
    phone_number: string;
    birth_day: string;
}
export declare class CreateUserDto {
    email: string;
    name: string;
}
export declare class EditUserDto {
    name: string;
    groupIds: [];
}
