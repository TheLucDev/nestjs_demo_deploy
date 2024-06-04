import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TblDKySgd } from './TblDKySgd.entity';

@Index('PK_tb_dm_phiengiaodichvieclam', ['id'], { unique: true })
@Entity('tblDmPhienGiaoDich', { schema: 'dbo' })
export class TblDmPhienGiaoDich {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('nvarchar', { name: 'pgd_ten', length: 300 })
  pgdTen: string;

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

  @OneToMany(() => TblDKySgd, (tblDKySgd) => tblDKySgd.dksgddmPhiengiaodichlan)
  tblDKySgds: TblDKySgd[];
}
