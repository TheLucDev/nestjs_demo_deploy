import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { TblMau02Tt11 } from './TblMau02Tt11.entity';

@Index('PK_tblMau02KN', ['id', 'idphieu'], { unique: true })
@Entity('tblMau02KN', { schema: 'dbo' })
export class TblMau02Kn {
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

  @ManyToOne(() => TblMau02Tt11, (tblMau02Tt11) => tblMau02Tt11.tblMau02Kns, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'Idphieu', referencedColumnName: 'idphieu' }])
  idphieu2: TblMau02Tt11;
}
