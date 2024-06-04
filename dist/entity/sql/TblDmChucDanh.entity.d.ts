import { TblHoSoUngVien } from './TblHoSoUngVien.entity';
export declare class TblDmChucDanh {
    maChucDanh: number;
    tenChucDanh: string;
    displayOrder: number;
    createdDate: Date;
    createdBy: string;
    modifiredDate: Date;
    modifiredBy: string;
    status: boolean;
    tblHoSoUngViens: TblHoSoUngVien[];
}
