import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TblDmNgheDaoTao } from './TblDmNgheDaoTao.entity';
import { TblDmGioiTinh } from './TblDmGioiTinh.entity';
import { TblDmNganhHoc } from './TblDmNganhHoc.entity';
import { TblDmTrangThai } from './TblDmTrangThai.entity';
import { TblDmTrangThaiTrungTuyen } from './TblDmTrangThaiTrungTuyen.entity';
import { TblDmTrinhDoHocVanDtn } from './TblDmTrinhDoHocVanDtn.entity';
import { TblDmDoiTuongChinhSach } from './TblDmDoiTuongChinhSach.entity';

@Index('PK_tb_dkdtn', ['id'], { unique: true })
@Entity('tblDKyDTN', { schema: 'dbo' })
export class TblDKyDtn {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('varchar', { name: 'dkdtn_username', length: 50 })
  dkdtnUsername: string;

  @Column('varchar', { name: 'dkdtn_email', nullable: true, length: 50 })
  dkdtnEmail: string | null;

  @Column('varchar', { name: 'dkdtn_password', nullable: true, length: 50 })
  dkdtnPassword: string | null;

  @Column('nvarchar', { name: 'dkdtn_hoten', nullable: true, length: 250 })
  dkdtnHoten: string | null;

  @Column('nvarchar', { name: 'ImagePath', nullable: true, length: 250 })
  imagePath: string | null;

  @Column('date', { name: 'dkdtn_ngaysinh', default: () => 'getdate()' })
  dkdtnNgaysinh: Date;

  @Column('nvarchar', { name: 'dkdtn_chuyenmon', nullable: true, length: 50 })
  dkdtnChuyenmon: string | null;

  @Column('varchar', { name: 'dkdtn_dienthoai', nullable: true, length: 25 })
  dkdtnDienthoai: string | null;

  @Column('nvarchar', { name: 'dkdtn_dantoc', nullable: true, length: 50 })
  dkdtnDantoc: string | null;

  @Column('nvarchar', { name: 'dkdtn_tongiao', nullable: true, length: 50 })
  dkdtnTongiao: string | null;

  @Column('nvarchar', {
    name: 'dkdtn_hokhauthuongtru',
    nullable: true,
    length: 200,
  })
  dkdtnHokhauthuongtru: string | null;

  @Column('nvarchar', { name: 'dkdtn_ghichu', nullable: true, length: 4000 })
  dkdtnGhichu: string | null;

  @Column('bit', { name: 'dkdtnht_telephone', default: () => '(0)' })
  dkdtnhtTelephone: boolean;

  @Column('bit', { name: 'dkdtnht_email', default: () => '(0)' })
  dkdtnhtEmail: boolean;

  @Column('bit', { name: 'dkdtnht_address', default: () => '(0)' })
  dkdtnhtAddress: boolean;

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

  @Column('nvarchar', { name: 'SoNhaDuong', nullable: true, length: 50 })
  soNhaDuong: string | null;

  @Column('varchar', { name: 'MaTinh', nullable: true, length: 2 })
  maTinh: string | null;

  @Column('varchar', { name: 'MaHuyen', nullable: true, length: 5 })
  maHuyen: string | null;

  @Column('varchar', { name: 'MaXa', nullable: true, length: 8 })
  maXa: string | null;

  @Column('int', { name: 'IdDaoTao', nullable: true })
  idDaoTao: number | null;

  @Column('nvarchar', { name: 'NguyenQuan', nullable: true, length: 50 })
  nguyenQuan: string | null;

  @Column('varchar', { name: 'IdTDNgoaiNgu', nullable: true, length: 5 })
  idTdNgoaiNgu: string | null;

  @Column('nvarchar', { name: 'ChieuCao', nullable: true, length: 10 })
  chieuCao: string | null;

  @Column('nvarchar', { name: 'CanNang', nullable: true, length: 10 })
  canNang: string | null;

  @Column('nvarchar', { name: 'MatTrai', nullable: true, length: 10 })
  matTrai: string | null;

  @Column('nvarchar', { name: 'MatPhai', nullable: true, length: 10 })
  matPhai: string | null;

  @Column('nvarchar', { name: 'MuMau', nullable: true, length: 50 })
  muMau: string | null;

  @Column('nvarchar', { name: 'HoTenCha', nullable: true, length: 50 })
  hoTenCha: string | null;

  @Column('nvarchar', { name: 'HoTenMe', nullable: true, length: 50 })
  hoTenMe: string | null;

