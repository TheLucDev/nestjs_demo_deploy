import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TblM27SocauCt } from './TblM27SocauCt.entity';

@Index('PK_tblM27Socau', ['idcau27'], { unique: true })
@Entity('tblM27Socau', { schema: 'dbo' })
export class TblM27Socau {
  @PrimaryGeneratedColumn({ type: 'int', name: 'Idcau27' })
  idcau27: number;

  @Column('datetime', { name: 'Ngay', default: () => 'getdate()' })
  ngay: Date;

  @Column('varchar', { name: 'Quyenso', length: 50 })
  quyenso: string;

  @Column('nvarchar', { name: 'Ten', length: 255 })
  ten: string;

  @Column('varchar', { name: 'Matinh', nullable: true, length: 2 })
  matinh: string | null;

  @Column('varchar', { name: 'Mahuyen', nullable: true, length: 5 })
  mahuyen: string | null;

  @Column('varchar', { name: 'Maxa', nullable: true, length: 8 })
  maxa: string | null;

  @Column('bigint', { name: 'IdDoanhNghiep' })
  idDoanhNghiep: string;

  @Column('bigint', { name: 'IdLienhe', nullable: true })
  idLienhe: string | null;

  @Column('int', { name: 'Nam' })
  nam: number;

  @Column('varchar', { name: 'Manv', nullable: true, length: 15 })
  manv: string | null;

  @Column('varchar', { name: 'IdDonvi', nullable: true, length: 15 })
  idDonvi: string | null;

  @Column('nvarchar', { name: 'StartAdress', nullable: true, length: 255 })
  startAdress: string | null;

  @Column('nvarchar', { name: 'EndAdress', nullable: true, length: 255 })
  endAdress: string | null;

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

  @Column('bit', { name: 'Status', default: () => '(1)' })
  status: boolean;

  @OneToMany(() => TblM27SocauCt, (tblM27SocauCt) => tblM27SocauCt.idcau)
  tblM27SocauCts: TblM27SocauCt[];
}
