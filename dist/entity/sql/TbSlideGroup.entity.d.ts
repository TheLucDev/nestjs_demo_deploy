import { TbSlide } from './TbSlide.entity';
export declare class TbSlideGroup {
    idSlideGroup: string;
    title: string;
    displayOrder: number;
    idSliderType: string | null;
    createdDate: Date;
    createdBy: string | null;
    modifiredDate: Date;
    modifiredBy: string | null;
    status: boolean;
    tbSlides: TbSlide[];
}
