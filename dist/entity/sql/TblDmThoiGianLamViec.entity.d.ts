import { TblHoSoUngVien } from './TblHoSoUngVien.entity';
import { TblTuyenDung } from './TblTuyenDung.entity';
export declare class TblDmThoiGianLamViec {
    maThoigian: number;
    tenThoigian: string;
    displayOrder: number;
    createdDate: Date;
    createdBy: string;
    modifiredDate: Date;
    modifiredBy: string;
    status: boolean;
    tblHoSoUngViens: TblHoSoUngVien[];
    tblTuyenDungs: TblTuyenDung[];
}
