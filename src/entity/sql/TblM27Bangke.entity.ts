import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TblM27Socung } from './TblM27Socung.entity';
import { TblM27Chitiet } from './TblM27Chitiet.entity';

@Index('PK_tblM27Bangke', ['idMaho'], { unique: true })
@Entity('tblM27Bangke', { schema: 'dbo' })
export class TblM27Bangke {
  @Column('varchar', { primary: true, name: 'IdMaho', length: 20 })
  idMaho: string;

  @Column('nvarchar', { name: 'Diachi', length: 255 })
  diachi: string;

  @Column('int', { name: 'Sothanhvien' })
  sothanhvien: number;

  @Column('nvarchar', { name: 'Ghichu', length: 255 })
  ghichu: string;

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

  @ManyToOne(() => TblM27Socung, (tblM27Socung) => tblM27Socung.tblM27Bangkes, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'Idm27', referencedColumnName: 'idm27' }])
  idm: TblM27Socung;

  @OneToMany(() => TblM27Chitiet, (tblM27Chitiet) => tblM27Chitiet.idMaho)
  tblM27Chitiets: TblM27Chitiet[];
}
