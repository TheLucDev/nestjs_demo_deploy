import { TblM27Bangke } from './TblM27Bangke.entity';
export declare class TblM27Socung {
    idm27: number;
    ngay: Date;
    ten: string;
    idDonvi: string;
    quyenso: string | null;
    nam: number;
    manv: string | null;
    matinh: string | null;
    mahuyen: string | null;
    maxa: string | null;
    mathon: string | null;
    displayOrder: number;
    createdDate: Date;
    createdBy: string;
    modifiredDate: Date;
    modifiredBy: string;
    status: boolean;
    tblM27Bangkes: TblM27Bangke[];
}
