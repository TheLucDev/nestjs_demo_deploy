import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TblDmHogiadinhInfo } from './TblDmHogiadinhInfo.entity';
import { TblDmThanhvienGd } from './TblDmThanhvienGd.entity';

@Index('PK_tblDmHogiadinh', ['maho'], { unique: true })
@Entity('tblDmHogiadinh', { schema: 'dbo' })
export class TblDmHogiadinh {
  @PrimaryGeneratedColumn({ type: 'int', name: 'Id' })
  id: number;

  @Column('varchar', { name: 'Code', length: 12 })
  code: string;

  @Column('varchar', { primary: true, name: 'Maho', length: 20 })
  maho: string;

  @Column('nvarchar', { name: 'SoHK', nullable: true, length: 20 })
  soHk: string | null;

  @Column('nvarchar', { name: 'SoKT3', nullable: true, length: 20 })
  soKt3: string | null;

  @Column('int', { name: 'Nam', default: () => 'datepart(year,getdate())' })
  nam: number;

  @Column('varchar', { name: 'SoQuyen', nullable: true, length: 10 })
  soQuyen: string | null;

  @Column('bigint', { name: 'Iduv', nullable: true, default: () => '(-1)' })
  iduv: string | null;

  @Column('nvarchar', { name: 'Tenchuho', length: 50 })
  tenchuho: string;

  @Column('varchar', { name: 'Matinh', length: 2 })
  matinh: string;

  @Column('varchar', { name: 'MaHuyen', length: 5 })
  maHuyen: string;

  @Column('varchar', { name: 'MaXa', length: 8 })
  maXa: string;

  @Column('varchar', { name: 'MaThon', nullable: true, length: 12 })
  maThon: string | null;

  @Column('nvarchar', { name: 'Thonbuon', length: 50 })
  thonbuon: string;

  @Column('nvarchar', { name: 'Diachi', length: 255 })
  diachi: string;

  @Column('datetime', { name: 'Ngaysinh', nullable: true })
  ngaysinh: Date | null;

  @Column('int', { name: 'IdGioitinh', nullable: true })
  idGioitinh: number | null;

  @Column('varchar', { name: 'SoCCCD', nullable: true, length: 20 })
  soCccd: string | null;

  @Column('datetime', { name: 'Ngaycap', nullable: true })
  ngaycap: Date | null;

  @Column('varchar', { name: 'Masothue', nullable: true, length: 20 })
  masothue: string | null;

  @Column('int', { name: 'IdDantoc' })
  idDantoc: number;

  @Column('int', { name: 'IdTongiao' })
  idTongiao: number;

  @Column('int', { name: 'IdKhuvuc' })
  idKhuvuc: number;

  @Column('int', { name: 'ZoneID' })
  zoneId: number;

  @Column('int', { name: 'IdPhanloai' })
  idPhanloai: number;

  @Column('int', { name: 'Sothanhvien' })
  sothanhvien: number;

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

  @Column('nvarchar', { name: 'FilePath', nullable: true, length: 255 })
  filePath: string | null;

  @OneToMany(
    () => TblDmHogiadinhInfo,
    (tblDmHogiadinhInfo) => tblDmHogiadinhInfo.maho2,
  )
  tblDmHogiadinhInfos: TblDmHogiadinhInfo[];

  @OneToMany(
    () => TblDmThanhvienGd,
    (tblDmThanhvienGd) => tblDmThanhvienGd.maho,
  )
  tblDmThanhvienGds: TblDmThanhvienGd[];
}
