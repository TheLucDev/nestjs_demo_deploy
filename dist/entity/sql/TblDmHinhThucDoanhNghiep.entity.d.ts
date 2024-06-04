import { TblDKySgd } from "./TblDKySgd.entity";
import { TblHoSoUngVien } from "./TblHoSoUngVien.entity";
import { TblNhaTuyenDung } from "./TblNhaTuyenDung.entity";
export declare class TblDmHinhThucDoanhNghiep {
    maHinhthuc: number;
    tenHinhthuc: string;
    displayOrder: number;
    createdDate: Date;
    createdBy: string;
    modifiredDate: Date;
    modifiredBy: string;
    status: boolean;
    tblDKySgds: TblDKySgd[];
    tblHoSoUngViens: TblHoSoUngVien[];
    tblNhaTuyenDungs: TblNhaTuyenDung[];
}
