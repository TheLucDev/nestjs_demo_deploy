import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TblM01Plikn } from './TblM01Plikn.entity';

@Index('PK_tblM01PLIND23', ['idphieu'], { unique: true })
@Entity('tblM01PLIND23', { schema: 'dbo' })
export class TblM01Plind23 {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'Idphieu' })
  idphieu: string;

  @Column('bigint', { name: 'IdM02T11', nullable: true, default: () => '(-1)' })
  idM02T11: string | null;

  @Column('datetime', { name: 'Ngaylap', default: () => 'getdate()' })
  ngaylap: Date;

  @Column('varchar', { name: 'Maphieu', length: 20 })
  maphieu: string;

  @Column('bigint', { name: 'Iduv' })
  iduv: string;

  @Column('nvarchar', { name: 'Hoten', length: 255 })
  hoten: string;

  @Column('varchar', { name: 'SoCMND', nullable: true, length: 20 })
  soCmnd: string | null;

  @Column('datetime', {
    name: 'Ngaysinh',
    nullable: true,
    default: () => 'getdate()',
  })
  ngaysinh: Date | null;

  @Column('int', { name: 'IdGioitinh' })
  idGioitinh: number;

  @Column('int', { name: 'IdDantoc', nullable: true })
  idDantoc: number | null;

  @Column('int', { name: 'IdTongiao', nullable: true })
  idTongiao: number | null;

  @Column('varchar', { name: 'MatinhHK', nullable: true, length: 2 })
  matinhHk: string | null;

  @Column('varchar', { name: 'MahuyenHK', nullable: true, length: 5 })
  mahuyenHk: string | null;

  @Column('varchar', { name: 'MaxaHK', nullable: true, length: 8 })
  maxaHk: string | null;

  @Column('nvarchar', { name: 'DiachiHK', nullable: true, length: 255 })
  diachiHk: string | null;

  @Column('varchar', { name: 'MatinhTT', nullable: true, length: 2 })
  matinhTt: string | null;

  @Column('varchar', { name: 'MahuyenTT', nullable: true, length: 5 })
  mahuyenTt: string | null;

  @Column('varchar', { name: 'MaxaTT', nullable: true, length: 8 })
  maxaTt: string | null;

  @Column('nvarchar', { name: 'DiachiTT', nullable: true, length: 255 })
  diachiTt: string | null;

  @Column('nvarchar', { name: 'TenLienhe', nullable: true, length: 50 })
  tenLienhe: string | null;

  @Column('nvarchar', { name: 'Dienthoai', nullable: true, length: 50 })
  dienthoai: string | null;

  @Column('nvarchar', { name: 'Email', nullable: true, length: 255 })
  email: string | null;

  @Column('int', { name: 'IdDoituong', nullable: true })
  idDoituong: number | null;

  @Column('int', { name: 'Idhocvan' })
  idhocvan: number;

  @Column('varchar', { name: 'IdBacHoc', nullable: true, length: 4 })
  idBacHoc: string | null;

  @Column('int', { name: 'IdChuyenmon' })
  idChuyenmon: number;

  @Column('varchar', { name: 'IdBacHocKhac', nullable: true, length: 4 })
  idBacHocKhac: string | null;

  @Column('int', { name: 'IdChuyenmonKhac' })
  idChuyenmonKhac: number;

  @Column('nvarchar', { name: 'Trinhdok1', length: 255 })
  trinhdok1: string;

  @Column('nvarchar', { name: 'Trinhdok2', length: 255 })
  trinhdok2: string;

  @Column('nvarchar', { name: 'Kynangnghe', nullable: true, length: 255 })
  kynangnghe: string | null;

  @Column('int', { name: 'Backynang', nullable: true })
  backynang: number | null;

  @Column('int', { name: 'IdNNDT1', nullable: true })
  idNndt1: number | null;

  @Column('varchar', { name: 'IdTDNN1', nullable: true, length: 5 })
  idTdnn1: string | null;

  @Column('int', { name: 'MucNN1', nullable: true })
  mucNn1: number | null;

  @Column('int', { name: 'IdNNDT2', nullable: true })
  idNndt2: number | null;

  @Column('varchar', { name: 'IdTDNN2', nullable: true, length: 5 })
  idTdnn2: string | null;

  @Column('int', { name: 'MucNN2', nullable: true })
  mucNn2: number | null;

  @Column('varchar', { name: 'IdTDTH', nullable: true, length: 5 })
  idTdth: string | null;

  @Column('int', { name: 'MucTH', nullable: true })
  mucTh: number | null;

  @Column('varchar', { name: 'IdKynang', nullable: true, length: 4 })
  idKynang: string | null;

  @Column('bit', { name: 'chkGT', nullable: true })
  chkGt: boolean | null;

  @Column('bit', { name: 'chkNS', nullable: true })
  chkNs: boolean | null;

  @Column('bit', { name: 'chkNHOM', nullable: true })
  chkNhom: boolean | null;

  @Column('bit', { name: 'chkGS', nullable: true })
  chkGs: boolean | null;

  @Column('bit', { name: 'chkKHAC', nullable: true })
  chkKhac: boolean | null;

  @Column('bit', { name: 'chkTTR', nullable: true })
  chkTtr: boolean | null;

  @Column('bit', { name: 'chkTH', nullable: true })
  chkTh: boolean | null;

  @Column('bit', { name: 'chkDL', nullable: true })
  chkDl: boolean | null;

  @Column('bit', { name: 'chkPB', nullable: true })
  chkPb: boolean | null;

  @Column('bit', { name: 'chkQLTG', nullable: true })
  chkQltg: boolean | null;

  @Column('bit', { name: 'chkTU', nullable: true })
  chkTu: boolean | null;

  @Column('bit', { name: 'chkAPL', nullable: true })
  chkApl: boolean | null;

  @Column('nvarchar', { name: 'Kynangkhac', nullable: true, length: 50 })
  kynangkhac: string | null;

  @Column('nvarchar', { name: 'KinhnghiemLV', nullable: true })
  kinhnghiemLv: string | null;

  @Column('bit', { name: 'LVNuocngoai', nullable: true, default: () => '(0)' })
  lvNuocngoai: boolean | null;

  @Column('int', { name: 'IdQuocgia', nullable: true })
  idQuocgia: number | null;

  @Column('nvarchar', { name: 'LVNuocngoaitai', nullable: true, length: 255 })
  lvNuocngoaitai: string | null;

  @Column('bit', { name: 'chkTuvanCS', default: () => '(0)' })
  chkTuvanCs: boolean;

  @Column('bit', { name: 'chkTuvanVL', default: () => '(0)' })
  chkTuvanVl: boolean;

  @Column('bit', { name: 'chkTuvanDT', default: () => '(0)' })
  chkTuvanDt: boolean;

  @Column('bit', { name: 'chkDKy01A', default: () => '(0)' })
  chkDKy01A: boolean;

  @Column('nvarchar', { name: 'DKyKhac', length: 255 })
  dKyKhac: string;

  @Column('int', { name: 'DisplayOrder', default: () => '(0)' })
  displayOrder: number;

  @Column('datetime', { name: 'CreatedDate', default: () => 'getdate()' })
  createdDate: Date;

  @Column('varchar', { name: 'CreatedBy', nullable: true, length: 50 })
  createdBy: string | null;

  @Column('datetime', { name: 'ModifiredDate', default: () => 'getdate()' })
  modifiredDate: Date;

  @Column('nvarchar', { name: 'ModifiredBy', nullable: true, length: 50 })
  modifiredBy: string | null;

  @Column('varchar', { name: 'MahoGD', nullable: true, length: 20 })
  mahoGd: string | null;

  @Column('bit', { name: 'Status', default: () => '(1)' })
  status: boolean;

  @OneToMany(() => TblM01Plikn, (tblM01Plikn) => tblM01Plikn.idphieu2)
  tblM01Plikns: TblM01Plikn[];
}
