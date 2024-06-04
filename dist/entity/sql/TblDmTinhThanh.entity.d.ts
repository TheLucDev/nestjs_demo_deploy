import { TblTuyenDung } from './TblTuyenDung.entity';
export declare class TblDmTinhThanh {
    tpId: number;
    tpTen: string | null;
    displayOrder: number;
    createdDate: Date;
    createdBy: string;
    modifiredDate: Date;
    modifiredBy: string;
    status: boolean;
    matinh: string | null;
    tblTuyenDungs: TblTuyenDung[];
}
