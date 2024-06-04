import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TblDmHogiadinh } from './TblDmHogiadinh.entity';

@Index('PK_tblDmThanhvienGD', ['id'], { unique: true })
@Entity('tblDmThanhvienGD', { schema: 'dbo' })
export class TblDmThanhvienGd {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'Id' })
  id: string;

  @Column('datetime', { name: 'NgayGhiso' })
  ngayGhiso: Date;

  @Column('bigint', { name: 'Iduv', nullable: true })
  iduv: string | null;

  @Column('varchar', { name: 'Code', length: 12 })
  code: string;

  @Column('nvarchar', { name: 'Hoten', length: 50 })
  hoten: string;

  @Column('datetime', { name: 'Ngaysinh' })
  ngaysinh: Date;

  @Column('varchar', { name: 'SoCCCD', nullable: true, length: 20 })
  soCccd: string | null;

  @Column('datetime', { name: 'Ngaycap', nullable: true })
  ngaycap: Date | null;

  @Column('varchar', { name: 'Masothue', nullable: true, length: 20 })
  masothue: string | null;

  @Column('nvarchar', { name: 'Diachi', nullable: true, length: 255 })
  diachi: string | null;

  @Column('int', { name: 'IdDantoc' })
  idDantoc: number;

  @Column('int', { name: 'IdTongiao', nullable: true })
  idTongiao: number | null;

  @Column('int', { name: 'IdGioitinh' })
  idGioitinh: number;

  @Column('int', { name: 'IdQuanhe' })
  idQuanhe: number;

  @Column('int', { name: 'Cao', nullable: true })
  cao: number | null;

  @Column('int', { name: 'Nang', nullable: true })
  nang: number | null;

  @Column('bit', { name: 'chkTTdihoc', default: () => '(1)' })
  chkTTdihoc: boolean;

  @Column('int', { name: 'IdCaphoc', nullable: true })
  idCaphoc: number | null;

  @Column('int', { name: 'IdGDPT', nullable: true })
  idGdpt: number | null;

  @Column('int', { name: 'IdTdHocvan', nullable: true })
  idTdHocvan: number | null;

  @Column('varchar', { name: 'IdBachoc', nullable: true, length: 4 })
  idBachoc: string | null;

  @Column('int', { name: 'Idchuyenmon', nullable: true })
  idchuyenmon: number | null;

  @Column('bit', { name: 'chkBHYT', default: () => '(1)' })
  chkBhyt: boolean;

  @Column('bit', { name: 'chkInternet', default: () => '(1)' })
  chkInternet: boolean;

  @Column('int', { name: 'IdDoituong', nullable: true })
  idDoituong: number | null;

  @Column('int', { name: 'IdSatusVieclam', nullable: true })
  idSatusVieclam: number | null;

  @Column('int', { name: 'IdLoaiVieclam', nullable: true })
  idLoaiVieclam: number | null;

  @Column('bit', { name: 'chkHDLD', default: () => '(1)' })
  chkHdld: boolean;

  @Column('int', { name: 'IdLamconganluong', nullable: true })
  idLamconganluong: number | null;

  @Column('int', { name: 'IdHuongtrocap', nullable: true })
  idHuongtrocap: number | null;

  @Column('bit', { name: 'chkbenhHN', default: () => '(1)' })
  chkbenhHn: boolean;

  @Column('nvarchar', { name: 'Congviecdanglam', nullable: true, length: 255 })
  congviecdanglam: string | null;

  @Column('nvarchar', { name: 'Tencoquan', nullable: true, length: 255 })
  tencoquan: string | null;

  @Column('varchar', { name: 'IdNKT', nullable: true, length: 4 })
  idNkt: string | null;

  @Column('int', { name: 'IdVithevieclam', nullable: true })
  idVithevieclam: number | null;

  @Column('varchar', { name: 'IdLoaihinhDN', nullable: true, length: 3 })
  idLoaihinhDn: string | null;

  @Column('int', { name: 'IdLoaithatnghiep', nullable: true })
  idLoaithatnghiep: number | null;

  @Column('int', { name: 'IdTGthatnghiep', nullable: true })
  idTGthatnghiep: number | null;

  @Column('bit', { name: 'chkKhongthamgia', default: () => '(1)' })
  chkKhongthamgia: boolean;

  @Column('nvarchar', { name: 'Nguyennhan', nullable: true, length: 255 })
  nguyennhan: string | null;

  @Column('nvarchar', { name: 'Ghichu', nullable: true, length: 255 })
  ghichu: string | null;

  @Column('int', { name: 'DisplayOrder', default: () => '(1)' })
  displayOrder: number;

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

  @Column('int', { name: 'IdBiendong', nullable: true })
  idBiendong: number | null;

  @Column('bit', { name: 'Status', default: () => '(1)' })
  status: boolean;

  @Column('varchar', { name: 'TagName', nullable: true, length: 4 })
  tagName: string | null;

  @ManyToOne(
    () => TblDmHogiadinh,
    (tblDmHogiadinh) => tblDmHogiadinh.tblDmThanhvienGds,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'Maho', referencedColumnName: 'maho' }])
  maho: TblDmHogiadinh;
}
