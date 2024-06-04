import { TbContentHtml } from './TbContentHtml.entity';
export declare class TbPosition {
    idPosition: string;
    displayOrder: number;
    groupLevel: number;
    status: boolean;
    tbContentHtmls: TbContentHtml[];
    parent: TbPosition;
    tbPositions: TbPosition[];
}
