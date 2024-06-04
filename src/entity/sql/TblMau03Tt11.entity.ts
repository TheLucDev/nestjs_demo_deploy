import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblMau03TT11", ["idphieu"], { unique: true })
@Entity("tblMau03TT11", { schema: "dbo" })
export class TblMau03Tt11 {
  @PrimaryGeneratedColumn({ type: "bigint", name: "Idphieu" })
  idphieu: string;

  @Column("varchar", { name: "Maphieu", length: 20 })
  maphieu: string;

  @Column("datetime", { name: "Ngaylap", default: () => "getdate()" })
  ngaylap: Date;

  @Column("bigint", { name: "Iduv" })
  iduv: string;

  @Column("nvarchar", { name: "Hoten", length: 255 })
  hoten: string;

  @Column("datetime", {
    name: "Ngaysinh",
    nullable: true,
    default: () => "getdate()",
  })
  ngaysinh: Date | null;

  @Column("int", { name: "IdGioitinh" })
  idGioitinh: number;

  @Column("varchar", { name: "SoCMND", nullable: true, length: 20 })
  soCmnd: string | null;

  @Column("varchar", { name: "MasoBHXH", nullable: true, length: 20 })
  masoBhxh: string | null;

  @Column("int", { name: "IdDantoc", nullable: true })
  idDantoc: number | null;

  @Column("int", { name: "IdTongiao", nullable: true })
  idTongiao: number | null;

  @Column("varchar", { name: "MatinhHK", length: 2 })
  matinhHk: string;

  @Column("varchar", { name: "MahuyenHK", length: 5 })
  mahuyenHk: string;

  @Column("varchar", { name: "MaxaHK", length: 8 })
  maxaHk: string;

  @Column("nvarchar", { name: "DiachiHK", nullable: true, length: 255 })
  diachiHk: string | null;

  @Column("varchar", { name: "MatinhTT", length: 2 })
  matinhTt: string;

  @Column("varchar", { name: "MahuyenTT", length: 5 })
  mahuyenTt: string;

  @Column("varchar", { name: "MaxaTT", length: 8 })
  maxaTt: string;

  @Column("nvarchar", { name: "DiachiTT", nullable: true, length: 255 })
  diachiTt: string | null;

  @Column("int", { name: "Iddoituong" })
  iddoituong: number;

  @Column("bit", { name: "chkTantat", nullable: true })
  chkTantat: boolean | null;

  @Column("int", { name: "IdTantat", nullable: true })
  idTantat: number | null;

  @Column("bit", { name: "chkHongheo", nullable: true })
  chkHongheo: boolean | null;

  @Column("bit", { name: "chkHocanngheo", nullable: true })
  chkHocanngheo: boolean | null;

  @Column("bit", { name: "Thuhoidat", nullable: true })
  thuhoidat: boolean | null;

  @Column("bit", { name: "Cocongcm", nullable: true })
  cocongcm: boolean | null;

  @Column("bit", { name: "Dantocts", nullable: true })
  dantocts: boolean | null;

  @Column("int", { name: "IdDantocts", nullable: true })
  idDantocts: number | null;

  @Column("int", { name: "Idhocvan", nullable: true })
  idhocvan: number | null;

  @Column("varchar", { name: "IdBacHoc", nullable: true, length: 4 })
  idBacHoc: string | null;

  @Column("varchar", { name: "IdChuyennganh", nullable: true, length: 3 })
  idChuyennganh: string | null;

  @Column("int", { name: "IdNganh", nullable: true })
  idNganh: number | null;

  @Column("bit", { name: "chkCovieclam", nullable: true })
  chkCovieclam: boolean | null;

  @Column("bit", { name: "chkThatnghiep", nullable: true })
  chkThatnghiep: boolean | null;

  @Column("bit", { name: "chkKhongthamgia", nullable: true })
  chkKhongthamgia: boolean | null;

  @Column("bit", { name: "chkDihoc", nullable: true })
  chkDihoc: boolean | null;

  @Column("bit", { name: "chkHuutri", nullable: true })
  chkHuutri: boolean | null;

  @Column("bit", { name: "chkNoitro", nullable: true })
  chkNoitro: boolean | null;

  @Column("bit", { name: "chkKhuyettat", nullable: true })
  chkKhuyettat: boolean | null;

  @Column("bit", { name: "chkKhac", nullable: true })
  chkKhac: boolean | null;

  @Column("int", { name: "IdVithevieclam", nullable: true })
  idVithevieclam: number | null;

  @Column("nvarchar", { name: "Viecdanglam", length: 255 })
  viecdanglam: string;

  @Column("int", { name: "IdLoaiBH", nullable: true })
  idLoaiBh: number | null;

  @Column("bit", { name: "chkHopdongLD", nullable: true })
  chkHopdongLd: boolean | null;

  @Column("varchar", { name: "IdLoaiHD", nullable: true, length: 4 })
  idLoaiHd: string | null;

  @Column("datetime", {
    name: "ThoigianHD",
    nullable: true,
    default: () => "getdate()",
  })
  thoigianHd: Date | null;

  @Column("nvarchar", { name: "Noilamviec", nullable: true, length: 255 })
  noilamviec: string | null;

  @Column("int", { name: "IdLoaiHinhNoilamviec", nullable: true })
  idLoaiHinhNoilamviec: number | null;

  @Column("varchar", { name: "IdLoaihinhDN", nullable: true, length: 3 })
  idLoaihinhDn: string | null;

  @Column("nvarchar", { name: "DiachiNoilamviec", nullable: true, length: 255 })
  diachiNoilamviec: string | null;

  @Column("int", { name: "IdLoaithatnghiep", nullable: true })
  idLoaithatnghiep: number | null;

  @Column("int", { name: "IdTGThatnghiep", nullable: true })
  idTgThatnghiep: number | null;

  @Column("nvarchar", { name: "Ghichu", nullable: true, length: 255 })
  ghichu: string | null;

  @Column("nvarchar", { name: "TenNguoiViet", nullable: true, length: 50 })
  tenNguoiViet: string | null;

  @Column("varchar", { name: "Dienthoai", nullable: true, length: 30 })
  dienthoai: string | null;

  @Column("nvarchar", { name: "Email", nullable: true, length: 255 })
  email: string | null;

  @Column("int", { name: "DisplayOrder", default: () => "(0)" })
  displayOrder: number;

  @Column("datetime", { name: "CreatedDate", default: () => "getdate()" })
  createdDate: Date;

  @Column("varchar", { name: "CreatedBy", nullable: true, length: 50 })
  createdBy: string | null;

  @Column("datetime", { name: "ModifiredDate", default: () => "getdate()" })
  modifiredDate: Date;

  @Column("nvarchar", { name: "ModifiredBy", nullable: true, length: 50 })
  modifiredBy: string | null;

  @Column("varchar", { name: "MahoGD", nullable: true, length: 20 })
  mahoGd: string | null;

  @Column("bit", { name: "Status", default: () => "(1)" })
  status: boolean;
}
