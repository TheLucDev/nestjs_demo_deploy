import { TblTuyenDung } from './TblTuyenDung.entity';
export declare class TblDmTrinhDoNgoaiNgu {
    tdnnId: string;
    tdnnTen: string;
    displayOrder: number;
    createdDate: Date;
    createdBy: string;
    modifiredDate: Date;
    modifiredBy: string;
    status: boolean;
    tblTuyenDungs: TblTuyenDung[];
}
