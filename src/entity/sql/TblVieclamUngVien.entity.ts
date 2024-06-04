import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TblHoSoUngVien } from './TblHoSoUngVien.entity';

@Index('PK_tblVieclamUngVien', ['idVl'], { unique: true })
@Entity('tblVieclamUngVien', { schema: 'dbo' })
export class TblVieclamUngVien {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'IdVL' })
  idVl: string;

  @Column('varchar', { name: 'Maphieu', length: 20 })
  maphieu: string;

  @Column('datetime', { name: 'Ngaylap', default: () => 'getdate()' })
  ngaylap: Date;

  @Column('varchar', { name: 'IdNguoiduyet', length: 15 })
  idNguoiduyet: string;

  @Column('varchar', { name: 'MaCV', nullable: true, length: 20 })
  maCv: string | null;

  @Column('varchar', { name: 'MasoLD', nullable: true, length: 20 })
  masoLd: string | null;

  @Column('int', { name: 'IdLoaiDN' })
  idLoaiDn: number;

  @Column('varchar', { name: 'IdTinh', nullable: true, length: 2 })
  idTinh: string | null;

  @Column('varchar', { name: 'Idhuyen', nullable: true, length: 5 })
  idhuyen: string | null;

  @Column('varchar', { name: 'Idxa', nullable: true, length: 8 })
  idxa: string | null;

  @Column('nvarchar', { name: 'DiachiLV', nullable: true, length: 255 })
  diachiLv: string | null;

  @Column('bigint', { name: 'IdDN' })
  idDn: string;

  @Column('int', { name: 'IdKhuVuc' })
  idKhuVuc: number;

  @Column('varchar', { name: 'IdNKT', nullable: true, length: 4 })
  idNkt: string | null;

  @Column('int', { name: 'IdLoaiHD' })
  idLoaiHd: number;

  @Column('nvarchar', { name: 'Tencongviec', nullable: true, length: 255 })
  tencongviec: string | null;

  @Column('bit', { name: 'MatVL', default: () => '(0)' })
  matVl: boolean;

  @Column('datetime', {
    name: 'NgaymatVL',
    nullable: true,
    default: () => 'getdate()',
  })
  ngaymatVl: Date | null;

  @Column('nvarchar', { name: 'Diengiai', nullable: true, length: 255 })
  diengiai: string | null;

  @Column('nvarchar', { name: 'Ghichu', nullable: true, length: 255 })
  ghichu: string | null;

  @Column('bit', { name: 'Status', default: () => '(0)' })
  status: boolean;

  @Column('int', { name: 'DisplayOrder' })
  displayOrder: number;

  @Column('datetime', { name: 'CreatedDate', default: () => 'getdate()' })
  createdDate: Date;

  @Column('varchar', {
    name: 'CreatedBy',
    length: 50,
    default: () => "'System'",
  })
  createdBy: string;

  @Column('datetime', { name: 'ModifiredDate', default: () => 'getdate()' })
  modifiredDate: Date;

  @Column('nvarchar', {
    name: 'ModifiredBy',
    length: 50,
    default: () => "N'System'",
  })
  modifiredBy: string;

  @ManyToOne(
    () => TblHoSoUngVien,
    (tblHoSoUngVien) => tblHoSoUngVien.tblVieclamUngViens,
    { onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'Iduv', referencedColumnName: 'id' }])
  iduv: TblHoSoUngVien;
}
