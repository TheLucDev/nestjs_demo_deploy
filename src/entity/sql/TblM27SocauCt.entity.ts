import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { TblM27Socau } from './TblM27Socau.entity';

@Index('PK_tblM27SocauCT', ['idcau27', 'id'], { unique: true })
@Entity('tblM27SocauCT', { schema: 'dbo' })
export class TblM27SocauCt {
  @PrimaryColumn('int', { primary: true, name: 'Idcau27' })
  idcau27: number;

  @Column('int', { primary: true, name: 'Id' })
  id: number;

  @Column('datetime', { name: 'Ngay', default: () => 'getdate()' })
  ngay: Date;

  @Column('int', { name: 'GroupId' })
  groupId: number;

  @Column('varchar', { name: 'thutu', nullable: true, length: 10 })
  thutu: string | null;

  @Column('varchar', { name: 'Address', nullable: true, length: 10 })
  address: string | null;

  @Column('varchar', { name: 'Matk', nullable: true, length: 20 })
  matk: string | null;

  @Column('nvarchar', { name: 'Chitieu', length: 255 })
  chitieu: string;

  @Column('nvarchar', { name: 'Noidung', nullable: true, length: 255 })
  noidung: string | null;

  @Column('bit', { name: 'Header' })
  header: boolean;

  @Column('bit', { name: 'Status' })
  status: boolean;

  @ManyToOne(() => TblM27Socau, (tblM27Socau) => tblM27Socau.tblM27SocauCts, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'Idcau27', referencedColumnName: 'idcau27' }])
  idcau: TblM27Socau;
}
