import { Column, Entity, Index, OneToMany, PrimaryColumn } from 'typeorm';
import { TblDKyDtn } from './TblDKyDtn.entity';

@Index('PK_tblDmTrangThaiTrungTuyen', ['id'], { unique: true })
@Entity('tblDmTrangThaiTrungTuyen', { schema: 'dbo' })
export class TblDmTrangThaiTrungTuyen {
  @PrimaryColumn('bit', { primary: true, name: 'Id' })
  id: boolean;

  @Column('nvarchar', { name: 'TrangThaiTrungTuyen', length: 16 })
  trangThaiTrungTuyen: string;

  @OneToMany(() => TblDKyDtn, (tblDKyDtn) => tblDKyDtn.idTrangThaiTrungTuyen)
  tblDKyDtns: TblDKyDtn[];
}
