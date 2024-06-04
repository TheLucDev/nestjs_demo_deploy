import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TblDmTrinhDoHocVanDtn } from './TblDmTrinhDoHocVanDtn.entity';
import { TblDmGioiTinh } from './TblDmGioiTinh.entity';
import { TblDmKhaNangTaiChinh } from './TblDmKhaNangTaiChinh.entity';
import { TblDmNgoaiNguDaoTao } from './TblDmNgoaiNguDaoTao.entity';
import { TblDmTrangThai } from './TblDmTrangThai.entity';
import { TblDmTtHoChieu } from './TblDmTtHoChieu.entity';
import { TblDmTtHonNhan } from './TblDmTtHonNhan.entity';
import { TblDmTtHoSo } from './TblDmTtHoSo.entity';
import { TblDmTtkqpv } from './TblDmTtkqpv.entity';
import { TblDmDoiTuongChinhSach } from './TblDmDoiTuongChinhSach.entity';
import { TblDmQuocGia } from './TblDmQuocGia.entity';

@Index('PK_tb_dkxkld', ['id'], { unique: true })
@Entity('tblDKyXKLD', { schema: 'dbo' })
export class TblDKyXkld {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('datetime', { name: 'dkxkld_ngay' })
  dkxkldNgay: Date;

  @Column('varchar', { name: 'dkxkld_username', length: 50 })
  dkxkldUsername: string;

  @Column('nvarchar', { name: 'ImagePath', nullable: true, length: 250 })
  imagePath: string | null;

  @Column('varchar', { name: 'dkxkld_email', nullable: true, length: 255 })
  dkxkldEmail: string | null;

  @Column('varchar', { name: 'dkxkld_password', nullable: true, length: 50 })
  dkxkldPassword: string | null;

  @Column('nvarchar', { name: 'dkxkld_hoten', nullable: true, length: 250 })
  dkxkldHoten: string | null;

  @Column('date', { name: 'dkxkld_ngaysinh', default: () => 'getdate()' })
  dkxkldNgaysinh: Date;

  @Column('varchar', { name: 'dkxkld_sohochieu', nullable: true, length: 50 })
  dkxkldSohochieu: string | null;

  @Column('varchar', { name: 'dkxkld_dienthoai', nullable: true, length: 25 })
  dkxkldDienthoai: string | null;

  @Column('varchar', { name: 'dkxkld_soCMND', nullable: true, length: 20 })
  dkxkldSoCmnd: string | null;

  @Column('datetime', {
    name: 'dkxkld_Ngaycap',
    nullable: true,
    default: () => 'getdate()',
  })
  dkxkldNgaycap: Date | null;

  @Column('nvarchar', { name: 'dkxkld_Noicap', nullable: true, length: 255 })
  dkxkldNoicap: string | null;

  @Column('nvarchar', { name: 'dkxkld_dantoc', nullable: true, length: 50 })
  dkxkldDantoc: string | null;

  @Column('nvarchar', { name: 'dkxkld_tongiao', nullable: true, length: 50 })
  dkxkldTongiao: string | null;

  @Column('varchar', { name: 'dkxkld_chieucao', nullable: true, length: 10 })
  dkxkldChieucao: string | null;

  @Column('varchar', { name: 'dkxkld_cannang', nullable: true, length: 10 })
  dkxkldCannang: string | null;

  @Column('nvarchar', {
    name: 'dkxkld_nguyenquan',
    nullable: true,
    length: 255,
  })
  dkxkldNguyenquan: string | null;

  @Column('nvarchar', {
    name: 'dkxkld_hokhauthuongtru',
    nullable: true,
    length: 200,
  })
  dkxkldHokhauthuongtru: string | null;

  @Column('nvarchar', {
    name: 'dkxkld_diachitamtru',
    nullable: true,
    length: 255,
  })
  dkxkldDiachitamtru: string | null;

