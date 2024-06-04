import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
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

@Index('PK_tb_hosoungvien', ['id'], { unique: true })
@Entity('tblHoSoUngVien', { schema: 'dbo' })
export class TblHoSoUngVien {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('varchar', { name: 'uv_username', length: 50 })
  uvUsername: string;

  @Column('varchar', { name: 'uv_password', nullable: true, length: 50 })
  uvPassword: string | null;

  @Column('nvarchar', { name: 'uv_hoten', nullable: true, length: 100 })
  uvHoten: string | null;

  @Column('nvarchar', { name: 'uv_email', nullable: true, length: 255 })
  uvEmail: string | null;

  @Column('varchar', { name: 'MaHoSo', nullable: true, length: 20 })
  maHoSo: string | null;

  @Column('nvarchar', { name: 'CVMongMuon', nullable: true, length: 255 })
  cvMongMuon: string | null;

  @Column('nvarchar', { name: 'DocumentPath', nullable: true, length: 255 })
  documentPath: string | null;

  @Column('nvarchar', { name: 'ImagePath', nullable: true, length: 255 })
  imagePath: string | null;

  @Column('nvarchar', { name: 'uv_diachichitiet', nullable: true, length: 255 })
  uvDiachichitiet: string | null;

  @Column('varchar', { name: 'uv_dienthoai', nullable: true, length: 30 })
  uvDienthoai: string | null;

  @Column('varchar', { name: 'uv_soCMND', nullable: true, length: 16 })
  uvSoCmnd: string | null;

  @Column('datetime', { name: 'uv_Ngaycap', nullable: true })
  uvNgaycap: Date | null;

  @Column('nvarchar', { name: 'uv_Noicap', nullable: true, length: 50 })
  uvNoicap: string | null;

  @Column('int', { name: 'uv_gioitinh', nullable: true })
  uvGioitinh: number | null;

  @Column('varchar', { name: 'uv_chieucao', nullable: true, length: 10 })
  uvChieucao: string | null;

  @Column('varchar', { name: 'uv_cannang', nullable: true, length: 10 })
  uvCannang: string | null;

  @Column('date', { name: 'uv_ngaysinh', nullable: true })
  uvNgaysinh: Date | null;

  @Column('nvarchar', {
    name: 'uvcm_congviechientai',
    nullable: true,
    length: 4000,
  })
  uvcmCongviechientai: string | null;

  @Column('varchar', { name: 'uvnv_noilamviec', nullable: true, length: 20 })
  uvnvNoilamviec: string | null;

  @Column('nvarchar', { name: 'uvnv_mucluong', nullable: true, length: 50 })
  uvnvMucluong: string | null;

  @Column('nvarchar', { name: 'uv_ghichu', nullable: true, length: 4000 })
  uvGhichu: string | null;

  @Column('nvarchar', { name: 'uvcm_bangcap', nullable: true, length: 4000 })
  uvcmBangcap: string | null;

  @Column('nvarchar', { name: 'uvcm_kynang', nullable: true, length: 200 })
  uvcmKynang: string | null;

  @Column('nvarchar', {
    name: 'uvcm_trinhdongoaingu',
    nullable: true,
    length: 400,
  })
  uvcmTrinhdongoaingu: string | null;

  @Column('nvarchar', {
    name: 'uvcm_trinhdotinhoc',
    nullable: true,
    length: 400,
  })
  uvcmTrinhdotinhoc: string | null;

  @Column('int', { name: 'uvcm_kinhnghiem', default: () => '(0)' })
  uvcmKinhnghiem: number;

  @Column('int', { name: 'uv_solanxem', default: () => '(0)' })
  uvSolanxem: number;

  @Column('int', { name: 'Interview', default: () => '(0)' })
  interview: number;

  @Column('int', { name: 'Interviewed', default: () => '(0)' })
  interviewed: number;

  @Column('bit', { name: 'uv_duyet', default: () => '(0)' })
  uvDuyet: boolean;

  @Column('bit', { name: 'uv_hienthi', default: () => '(0)' })
  uvHienthi: boolean;

  @Column('bit', { name: 'uvht_telephone', default: () => '(0)' })
  uvhtTelephone: boolean;

  @Column('bit', { name: 'uvht_email', default: () => '(0)' })
  uvhtEmail: boolean;

  @Column('bit', { name: 'uvht_address', default: () => '(0)' })
  uvhtAddress: boolean;

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

  @Column('varchar', { name: 'uv_id', nullable: true, length: 50 })
  uvId: string | null;

  @Column('bit', { name: 'NewsletterSubscription', default: () => '(0)' })
  newsletterSubscription: boolean;

