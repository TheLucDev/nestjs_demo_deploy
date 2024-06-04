import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TblDKyXkld } from './TblDKyXkld.entity';

@Index('PK_tbDmTTHoSo', ['idTths'], { unique: true })
@Entity('tblDmTTHoSo', { schema: 'dbo' })
export class TblDmTtHoSo {
  @Column('bit', { primary: true, name: 'IdTTHS' })
  idTths: boolean;

  @Column('nvarchar', { name: 'TrangThaiHoSo', length: 14 })
  trangThaiHoSo: string;

  @OneToMany(() => TblDKyXkld, (tblDKyXkld) => tblDKyXkld.dkxkldIdTths)
  tblDKyXklds: TblDKyXkld[];
}
