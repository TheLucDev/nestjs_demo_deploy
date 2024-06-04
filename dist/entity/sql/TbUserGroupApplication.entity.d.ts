import { TbUserGroup } from './TbUserGroup.entity';
import { TbMenuApplication } from './TbMenuApplication.entity';
export declare class TbUserGroupApplication {
    id: string;
    createdDate: Date;
    createdBy: string;
    modifiredDate: Date;
    modifiredBy: string;
    status: boolean;
    executeSelect: boolean | null;
    executeInsert: boolean | null;
    executeUpdate: boolean | null;
    executeDelete: boolean | null;
    executeDuyet: boolean | null;
    idUserGroup: TbUserGroup;
    idMenu: TbMenuApplication;
}
