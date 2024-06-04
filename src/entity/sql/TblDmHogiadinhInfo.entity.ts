import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { TblDmHogiadinh } from './TblDmHogiadinh.entity';

@Index('PK_tblDmHGDInfo', ['id', 'maho'], { unique: true })
@Entity('tblDmHogiadinhInfo', { schema: 'dbo' })
export class TblDmHogiadinhInfo {
  @PrimaryColumn('int', { primary: true, name: 'Id' })
  id: number;

  @Column('varchar', { primary: true, name: 'Maho', length: 20 })
  maho: string;

  @Column('int', { name: 'IdGroup', nullable: true })
  idGroup: number | null;

  @Column('nvarchar', { name: 'LabelName', length: 255 })
  labelName: string;

  @Column('varchar', { name: 'Type', nullable: true, length: 10 })
  type: string | null;

  @Column('nvarchar', { name: 'TextInfo', nullable: true, length: 255 })
  textInfo: string | null;

  @Column('bit', { name: 'CheckOK', nullable: true })
  checkOk: boolean | null;

  @Column('bit', { name: 'CheckOption', nullable: true })
  checkOption: boolean | null;

  @Column('bit', { name: 'Isheader', nullable: true })
  isheader: boolean | null;

  @Column('int', { name: 'DisplayOrder' })
  displayOrder: number;

  @Column('bit', { name: 'Status' })
  status: boolean;

  @ManyToOne(
    () => TblDmHogiadinh,
    (tblDmHogiadinh) => tblDmHogiadinh.tblDmHogiadinhInfos,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'Maho', referencedColumnName: 'maho' }])
  maho2: TblDmHogiadinh;
}
