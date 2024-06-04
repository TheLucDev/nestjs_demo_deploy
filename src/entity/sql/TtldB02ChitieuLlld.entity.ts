import { Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Index('PK_ttldB02LLLD', ['id', 'madonvi', 'quy', 'nam'], { unique: true })
@Entity('ttldB02ChitieuLLLD', { schema: 'dbo' })
export class TtldB02ChitieuLlld {
  @PrimaryColumn('int', { primary: true, name: 'Id' })
  id: number;

  @Column('varchar', { primary: true, name: 'Madonvi', length: 15 })
  madonvi: string;

  @Column('int', { primary: true, name: 'Quy' })
  quy: number;

  @Column('int', { primary: true, name: 'Nam' })
  nam: number;

  @Column('varchar', { name: 'Nhom', nullable: true, length: 4 })
  nhom: string | null;

  @Column('int', { name: 'DisplayOrder' })
  displayOrder: number;

  @Column('varchar', { name: 'Matk', nullable: true, length: 10 })
  matk: string | null;

  @Column('nvarchar', { name: 'Noidung', nullable: true, length: 50 })
  noidung: string | null;

  @Column('numeric', {
    name: 'Solieu',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  solieu: number | null;

  @Column('bit', { name: 'Status', nullable: true })
  status: boolean | null;

  @Column('varchar', { name: 'NamQuy', nullable: true, length: 60 })
  namQuy: string | null;
}
