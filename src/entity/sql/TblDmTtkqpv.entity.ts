import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TblDKyXkld } from './TblDKyXkld.entity';

@Index('PK_tblDmTTKQPV', ['idKqpv'], { unique: true })
@Entity('tblDmTTKQPV', { schema: 'dbo' })
export class TblDmTtkqpv {
  @Column('bit', { primary: true, name: 'IdKQPV' })
  idKqpv: boolean;

  @Column('nvarchar', { name: 'KetQuaPhongVan', length: 16 })
  ketQuaPhongVan: string;

  @OneToMany(() => TblDKyXkld, (tblDKyXkld) => tblDKyXkld.dkxkldIdKqpv)
  tblDKyXklds: TblDKyXkld[];
}
