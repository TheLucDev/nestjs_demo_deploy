import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TblM28Biendong } from './TblM28Biendong.entity';

@Index('PK_tblM28info', ['id'], { unique: true })
@Entity('tblM28info', { schema: 'dbo' })
export class TblM28info {
  @PrimaryGeneratedColumn({ type: 'int', name: 'Id' })
  id: number;

  @Column('datetime', { name: 'Ngaylap', default: () => 'getdate()' })
  ngaylap: Date;

  @Column('numeric', {
    name: 'MucluongCu',
    nullable: true,
    precision: 18,
    scale: 0,
  })
  mucluongCu: number | null;

  @Column('numeric', {
    name: 'MucluongMoi',
    nullable: true,
    precision: 18,
    scale: 0,
  })
  mucluongMoi: number | null;

  @Column('int', { name: 'IdChucdanhCu', nullable: true })
  idChucdanhCu: number | null;

  @Column('int', { name: 'IdChucdanhMoi', nullable: true })
  idChucdanhMoi: number | null;

  @Column('varchar', { name: 'IdBacHocCu', nullable: true, length: 4 })
  idBacHocCu: string | null;

  @Column('varchar', { name: 'IdBacHocMoi', nullable: true, length: 4 })
  idBacHocMoi: string | null;

  @Column('int', { name: 'IdNganhCu', nullable: true })
  idNganhCu: number | null;

  @Column('int', { name: 'IdNganhMoi', nullable: true })
  idNganhMoi: number | null;

  @Column('varchar', { name: 'IdLoaiDHLDCu', nullable: true, length: 4 })
  idLoaiDhldCu: string | null;

  @Column('varchar', { name: 'IdLoaiDHLDMoi', nullable: true, length: 4 })
  idLoaiDhldMoi: string | null;

  @Column('nvarchar', { name: 'Ghichu', nullable: true, length: 255 })
  ghichu: string | null;

  @Column('bit', { name: 'Status' })
  status: boolean;

  @Column('int', { name: 'DisplayOrder' })
  displayOrder: number;

  @Column('datetime', { name: 'CreatedDate' })
  createdDate: Date;

  @Column('varchar', { name: 'CreatedBy', length: 50 })
  createdBy: string;

  @Column('datetime', { name: 'ModifiredDate' })
  modifiredDate: Date;

  @Column('nvarchar', { name: 'ModifiredBy', length: 50 })
  modifiredBy: string;

  @ManyToOne(
    () => TblM28Biendong,
    (tblM28Biendong) => tblM28Biendong.tblM28infos,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'Idphieu', referencedColumnName: 'idphieu' }])
  idphieu: TblM28Biendong;
}
