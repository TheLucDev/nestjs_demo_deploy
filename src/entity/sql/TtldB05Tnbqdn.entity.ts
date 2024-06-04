import { Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Index('PK_ttldB05TNBQ', ['id', 'madonvi', 'quy', 'nam'], { unique: true })
@Entity('ttldB05TNBQDN', { schema: 'dbo' })
export class TtldB05Tnbqdn {
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

  @Column('nvarchar', { name: 'Noidung', nullable: true, length: 255 })
  noidung: string | null;

  @Column('numeric', {
    name: 'Solieu',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  solieu: number | null;

  @Column('varchar', { name: 'NamQuy', nullable: true, length: 60 })
  namQuy: string | null;
}
