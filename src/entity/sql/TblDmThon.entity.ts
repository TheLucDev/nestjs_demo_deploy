import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TblDmXa } from './TblDmXa.entity';

@Index('PK_tblDmThon', ['ma'], { unique: true })
@Entity('tblDmThon', { schema: 'dbo' })
export class TblDmThon {
  @Column('int', { name: 'sott' })
  sott: number;

  @Column('varchar', { primary: true, name: 'ma', length: 12 })
  ma: string;

  @Column('nvarchar', { name: 'ten', nullable: true, length: 50 })
  ten: string | null;

  @Column('nvarchar', { name: 'tenchitiet', nullable: true, length: 255 })
  tenchitiet: string | null;

  @Column('bit', { name: 'show', nullable: true })
  show: boolean | null;

  @ManyToOne(() => TblDmXa, (tblDmXa) => tblDmXa.tblDmThons, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'maxa', referencedColumnName: 'maxa' }])
  maxa: TblDmXa;
}
