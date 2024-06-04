import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { QlcvPhancong } from './QlcvPhancong.entity';

@Index('PK_QLCV_nhatky', ['idnk', 'idNhanvien'], { unique: true })
@Entity('QLCV_nhatky', { schema: 'dbo' })
export class QlcvNhatky {
  @PrimaryColumn('int', { primary: true, name: 'Idnk' })
  idnk: number;

  @Column('varchar', { primary: true, name: 'IdNhanvien', length: 15 })
  idNhanvien: string;

  @Column('datetime', { name: 'Ngay' })
  ngay: Date;

  @Column('varchar', { name: 'StartTime', nullable: true, length: 5 })
  startTime: string | null;

  @Column('varchar', { name: 'EndTime', nullable: true, length: 5 })
  endTime: string | null;

  @Column('nvarchar', { name: 'Tencongviec', nullable: true, length: 255 })
  tencongviec: string | null;

  @Column('nvarchar', { name: 'PPThuchien', nullable: true, length: 255 })
  ppThuchien: string | null;

  @Column('int', { name: 'IdKetqua', nullable: true })
  idKetqua: number | null;

  @Column('datetime', { name: 'FinishDate', nullable: true })
  finishDate: Date | null;

  @Column('int', { name: 'DiemKPI', nullable: true })
  diemKpi: number | null;

  @Column('int', { name: 'DiemDG', nullable: true })
  diemDg: number | null;

  @Column('bit', { name: 'Status', default: () => '(1)' })
  status: boolean;

  // @ManyToOne(()=>QlcvPhancong,qlcvPhancong=>qlcvPhancong.qlcvNhatkies,{ onDelete:"CASCADE",onUpdate:"CASCADE" })
  // @JoinColumn([{ name: "Id", referencedColumnName: "id" },
  // ])id:QlcvPhancong;
}
