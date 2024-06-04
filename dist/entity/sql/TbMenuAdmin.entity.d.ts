import { TbUserGroupRights } from './TbUserGroupRights.entity';
export declare class TbMenuAdmin {
    idMenu: number;
    parentId: number;
    title: string;
    idController: string;
    idAction: string | null;
    controllerActive: string | null;
    href: boolean;
    displayOrder: number;
    groupLevel: number;
    createdDate: Date;
    createdBy: string;
    modifiredDate: Date;
    modifiredBy: string;
    status: boolean;
    tbUserGroupRights: TbUserGroupRights[];
}
