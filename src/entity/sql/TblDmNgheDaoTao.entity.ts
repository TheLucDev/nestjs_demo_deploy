import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TblDKyDtn } from './TblDKyDtn.entity';

@Index('PK_tb_dm_nghedaotao', ['id'], { unique: true })
@Entity('tblDmNgheDaoTao', { schema: 'dbo' })
export class TblDmNgheDaoTao {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('nvarchar', { name: 'nn_ten', nullable: true, length: 300 })
  nnTen: string | null;

  @Column('varchar', { name: 'bachoc', nullable: true, length: 50 })
  bachoc: string | null;

  @Column('nvarchar', { name: 'Summary', nullable: true, length: 200 })
  summary: string | null;

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

  @OneToMany(() => TblDKyDtn, (tblDKyDtn) => tblDKyDtn.dkdtndmNghedaotao)
  tblDKyDtns: TblDKyDtn[];

  @OneToMany(() => TblDKyDtn, (tblDKyDtn) => tblDKyDtn.dkdtndmNganhcaodang)
  tblDKyDtns2: TblDKyDtn[];

  @OneToMany(() => TblDKyDtn, (tblDKyDtn) => tblDKyDtn.dkdtndmNganhtrungcap)
  tblDKyDtns3: TblDKyDtn[];
}
