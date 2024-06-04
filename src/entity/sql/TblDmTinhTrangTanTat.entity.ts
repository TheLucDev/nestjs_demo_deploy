import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TblHoSoUngVien } from './TblHoSoUngVien.entity';

@Index('PK_tb_dm_tinhtrangtantat', ['tantatId'], { unique: true })
@Entity('tblDmTinhTrangTanTat', { schema: 'dbo' })
export class TblDmTinhTrangTanTat {
  @PrimaryGeneratedColumn({ type: 'int', name: 'tantat_id' })
  tantatId: number;

  @Column('nvarchar', { name: 'tantat_ten', length: 50 })
  tantatTen: string;

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
    () => TblHoSoUngVien,
    (tblHoSoUngVien) => tblHoSoUngVien.uvTinhtrangtantat,
  )
  tblHoSoUngViens: TblHoSoUngVien[];
}
