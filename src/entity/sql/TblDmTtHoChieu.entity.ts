import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TblDKyXkld } from './TblDKyXkld.entity';

@Index('PK_tblDmTTHoCHieu', ['idTtHoChieu'], { unique: true })
@Entity('tblDmTTHoChieu', { schema: 'dbo' })
export class TblDmTtHoChieu {
  @Column('bit', { primary: true, name: 'IdTTHoChieu' })
  idTtHoChieu: boolean;

  @Column('nvarchar', { name: 'TTHoChieu', length: 8 })
  ttHoChieu: string;

  @OneToMany(() => TblDKyXkld, (tblDKyXkld) => tblDKyXkld.dkxkldHochieu)
  tblDKyXklds: TblDKyXkld[];
}
