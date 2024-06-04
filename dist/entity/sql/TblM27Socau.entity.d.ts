import { TblM27SocauCt } from './TblM27SocauCt.entity';
export declare class TblM27Socau {
    idcau27: number;
    ngay: Date;
    quyenso: string;
    ten: string;
    matinh: string | null;
    mahuyen: string | null;
    maxa: string | null;
    idDoanhNghiep: string;
    idLienhe: string | null;
    nam: number;
    manv: string | null;
    idDonvi: string | null;
    startAdress: string | null;
    endAdress: string | null;
    displayOrder: number;
    createdDate: Date;
    createdBy: string;
    modifiredDate: Date;
    modifiredBy: string;
    status: boolean;
    tblM27SocauCts: TblM27SocauCt[];
}
