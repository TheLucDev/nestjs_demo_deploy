import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TblHoSoUngVien } from './TblHoSoUngVien.entity';

@Index('PK_tblDmDanToc', ['idDt'], { unique: true })
@Entity('tblDmDanToc', { schema: 'dbo' })
export class TblDmDanToc {
  @PrimaryGeneratedColumn({ type: 'int', name: 'IdDT' })
  idDt: number;

  @Column('nvarchar', { name: 'TenDT', length: 50 })
  tenDt: string;

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

  @OneToMany(() => TblHoSoUngVien, (tblHoSoUngVien) => tblHoSoUngVien.idDanToc)
  tblHoSoUngViens: TblHoSoUngVien[];
}
