import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('tmpReportBiasocung', { schema: 'dbo' })
export class TmpReportBiasocung {
  @PrimaryColumn('int', { name: 'Idm27' })
  idm27: number;

  @Column('datetime', { name: 'Ngay' })
  ngay: Date;

  @Column('int', { name: 'Nam' })
  nam: number;

  @Column('nvarchar', { name: 'Quyenso', nullable: true, length: 50 })
  quyenso: string | null;

  @Column('nvarchar', { name: 'Ten', length: 255 })
  ten: string;

  @Column('nvarchar', { name: 'tentinh', nullable: true, length: 50 })
  tentinh: string | null;

  @Column('nvarchar', { name: 'tenhuyen', nullable: true, length: 50 })
  tenhuyen: string | null;

  @Column('nvarchar', { name: 'tenxa', nullable: true, length: 50 })
  tenxa: string | null;

  @Column('nvarchar', { name: 'tenthon', length: 50 })
  tenthon: string;

  @Column('varchar', { name: 'Matinh', nullable: true, length: 2 })
  matinh: string | null;

  @Column('varchar', { name: 'Mahuyen', nullable: true, length: 5 })
  mahuyen: string | null;

  @Column('varchar', { name: 'Maxa', nullable: true, length: 8 })
  maxa: string | null;

  @Column('varchar', { name: 'Mathon', nullable: true, length: 12 })
  mathon: string | null;

  @Column('int', { name: 'kind' })
  kind: number;

  @Column('nvarchar', { name: 'hoten', length: 51 })
  hoten: string;

  @Column('nvarchar', { name: 'diachi', nullable: true, length: 255 })
  diachi: string | null;

  @Column('varchar', { name: 'dienthoai', nullable: true, length: 30 })
  dienthoai: string | null;

  @Column('varchar', { name: 'nam1', nullable: true, length: 30 })
  nam1: string | null;

  @Column('varchar', { name: 'nam2', nullable: true, length: 30 })
  nam2: string | null;

  @Column('varchar', { name: 'nam3', nullable: true, length: 30 })
  nam3: string | null;

  @Column('nvarchar', { name: 'ht1', length: 51 })
  ht1: string;

  @Column('nvarchar', { name: 'ht2', length: 51 })
  ht2: string;

  @Column('nvarchar', { name: 'ht3', length: 51 })
  ht3: string;

  @Column('nvarchar', { name: 'dc1', nullable: true, length: 255 })
  dc1: string | null;

  @Column('nvarchar', { name: 'dc2', nullable: true, length: 255 })
  dc2: string | null;

  @Column('nvarchar', { name: 'dc3', nullable: true, length: 255 })
  dc3: string | null;

  @Column('varchar', { name: 'tel1', nullable: true, length: 30 })
  tel1: string | null;

  @Column('varchar', { name: 'tel2', nullable: true, length: 30 })
  tel2: string | null;

  @Column('varchar', { name: 'tel3', nullable: true, length: 30 })
  tel3: string | null;

  @Column('varchar', { name: 't1', nullable: true, length: 1 })
  t1: string | null;

  @Column('varchar', { name: 't2', nullable: true, length: 1 })
  t2: string | null;

  @Column('varchar', { name: 'h1', nullable: true, length: 1 })
  h1: string | null;

  @Column('varchar', { name: 'h2', nullable: true, length: 1 })
  h2: string | null;

  @Column('varchar', { name: 'h3', nullable: true, length: 1 })
  h3: string | null;

  @Column('varchar', { name: 'x1', nullable: true, length: 1 })
  x1: string | null;

  @Column('varchar', { name: 'x2', nullable: true, length: 1 })
  x2: string | null;

  @Column('varchar', { name: 'x3', nullable: true, length: 1 })
  x3: string | null;

  @Column('varchar', { name: 'x4', nullable: true, length: 1 })
  x4: string | null;

  @Column('varchar', { name: 'x5', nullable: true, length: 1 })
  x5: string | null;
}
