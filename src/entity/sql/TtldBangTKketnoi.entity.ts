import { Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Index('PK_ttldBangTKketnoi', ['id', 'madonvi', 'quy', 'nam'], { unique: true })
@Entity('ttldBangTKketnoi', { schema: 'dbo' })
export class TtldBangTKketnoi {
  @PrimaryColumn('int', { primary: true, name: 'Id' })
  id: number;

  @Column('varchar', { primary: true, name: 'Madonvi', length: 15 })
  madonvi: string;

  @Column('int', { primary: true, name: 'Quy' })
  quy: number;

  @Column('int', { primary: true, name: 'Nam' })
  nam: number;

  @Column('int', { name: 'DisplayOrder' })
  displayOrder: number;

  @Column('varchar', { name: 'Matk', nullable: true, length: 10 })
  matk: string | null;

  @Column('nvarchar', { name: 'Noidung', nullable: true, length: 50 })
  noidung: string | null;

  @Column('numeric', {
    name: 'Solieucung',
    nullable: true,
    precision: 18,
    scale: 0,
  })
  solieucung: number | null;

  @Column('numeric', {
    name: 'Solieucau',
    nullable: true,
    precision: 18,
    scale: 0,
  })
  solieucau: number | null;

  @Column('numeric', {
    name: 'SoThanhcong',
    nullable: true,
    precision: 18,
    scale: 0,
  })
  soThanhcong: number | null;

  @Column('varchar', { name: 'NamQuy', nullable: true, length: 60 })
  namQuy: string | null;
}
