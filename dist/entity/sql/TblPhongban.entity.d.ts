import { TblDmnhanvien } from './TblDmnhanvien.entity';
export declare class TblPhongban {
    maphong: string;
    tenphong: string | null;
    diachi: string | null;
    dienthoai: string | null;
    email: string | null;
    lanhdao: string | null;
    displayOrder: number;
    createdDate: Date;
    createdBy: string;
    modifiredDate: Date;
    modifiredBy: string;
    status: boolean;
    madonvi: string | null;
    tblDmnhanviens: TblDmnhanvien[];
}
