import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TmpLaborMark } from './TmpLaborMark.entity';

@Index('PK_ttldLaborGroup', ['lbKey'], { unique: true })
@Entity('ttldLaborGroup', { schema: 'dbo' })
export class TtldLaborGroup {
  @Column('int', { primary: true, name: 'LbKey' })
  lbKey: number;

  @Column('varchar', { name: 'BlockName', nullable: true, length: 10 })
  blockName: string | null;

  @Column('nvarchar', { name: 'Name', nullable: true, length: 255 })
  name: string | null;

  @Column('bit', { name: 'Show' })
  show: boolean;

  @OneToMany(() => TmpLaborMark, (tmpLaborMark) => tmpLaborMark.lbKey2)
  tmpLaborMarks: TmpLaborMark[];
}
