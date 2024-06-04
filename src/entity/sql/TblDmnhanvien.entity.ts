import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TblPhongban } from './TblPhongban.entity';

@Index('PK_tblDmnhanvien', ['manv'], { unique: true })
@Entity('tblDmnhanvien', { schema: 'dbo' })
export class TblDmnhanvien {
  @Column('int', { name: 'sott' })
  sott: number;

  @Column('varchar', { primary: true, name: 'manv', length: 15 })
  manv: string;

  @Column('varchar', { name: 'mahoso', length: 15 })
  mahoso: string;

  @Column('nvarchar', { name: 'holot', length: 40 })
  holot: string;

  @Column('nvarchar', { name: 'ten', length: 10 })
  ten: string;

  @Column('nvarchar', { name: 'bidanh', nullable: true, length: 60 })
  bidanh: string | null;

  @Column('datetime', { name: 'ngaysinh' })
  ngaysinh: Date;

  @Column('nvarchar', { name: 'noisinh', nullable: true, length: 255 })
  noisinh: string | null;

  @Column('nvarchar', { name: 'quequan', nullable: true, length: 255 })
  quequan: string | null;

  @Column('nvarchar', { name: 'gioitinh', length: 20 })
  gioitinh: string;

  @Column('int', { name: 'idtrinhdo', nullable: true })
  idtrinhdo: number | null;

  @Column('varchar', { name: 'idngoaingu', nullable: true, length: 5 })
  idngoaingu: string | null;

  @Column('varchar', { name: 'idtinhoc', nullable: true, length: 5 })
  idtinhoc: string | null;

  @Column('varchar', { name: 'idchuyenmon', nullable: true, length: 3 })
  idchuyenmon: string | null;

  @Column('varchar', { name: 'idhocvi', nullable: true, length: 5 })
  idhocvi: string | null;

  @Column('int', { name: 'idchucvu', nullable: true })
  idchucvu: number | null;

  @Column('int', { name: 'iddantoc', nullable: true })
  iddantoc: number | null;

  @Column('int', { name: 'idtongiao', nullable: true })
  idtongiao: number | null;

  @Column('nvarchar', { name: 'socmnd', nullable: true, length: 20 })
  socmnd: string | null;

  @Column('datetime', { name: 'ngaycap', nullable: true })
  ngaycap: Date | null;

  @Column('nvarchar', { name: 'noicap', nullable: true, length: 255 })
  noicap: string | null;

  @Column('nvarchar', { name: 'sobhxh', nullable: true, length: 20 })
  sobhxh: string | null;

  @Column('nvarchar', { name: 'masothue', nullable: true, length: 20 })
  masothue: string | null;

  @Column('nvarchar', { name: 'diachi', nullable: true, length: 255 })
  diachi: string | null;

  @Column('varchar', { name: 'dienthoai', nullable: true, length: 30 })
  dienthoai: string | null;

  @Column('nvarchar', { name: 'email', nullable: true, length: 255 })
  email: string | null;

  @Column('nvarchar', { name: 'sotruong', nullable: true, length: 255 })
  sotruong: string | null;

  @Column('nvarchar', { name: 'bangcapkhac', nullable: true, length: 255 })
  bangcapkhac: string | null;

  @Column('nvarchar', { name: 'chungchikhac', nullable: true, length: 255 })
  chungchikhac: string | null;

  @Column('nvarchar', { name: 'uudiem', nullable: true, length: 255 })
  uudiem: string | null;

  @Column('nvarchar', { name: 'khuyetdiem', nullable: true, length: 255 })
  khuyetdiem: string | null;

  @Column('nvarchar', { name: 'diachilienhe', nullable: true, length: 255 })
  diachilienhe: string | null;

  @Column('nvarchar', { name: 'kinhnghiem', nullable: true, length: 255 })
  kinhnghiem: string | null;

  @Column('datetime', { name: 'ngayluuhs', nullable: true })
  ngayluuhs: Date | null;

  @Column('nvarchar', { name: 'lydoluuhs', nullable: true, length: 50 })
  lydoluuhs: string | null;

  @Column('int', { name: 'trangthai' })
  trangthai: number;

  @Column('datetime', { name: 'ngaynhap', nullable: true })
  ngaynhap: Date | null;

  @Column('varchar', { name: 'nguoinhap', nullable: true, length: 50 })
  nguoinhap: string | null;

  @Column('datetime', { name: 'ngaysua', nullable: true })
  ngaysua: Date | null;

  @Column('varchar', { name: 'nguoisua', nullable: true, length: 50 })
  nguoisua: string | null;

  @Column('varchar', { name: 'iddonvi', nullable: true, length: 15 })
  iddonvi: string | null;

  @Column('image', { name: 'avatar', nullable: true })
  avatar: Buffer | null;

  @Column('nvarchar', { name: 'hoten', length: 51 })
  hoten: string;

  @ManyToOne(() => TblPhongban, (tblPhongban) => tblPhongban.tblDmnhanviens, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'maphong', referencedColumnName: 'maphong' }])
  maphong: TblPhongban;
}
