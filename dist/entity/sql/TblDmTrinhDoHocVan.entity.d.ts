import { TblHoSoUngVien } from './TblHoSoUngVien.entity';
import { TblTuyenDung } from './TblTuyenDung.entity';
export declare class TblDmTrinhDoHocVan {
    hocvanId: number;
    hocvanTen: string | null;
    displayOrder: number;
    createdDate: Date;
    createdBy: string;
    modifiredDate: Date;
    modifiredBy: string;
    status: boolean;
    idCaphoc: number | null;
    phanloai: string | null;
    tblHoSoUngViens: TblHoSoUngVien[];
    tblTuyenDungs: TblTuyenDung[];
}
