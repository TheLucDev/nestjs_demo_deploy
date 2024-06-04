import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TblDaidienNtd } from './TblDaidienNtd.entity';
import { TblDmHinhThucDoanhNghiep } from './TblDmHinhThucDoanhNghiep.entity';
import { TblTuyenDung } from './TblTuyenDung.entity';

@Index('PK_tb_nhatuyendung', ['idDoanhNghiep'], { unique: true })
@Entity('tblNhaTuyenDung', { schema: 'dbo' })
export class TblNhaTuyenDung {
  @Column('bigint', { primary: true, name: 'IdDoanhNghiep' })
  idDoanhNghiep: string;

  @Column('varchar', { name: 'username', nullable: true, length: 50 })
  username: string | null;

  @Column('varchar', { name: 'password', nullable: true, length: 50 })
  password: string | null;

  @Column('varchar', { name: 'ntd_madn', length: 20 })
  ntdMadn: string;

  @Column('nvarchar', { name: 'ntd_tentat', nullable: true, length: 255 })
  ntdTentat: string | null;

  @Column('nvarchar', { name: 'ntd_ten', nullable: true, length: 255 })
  ntdTen: string | null;

  @Column('nvarchar', { name: 'ImagePath', nullable: true, length: 255 })
  imagePath: string | null;

  @Column('varchar', { name: 'MST', nullable: true, length: 20 })
  mst: string | null;

  @Column('int', { name: 'ntd_solaodong', nullable: true })
  ntdSolaodong: number | null;

  @Column('nvarchar', { name: 'ntd_gioithieu', nullable: true, length: 500 })
  ntdGioithieu: string | null;

  @Column('nvarchar', {
    name: 'ntd_thuockhucongnghiep',
    nullable: true,
    length: 500,
  })
  ntdThuockhucongnghiep: string | null;

  @Column('int', { name: 'ntd_diachithanhpho', nullable: true })
  ntdDiachithanhpho: number | null;

  @Column('varchar', { name: 'ntd_diachihuyen', nullable: true, length: 5 })
  ntdDiachihuyen: string | null;

  @Column('varchar', { name: 'ntd_diachixaphuong', nullable: true, length: 8 })
  ntdDiachixaphuong: string | null;

  @Column('nvarchar', {
    name: 'ntd_diachichitiet',
    nullable: true,
    length: 255,
  })
  ntdDiachichitiet: string | null;

  @Column('nvarchar', { name: 'ntd_nguoilienhe', nullable: true, length: 100 })
  ntdNguoilienhe: string | null;

  @Column('nvarchar', { name: 'ntd_chucvu', nullable: true, length: 100 })
  ntdChucvu: string | null;

  @Column('varchar', { name: 'ntd_dienthoai', nullable: true, length: 50 })
  ntdDienthoai: string | null;

  @Column('varchar', { name: 'ntd_fax', nullable: true, length: 50 })
  ntdFax: string | null;

  @Column('varchar', { name: 'ntd_email', nullable: true, length: 250 })
  ntdEmail: string | null;

  @Column('varchar', { name: 'ntd_website', nullable: true, length: 50 })
  ntdWebsite: string | null;

  @Column('bit', { name: 'ntd_duyet', default: () => '(0)' })
  ntdDuyet: boolean;

  @Column('bit', { name: 'ntd_topblock', default: () => '(0)' })
  ntdTopblock: boolean;

  @Column('nvarchar', { name: 'ntd_quocgia', nullable: true, length: 30 })
  ntdQuocgia: string | null;

  @Column('smallint', { name: 'ntd_namthanhlap', nullable: true })
  ntdNamthanhlap: number | null;

  @Column('nvarchar', {
    name: 'ntd_linhvuchoatdong',
    nullable: true,
    length: 255,
  })
  ntdLinhvuchoatdong: string | null;

  @Column('bit', { name: 'ntdht_nlh', default: () => '(0)' })
  ntdhtNlh: boolean;

  @Column('bit', { name: 'ntdht_telephone', default: () => '(0)' })
  ntdhtTelephone: boolean;

  @Column('bit', { name: 'ntdht_web', default: () => '(0)' })
  ntdhtWeb: boolean;

  @Column('bit', { name: 'ntdht_fax', default: () => '(0)' })
  ntdhtFax: boolean;

  @Column('bit', { name: 'ntdht_email', default: () => '(0)' })
  ntdhtEmail: boolean;

  @Column('bit', { name: 'ntdht_address', default: () => '(0)' })
  ntdhtAddress: boolean;

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

  @Column('varchar', { name: 'ntd_id', nullable: true, length: 50 })
  ntdId: string | null;

  @Column('bit', { name: 'NewsletterSubscription', default: () => '(0)' })
  newsletterSubscription: boolean;

  @Column('bit', { name: 'JobsletterSubscription', default: () => '(0)' })
  jobsletterSubscription: boolean;

  @Column('int', { name: 'ntd_Loai', nullable: true, default: () => '(0)' })
  ntdLoai: number | null;

  @Column('nvarchar', { name: 'NongThonThanhThi', nullable: true, length: 9 })
  nongThonThanhThi: string | null;

  @Column('varchar', {
    name: 'IdLoaiHinhDoanhNghiep',
    nullable: true,
    length: 3,
  })
  idLoaiHinhDoanhNghiep: string | null;

  @Column('varchar', { name: 'IdNganhKinhTe', nullable: true, length: 4 })
  idNganhKinhTe: string | null;

  @Column('int', { name: 'IdThoiGianHoatDong', nullable: true })
  idThoiGianHoatDong: number | null;

  @Column('int', { name: 'idStatus' })
  idStatus: number;

  @Column('int', { name: 'DisplayOrder' })
  displayOrder: number;

  @OneToMany(
    () => TblDaidienNtd,
    (tblDaidienNtd) => tblDaidienNtd.idDoanhNghiep,
  )
  tblDaidienNtds: TblDaidienNtd[];

  @ManyToOne(
    () => TblDmHinhThucDoanhNghiep,
    (tblDmHinhThucDoanhNghiep) => tblDmHinhThucDoanhNghiep.tblNhaTuyenDungs,
  )
  @JoinColumn([
    { name: 'ntd_hinhthucdoanhnghiep', referencedColumnName: 'maHinhthuc' },
  ])
  ntdHinhthucdoanhnghiep: TblDmHinhThucDoanhNghiep;

  @OneToMany(() => TblTuyenDung, (tblTuyenDung) => tblTuyenDung.idDoanhNghiep)
  tblTuyenDungs: TblTuyenDung[];
}
