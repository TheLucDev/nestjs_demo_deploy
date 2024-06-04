import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TblDmHinhThucDoanhNghiep } from './TblDmHinhThucDoanhNghiep.entity';
import { TblDmPhienGiaoDich } from './TblDmPhienGiaoDich.entity';
import { TblDmTrangThai } from './TblDmTrangThai.entity';

@Index('PK_tb_dksgd', ['id'], { unique: true })
@Entity('tblDKySGD', { schema: 'dbo' })
export class TblDKySgd {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('nvarchar', { name: 'dksgd_username', nullable: true, length: 50 })
  dksgdUsername: string | null;

  @Column('varchar', { name: 'dksgd_email', nullable: true, length: 250 })
  dksgdEmail: string | null;

  @Column('varchar', { name: 'dksgd_password', nullable: true, length: 50 })
  dksgdPassword: string | null;

  @Column('nvarchar', { name: 'dksgd_ten', nullable: true, length: 100 })
  dksgdTen: string | null;

  @Column('nvarchar', { name: 'dksgd_tentat', nullable: true, length: 200 })
  dksgdTentat: string | null;

  @Column('varchar', { name: 'MaHoSo', nullable: true, length: 20 })
  maHoSo: string | null;

  @Column('nvarchar', {
    name: 'dksgd_nguoilienhe',
    nullable: true,
    length: 100,
  })
  dksgdNguoilienhe: string | null;

  @Column('varchar', { name: 'dksgd_website', nullable: true, length: 50 })
  dksgdWebsite: string | null;

  @Column('int', { name: 'dksgd_solaodong', default: () => '(0)' })
  dksgdSolaodong: number;

  @Column('nvarchar', {
    name: 'dksgd_nganhnghekinhdoanh',
    nullable: true,
    length: 500,
  })
  dksgdNganhnghekinhdoanh: string | null;

  @Column('varchar', { name: 'dksgd_dienthoai', nullable: true, length: 50 })
  dksgdDienthoai: string | null;

  @Column('varchar', { name: 'dksgd_fax', nullable: true, length: 50 })
  dksgdFax: string | null;

  @Column('nvarchar', {
    name: 'dksgd_diachichitiet',
    nullable: true,
    length: 200,
  })
  dksgdDiachichitiet: string | null;

  @Column('varchar', {
    name: 'dksgddm_hinhthucthamgia',
    nullable: true,
    length: 50,
  })
  dksgddmHinhthucthamgia: string | null;

  @Column('nvarchar', { name: 'dksgd_nganhnghe', nullable: true })
  dksgdNganhnghe: string | null;

  @Column('nvarchar', { name: 'dksgd_ghichu', nullable: true, length: 300 })
  dksgdGhichu: string | null;

  @Column('int', { name: 'dksgd_solanxem', default: () => '(0)' })
  dksgdSolanxem: number;

  @Column('bit', { name: 'dksgd_hienthi', default: () => '(0)' })
  dksgdHienthi: boolean;

  @Column('bit', { name: 'dksgdht_nlh', default: () => '(0)' })
  dksgdhtNlh: boolean;

  @Column('bit', { name: 'dksgdht_telephone', default: () => '(0)' })
  dksgdhtTelephone: boolean;

  @Column('bit', { name: 'dksgdht_web', default: () => '(0)' })
  dksgdhtWeb: boolean;

  @Column('bit', { name: 'dksgdht_fax', default: () => '(0)' })
  dksgdhtFax: boolean;

  @Column('bit', { name: 'dksgdht_email', default: () => '(0)' })
  dksgdhtEmail: boolean;

  @Column('bit', { name: 'dksgdht_address', default: () => '(0)' })
  dksgdhtAddress: boolean;

  @Column('bit', { name: 'dksgdht_name', default: () => '(0)' })
  dksgdhtName: boolean;

  @Column('datetime', { name: 'CreatedDate', default: () => 'getdate()' })
  createdDate: Date;

  @Column('varchar', {
    name: 'CreatedBy',
    nullable: true,
    length: 50,
    default: () => "'system'",
  })
  createdBy: string | null;

  @Column('datetime', { name: 'ModifiredDate', default: () => 'getdate()' })
  modifiredDate: Date;

  @Column('varchar', {
    name: 'ModifiredBy',
    nullable: true,
    length: 50,
    default: () => "'system'",
  })
  modifiredBy: string | null;

  @ManyToOne(
    () => TblDmHinhThucDoanhNghiep,
    (tblDmHinhThucDoanhNghiep) => tblDmHinhThucDoanhNghiep.tblDKySgds,
  )
  @JoinColumn([
    { name: 'dksgddm_hinhthucdoanhnghiep', referencedColumnName: 'maHinhthuc' },
  ])
  dksgddmHinhthucdoanhnghiep: TblDmHinhThucDoanhNghiep;

  @ManyToOne(
    () => TblDmPhienGiaoDich,
    (tblDmPhienGiaoDich) => tblDmPhienGiaoDich.tblDKySgds,
  )
  @JoinColumn([
    { name: 'dksgddm_phiengiaodichlan', referencedColumnName: 'id' },
  ])
  dksgddmPhiengiaodichlan: TblDmPhienGiaoDich;

  @ManyToOne(
    () => TblDmTrangThai,
    (tblDmTrangThai) => tblDmTrangThai.tblDKySgds,
  )
  @JoinColumn([{ name: 'dksgd_duyet', referencedColumnName: 'idTrangThai' }])
  dksgdDuyet: TblDmTrangThai;
}
