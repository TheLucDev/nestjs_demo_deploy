import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TblHoSoUngVien } from './TblHoSoUngVien.entity';

@Index('PK_tb_dm_chucdanh', ['maChucDanh'], { unique: true })
@Entity('tblDmChucDanh', { schema: 'dbo' })
export class TblDmChucDanh {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ma_chuc_danh' })
  maChucDanh: number;

  @Column('nvarchar', { name: 'ten_chuc_danh', length: 100 })
  tenChucDanh: string;

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
    (tblHoSoUngVien) => tblHoSoUngVien.uvnvVitrimongmuon,
  )
  tblHoSoUngViens: TblHoSoUngVien[];
}
