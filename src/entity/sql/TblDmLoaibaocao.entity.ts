import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TblDmMaubaocao } from './TblDmMaubaocao.entity';

@Index('PK_tblDmLoaibaocao', ['maso'], { unique: true })
@Entity('tblDmLoaibaocao', { schema: 'dbo' })
export class TblDmLoaibaocao {
  @Column('int', { name: 'Id', nullable: true })
  id: number | null;

  @Column('varchar', { primary: true, name: 'Maso', length: 10 })
  maso: string;

  @Column('nvarchar', { name: 'Tenso', nullable: true, length: 50 })
  tenso: string | null;

  @Column('bit', { name: 'Show', nullable: true })
  show: boolean | null;

  @OneToMany(() => TblDmMaubaocao, (tblDmMaubaocao) => tblDmMaubaocao.maso)
  tblDmMaubaocaos: TblDmMaubaocao[];
}
