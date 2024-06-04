import { Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Index('PK_tb_tuyendung_old', ['id'], { unique: true })
@Entity('tb_tuyendung', { schema: 'dbo' })
export class TbTuyendung {
  @PrimaryColumn('int', { primary: true, name: 'id' })
  id: number;

  @Column('varchar', { name: 'td_id', length: 50 })
  tdId: string;

  @Column('varchar', { name: 'td_id_doanhnghiep', nullable: true, length: 50 })
  tdIdDoanhnghiep: string | null;

  @Column('nvarchar', { name: 'td_tieude', nullable: true, length: 4000 })
  tdTieude: string | null;

  @Column('varchar', { name: 'td_vitri', nullable: true, length: 50 })
  tdVitri: string | null;

  @Column('varchar', { name: 'td_nganhnghe', nullable: true, length: 50 })
  tdNganhnghe: string | null;

  @Column('varchar', { name: 'td_nganhkhac', nullable: true, length: 100 })
  tdNganhkhac: string | null;

  @Column('varchar', { name: 'td_soluong', nullable: true, length: 500 })
  tdSoluong: string | null;

  @Column('nvarchar', { name: 'td_motacongviec', nullable: true, length: 4000 })
  tdMotacongviec: string | null;

  @Column('nvarchar', { name: 'td_motayeucau', nullable: true, length: 4000 })
  tdMotayeucau: string | null;

  @Column('nvarchar', { name: 'td_quyenloi', nullable: true, length: 4000 })
  tdQuyenloi: string | null;

  @Column('nvarchar', { name: 'td_ghichu', nullable: true, length: 4000 })
  tdGhichu: string | null;

  @Column('int', { name: 'td_thoigianlamviec', nullable: true })
  tdThoigianlamviec: number | null;

  @Column('int', { name: 'td_noilamviec', nullable: true })
  tdNoilamviec: number | null;

  @Column('nvarchar', { name: 'td_nuocngoai', nullable: true, length: 4000 })
  tdNuocngoai: string | null;

  @Column('decimal', {
    name: 'td_luongkhoidiem',
    nullable: true,
    precision: 18,
    scale: 0,
  })
  tdLuongkhoidiem: number | null;

  @Column('varchar', { name: 'td_ngaynhanhoso', nullable: true, length: 50 })
  tdNgaynhanhoso: string | null;

  @Column('varchar', { name: 'td_ngayhethanhoso', nullable: true, length: 50 })
  tdNgayhethanhoso: string | null;

  @Column('nvarchar', { name: 'td_noinophoso', nullable: true, length: 4000 })
  tdNoinophoso: string | null;

  @Column('nvarchar', { name: 'td_hosobaogom', nullable: true, length: 4000 })
  tdHosobaogom: string | null;

  @Column('int', { name: 'td_yeucauhocvan', nullable: true })
  tdYeucauhocvan: number | null;

  @Column('varchar', { name: 'td_yeucaungoaingu', nullable: true, length: 200 })
  tdYeucaungoaingu: string | null;

  @Column('varchar', { name: 'td_yeucau_tinhoc', nullable: true, length: 200 })
  tdYeucauTinhoc: string | null;

  @Column('int', { name: 'td_yeucau_gioitinh', nullable: true })
  tdYeucauGioitinh: number | null;

  @Column('int', { name: 'td_yeucau_chieucao', nullable: true })
  tdYeucauChieucao: number | null;

  @Column('int', { name: 'td_yeucau_kinhnghiem', nullable: true })
  tdYeucauKinhnghiem: number | null;

  @Column('int', { name: 'td_yeucau_tuoiMin', nullable: true })
  tdYeucauTuoiMin: number | null;

  @Column('int', { name: 'td_yeucau_tuoiMax', nullable: true })
  tdYeucauTuoiMax: number | null;

  @Column('nvarchar', {
    name: 'td_yeucau_hokhau',
    nullable: true,
    length: 4000,
  })
  tdYeucauHokhau: string | null;

  @Column('varchar', { name: 'td_ngaydang', nullable: true, length: 50 })
  tdNgaydang: string | null;

  @Column('datetime', { name: 'td_ngayhethan', nullable: true })
  tdNgayhethan: Date | null;

  @Column('bit', { name: 'td_duyet', nullable: true })
  tdDuyet: boolean | null;

  @Column('char', { name: 'td_nguonvieclam', nullable: true, length: 1 })
  tdNguonvieclam: string | null;

  @Column('int', { name: 'td_soluonggioithieu', nullable: true })
  tdSoluonggioithieu: number | null;

  @Column('char', { name: 'td_loaivieclam', nullable: true, length: 1 })
  tdLoaivieclam: string | null;

  @Column('varchar', { name: 'td_xkld', nullable: true, length: 100 })
  tdXkld: string | null;

  @Column('varchar', { name: 'td_xkld_quocgia', nullable: true, length: 100 })
  tdXkldQuocgia: string | null;

  @Column('int', { name: 'td_lanxem', nullable: true })
  tdLanxem: number | null;
}
