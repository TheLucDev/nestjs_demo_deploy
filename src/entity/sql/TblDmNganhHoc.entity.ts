import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TblDKyDtn } from './TblDKyDtn.entity';

@Index('PK_tb_dm_nganhcaodang', ['id'], { unique: true })
@Entity('tblDmNganhHoc', { schema: 'dbo' })
export class TblDmNganhHoc {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('nvarchar', { name: 'nganhhoc_ten', length: 300 })
  nganhhocTen: string;

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

  @OneToMany(() => TblDKyDtn, (tblDKyDtn) => tblDKyDtn.dkdtndmTruong)
  tblDKyDtns: TblDKyDtn[];
}
