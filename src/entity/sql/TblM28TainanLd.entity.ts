import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TblM28Biendong } from './TblM28Biendong.entity';

@Index('PK_tblM28TainanLD', ['id'], { unique: true })
@Entity('tblM28TainanLD', { schema: 'dbo' })
export class TblM28TainanLd {
  @PrimaryGeneratedColumn({ type: 'int', name: 'Id' })
  id: number;

  @Column('bigint', { name: 'IdDoanhnghiep', nullable: true })
  idDoanhnghiep: string | null;

  @Column('bigint', { name: 'Iduv', nullable: true })
  iduv: string | null;

  @Column('varchar', { name: 'IdTainan', nullable: true, length: 2 })
  idTainan: string | null;

  @Column('datetime', { name: 'Ngay', nullable: true })
  ngay: Date | null;

  @Column('nvarchar', { name: 'Mota', nullable: true })
  mota: string | null;

  @Column('nvarchar', { name: 'Denghi', nullable: true, length: 255 })
  denghi: string | null;

  @Column('nvarchar', { name: 'TenNoinhan', nullable: true, length: 255 })
  tenNoinhan: string | null;

  @Column('nvarchar', { name: 'EmailNhan', nullable: true, length: 255 })
  emailNhan: string | null;

  @Column('varchar', { name: 'ZaloPhone', nullable: true, length: 30 })
  zaloPhone: string | null;

  @Column('bit', { name: 'Status', default: () => '(1)' })
  status: boolean;

  @Column('int', { name: 'DisplayOrder', default: () => '(0)' })
  displayOrder: number;

  @Column('datetime', { name: 'CreatedDate', default: () => 'getdate()' })
  createdDate: Date;

  @Column('varchar', { name: 'CreatedBy', nullable: true, length: 50 })
  createdBy: string | null;

  @Column('datetime', { name: 'ModifiredDate', default: () => 'getdate()' })
  modifiredDate: Date;

  @Column('nvarchar', { name: 'ModifiredBy', nullable: true, length: 50 })
  modifiredBy: string | null;

  @ManyToOne(
    () => TblM28Biendong,
    (tblM28Biendong) => tblM28Biendong.tblM28TainanLds,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'IdPhieu', referencedColumnName: 'idphieu' }])
  idPhieu: TblM28Biendong;
}
