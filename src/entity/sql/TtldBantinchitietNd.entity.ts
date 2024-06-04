import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { TtldBantinchitiet } from './TtldBantinchitiet.entity';

@Index('PK_ttldBantinchitietND', ['id', 'idOrder'], { unique: true })
@Entity('ttldBantinchitietND', { schema: 'dbo' })
export class TtldBantinchitietNd {
  @PrimaryColumn('bigint', { primary: true, name: 'Id' })
  id: string;

  @Column('int', { primary: true, name: 'IdOrder' })
  idOrder: number;

  @Column('int', { name: 'DisplayOrder' })
  displayOrder: number;

  @Column('nvarchar', { name: 'Tomtat', nullable: true, length: 300 })
  tomtat: string | null;

  @Column('ntext', { name: 'Noidung', nullable: true })
  noidung: string | null;

  @Column('bit', { name: 'Status', default: () => '(0)' })
  status: boolean;

  //   @ManyToOne(
  //     () => TtldBantinchitiet,
  //     (ttldBantinchitiet) => ttldBantinchitiet.ttldBantinchitietNds,
  //     { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  //   )
  //   @JoinColumn([{ name: 'Id', referencedColumnName: 'id' }])
  //   id: TtldBantinchitiet;
}
