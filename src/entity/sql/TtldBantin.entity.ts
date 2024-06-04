import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TtldBantinchitiet } from './TtldBantinchitiet.entity';

@Index('PK_ttldBantin', ['idBantin'], { unique: true })
@Entity('ttldBantin', { schema: 'dbo' })
export class TtldBantin {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'IdBantin' })
  idBantin: string;

  @Column('varchar', { name: 'Madonvi', length: 15 })
  madonvi: string;

  @Column('int', { name: 'Quy' })
  quy: number;

  @Column('int', { name: 'Nam' })
  nam: number;

  @Column('int', { name: 'DisplayOrder' })
  displayOrder: number;

  @Column('nvarchar', { name: 'Tieude', nullable: true, length: 255 })
  tieude: string | null;

  @Column('nvarchar', { name: 'Trichdan', nullable: true, length: 1000 })
  trichdan: string | null;

  @Column('nvarchar', { name: 'Lienhe', nullable: true, length: 500 })
  lienhe: string | null;

  @Column('nvarchar', { name: 'Noidung', nullable: true })
  noidung: string | null;

  @Column('ntext', { name: 'HtmlCode', nullable: true })
  htmlCode: string | null;

  @Column('nvarchar', { name: 'FileLink', nullable: true, length: 500 })
  fileLink: string | null;

  @Column('bit', { name: 'Status', default: () => '(0)' })
  status: boolean;

  @Column('bit', { name: 'CheckByBanBT', nullable: true })
  checkByBanBt: boolean | null;

  @Column('varchar', { name: 'MaTBBT', nullable: true, length: 15 })
  maTbbt: string | null;

  @Column('bit', { name: 'CheckByVT', nullable: true })
  checkByVt: boolean | null;

  @Column('varchar', { name: 'MaVT', nullable: true, length: 15 })
  maVt: string | null;

  @Column('bit', { name: 'CheckByTP', nullable: true })
  checkByTp: boolean | null;

  @Column('varchar', { name: 'MaTP', nullable: true, length: 15 })
  maTp: string | null;

  @Column('bit', { name: 'CheckByTBT', nullable: true })
  checkByTbt: boolean | null;

  @Column('varchar', { name: 'MaTBT', nullable: true, length: 15 })
  maTbt: string | null;

  @Column('bit', { name: 'Phathanh', nullable: true })
  phathanh: boolean | null;

  @Column('datetime', { name: 'CreatedDate', default: () => 'getdate()' })
  createdDate: Date;

  @Column('varchar', {
    name: 'CreatedBy',
    length: 50,
    default: () => "'SYSTEM'",
  })
  createdBy: string;

  @Column('datetime', { name: 'ModifiredDate', default: () => 'getdate()' })
  modifiredDate: Date;

  @Column('varchar', {
    name: 'ModifiredBy',
    length: 50,
    default: () => "'SYSTEM'",
  })
  modifiredBy: string;

  @Column('varchar', { name: 'NamQuy', nullable: true, length: 60 })
  namQuy: string | null;

  @OneToMany(
    () => TtldBantinchitiet,
    (ttldBantinchitiet) => ttldBantinchitiet.idBantin,
  )
  ttldBantinchitiets: TtldBantinchitiet[];
}
