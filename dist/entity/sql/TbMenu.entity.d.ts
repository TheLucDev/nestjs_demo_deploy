import { TbMenuGroup } from './TbMenuGroup.entity';
export declare class TbMenu {
    idMenu: number;
    title: string;
    alias: string;
    linkPath: string | null;
    imgPath: string | null;
    displayOrder: number;
    groupLevel: number;
    createdDate: Date;
    createdBy: string | null;
    modifiredDate: Date;
    modifiredBy: string | null;
    status: boolean;
    idController: string | null;
    noneLink: boolean;
    isShowParameter: boolean;
    isHome: boolean;
    pkString: string | null;
    pkLong: string | null;
    parent: TbMenu;
    tbMenus: TbMenu[];
    idMenuGroup: TbMenuGroup;
}
