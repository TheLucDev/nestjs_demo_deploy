import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TblDKyDtn } from './TblDKyDtn.entity';
import { TblDKyXkld } from './TblDKyXkld.entity';

@Index('PK_tb_dm_trinhdohocvan_dtn', ['hocvanId'], { unique: true })
@Entity('tblDmTrinhDoHocVanDTN', { schema: 'dbo' })
export class TblDmTrinhDoHocVanDtn {
  @PrimaryGeneratedColumn({ type: 'int', name: 'hocvan_id' })
  hocvanId: number;

  @Column('nvarchar', { name: 'hocvan_ten', nullable: true, length: 50 })
  hocvanTen: string | null;

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

  @OneToMany(() => TblDKyDtn, (tblDKyDtn) => tblDKyDtn.dkdtndmTrinhdohocvanDtn)
  tblDKyDtns: TblDKyDtn[];

  @OneToMany(() => TblDKyXkld, (tblDKyXkld) => tblDKyXkld.dkxklddmTrinhdohocvan)
  tblDKyXklds: TblDKyXkld[];
}
