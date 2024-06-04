import { Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Index('PK_tb_dksgd_old', ['dksgdId'], { unique: true })
@Entity('tb_dksgd', { schema: 'dbo' })
export class TbDksgd {
  @PrimaryColumn('int', { name: 'id' })
  id: number;

  @Column('varchar', { primary: true, name: 'dksgd_id', length: 50 })
  dksgdId: string;

  @Column('varchar', { name: 'dksgd_username', nullable: true, length: 50 })
  dksgdUsername: string | null;

  @Column('varchar', { name: 'dksgd_email', nullable: true, length: 250 })
  dksgdEmail: string | null;

  @Column('varchar', { name: 'dksgd_password', nullable: true, length: 50 })
  dksgdPassword: string | null;

  @Column('nvarchar', { name: 'dksgd_ten', nullable: true, length: 100 })
  dksgdTen: string | null;

  @Column('nvarchar', { name: 'dksgd_tentat', nullable: true, length: 200 })
  dksgdTentat: string | null;

  @Column('nvarchar', {
    name: 'dksgd_nguoilienhe',
    nullable: true,
    length: 100,
  })
  dksgdNguoilienhe: string | null;

  @Column('varchar', { name: 'dksgd_website', nullable: true, length: 50 })
  dksgdWebsite: string | null;

  @Column('int', { name: 'dksgddm_hinhthucdoanhnghiep', nullable: true })
  dksgddmHinhthucdoanhnghiep: number | null;

  @Column('int', { name: 'dksgd_solaodong', nullable: true })
  dksgdSolaodong: number | null;

  @Column('varchar', {
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

  @Column('nvarchar', {
    name: 'dksgddm_phiengiaodichlan',
    nullable: true,
    length: 50,
  })
  dksgddmPhiengiaodichlan: string | null;

  @Column('varchar', {
    name: 'dksgddm_hinhthucthamgia',
    nullable: true,
    length: 50,
  })
  dksgddmHinhthucthamgia: string | null;

  @Column('varchar', { name: 'dksgd_nganhnghe', nullable: true })
  dksgdNganhnghe: string | null;

  @Column('varchar', { name: 'dksgd_ghichu', nullable: true, length: 300 })
  dksgdGhichu: string | null;

  @Column('varchar', { name: 'dksgd_ngaydangky', nullable: true, length: 50 })
  dksgdNgaydangky: string | null;

  @Column('int', { name: 'dksgd_solanxem', nullable: true })
  dksgdSolanxem: number | null;

  @Column('bit', { name: 'dksgd_duyet', nullable: true })
  dksgdDuyet: boolean | null;

  @Column('bit', { name: 'dksgd_hienthi', nullable: true })
  dksgdHienthi: boolean | null;

  @Column('bit', { name: 'dksgdht_nlh', nullable: true })
  dksgdhtNlh: boolean | null;

  @Column('bit', { name: 'dksgdht_telephone', nullable: true })
  dksgdhtTelephone: boolean | null;

  @Column('bit', { name: 'dksgdht_web', nullable: true })
  dksgdhtWeb: boolean | null;

  @Column('bit', { name: 'dksgdht_fax', nullable: true })
  dksgdhtFax: boolean | null;

  @Column('bit', { name: 'dksgdht_email', nullable: true })
  dksgdhtEmail: boolean | null;

  @Column('bit', { name: 'dksgdht_address', nullable: true })
  dksgdhtAddress: boolean | null;

  @Column('bit', { name: 'dksgdht_name', nullable: true })
  dksgdhtName: boolean | null;
}
