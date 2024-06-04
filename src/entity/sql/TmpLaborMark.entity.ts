import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TtldLaborGroup } from './TtldLaborGroup.entity';

@Index('PK_tmpLaborMark', ['lbKey', 'idKey'], { unique: true })
@Entity('tmpLaborMark', { schema: 'dbo' })
export class TmpLaborMark {
  @Column('int', { primary: true, name: 'LbKey' })
  lbKey: number;

  @Column('int', { primary: true, name: 'IdKey' })
  idKey: number;

  @Column('nvarchar', { name: 'Description', nullable: true, length: 255 })
  description: string | null;

  @Column('nvarchar', { name: 'Dvt', nullable: true, length: 50 })
  dvt: string | null;

  @Column('bit', { name: 'Show' })
  show: boolean;

  @ManyToOne(
    () => TtldLaborGroup,
    (ttldLaborGroup) => ttldLaborGroup.tmpLaborMarks,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'LbKey', referencedColumnName: 'lbKey' }])
  lbKey2: TtldLaborGroup;
}
