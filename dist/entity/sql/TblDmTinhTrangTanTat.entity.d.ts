import { TblHoSoUngVien } from './TblHoSoUngVien.entity';
export declare class TblDmTinhTrangTanTat {
    tantatId: number;
    tantatTen: string;
    displayOrder: number;
    createdDate: Date;
    createdBy: string;
    modifiredDate: Date;
    modifiredBy: string;
    status: boolean;
    tblHoSoUngViens: TblHoSoUngVien[];
}
