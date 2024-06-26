import { TblDmHinhThucDoanhNghiep } from './TblDmHinhThucDoanhNghiep.entity';
import { TblDmPhienGiaoDich } from './TblDmPhienGiaoDich.entity';
import { TblDmTrangThai } from './TblDmTrangThai.entity';
export declare class TblDKySgd {
    id: string;
    dksgdUsername: string | null;
    dksgdEmail: string | null;
    dksgdPassword: string | null;
    dksgdTen: string | null;
    dksgdTentat: string | null;
    maHoSo: string | null;
    dksgdNguoilienhe: string | null;
    dksgdWebsite: string | null;
    dksgdSolaodong: number;
    dksgdNganhnghekinhdoanh: string | null;
    dksgdDienthoai: string | null;
    dksgdFax: string | null;
    dksgdDiachichitiet: string | null;
    dksgddmHinhthucthamgia: string | null;
    dksgdNganhnghe: string | null;
    dksgdGhichu: string | null;
    dksgdSolanxem: number;
    dksgdHienthi: boolean;
    dksgdhtNlh: boolean;
    dksgdhtTelephone: boolean;
    dksgdhtWeb: boolean;
    dksgdhtFax: boolean;
    dksgdhtEmail: boolean;
    dksgdhtAddress: boolean;
    dksgdhtName: boolean;
    createdDate: Date;
    createdBy: string | null;
    modifiredDate: Date;
    modifiredBy: string | null;
    dksgddmHinhthucdoanhnghiep: TblDmHinhThucDoanhNghiep;
    dksgddmPhiengiaodichlan: TblDmPhienGiaoDich;
    dksgdDuyet: TblDmTrangThai;
}
