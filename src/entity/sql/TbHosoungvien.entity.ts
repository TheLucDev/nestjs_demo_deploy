import { Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Index('PK_tb_hosoungvien_old', ['id'], { unique: true })
@Entity('tb_hosoungvien', { schema: 'dbo' })
export class TbHosoungvien {
  @PrimaryColumn('int', { primary: true, name: 'id' })
  id: number;

  @Column('varchar', { name: 'uv_id', length: 50 })
  uvId: string;

  @Column('varchar', { name: 'uv_username', length: 50 })
  uvUsername: string;

  @Column('varchar', { name: 'uv_password', nullable: true, length: 50 })
  uvPassword: string | null;

  @Column('nvarchar', { name: 'uv_hoten', nullable: true, length: 250 })
  uvHoten: string | null;

  @Column('varchar', { name: 'uv_email', nullable: true, length: 50 })
  uvEmail: string | null;

  @Column('int', { name: 'uv_diachi_x', nullable: true })
  uvDiachiX: number | null;

  @Column('nvarchar', { name: 'uv_diachichitiet', nullable: true, length: 200 })
  uvDiachichitiet: string | null;

  @Column('varchar', { name: 'uv_dienthoai', nullable: true, length: 25 })
  uvDienthoai: string | null;

  @Column('char', { name: 'uv_soCMND', nullable: true, length: 9 })
  uvSoCmnd: string | null;

  @Column('int', { name: 'uv_gioitinh', nullable: true })
  uvGioitinh: number | null;

  @Column('varchar', { name: 'uv_chieucao', nullable: true, length: 10 })
  uvChieucao: string | null;

  @Column('varchar', { name: 'uv_cannang', nullable: true, length: 10 })
  uvCannang: string | null;

  @Column('varchar', {
    name: 'uv_doituongchinhsach',
    nullable: true,
    length: 50,
  })
  uvDoituongchinhsach: string | null;

  @Column('varchar', { name: 'uv_tinhtrangtantat', nullable: true, length: 50 })
  uvTinhtrangtantat: string | null;

  @Column('int', { name: 'uv_honnhan', nullable: true })
  uvHonnhan: number | null;

  @Column('varchar', { name: 'uv_ngaysinh', nullable: true, length: 25 })
  uvNgaysinh: string | null;

  @Column('nvarchar', {
    name: 'uvnv_tencongviec',
    nullable: true,
    length: 4000,
  })
  uvnvTencongviec: string | null;

  @Column('nvarchar', { name: 'uvnv_nganhnghe', nullable: true, length: 400 })
  uvnvNganhnghe: string | null;

  @Column('varchar', { name: 'uvnv_vitrimongmuon', nullable: true, length: 10 })
  uvnvVitrimongmuon: string | null;

  @Column('int', { name: 'uvnv_thoigian', nullable: true })
  uvnvThoigian: number | null;

  @Column('varchar', { name: 'uvnv_noilamviec', nullable: true, length: 20 })
  uvnvNoilamviec: string | null;

  @Column('varchar', { name: 'uvnv_quanhuyen', nullable: true, length: 50 })
  uvnvQuanhuyen: string | null;

  @Column('nvarchar', { name: 'uvnv_mucluong', nullable: true, length: 50 })
  uvnvMucluong: string | null;

  @Column('int', { name: 'uvnv_hinhthuccongty', nullable: true })
  uvnvHinhthuccongty: number | null;

  @Column('varchar', { name: 'uv_ghichu', nullable: true, length: 4000 })
  uvGhichu: string | null;

  @Column('int', { name: 'uvcm_trinhdo', nullable: true })
  uvcmTrinhdo: number | null;

  @Column('nvarchar', { name: 'uvcm_bangcap', nullable: true, length: 4000 })
  uvcmBangcap: string | null;

  @Column('nvarchar', {
    name: 'uvcm_congviechientai',
    nullable: true,
    length: 250,
  })
  uvcmCongviechientai: string | null;

  @Column('nvarchar', { name: 'uvcm_kynang', nullable: true, length: 200 })
  uvcmKynang: string | null;

  @Column('nvarchar', {
    name: 'uvcm_trinhdongoaingu',
    nullable: true,
    length: 400,
  })
  uvcmTrinhdongoaingu: string | null;

  @Column('nvarchar', {
    name: 'uvcm_trinhdotinhoc',
    nullable: true,
    length: 400,
  })
  uvcmTrinhdotinhoc: string | null;

  @Column('decimal', {
    name: 'uvcm_kinhnghiem',
    nullable: true,
    precision: 18,
    scale: 1,
  })
  uvcmKinhnghiem: number | null;

  @Column('varchar', { name: 'uv_ngaydang', nullable: true, length: 50 })
  uvNgaydang: string | null;

  @Column('datetime', { name: 'uv_thoihandang', nullable: true })
  uvThoihandang: Date | null;

  @Column('int', { name: 'uv_solanxem', nullable: true })
  uvSolanxem: number | null;

  @Column('bit', { name: 'uv_duyet', nullable: true })
  uvDuyet: boolean | null;

  @Column('bit', { name: 'uv_hienthi', nullable: true })
  uvHienthi: boolean | null;

  @Column('bit', { name: 'uvht_telephone', nullable: true })
  uvhtTelephone: boolean | null;

  @Column('bit', { name: 'uvht_email', nullable: true })
  uvhtEmail: boolean | null;

  @Column('bit', { name: 'uvht_address', nullable: true })
  uvhtAddress: boolean | null;
}
