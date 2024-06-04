import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TblTuyenDung } from './TblTuyenDung.entity';

@Index('PK_tblDmYeuCauGioiTinh', ['idYcgt'], { unique: true })
@Entity('tblDmYeuCauGioiTinh', { schema: 'dbo' })
export class TblDmYeuCauGioiTinh {
  @Column('int', { primary: true, name: 'IdYCGT' })
  idYcgt: number;

  @Column('nvarchar', { name: 'Title', length: 15 })
  title: string;

  @OneToMany(
    () => TblTuyenDung,
    (tblTuyenDung) => tblTuyenDung.tdYeuCauGioiTinh,
  )
  tblTuyenDungs: TblTuyenDung[];
}