  @Column('bit', { name: 'JobsletterSubscription', default: () => '(0)' })
  jobsletterSubscription: boolean;

  @Column('bit', { name: 'CoBHTN', nullable: true, default: () => '(0)' })
  coBhtn: boolean | null;

  @Column('nvarchar', { name: 'SoNhaDuong', nullable: true, length: 50 })
  soNhaDuong: string | null;

  @Column('int', { name: 'IdThanhPho', nullable: true })
  idThanhPho: number | null;

  @Column('varchar', { name: 'IdTinh', nullable: true, length: 2 })
  idTinh: string | null;

  @Column('varchar', { name: 'Idhuyen', nullable: true, length: 5 })
  idhuyen: string | null;

  @Column('varchar', { name: 'Idxa', nullable: true, length: 8 })
  idxa: string | null;

  @Column('bigint', { name: 'Idtv', nullable: true })
  idtv: string | null;

  @Column('varchar', { name: 'MahoGD', nullable: true, length: 20 })
  mahoGd: string | null;

  @Column('nvarchar', { name: 'FileCV', nullable: true, length: 255 })
  fileCv: string | null;

  @Column('int', { name: 'DisplayOrder', nullable: true })
  displayOrder: number | null;

  @Column('datetime', { name: 'Ngayduyet', nullable: true })
  ngayduyet: Date | null;

  @Column('image', { name: 'Avatar', nullable: true })
  avatar: Buffer | null;

  @ManyToOne(
    () => TblDmTinhTrangTanTat,
    (tblDmTinhTrangTanTat) => tblDmTinhTrangTanTat.tblHoSoUngViens,
    { onUpdate: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'uv_tinhtrangtantat', referencedColumnName: 'tantatId' },
  ])
  uvTinhtrangtantat: TblDmTinhTrangTanTat;

  @ManyToOne(() => TblDmDanToc, (tblDmDanToc) => tblDmDanToc.tblHoSoUngViens, {
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'IdDanToc', referencedColumnName: 'idDt' }])
  idDanToc: TblDmDanToc;

  @ManyToOne(
    () => TblDmTtHonNhan,
    (tblDmTtHonNhan) => tblDmTtHonNhan.tblHoSoUngViens,
    { onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'uv_honnhan', referencedColumnName: 'idTtHonNhan' }])
  uvHonnhan: TblDmTtHonNhan;

  @ManyToOne(
    () => TblDmChucDanh,
    (tblDmChucDanh) => tblDmChucDanh.tblHoSoUngViens,
    { onUpdate: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'uvnv_vitrimongmuon', referencedColumnName: 'maChucDanh' },
  ])
  uvnvVitrimongmuon: TblDmChucDanh;

  @ManyToOne(
    () => TblDmThoiGianLamViec,
    (tblDmThoiGianLamViec) => tblDmThoiGianLamViec.tblHoSoUngViens,
    { onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'uvnv_thoigian', referencedColumnName: 'maThoigian' }])
  uvnvThoigian: TblDmThoiGianLamViec;

  @ManyToOne(
    () => TblDmDoiTuongChinhSach,
    (tblDmDoiTuongChinhSach) => tblDmDoiTuongChinhSach.tblHoSoUngViens,
    { onUpdate: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'uv_doituongchinhsach', referencedColumnName: 'dtcsId' },
  ])
  uvDoituongchinhsach: TblDmDoiTuongChinhSach;

  @ManyToOne(
    () => TblDmTrinhDoHocVan,
    (tblDmTrinhDoHocVan) => tblDmTrinhDoHocVan.tblHoSoUngViens,
    { onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'uvcm_trinhdo', referencedColumnName: 'hocvanId' }])
  uvcmTrinhdo: TblDmTrinhDoHocVan;

  @ManyToOne(() => TblDmNganh, (tblDmNganh) => tblDmNganh.tblHoSoUngViens, {
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'uvnv_nganhnghe', referencedColumnName: 'nganhId' }])
  uvnvNganhnghe: TblDmNganh;

  @ManyToOne(
    () => TblDmHinhThucDoanhNghiep,
    (tblDmHinhThucDoanhNghiep) => tblDmHinhThucDoanhNghiep.tblHoSoUngViens,
    { onUpdate: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'uvnv_hinhthuccongty', referencedColumnName: 'maHinhthuc' },
  ])
  uvnvHinhthuccongty: TblDmHinhThucDoanhNghiep;

  @OneToMany(
    () => TblVieclamUngVien,
    (tblVieclamUngVien) => tblVieclamUngVien.iduv,
  )
  tblVieclamUngViens: TblVieclamUngVien[];
}
