import { TblTuyenDung } from './TblTuyenDung.entity';
export declare class TblDmTrinhDoTinHoc {
    tdthId: string;
    tdthTen: string;
    displayOrder: number;
    createdDate: Date;
    createdBy: string;
    modifiredDate: Date;
    modifiredBy: string;
    status: boolean;
    tblTuyenDungs: TblTuyenDung[];
}
