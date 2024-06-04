import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TblDKyDtn } from './TblDKyDtn.entity';
import { TblDKyXkld } from './TblDKyXkld.entity';
import { TblHoSoUngVien } from './TblHoSoUngVien.entity';

@Index('PK_tb_dm_doituongchinhsach', ['dtcsId'], { unique: true })
@Entity('tblDmDoiTuongChinhSach', { schema: 'dbo' })
export class TblDmDoiTuongChinhSach {
  @PrimaryGeneratedColumn({ type: 'int', name: 'dtcs_id' })
  dtcsId: number;

  @Column('nvarchar', { name: 'dtcs_ten', nullable: true, length: 50 })
  dtcsTen: string | null;

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

  @OneToMany(() => TblDKyDtn, (tblDKyDtn) => tblDKyDtn.dkdtndmDoituongchinhsach)
  tblDKyDtns: TblDKyDtn[];

  @OneToMany(
    () => TblDKyXkld,
    (tblDKyXkld) => tblDKyXkld.dkxklddmDoituongchinhsach,
  )
  tblDKyXklds: TblDKyXkld[];

  @OneToMany(
    () => TblHoSoUngVien,
    (tblHoSoUngVien) => tblHoSoUngVien.uvDoituongchinhsach,
  )
  tblHoSoUngViens: TblHoSoUngVien[];
}
