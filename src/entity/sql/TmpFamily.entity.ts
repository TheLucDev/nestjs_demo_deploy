import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { TmpGroupFamily } from './TmpGroupFamily.entity';

@Index('PK_tmpFamily', ['idGroup', 'id'], { unique: true })
@Entity('tmpFamily', { schema: 'dbo' })
export class TmpFamily {
  @Column('int', { primary: true, name: 'IdGroup' })
  idGroup: number;

  @PrimaryColumn('int', { primary: true, name: 'Id' })
  id: number;

  @Column('nvarchar', { name: 'LabelName', length: 255 })
  labelName: string;

  @Column('varchar', { name: 'Type', nullable: true, length: 10 })
  type: string | null;

  @Column('int', { name: 'DisplayOrder' })
  displayOrder: number;

  @Column('bit', { name: 'Status' })
  status: boolean;

  @ManyToOne(
    () => TmpGroupFamily,
    (tmpGroupFamily) => tmpGroupFamily.tmpFamilies,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'IdGroup', referencedColumnName: 'idGroup' }])
  idGroup2: TmpGroupFamily;
}