  @Column('nvarchar', { name: 'DiaChiBaoTin', nullable: true, length: 200 })
  diaChiBaoTin: string | null;

  @Column('nvarchar', { name: 'DienThoaiBaoTin', nullable: true, length: 50 })
  dienThoaiBaoTin: string | null;

  @Column('nvarchar', { name: 'TinNhanBaoTin', nullable: true, length: 200 })
  tinNhanBaoTin: string | null;

  @Column('varchar', { name: 'SoHoChieu', nullable: true, length: 50 })
  soHoChieu: string | null;

  @Column('bit', { name: 'DocThan', nullable: true })
  docThan: boolean | null;

  @Column('bit', { name: 'DaCoGiaDinh', nullable: true })
  daCoGiaDinh: boolean | null;

  @Column('bit', { name: 'DaLyDi', nullable: true })
  daLyDi: boolean | null;

  @Column('int', { name: 'SoCon', nullable: true })
  soCon: number | null;

  @Column('nvarchar', {
    name: 'DaLamViecONuocNgoai',
    nullable: true,
    length: 200,
  })
  daLamViecONuocNgoai: string | null;

  @Column('bit', { name: 'CoBHTN', nullable: true, default: () => '(0)' })
  coBhtn: boolean | null;

  @ManyToOne(
    () => TblDmNgheDaoTao,
    (tblDmNgheDaoTao) => tblDmNgheDaoTao.tblDKyDtns,
  )
  @JoinColumn([{ name: 'dkdtndm_nghedaotao', referencedColumnName: 'id' }])
  dkdtndmNghedaotao: TblDmNgheDaoTao;

  @ManyToOne(
    () => TblDmNgheDaoTao,
    (tblDmNgheDaoTao) => tblDmNgheDaoTao.tblDKyDtns2,
  )
  @JoinColumn([{ name: 'dkdtndm_nganhcaodang', referencedColumnName: 'id' }])
  dkdtndmNganhcaodang: TblDmNgheDaoTao;

  @ManyToOne(() => TblDmGioiTinh, (tblDmGioiTinh) => tblDmGioiTinh.tblDKyDtns)
  @JoinColumn([{ name: 'dkdtn_gioitinh', referencedColumnName: 'idGioiTinh' }])
  dkdtnGioitinh: TblDmGioiTinh;

  @ManyToOne(() => TblDmNganhHoc, (tblDmNganhHoc) => tblDmNganhHoc.tblDKyDtns)
  @JoinColumn([{ name: 'dkdtndm_truong', referencedColumnName: 'id' }])
  dkdtndmTruong: TblDmNganhHoc;

  @ManyToOne(
    () => TblDmNgheDaoTao,
    (tblDmNgheDaoTao) => tblDmNgheDaoTao.tblDKyDtns3,
  )
  @JoinColumn([{ name: 'dkdtndm_nganhtrungcap', referencedColumnName: 'id' }])
  dkdtndmNganhtrungcap: TblDmNgheDaoTao;

  @ManyToOne(
    () => TblDmTrangThai,
    (tblDmTrangThai) => tblDmTrangThai.tblDKyDtns,
  )
  @JoinColumn([{ name: 'dkdtn_duyet', referencedColumnName: 'idTrangThai' }])
  dkdtnDuyet: TblDmTrangThai;

  @ManyToOne(
    () => TblDmTrangThaiTrungTuyen,
    (tblDmTrangThaiTrungTuyen) => tblDmTrangThaiTrungTuyen.tblDKyDtns,
  )
  @JoinColumn([{ name: 'IdTrangThaiTrungTuyen', referencedColumnName: 'id' }])
  idTrangThaiTrungTuyen: TblDmTrangThaiTrungTuyen;

  @ManyToOne(
    () => TblDmTrinhDoHocVanDtn,
    (tblDmTrinhDoHocVanDtn) => tblDmTrinhDoHocVanDtn.tblDKyDtns,
  )
  @JoinColumn([
    { name: 'dkdtndm_trinhdohocvan_dtn', referencedColumnName: 'hocvanId' },
  ])
  dkdtndmTrinhdohocvanDtn: TblDmTrinhDoHocVanDtn;

  @ManyToOne(
    () => TblDmDoiTuongChinhSach,
    (tblDmDoiTuongChinhSach) => tblDmDoiTuongChinhSach.tblDKyDtns,
    { onUpdate: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'dkdtndm_doituongchinhsach', referencedColumnName: 'dtcsId' },
  ])
  dkdtndmDoituongchinhsach: TblDmDoiTuongChinhSach;
}
