import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { QlcvNhatky } from './QlcvNhatky.entity';
import { QlcvCongViec } from './QlcvCongViec.entity';

@Index('PK_QLCV_Phancong', ['id'], { unique: true })
@Entity('QLCV_Phancong', { schema: 'dbo' })
export class QlcvPhancong {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'Id' })
  id: string;

  @Column('int', { name: 'DisplayOrder' })
  displayOrder: number;

  @Column('varchar', { name: 'IdNhanvien', length: 15 })
  idNhanvien: string;

  @Column('nvarchar', { name: 'Tencongviec', nullable: true, length: 255 })
  tencongviec: string | null;

  @Column('nvarchar', { name: 'Comment', nullable: true, length: 255 })
  comment: string | null;

  @Column('datetime', { name: 'Startday', nullable: true })
  startday: Date | null;

  @Column('datetime', { name: 'Endday', nullable: true })
  endday: Date | null;

  @Column('int', { name: 'Monitor', nullable: true })
  monitor: number | null;

  @Column('bit', { name: 'Status', default: () => '(1)' })
  status: boolean;

  // @OneToMany(()=>QlcvNhatky,qlcvNhatky=>qlcvNhatky.id)
  // qlcvNhatkies:QlcvNhatky[];

  @ManyToOne(() => QlcvCongViec, (qlcvCongViec) => qlcvCongViec.qlcvPhancongs, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'Idqlcv', referencedColumnName: 'idqlcv' }])
  idqlcv: QlcvCongViec;
}
