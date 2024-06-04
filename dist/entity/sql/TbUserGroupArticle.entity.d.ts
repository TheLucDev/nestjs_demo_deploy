import { TbArticleCategory } from './TbArticleCategory.entity';
import { TbUserGroup } from './TbUserGroup.entity';
export declare class TbUserGroupArticle {
    id: string;
    createdDate: Date;
    createdBy: string;
    modifiredDate: Date;
    modifiredBy: string;
    status: boolean;
    idCategory: TbArticleCategory;
    idUserGroup: TbUserGroup;
}
