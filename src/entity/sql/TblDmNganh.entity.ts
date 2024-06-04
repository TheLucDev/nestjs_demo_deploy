import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TblHoSoUngVien } from './TblHoSoUngVien.entity';
import { TblTuyenDung } from './TblTuyenDung.entity';

@Index('PK_tb_dm_nganh', ['nganhId'], { unique: true })
@Entity('tblDmNganh', { schema: 'dbo' })
export class TblDmNganh {
  @Column('varchar', { name: 'manhom', nullable: true, length: 4 })
  manhom: string | null;

  @PrimaryGeneratedColumn({ type: 'int', name: 'nganh_id' })
  nganhId: number;

  @Column('nvarchar', { name: 'nganh_ten', nullable: true, length: 200 })
  nganhTen: string | null;

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
    (tblHoSoUngVien) => tblHoSoUngVien.uvnvNganhnghe,
  )
  tblHoSoUngViens: TblHoSoUngVien[];

  @OneToMany(() => TblTuyenDung, (tblTuyenDung) => tblTuyenDung.tdNganhnghe)
  tblTuyenDungs: TblTuyenDung[];
}
