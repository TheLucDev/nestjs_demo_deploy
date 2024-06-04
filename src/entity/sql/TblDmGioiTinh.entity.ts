import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TblDKyDtn } from './TblDKyDtn.entity';
import { TblDKyXkld } from './TblDKyXkld.entity';

@Index('PK_tblDmGioiTinh', ['idGioiTinh'], { unique: true })
@Entity('tblDmGioiTinh', { schema: 'dbo' })
export class TblDmGioiTinh {
  @Column('int', { primary: true, name: 'IdGioiTinh' })
  idGioiTinh: number;

  @Column('nvarchar', { name: 'TenGioiTinh', length: 3 })
  tenGioiTinh: string;

  @OneToMany(() => TblDKyDtn, (tblDKyDtn) => tblDKyDtn.dkdtnGioitinh)
  tblDKyDtns: TblDKyDtn[];

  @OneToMany(() => TblDKyXkld, (tblDKyXkld) => tblDKyXkld.dkxkldGioitinh)
  tblDKyXklds: TblDKyXkld[];
}
