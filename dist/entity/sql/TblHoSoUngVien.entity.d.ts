/// <reference types="node" />
import { TblDmTinhTrangTanTat } from './TblDmTinhTrangTanTat.entity';
import { TblDmDanToc } from './TblDmDanToc.entity';
import { TblDmTtHonNhan } from './TblDmTtHonNhan.entity';
import { TblDmChucDanh } from './TblDmChucDanh.entity';
import { TblDmThoiGianLamViec } from './TblDmThoiGianLamViec.entity';
import { TblDmDoiTuongChinhSach } from './TblDmDoiTuongChinhSach.entity';
import { TblDmTrinhDoHocVan } from './TblDmTrinhDoHocVan.entity';
import { TblDmNganh } from './TblDmNganh.entity';
import { TblDmHinhThucDoanhNghiep } from './TblDmHinhThucDoanhNghiep.entity';
import { TblVieclamUngVien } from './TblVieclamUngVien.entity';
export declare class TblHoSoUngVien {
    id: string;
    uvUsername: string;
    uvPassword: string | null;
    uvHoten: string | null;
    uvEmail: string | null;
    maHoSo: string | null;
    cvMongMuon: string | null;
    documentPath: string | null;
    imagePath: string | null;
    uvDiachichitiet: string | null;
    uvDienthoai: string | null;
    uvSoCmnd: string | null;
    uvNgaycap: Date | null;
    uvNoicap: string | null;
    uvGioitinh: number | null;
    uvChieucao: string | null;
    uvCannang: string | null;
    uvNgaysinh: Date | null;
    uvcmCongviechientai: string | null;
    uvnvNoilamviec: string | null;
    uvnvMucluong: string | null;
    uvGhichu: string | null;
    uvcmBangcap: string | null;
    uvcmKynang: string | null;
    uvcmTrinhdongoaingu: string | null;
    uvcmTrinhdotinhoc: string | null;
    uvcmKinhnghiem: number;
    uvSolanxem: number;
    interview: number;
    interviewed: number;
    uvDuyet: boolean;
    uvHienthi: boolean;
    uvhtTelephone: boolean;
    uvhtEmail: boolean;
    uvhtAddress: boolean;
    createdDate: Date;
    createdBy: string;
    modifiredDate: Date;
    modifiredBy: string;
    uvId: string | null;
    newsletterSubscription: boolean;
    jobsletterSubscription: boolean;
    coBhtn: boolean | null;
    soNhaDuong: string | null;
    idThanhPho: number | null;
    idTinh: string | null;
    idhuyen: string | null;
    idxa: string | null;
    idtv: string | null;
    mahoGd: string | null;
    fileCv: string | null;
    displayOrder: number | null;
    ngayduyet: Date | null;
    avatar: Buffer | null;
    uvTinhtrangtantat: TblDmTinhTrangTanTat;
    idDanToc: TblDmDanToc;
    uvHonnhan: TblDmTtHonNhan;
    uvnvVitrimongmuon: TblDmChucDanh;
    uvnvThoigian: TblDmThoiGianLamViec;
    uvDoituongchinhsach: TblDmDoiTuongChinhSach;
    uvcmTrinhdo: TblDmTrinhDoHocVan;
    uvnvNganhnghe: TblDmNganh;
    uvnvHinhthuccongty: TblDmHinhThucDoanhNghiep;
    tblVieclamUngViens: TblVieclamUngVien[];
}
