import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TblM27Bangke } from './TblM27Bangke.entity';

@Index('PK_tblM27Socung', ['idm27'], { unique: true })
@Entity('tblM27Socung', { schema: 'dbo' })
export class TblM27Socung {
  @PrimaryGeneratedColumn({ type: 'int', name: 'Idm27' })
  idm27: number;

  @Column('datetime', { name: 'Ngay', default: () => 'getdate()' })
  ngay: Date;

  @Column('nvarchar', { name: 'Ten', length: 255 })
  ten: string;

  @Column('varchar', { name: 'IdDonvi', length: 15 })
  idDonvi: string;

  @Column('nvarchar', { name: 'Quyenso', nullable: true, length: 50 })
  quyenso: string | null;

  @Column('int', { name: 'Nam' })
  nam: number;

  @Column('varchar', { name: 'Manv', nullable: true, length: 15 })
  manv: string | null;

  @Column('varchar', { name: 'Matinh', nullable: true, length: 2 })
  matinh: string | null;

  @Column('varchar', { name: 'Mahuyen', nullable: true, length: 5 })
  mahuyen: string | null;

  @Column('varchar', { name: 'Maxa', nullable: true, length: 8 })
  maxa: string | null;

  @Column('varchar', { name: 'Mathon', nullable: true, length: 12 })
  mathon: string | null;

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

  @OneToMany(() => TblM27Bangke, (tblM27Bangke) => tblM27Bangke.idm)
  tblM27Bangkes: TblM27Bangke[];
}
