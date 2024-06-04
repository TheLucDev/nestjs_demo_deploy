import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblMau03PLI", ["idphieu"], { unique: true })
@Entity("tblMau03PLI", { schema: "dbo" })
export class TblMau03Pli {
  @PrimaryGeneratedColumn({ type: "bigint", name: "Idphieu" })
  idphieu: string;

  @Column("datetime", { name: "Ngaylap", default: () => "getdate()" })
  ngaylap: Date;

  @Column("varchar", { name: "Madk", length: 20 })
  madk: string;

  @Column("bigint", { name: "IdDoanhnghiep" })
  idDoanhnghiep: string;

  @Column("varchar", { name: "IdDN", nullable: true, length: 50 })
  idDn: string | null;

  @Column("nvarchar", { name: "TenDN", length: 255 })
  tenDn: string;

  @Column("nvarchar", { name: "TenGD", length: 50 })
  tenGd: string;

  @Column("varchar", { name: "Masothue", length: 20 })
  masothue: string;

  @Column("varchar", { name: "IdLHDN", nullable: true, length: 3 })
  idLhdn: string | null;

  @Column("varchar", { name: "Matinh", nullable: true, length: 2 })
  matinh: string | null;

  @Column("varchar", { name: "Mahuyen", nullable: true, length: 5 })
  mahuyen: string | null;

  @Column("varchar", { name: "Maxa", nullable: true, length: 8 })
  maxa: string | null;

  @Column("int", { name: "idKhuCN", nullable: true })
  idKhuCn: number | null;

  @Column("nvarchar", { name: "DiachiDN", nullable: true, length: 255 })
  diachiDn: string | null;

  @Column("varchar", { name: "IdNKT", nullable: true, length: 4 })
  idNkt: string | null;

  @Column("bit", { name: "chkNL", nullable: true })
  chkNl: boolean | null;

  @Column("bit", { name: "chkCN", nullable: true })
  chkCn: boolean | null;

  @Column("bit", { name: "chkSXPP", nullable: true })
  chkSxpp: boolean | null;

  @Column("bit", { name: "chkVTKB", nullable: true })
  chkVtkb: boolean | null;

  @Column("bit", { name: "chkTTTT", nullable: true })
  chkTttt: boolean | null;

  @Column("bit", { name: "chkBDS", nullable: true })
  chkBds: boolean | null;

  @Column("bit", { name: "chkDVHC", nullable: true })
  chkDvhc: boolean | null;

  @Column("bit", { name: "chkYT", nullable: true })
  chkYt: boolean | null;

  @Column("bit", { name: "chkBBL", nullable: true })
  chkBbl: boolean | null;

  @Column("bit", { name: "chkTHUE", nullable: true })
  chkThue: boolean | null;

  @Column("bit", { name: "chkKK", nullable: true })
  chkKk: boolean | null;

  @Column("bit", { name: "chkXD", nullable: true })
  chkXd: boolean | null;

  @Column("bit", { name: "chkCCN", nullable: true })
  chkCcn: boolean | null;

  @Column("bit", { name: "chkDVLT", nullable: true })
  chkDvlt: boolean | null;

  @Column("bit", { name: "chkTCNH", nullable: true })
  chkTcnh: boolean | null;

  @Column("bit", { name: "chkKHCN", nullable: true })
  chkKhcn: boolean | null;

  @Column("bit", { name: "chkGD", nullable: true })
  chkGd: boolean | null;

  @Column("bit", { name: "chkNT", nullable: true })
  chkNt: boolean | null;

  @Column("bit", { name: "chkHDXH", nullable: true })
  chkHdxh: boolean | null;

  @Column("bit", { name: "chkDV", nullable: true })
  chkDv: boolean | null;

  @Column("bit", { name: "chkHDQT", nullable: true })
  chkHdqt: boolean | null;

  @Column("int", { name: "IdQuymo" })
  idQuymo: number;

  @Column("int", { name: "Soluong", default: () => "(0)" })
  soluong: number;

  @Column("datetime", { name: "Ngaydky", default: () => "getdate()" })
  ngaydky: Date;

  @Column("bit", { name: "chkTuvanCS", default: () => "(0)" })
  chkTuvanCs: boolean;

  @Column("bit", { name: "chkTuvanVL", default: () => "(0)" })
  chkTuvanVl: boolean;

  @Column("bit", { name: "chkTuvanDT", default: () => "(0)" })
  chkTuvanDt: boolean;

  @Column("bit", { name: "chkDKy03A", default: () => "(0)" })
  chkDKy03A: boolean;

  @Column("nvarchar", { name: "DKyKhac", length: 255 })
  dKyKhac: string;

  @Column("nvarchar", { name: "TenLienhe", nullable: true, length: 50 })
  tenLienhe: string | null;

  @Column("nvarchar", { name: "Chucvu", nullable: true, length: 50 })
  chucvu: string | null;

  @Column("nvarchar", { name: "Dienthoai", nullable: true, length: 50 })
  dienthoai: string | null;

  @Column("nvarchar", { name: "Email", nullable: true, length: 255 })
  email: string | null;

  @Column("bit", { name: "NhanSMS", nullable: true, default: () => "(1)" })
  nhanSms: boolean | null;

  @Column("bit", { name: "NhanEMail", nullable: true, default: () => "(1)" })
  nhanEMail: boolean | null;

  @Column("nvarchar", { name: "Hinhthuckhac", nullable: true, length: 255 })
  hinhthuckhac: string | null;

  @Column("nvarchar", { name: "UserName", length: 50 })
  userName: string;

  @Column("int", { name: "DisplayOrder", default: () => "(0)" })
  displayOrder: number;

  @Column("datetime", { name: "CreatedDate", default: () => "getdate()" })
  createdDate: Date;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "ModifiredDate", default: () => "getdate()" })
  modifiredDate: Date;

  @Column("nvarchar", { name: "ModifiredBy", length: 50 })
  modifiredBy: string;

  @Column("bit", { name: "Status", default: () => "(1)" })
  status: boolean;
}
