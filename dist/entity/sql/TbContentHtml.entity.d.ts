import { TbPosition } from './TbPosition.entity';
export declare class TbContentHtml {
    idContentHtml: string;
    title: string | null;
    description: string | null;
    contentHtml: string | null;
    displayOrder: number;
    createdDate: Date;
    createdBy: string | null;
    modifiredDate: Date;
    modifiredBy: string | null;
    status: boolean;
    showAllController: boolean;
    showOnlyController: boolean;
    idController: string | null;
    showListController: boolean;
    listController: string | null;
    pkString: string | null;
    pkLong: string | null;
    viewCount: string | null;
    isContentHtml: boolean;
    isSlide: boolean;
    isMenu: boolean;
    isProduct: boolean;
    isArticle: boolean;
    idPosition: TbPosition;
}
