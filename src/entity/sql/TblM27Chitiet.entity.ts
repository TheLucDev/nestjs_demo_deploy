import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TblM27Bangke } from './TblM27Bangke.entity';

@Index('PK_tblM27Chitiet', ['idtv'], { unique: true })
@Entity('tblM27Chitiet', { schema: 'dbo' })
export class TblM27Chitiet {
  @Column('bigint', { primary: true, name: 'Idtv' })
  idtv: string;

  @Column('bigint', { name: 'Iduv', nullable: true })
  iduv: string | null;

  @Column('int', { name: 'Idm27' })
  idm27: number;

  @Column('datetime', { name: 'Ngay' })
  ngay: Date;

  @Column('nvarchar', { name: 'Hoten', length: 50 })
  hoten: string;

  @Column('int', { name: 'IdQuanhe' })
  idQuanhe: number;

  @Column('int', { name: 'IdGioitinh' })
  idGioitinh: number;

  @Column('datetime', { name: 'Ngaysinh' })
  ngaysinh: Date;

  @Column('int', { name: 'IdDantoc' })
  idDantoc: number;

  @Column('int', { name: 'IdGDPT', nullable: true })
  idGdpt: number | null;

  @Column('int', { name: 'IdTdHocvan', nullable: true })
  idTdHocvan: number | null;

  @Column('varchar', { name: 'IdBachoc', nullable: true, length: 4 })
  idBachoc: string | null;

  @Column('int', { name: 'Idchuyenmon', nullable: true })
  idchuyenmon: number | null;

  @Column('nvarchar', { name: 'Congviecdanglam', nullable: true, length: 255 })
  congviecdanglam: string | null;

  @Column('nvarchar', { name: 'Tencoquan', nullable: true, length: 255 })
  tencoquan: string | null;

  @Column('varchar', { name: 'IdNKT', nullable: true, length: 4 })
  idNkt: string | null;

  @Column('int', { name: 'IdLamconganluong', nullable: true })
  idLamconganluong: number | null;

  @Column('varchar', { name: 'IdLoaihinhDN', nullable: true, length: 3 })
  idLoaihinhDn: string | null;

  @Column('int', { name: 'IdLoaithatnghiep', nullable: true })
  idLoaithatnghiep: number | null;

  @Column('int', { name: 'IdTGthatnghiep', nullable: true })
  idTGthatnghiep: number | null;

  @Column('bit', { name: 'chkKhongthamgia', default: () => '(1)' })
  chkKhongthamgia: boolean;

  @Column('nvarchar', { name: 'Nguyennhan', nullable: true, length: 255 })
  nguyennhan: string | null;

  @Column('nvarchar', { name: 'Ghichu', nullable: true, length: 255 })
  ghichu: string | null;

  @Column('int', { name: 'DisplayOrder', default: () => '(1)' })
  displayOrder: number;

  @Column('datetime', { name: 'CreatedDate', default: () => 'getdate()' })
  createdDate: Date;

  @Column('varchar', {
    name: 'CreatedBy',
    length: 50,
    default: () => "'system'",
  })
  createdBy: string;

  @Column('datetime', { name: 'ModifiredDate', default: () => 'getdate()' })
  modifiredDate: Date;

  @Column('varchar', {
    name: 'ModifiredBy',
    length: 50,
    default: () => "'system'",
  })
  modifiredBy: string;

  @Column('int', { name: 'IdBiendong', nullable: true })
  idBiendong: number | null;

  @Column('bit', { name: 'Status', default: () => '(1)' })
  status: boolean;

  @ManyToOne(
    () => TblM27Bangke,
    (tblM27Bangke) => tblM27Bangke.tblM27Chitiets,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'IdMaho', referencedColumnName: 'idMaho' }])
  idMaho: TblM27Bangke;
}
