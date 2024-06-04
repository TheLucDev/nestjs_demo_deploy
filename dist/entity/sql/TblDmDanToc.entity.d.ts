import { TblHoSoUngVien } from './TblHoSoUngVien.entity';
export declare class TblDmDanToc {
    idDt: number;
    tenDt: string;
    displayOrder: number;
    createdDate: Date;
    createdBy: string;
    modifiredDate: Date;
    modifiredBy: string;
    status: boolean;
    tblHoSoUngViens: TblHoSoUngVien[];
}
