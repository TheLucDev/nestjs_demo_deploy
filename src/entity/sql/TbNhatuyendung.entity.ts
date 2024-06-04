import { Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Index('PK_tb_nhatuyendung_old', ['ntdId'], { unique: true })
@Entity('tb_nhatuyendung', { schema: 'dbo' })
export class TbNhatuyendung {
  @Column('int', { name: 'id' })
  id: number;

  @PrimaryColumn('varchar', { primary: true, name: 'ntd_id', length: 50 })
  ntdId: string;

  @Column('varchar', { name: 'username', nullable: true, length: 50 })
  username: string | null;

  @Column('varchar', { name: 'password', nullable: true, length: 50 })
  password: string | null;

  @Column('nvarchar', { name: 'ntd_tentat', nullable: true, length: 255 })
  ntdTentat: string | null;

  @Column('nvarchar', { name: 'ntd_ten', nullable: true, length: 255 })
  ntdTen: string | null;

  @Column('int', { name: 'ntd_hinhthucdoanhnghiep', nullable: true })
  ntdHinhthucdoanhnghiep: number | null;

  @Column('int', { name: 'ntd_solaodong', nullable: true })
  ntdSolaodong: number | null;

  @Column('nvarchar', { name: 'ntd_gioithieu', nullable: true, length: 300 })
  ntdGioithieu: string | null;

  @Column('nvarchar', {
    name: 'ntd_thuockhucongnghiep',
    nullable: true,
    length: 500,
  })
  ntdThuockhucongnghiep: string | null;

  @Column('int', { name: 'ntd_diachithanhpho', nullable: true })
  ntdDiachithanhpho: number | null;

  @Column('int', { name: 'ntd_diachixaphuong', nullable: true })
  ntdDiachixaphuong: number | null;

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

  @Column('varchar', { name: 'ntd_ngaydangky', nullable: true, length: 50 })
  ntdNgaydangky: string | null;

  @Column('bit', { name: 'ntd_duyet', nullable: true })
  ntdDuyet: boolean | null;

  @Column('bit', { name: 'ntd_topblock', nullable: true })
  ntdTopblock: boolean | null;

  @Column('varchar', { name: 'ntd_logo', nullable: true, length: 20 })
  ntdLogo: string | null;

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

  @Column('bit', { name: 'ntdht_nlh', nullable: true })
  ntdhtNlh: boolean | null;

  @Column('bit', { name: 'ntdht_telephone', nullable: true })
  ntdhtTelephone: boolean | null;

  @Column('bit', { name: 'ntdht_web', nullable: true })
  ntdhtWeb: boolean | null;

  @Column('bit', { name: 'ntdht_fax', nullable: true })
  ntdhtFax: boolean | null;

  @Column('bit', { name: 'ntdht_email', nullable: true })
  ntdhtEmail: boolean | null;

  @Column('bit', { name: 'ntdht_address', nullable: true })
  ntdhtAddress: boolean | null;
}
