import { TblM28Biendong } from './TblM28Biendong.entity';
export declare class TblM28info {
    id: number;
    ngaylap: Date;
    mucluongCu: number | null;
    mucluongMoi: number | null;
    idChucdanhCu: number | null;
    idChucdanhMoi: number | null;
    idBacHocCu: string | null;
    idBacHocMoi: string | null;
    idNganhCu: number | null;
    idNganhMoi: number | null;
    idLoaiDhldCu: string | null;
    idLoaiDhldMoi: string | null;
    ghichu: string | null;
    status: boolean;
    displayOrder: number;
    createdDate: Date;
    createdBy: string;
    modifiredDate: Date;
    modifiredBy: string;
    idphieu: TblM28Biendong;
}
