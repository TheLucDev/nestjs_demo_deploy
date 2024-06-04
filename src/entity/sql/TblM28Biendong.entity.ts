import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TblM28info } from './TblM28info.entity';
import { TblM28TainanLd } from './TblM28TainanLd.entity';

@Index('PK_tblM28Biendong', ['idphieu'], { unique: true })
@Entity('tblM28Biendong', { schema: 'dbo' })
export class TblM28Biendong {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'Idphieu' })
  idphieu: string;

  @Column('datetime', { name: 'Ngaylap', default: () => 'getdate()' })
  ngaylap: Date;

  @Column('varchar', { name: 'Maphieu', length: 20 })
  maphieu: string;

  @Column('bigint', { name: 'IdUV' })
  idUv: string;

  @Column('bigint', { name: 'IdDN' })
  idDn: string;

  @Column('varchar', { name: 'MasoBHXH', nullable: true, length: 20 })
  masoBhxh: string | null;

  @Column('varchar', { name: 'IdBacHoc', nullable: true, length: 4 })
  idBacHoc: string | null;

  @Column('bit', { name: 'ChkCNKTKhongBang', nullable: true })
  chkCnktKhongBang: boolean | null;

  @Column('bit', { name: 'ChkCCN3thang', nullable: true })
  chkCcn3thang: boolean | null;

  @Column('bit', { name: 'ChkCCNSocap', nullable: true })
  chkCcnSocap: boolean | null;

  @Column('bit', { name: 'ChkTrungcap', nullable: true })
  chkTrungcap: boolean | null;

  @Column('bit', { name: 'ChkCaodang', nullable: true })
  chkCaodang: boolean | null;

  @Column('bit', { name: 'ChkDaihocSDH', nullable: true })
  chkDaihocSdh: boolean | null;

  @Column('varchar', { name: 'IdLoaiDHLD', nullable: true, length: 4 })
  idLoaiDhld: string | null;

  @Column('datetime', { name: 'NgayHDLD', default: () => 'getdate()' })
  ngayHdld: Date;

  @Column('datetime', { name: 'NgayHieuluc', default: () => 'getdate()' })
  ngayHieuluc: Date;

  @Column('int', { name: 'IdTinhtrangHD' })
  idTinhtrangHd: number;

  @Column('int', { name: 'IdChucdanh' })
  idChucdanh: number;

  @Column('int', { name: 'IdLoaiBH' })
  idLoaiBh: number;

  @Column('datetime', { name: 'NgayBaohiem', default: () => 'getdate()' })
  ngayBaohiem: Date;

  @Column('numeric', {
    name: 'Mucluongchinh',
    nullable: true,
    precision: 18,
    scale: 0,
  })
  mucluongchinh: number | null;

  @Column('numeric', {
    name: 'MucluongBHTN',
    nullable: true,
    precision: 18,
    scale: 0,
  })
  mucluongBhtn: number | null;

  @Column('numeric', {
    name: 'ThoigianBHTN',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  thoigianBhtn: number | null;

  @Column('bit', { name: 'ChkNhanvienmoi', nullable: true })
  chkNhanvienmoi: boolean | null;

  @Column('datetime', { name: 'NgayBatdau', default: () => 'getdate()' })
  ngayBatdau: Date;

  @Column('datetime', { name: 'NgayThoiviec', default: () => 'getdate()' })
  ngayThoiviec: Date;

  @Column('int', { name: 'IdLydoNghi' })
  idLydoNghi: number;

  @Column('nvarchar', { name: 'Ghichu', nullable: true, length: 255 })
  ghichu: string | null;

  @Column('datetime', { name: 'StartDate', nullable: true })
  startDate: Date | null;

  @Column('datetime', { name: 'EndDate', nullable: true })
  endDate: Date | null;

  @Column('bigint', { name: 'Idphieu03', nullable: true })
  idphieu03: string | null;

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

  @OneToMany(() => TblM28info, (tblM28info) => tblM28info.idphieu)
  tblM28infos: TblM28info[];

  @OneToMany(() => TblM28TainanLd, (tblM28TainanLd) => tblM28TainanLd.idPhieu)
  tblM28TainanLds: TblM28TainanLd[];
}
