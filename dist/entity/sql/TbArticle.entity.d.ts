import { TbArticleCategory } from './TbArticleCategory.entity';
export declare class TbArticle {
    idArticle: string;
    title: string;
    summary: string | null;
    contentArticle: string | null;
    author: string | null;
    imagePath: string | null;
    titleMeta: string;
    titleSeo: string | null;
    metaKeywords: string | null;
    metaDescription: string | null;
    displayOrder: number;
    viewCount: number;
    isNew: boolean;
    createdDate: Date;
    createdBy: string;
    modifiredDate: Date;
    modifiredBy: string;
    status: boolean;
    newsletterSubscription: boolean;
    idCategory2nd: TbArticleCategory;
    idCategory: TbArticleCategory;
}
