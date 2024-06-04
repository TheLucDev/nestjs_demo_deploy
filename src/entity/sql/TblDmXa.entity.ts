import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TblDmThon } from './TblDmThon.entity';
import { TblDmHuyen } from './TblDmHuyen.entity';

@Index('PK_dmxa', ['maxa'], { unique: true })
@Entity('tblDmXa', { schema: 'dbo' })
export class TblDmXa {
  @Column('int', { name: 'sott', nullable: true })
  sott: number | null;

  @Column('int', { name: 'kind', default: () => '(0)' })
  kind: number;

  @Column('varchar', { primary: true, name: 'maxa', length: 8 })
  maxa: string;

  @Column('nvarchar', { name: 'tenxa', nullable: true, length: 50 })
  tenxa: string | null;

  @Column('varchar', { name: 'matinh', nullable: true, length: 2 })
  matinh: string | null;

  @Column('bit', { name: 'show', nullable: true })
  show: boolean | null;

  @OneToMany(() => TblDmThon, (tblDmThon) => tblDmThon.maxa)
  tblDmThons: TblDmThon[];

  @ManyToOne(() => TblDmHuyen, (tblDmHuyen) => tblDmHuyen.tblDmXas, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'mahuyen', referencedColumnName: 'mahuyen' }])
  mahuyen: TblDmHuyen;
}
