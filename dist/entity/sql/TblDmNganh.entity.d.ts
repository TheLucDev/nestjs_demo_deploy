import { TblHoSoUngVien } from './TblHoSoUngVien.entity';
import { TblTuyenDung } from './TblTuyenDung.entity';
export declare class TblDmNganh {
    manhom: string | null;
    nganhId: number;
    nganhTen: string | null;
    displayOrder: number;
    createdDate: Date;
    createdBy: string;
    modifiredDate: Date;
    modifiredBy: string;
    status: boolean;
    tblHoSoUngViens: TblHoSoUngVien[];
    tblTuyenDungs: TblTuyenDung[];
}
