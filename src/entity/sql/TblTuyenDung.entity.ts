import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TblNhaTuyenDung } from './TblNhaTuyenDung.entity';
import { TblDmTinhThanh } from './TblDmTinhThanh.entity';
import { TblDmTrinhDoHocVan } from './TblDmTrinhDoHocVan.entity';
import { TblDmTrinhDoTinHoc } from './TblDmTrinhDoTinHoc.entity';
import { TblDmNganh } from './TblDmNganh.entity';
import { TblDmThoiGianLamViec } from './TblDmThoiGianLamViec.entity';
import { TblDmTrinhDoNgoaiNgu } from './TblDmTrinhDoNgoaiNgu.entity';
import { TblDmYeuCauGioiTinh } from './TblDmYeuCauGioiTinh.entity';

@Index('PK_tb_tuyendung', ['idTuyenDung'], { unique: true })
@Entity('tblTuyenDung', { schema: 'dbo' })
export class TblTuyenDung {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'IdTuyenDung' })
  idTuyenDung: string;

  @Column('nvarchar', { name: 'td_tieude', nullable: true, length: 500 })
  tdTieude: string | null;

  @Column('int', { name: 'td_chuc_danh', nullable: true })
  tdChucDanh: number | null;

  @Column('nvarchar', { name: 'td_nganhkhac', nullable: true, length: 255 })
  tdNganhkhac: string | null;

  @Column('int', { name: 'td_soluong', default: () => '(0)' })
  tdSoluong: number;

  @Column('nvarchar', { name: 'td_motacongviec', nullable: true, length: 4000 })
  tdMotacongviec: string | null;

  @Column('nvarchar', { name: 'td_motayeucau', nullable: true, length: 4000 })
  tdMotayeucau: string | null;

  @Column('nvarchar', { name: 'td_quyenloi', nullable: true, length: 4000 })
  tdQuyenloi: string | null;

  @Column('nvarchar', { name: 'td_ghichu', nullable: true, length: 4000 })
  tdGhichu: string | null;

  @Column('decimal', {
    name: 'td_luongkhoidiem',
    nullable: true,
    precision: 18,
    scale: 0,
  })
  tdLuongkhoidiem: number | null;

  @Column('date', { name: 'NgayNhanHoSo', default: () => 'getdate()' })
  ngayNhanHoSo: Date;

  @Column('date', {
    name: 'NgayHetNhanHoSo',
    nullable: true,
    default: () => 'getdate()',
  })
  ngayHetNhanHoSo: Date | null;

  @Column('bit', { name: 'IsDenKhiTuyenXong', default: () => '(1)' })
  isDenKhiTuyenXong: boolean;

  @Column('nvarchar', { name: 'td_noinophoso', nullable: true, length: 4000 })
  tdNoinophoso: string | null;

  @Column('nvarchar', { name: 'td_hosobaogom', nullable: true, length: 4000 })
  tdHosobaogom: string | null;

  @Column('int', {
    name: 'td_YeuCauChieuCao',
    nullable: true,
    default: () => '(0)',
  })
  tdYeuCauChieuCao: number | null;

  @Column('int', { name: 'td_yeucau_kinhnghiem', nullable: true })
  tdYeucauKinhnghiem: number | null;

  @Column('int', { name: 'td_yeucau_tuoiMin', nullable: true })
  tdYeucauTuoiMin: number | null;

  @Column('int', { name: 'td_yeucau_tuoiMax', nullable: true })
  tdYeucauTuoiMax: number | null;

  @Column('int', { name: 'td_lanxem', default: () => '(0)' })
  tdLanxem: number;

  @Column('bit', { name: 'td_duyet', default: () => '(0)' })
  tdDuyet: boolean;

  @Column('datetime', { name: 'CreatedDate', default: () => 'getdate()' })
  createdDate: Date;

  @Column('varchar', {
    name: 'CreatedBy',
    length: 50,
    default: () => "'system'",
  })
  createdBy: string;

  @Column('datetime', { name: 'ModifiredDate', default: () => 'getdate()' })
  modifiredDate: Date;

  @Column('varchar', {
    name: 'ModifiredBy',
    length: 50,
    default: () => "'system'",
  })
  modifiredBy: string;

  @Column('varchar', { name: 'td_id', nullable: true, length: 50 })
  tdId: string | null;

  @Column('varchar', { name: 'td_id_doanhnghiep', nullable: true, length: 50 })
  tdIdDoanhnghiep: string | null;

  @Column('varchar', {
    name: 'NguonThuThap',
    nullable: true,
    length: 3,
    default: () => "'ITN'",
  })
  nguonThuThap: string | null;

  @Column('int', { name: 'SoLuongDat', default: () => '(0)' })
  soLuongDat: number;

  @Column('int', { name: 'SoLuongKhongDat', default: () => '(0)' })
  soLuongKhongDat: number;

  @Column('int', { name: 'SoLuongChoKetQua', default: () => '(0)' })
  soLuongChoKetQua: number;

  @Column('int', { name: 'IdMucLuong', nullable: true })
  idMucLuong: number | null;

  @Column('int', { name: 'IdDoTuoi', nullable: true })
  idDoTuoi: number | null;

  @Column('nvarchar', {
    name: 'DoanhNghiepYeuCau',
    nullable: true,
    length: 4000,
  })
  doanhNghiepYeuCau: string | null;

  @ManyToOne(
    () => TblNhaTuyenDung,
    (tblNhaTuyenDung) => tblNhaTuyenDung.tblTuyenDungs,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'IdDoanhNghiep', referencedColumnName: 'idDoanhNghiep' },
  ])
  idDoanhNghiep: TblNhaTuyenDung;

  @ManyToOne(
    () => TblDmTinhThanh,
    (tblDmTinhThanh) => tblDmTinhThanh.tblTuyenDungs,
    { onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'td_noilamviec', referencedColumnName: 'tpId' }])
  tdNoilamviec: TblDmTinhThanh;

  @ManyToOne(
    () => TblDmTrinhDoHocVan,
    (tblDmTrinhDoHocVan) => tblDmTrinhDoHocVan.tblTuyenDungs,
    { onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'td_YeuCauHocVan', referencedColumnName: 'hocvanId' }])
  tdYeuCauHocVan: TblDmTrinhDoHocVan;

  @ManyToOne(
    () => TblDmTrinhDoTinHoc,
    (tblDmTrinhDoTinHoc) => tblDmTrinhDoTinHoc.tblTuyenDungs,
    { onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'td_YeuCauTinHoc', referencedColumnName: 'tdthId' }])
  tdYeuCauTinHoc: TblDmTrinhDoTinHoc;

  @ManyToOne(() => TblDmNganh, (tblDmNganh) => tblDmNganh.tblTuyenDungs, {
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'td_nganhnghe', referencedColumnName: 'nganhId' }])
  tdNganhnghe: TblDmNganh;

  @ManyToOne(
    () => TblDmThoiGianLamViec,
    (tblDmThoiGianLamViec) => tblDmThoiGianLamViec.tblTuyenDungs,
    { onUpdate: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'td_thoigianlamviec', referencedColumnName: 'maThoigian' },
  ])
  tdThoigianlamviec: TblDmThoiGianLamViec;

  @ManyToOne(
    () => TblDmTrinhDoNgoaiNgu,
    (tblDmTrinhDoNgoaiNgu) => tblDmTrinhDoNgoaiNgu.tblTuyenDungs,
    { onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'td_YeuCauNgoaiNgu', referencedColumnName: 'tdnnId' }])
  tdYeuCauNgoaiNgu: TblDmTrinhDoNgoaiNgu;

  @ManyToOne(
    () => TblDmYeuCauGioiTinh,
    (tblDmYeuCauGioiTinh) => tblDmYeuCauGioiTinh.tblTuyenDungs,
    { onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'td_YeuCauGioiTinh', referencedColumnName: 'idYcgt' }])
  tdYeuCauGioiTinh: TblDmYeuCauGioiTinh;
}
