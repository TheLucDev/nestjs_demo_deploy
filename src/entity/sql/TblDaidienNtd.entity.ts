import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TblNhaTuyenDung } from './TblNhaTuyenDung.entity';

@Index('PK_tblDaidienNTD', ['idLienhe'], { unique: true })
@Entity('tblDaidienNTD', { schema: 'dbo' })
export class TblDaidienNtd {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'IdLienhe' })
  idLienhe: string;

  @Column('bigint', { name: 'Iduv' })
  iduv: string;

  @Column('nvarchar', { name: 'Hoten', length: 50 })
  hoten: string;

  @Column('int', { name: 'IdGioitinh' })
  idGioitinh: number;

  @Column('int', { name: 'Idchucvu' })
  idchucvu: number;

  @Column('nvarchar', { name: 'Diachi', nullable: true, length: 255 })
  diachi: string | null;

  @Column('nvarchar', { name: 'Dienthoai', nullable: true, length: 50 })
  dienthoai: string | null;

  @Column('nvarchar', { name: 'Email', length: 50 })
  email: string;

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

  @Column('bit', { name: 'Status', default: () => '(1)' })
  status: boolean;

  @ManyToOne(
    () => TblNhaTuyenDung,
    (tblNhaTuyenDung) => tblNhaTuyenDung.tblDaidienNtds,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'IdDoanhNghiep', referencedColumnName: 'idDoanhNghiep' },
  ])
  idDoanhNghiep: TblNhaTuyenDung;
}
