import { TblNhaTuyenDung } from './TblNhaTuyenDung.entity';
export declare class TblDaidienNtd {
    idLienhe: string;
    iduv: string;
    hoten: string;
    idGioitinh: number;
    idchucvu: number;
    diachi: string | null;
    dienthoai: string | null;
    email: string;
    displayOrder: number;
    createdDate: Date;
    createdBy: string | null;
    modifiredDate: Date;
    modifiredBy: string | null;
    status: boolean;
    idDoanhNghiep: TblNhaTuyenDung;
}
