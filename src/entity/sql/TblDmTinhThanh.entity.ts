import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TblTuyenDung } from './TblTuyenDung.entity';

@Index('PK_tb_tinhthanh', ['tpId'], { unique: true })
@Entity('tblDmTinhThanh', { schema: 'dbo' })
export class TblDmTinhThanh {
  @PrimaryGeneratedColumn({ type: 'int', name: 'tp_id' })
  tpId: number;

  @Column('nvarchar', { name: 'tp_ten', nullable: true, length: 50 })
  tpTen: string | null;

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

  @Column('varchar', { name: 'matinh', nullable: true, length: 2 })
  matinh: string | null;

  @OneToMany(() => TblTuyenDung, (tblTuyenDung) => tblTuyenDung.tdNoilamviec)
  tblTuyenDungs: TblTuyenDung[];
}
