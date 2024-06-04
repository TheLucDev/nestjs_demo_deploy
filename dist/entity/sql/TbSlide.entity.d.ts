import { TbSlideGroup } from './TbSlideGroup.entity';
export declare class TbSlide {
    idSlide: string;
    title: string;
    imagePath: string;
    showExpand: boolean;
    description: string | null;
    linkExpand: string | null;
    linkTitle: string | null;
    displayOrder: number;
    createdDate: Date;
    createdBy: string | null;
    modifiredDate: Date;
    modifiredBy: string | null;
    status: boolean;
    idSlideGroup: TbSlideGroup;
}
