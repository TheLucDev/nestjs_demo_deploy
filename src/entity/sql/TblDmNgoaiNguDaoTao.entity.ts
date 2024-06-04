import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TblDKyXkld } from './TblDKyXkld.entity';

@Index('PK_tb_dm_ngoaingudaotao', ['maNgoaingudaotao'], { unique: true })
@Entity('tblDmNgoaiNguDaoTao', { schema: 'dbo' })
export class TblDmNgoaiNguDaoTao {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ma_ngoaingudaotao' })
  maNgoaingudaotao: number;

  @Column('nvarchar', { name: 'ten_ngoaingudaotao', length: 50 })
  tenNgoaingudaotao: string;

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

  @OneToMany(
    () => TblDKyXkld,
    (tblDKyXkld) => tblDKyXkld.dkxklddmNgoaingudaotao,
  )
  tblDKyXklds: TblDKyXkld[];
}
