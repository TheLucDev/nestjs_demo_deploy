import { TbMenu } from './TbMenu.entity';
export declare class TbMenuGroup {
    idMenuGroup: string;
    title: string;
    description: string | null;
    displayOrder: number;
    createdDate: Date;
    createdBy: string | null;
    modifiredDate: Date;
    modifiredBy: string | null;
    status: boolean;
    tbMenus: TbMenu[];
}
