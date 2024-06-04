import { TbUser } from './TbUser.entity';
import { TbUserGroupApplication } from './TbUserGroupApplication.entity';
import { TbUserGroupArticle } from './TbUserGroupArticle.entity';
import { TbUserGroupRights } from './TbUserGroupRights.entity';
export declare class TbUserGroup {
    idUserGroup: string;
    name: string | null;
    description: string | null;
    displayOrder: number;
    groupLevel: number;
    createdDate: Date;
    createdBy: string;
    modifiredDate: Date;
    modifiredBy: string;
    status: boolean;
    tbUsers: TbUser[];
    parent: TbUserGroup;
    tbUserGroups: TbUserGroup[];
    tbUserGroupApplications: TbUserGroupApplication[];
    tbUserGroupArticles: TbUserGroupArticle[];
    tbUserGroupRights: TbUserGroupRights[];
}
