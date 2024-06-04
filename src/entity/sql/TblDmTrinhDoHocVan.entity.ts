import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TblHoSoUngVien } from './TblHoSoUngVien.entity';
import { TblTuyenDung } from './TblTuyenDung.entity';

@Index('PK_tb_dm_trinhdohocvan', ['hocvanId'], { unique: true })
@Entity('tblDmTrinhDoHocVan', { schema: 'dbo' })
export class TblDmTrinhDoHocVan {
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

  @Column('int', { name: 'IdCaphoc', nullable: true })
  idCaphoc: number | null;

  @Column('varchar', { name: 'Phanloai', nullable: true, length: 4 })
  phanloai: string | null;

  @OneToMany(
    () => TblHoSoUngVien,
    (tblHoSoUngVien) => tblHoSoUngVien.uvcmTrinhdo,
  )
  tblHoSoUngViens: TblHoSoUngVien[];

  @OneToMany(() => TblTuyenDung, (tblTuyenDung) => tblTuyenDung.tdYeuCauHocVan)
  tblTuyenDungs: TblTuyenDung[];
}
