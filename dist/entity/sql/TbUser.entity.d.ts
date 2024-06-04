import { TbUserGroup } from './TbUserGroup.entity';
export declare class TbUser {
    idUser: string;
    manv: string | null;
    userName: string;
    password: string;
    name: string;
    phone: string | null;
    email: string;
    address: string | null;
    birdthday: Date | null;
    displayOrder: number;
    createdDate: Date;
    createdBy: string;
    modifiredDate: Date;
    modifiredBy: string;
    status: boolean;
    isAdmin: boolean | null;
    duyetbientap: boolean | null;
    duyetchuyentin: boolean | null;
    duyetcapphong: boolean | null;
    duyetgiamdoc: boolean | null;
    idCapduyet: number;
    idUserGroup: TbUserGroup;
}
