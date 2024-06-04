import { TblM28Biendong } from './TblM28Biendong.entity';
export declare class TblM28TainanLd {
    id: number;
    idDoanhnghiep: string | null;
    iduv: string | null;
    idTainan: string | null;
    ngay: Date | null;
    mota: string | null;
    denghi: string | null;
    tenNoinhan: string | null;
    emailNhan: string | null;
    zaloPhone: string | null;
    status: boolean;
    displayOrder: number;
    createdDate: Date;
    createdBy: string | null;
    modifiredDate: Date;
    modifiredBy: string | null;
    idPhieu: TblM28Biendong;
}
