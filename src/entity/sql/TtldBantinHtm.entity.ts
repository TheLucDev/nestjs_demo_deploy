import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TtldBantinHtMchitiet } from './TtldBantinHtMchitiet.entity';

@Index('PK_ttldBantinHTM', ['idbantin'], { unique: true })
@Entity('ttldBantinHTM', { schema: 'dbo' })
export class TtldBantinHtm {
  @PrimaryGeneratedColumn({ type: 'int', name: 'Idbantin' })
  idbantin: number;

  @Column('nvarchar', { name: 'Ten', nullable: true, length: 255 })
  ten: string | null;

  @Column('nvarchar', { name: 'Noidung', nullable: true, length: 500 })
  noidung: string | null;

  @Column('int', { name: 'Quy', nullable: true })
  quy: number | null;

  @Column('int', { name: 'Nam', nullable: true })
  nam: number | null;

  @Column('nvarchar', { name: 'Nguon', nullable: true, length: 1000 })
  nguon: string | null;

  @Column('nvarchar', { name: 'Banbientap', nullable: true, length: 255 })
  banbientap: string | null;

  @Column('varchar', { name: 'Dienthoai', nullable: true, length: 30 })
  dienthoai: string | null;

  @Column('varchar', { name: 'Email', nullable: true, length: 255 })
  email: string | null;

  @Column('varchar', { name: 'Website', nullable: true, length: 255 })
  website: string | null;

  @OneToMany(
    () => TtldBantinHtMchitiet,
    (ttldBantinHtMchitiet) => ttldBantinHtMchitiet.idBantin2,
  )
  ttldBantinHtMchitiets: TtldBantinHtMchitiet[];
}