  @Column('nvarchar', { name: 'dkxkld_chuyenmon', nullable: true, length: 400 })
  dkxkldChuyenmon: string | null;

  @Column('nvarchar', { name: 'dkxkld_bacdaotao', nullable: true, length: 50 })
  dkxkldBacdaotao: string | null;

  @Column('nvarchar', { name: 'dkxkld_dangdoan', nullable: true, length: 50 })
  dkxkldDangdoan: string | null;

  @Column('nvarchar', {
    name: 'dkxkld_nganhnghemongmuon',
    nullable: true,
    length: 50,
  })
  dkxkldNganhnghemongmuon: string | null;

  @Column('nvarchar', {
    name: 'dkxkld_nndaduocdaotao',
    nullable: true,
    length: 50,
  })
  dkxkldNndaduocdaotao: string | null;

  @Column('nvarchar', { name: 'dkxkld_ghichu', nullable: true, length: 4000 })
  dkxkldGhichu: string | null;

  @Column('int', { name: 'dkxkld_solanxem', default: () => '(0)' })
  dkxkldSolanxem: number;

  @Column('bit', { name: 'dkxkldht_telephone', default: () => '(0)' })
  dkxkldhtTelephone: boolean;

  @Column('bit', { name: 'dkxkldht_email', default: () => '(0)' })
  dkxkldhtEmail: boolean;

  @Column('bit', { name: 'dkxkldht_address', default: () => '(0)' })
  dkxkldhtAddress: boolean;

  @Column('bit', { name: 'DaXuatCanh', default: () => '(0)' })
  daXuatCanh: boolean;

  @Column('datetime', { name: 'NgayXuatCanh', default: () => 'getdate()' })
  ngayXuatCanh: Date;

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

  @Column('bit', { name: 'DaXem', nullable: true, default: () => '(0)' })
  daXem: boolean | null;

  @Column('bigint', { name: 'IdDoanhNghiep', nullable: true })
  idDoanhNghiep: string | null;

  @Column('datetime', { name: 'NgayGioiThieu', nullable: true })
  ngayGioiThieu: Date | null;

  @Column('nvarchar', { name: 'NguoiBaoLanh', nullable: true, length: 250 })
  nguoiBaoLanh: string | null;

  @Column('varchar', { name: 'Dienthoailienhe', nullable: true, length: 30 })
  dienthoailienhe: string | null;

  @Column('nvarchar', { name: 'ThonBuon', nullable: true, length: 50 })
  thonBuon: string | null;

  @Column('varchar', { name: 'XaPhuong', nullable: true, length: 8 })
  xaPhuong: string | null;

  @Column('varchar', { name: 'HuyenThiThanhPho', nullable: true, length: 5 })
  huyenThiThanhPho: string | null;

  @Column('varchar', { name: 'Tinh', nullable: true, length: 2 })
  tinh: string | null;

  @Column('bit', { name: 'DatSoTuyen', nullable: true, default: () => '(0)' })
  datSoTuyen: boolean | null;

  @Column('int', { name: 'DisplayOrder' })
  displayOrder: number;

  @Column('bit', { name: 'Venuoc', nullable: true, default: () => '(0)' })
  venuoc: boolean | null;

  @Column('datetime', { name: 'Ngayvenuoc', nullable: true })
  ngayvenuoc: Date | null;

  @Column('nvarchar', { name: 'Lydovenuoc', nullable: true, length: 255 })
  lydovenuoc: string | null;

  @Column('varchar', { name: 'IdNganhKinhTe', nullable: true, length: 4 })
  idNganhKinhTe: string | null;

  @Column('int', { name: 'Vitrimongmuon', nullable: true })
  vitrimongmuon: number | null;

  @Column('nvarchar', { name: 'Viecdanglam', nullable: true, length: 255 })
  viecdanglam: string | null;

