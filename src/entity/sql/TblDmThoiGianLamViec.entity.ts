import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TblHoSoUngVien } from './TblHoSoUngVien.entity';
import { TblTuyenDung } from './TblTuyenDung.entity';

@Index('PK_tb_dm_thoigianlamviec', ['maThoigian'], { unique: true })
@Entity('tblDmThoiGianLamViec', { schema: 'dbo' })
export class TblDmThoiGianLamViec {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ma_thoigian' })
  maThoigian: number;

  @Column('nvarchar', { name: 'ten_thoigian', length: 50 })
  tenThoigian: string;

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
    (tblHoSoUngVien) => tblHoSoUngVien.uvnvThoigian,
  )
  tblHoSoUngViens: TblHoSoUngVien[];

  @OneToMany(
    () => TblTuyenDung,
    (tblTuyenDung) => tblTuyenDung.tdThoigianlamviec,
  )
  tblTuyenDungs: TblTuyenDung[];
}
