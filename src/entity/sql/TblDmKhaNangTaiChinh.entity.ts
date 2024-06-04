import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TblDKyXkld } from './TblDKyXkld.entity';

@Index('PK_tblDmKhaNangTaiChinh', ['idKnTaiChinh'], { unique: true })
@Entity('tblDmKhaNangTaiChinh', { schema: 'dbo' })
export class TblDmKhaNangTaiChinh {
  @Column('bit', { primary: true, name: 'IdKNTaiChinh' })
  idKnTaiChinh: boolean;

  @Column('nvarchar', { name: 'KhaNangTaiChinh', length: 16 })
  khaNangTaiChinh: string;

  @OneToMany(() => TblDKyXkld, (tblDKyXkld) => tblDKyXkld.dkxkldKhanangtaichinh)
  tblDKyXklds: TblDKyXkld[];
}
