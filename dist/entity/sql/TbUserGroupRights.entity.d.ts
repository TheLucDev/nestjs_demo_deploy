import { TbMenuAdmin } from './TbMenuAdmin.entity';
import { TbUserGroup } from './TbUserGroup.entity';
export declare class TbUserGroupRights {
    id: string;
    createdDate: Date;
    createdBy: string;
    modifiredDate: Date;
    modifiredBy: string;
    status: boolean;
    idMenu: TbMenuAdmin;
    idUserGroup: TbUserGroup;
}
