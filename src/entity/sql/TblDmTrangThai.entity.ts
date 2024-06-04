import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TblDKyDtn } from './TblDKyDtn.entity';
import { TblDKySgd } from './TblDKySgd.entity';
import { TblDKyXkld } from './TblDKyXkld.entity';

@Index('PK_tblDmTrangThai', ['idTrangThai'], { unique: true })
@Entity('tblDmTrangThai', { schema: 'dbo' })
export class TblDmTrangThai {
  @Column('bit', { primary: true, name: 'IdTrangThai' })
  idTrangThai: boolean;

  @Column('nvarchar', { name: 'TenTrangThai', length: 50 })
  tenTrangThai: string;

  @OneToMany(() => TblDKyDtn, (tblDKyDtn) => tblDKyDtn.dkdtnDuyet)
  tblDKyDtns: TblDKyDtn[];

  @OneToMany(() => TblDKySgd, (tblDKySgd) => tblDKySgd.dksgdDuyet)
  tblDKySgds: TblDKySgd[];

  @OneToMany(() => TblDKyXkld, (tblDKyXkld) => tblDKyXkld.dkxkldDuyet)
  tblDKyXklds: TblDKyXkld[];
}
