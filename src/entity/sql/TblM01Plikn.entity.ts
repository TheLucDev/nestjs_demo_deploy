import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { TblM01Plind23 } from './TblM01Plind23.entity';

@Index('PK_tblM01PLIKN', ['id', 'idphieu'], { unique: true })
@Entity('tblM01PLIKN', { schema: 'dbo' })
export class TblM01Plikn {
  @PrimaryColumn('int', { primary: true, name: 'Id' })
  id: number;

  @Column('bigint', { primary: true, name: 'Idphieu' })
  idphieu: string;

  @Column('nvarchar', { name: 'tendonvi', nullable: true, length: 255 })
  tendonvi: string | null;

  @Column('nvarchar', { name: 'chucvu', nullable: true, length: 50 })
  chucvu: string | null;

  @Column('nvarchar', { name: 'congviec', nullable: true, length: 255 })
  congviec: string | null;

  @Column('datetime', { name: 'tungay', nullable: true })
  tungay: Date | null;

  @Column('datetime', { name: 'denngay', nullable: true })
  denngay: Date | null;

  @Column('bit', { name: 'Status', nullable: true })
  status: boolean | null;

  @ManyToOne(
    () => TblM01Plind23,
    (tblM01Plind23) => tblM01Plind23.tblM01Plikns,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'Idphieu', referencedColumnName: 'idphieu' }])
  idphieu2: TblM01Plind23;
}
