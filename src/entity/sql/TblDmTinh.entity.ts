import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TblDmHuyen } from './TblDmHuyen.entity';

@Index('PK_dmtinh', ['matinh'], { unique: true })
@Entity('tblDmTinh', { schema: 'dbo' })
export class TblDmTinh {
  @Column('int', { name: 'DisplayOrder' })
  displayOrder: number;

  @Column('varchar', { primary: true, name: 'matinh', length: 2 })
  matinh: string;

  @Column('nvarchar', { name: 'tentinh', nullable: true, length: 50 })
  tentinh: string | null;

  @Column('varchar', { name: 'mabhyt', nullable: true, length: 2 })
  mabhyt: string | null;

  @Column('bit', { name: 'show' })
  show: boolean;

  @OneToMany(() => TblDmHuyen, (tblDmHuyen) => tblDmHuyen.matinh)
  tblDmHuyens: TblDmHuyen[];
}
