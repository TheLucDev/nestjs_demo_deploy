import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TblDKyXkld } from './TblDKyXkld.entity';
import { TblHoSoUngVien } from './TblHoSoUngVien.entity';

@Index('PK_tblDmTTHonNhan', ['idTtHonNhan'], { unique: true })
@Entity('tblDmTTHonNhan', { schema: 'dbo' })
export class TblDmTtHonNhan {
  @Column('bit', { primary: true, name: 'IdTTHonNhan' })
  idTtHonNhan: boolean;

  @Column('nvarchar', { name: 'TTHonNhan', length: 14 })
  ttHonNhan: string;

  @OneToMany(() => TblDKyXkld, (tblDKyXkld) => tblDKyXkld.dkxkldHonnhan)
  tblDKyXklds: TblDKyXkld[];

  @OneToMany(() => TblHoSoUngVien, (tblHoSoUngVien) => tblHoSoUngVien.uvHonnhan)
  tblHoSoUngViens: TblHoSoUngVien[];
}