  @ManyToOne(
    () => TblDmTrinhDoHocVanDtn,
    (tblDmTrinhDoHocVanDtn) => tblDmTrinhDoHocVanDtn.tblDKyXklds,
  )
  @JoinColumn([
    { name: 'dkxklddm_trinhdohocvan', referencedColumnName: 'hocvanId' },
  ])
  dkxklddmTrinhdohocvan: TblDmTrinhDoHocVanDtn;

  @ManyToOne(() => TblDmGioiTinh, (tblDmGioiTinh) => tblDmGioiTinh.tblDKyXklds)
  @JoinColumn([{ name: 'dkxkld_gioitinh', referencedColumnName: 'idGioiTinh' }])
  dkxkldGioitinh: TblDmGioiTinh;

  @ManyToOne(
    () => TblDmKhaNangTaiChinh,
    (tblDmKhaNangTaiChinh) => tblDmKhaNangTaiChinh.tblDKyXklds,
  )
  @JoinColumn([
    { name: 'dkxkld_khanangtaichinh', referencedColumnName: 'idKnTaiChinh' },
  ])
  dkxkldKhanangtaichinh: TblDmKhaNangTaiChinh;

  @ManyToOne(
    () => TblDmNgoaiNguDaoTao,
    (tblDmNgoaiNguDaoTao) => tblDmNgoaiNguDaoTao.tblDKyXklds,
  )
  @JoinColumn([
    {
      name: 'dkxklddm_ngoaingudaotao',
      referencedColumnName: 'maNgoaingudaotao',
    },
  ])
  dkxklddmNgoaingudaotao: TblDmNgoaiNguDaoTao;

  @ManyToOne(
    () => TblDmTrangThai,
    (tblDmTrangThai) => tblDmTrangThai.tblDKyXklds,
  )
  @JoinColumn([{ name: 'dkxkld_duyet', referencedColumnName: 'idTrangThai' }])
  dkxkldDuyet: TblDmTrangThai;

  @ManyToOne(
    () => TblDmTtHoChieu,
    (tblDmTtHoChieu) => tblDmTtHoChieu.tblDKyXklds,
  )
  @JoinColumn([{ name: 'dkxkld_hochieu', referencedColumnName: 'idTtHoChieu' }])
  dkxkldHochieu: TblDmTtHoChieu;

  @ManyToOne(
    () => TblDmTtHonNhan,
    (tblDmTtHonNhan) => tblDmTtHonNhan.tblDKyXklds,
  )
  @JoinColumn([{ name: 'dkxkld_honnhan', referencedColumnName: 'idTtHonNhan' }])
  dkxkldHonnhan: TblDmTtHonNhan;

  @ManyToOne(() => TblDmTtHoSo, (tblDmTtHoSo) => tblDmTtHoSo.tblDKyXklds)
  @JoinColumn([{ name: 'dkxkld_IdTTHS', referencedColumnName: 'idTths' }])
  dkxkldIdTths: TblDmTtHoSo;

  @ManyToOne(() => TblDmTtkqpv, (tblDmTtkqpv) => tblDmTtkqpv.tblDKyXklds)
  @JoinColumn([{ name: 'dkxkld_IdKQPV', referencedColumnName: 'idKqpv' }])
  dkxkldIdKqpv: TblDmTtkqpv;

  @ManyToOne(
    () => TblDmDoiTuongChinhSach,
    (tblDmDoiTuongChinhSach) => tblDmDoiTuongChinhSach.tblDKyXklds,
  )
  @JoinColumn([
    { name: 'dkxklddm_doituongchinhsach', referencedColumnName: 'dtcsId' },
  ])
  dkxklddmDoituongchinhsach: TblDmDoiTuongChinhSach;

  @ManyToOne(() => TblDmQuocGia, (tblDmQuocGia) => tblDmQuocGia.tblDKyXklds)
  @JoinColumn([{ name: 'dkxklddm_quocgia', referencedColumnName: 'maQuocGia' }])
  dkxklddmQuocgia: TblDmQuocGia;
}
