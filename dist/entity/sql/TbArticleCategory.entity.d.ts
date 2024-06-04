import { TbArticle } from './TbArticle.entity';
import { TbUserGroupArticle } from './TbUserGroupArticle.entity';
export declare class TbArticleCategory {
    idCategory: string;
    title: string;
    displayOrder: number;
    groupLevel: number;
    titleMeta: string | null;
    idStyle: string | null;
    metaKeywords: string | null;
    metaDescription: string | null;
    createdDate: Date;
    createdBy: string;
    modifiredDate: Date;
    modifiredBy: string;
    status: boolean;
    isSecond: boolean;
    showBreadcrumb: boolean;
    showAll: boolean;
    amountLead: number;
    sumChildren: number;
    sumArticles: number;
    tbArticles: TbArticle[];
    tbArticles2: TbArticle[];
    parent: TbArticleCategory;
    tbArticleCategories: TbArticleCategory[];
    tbUserGroupArticles: TbUserGroupArticle[];
}
