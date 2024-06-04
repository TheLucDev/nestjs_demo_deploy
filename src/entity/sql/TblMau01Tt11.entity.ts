import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_Mau01TT11", ["idphieu"], { unique: true })
@Entity("tblMau01TT11", { schema: "dbo" })
export class TblMau01Tt11 {
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

  @Column("varchar", { name: "IdLHDN", nullable: true, length: 3 })
  idLhdn: string | null;

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

  @Column("nvarchar", { name: "TenCV", length: 255 })
  tenCv: string;

  @Column("int", { name: "Soluong", default: () => "(0)" })
  soluong: number;

  @Column("nvarchar", { name: "MotaCV", nullable: true })
  motaCv: string | null;

  @Column("int", { name: "NganhId", nullable: true })
  nganhId: number | null;

  @Column("int", { name: "level1", nullable: true })
  level1: number | null;

  @Column("int", { name: "level2", nullable: true })
  level2: number | null;

  @Column("int", { name: "level3", nullable: true })
  level3: number | null;

  @Column("int", { name: "level4", nullable: true })
  level4: number | null;

  @Column("int", { name: "IdChucvu" })
  idChucvu: number;

  @Column("int", { name: "Idhocvan" })
  idhocvan: number;

  @Column("varchar", { name: "IdBacHoc", nullable: true, length: 4 })
  idBacHoc: string | null;

  @Column("int", { name: "IdngheDT" })
  idngheDt: number;

  @Column("nvarchar", { name: "Trinhdok1", nullable: true, length: 255 })
  trinhdok1: string | null;

  @Column("nvarchar", { name: "Trinhdok2", nullable: true, length: 255 })
  trinhdok2: string | null;

  @Column("nvarchar", { name: "TrinhdoNghe", nullable: true, length: 50 })
  trinhdoNghe: string | null;

  @Column("int", { name: "BacNghe", nullable: true })
  bacNghe: number | null;

  @Column("int", { name: "IdNNDT1", nullable: true })
  idNndt1: number | null;

  @Column("varchar", { name: "IdTDNN1", nullable: true, length: 5 })
  idTdnn1: string | null;

  @Column("int", { name: "MucNN1", nullable: true })
  mucNn1: number | null;

  @Column("int", { name: "IdNNDT2", nullable: true })
  idNndt2: number | null;

  @Column("varchar", { name: "IdTDNN2", nullable: true, length: 5 })
  idTdnn2: string | null;

  @Column("int", { name: "MucNN2", nullable: true })
  mucNn2: number | null;

  @Column("varchar", { name: "IdTDTH", nullable: true, length: 5 })
  idTdth: string | null;

  @Column("int", { name: "MucTH", nullable: true })
  mucTh: number | null;

  @Column("varchar", { name: "IdKynang", nullable: true, length: 4 })
  idKynang: string | null;

  @Column("bit", { name: "chkGT", nullable: true })
  chkGt: boolean | null;

  @Column("bit", { name: "chkNS", nullable: true })
  chkNs: boolean | null;

  @Column("bit", { name: "chkNHOM", nullable: true })
  chkNhom: boolean | null;

  @Column("bit", { name: "chkGS", nullable: true })
  chkGs: boolean | null;

  @Column("bit", { name: "chkKHAC", nullable: true })
  chkKhac: boolean | null;

  @Column("bit", { name: "chkTTR", nullable: true })
  chkTtr: boolean | null;

  @Column("bit", { name: "chkTH", nullable: true })
  chkTh: boolean | null;

  @Column("bit", { name: "chkDL", nullable: true })
  chkDl: boolean | null;

  @Column("bit", { name: "chkPB", nullable: true })
  chkPb: boolean | null;

  @Column("bit", { name: "chkQLTG", nullable: true })
  chkQltg: boolean | null;

  @Column("bit", { name: "chkTU", nullable: true })
  chkTu: boolean | null;

  @Column("bit", { name: "chkAPL", nullable: true })
  chkApl: boolean | null;

  @Column("nvarchar", { name: "Kynangkhac", nullable: true, length: 50 })
  kynangkhac: string | null;

  @Column("varchar", { name: "IdKinhnghiem", nullable: true, length: 4 })
  idKinhnghiem: string | null;

  @Column("varchar", { name: "NoiLVTinh", nullable: true, length: 2 })
  noiLvTinh: string | null;

  @Column("int", { name: "NoiLVKCN", nullable: true })
  noiLvkcn: number | null;

  @Column("varchar", { name: "IdLoaiDHLD", nullable: true, length: 4 })
  idLoaiDhld: string | null;

  @Column("int", { name: "IdCalamviec", nullable: true })
  idCalamviec: number | null;

  @Column("varchar", { name: "IdHinhthuc", nullable: true, length: 2 })
  idHinhthuc: string | null;

  @Column("varchar", { name: "IdMucdich", nullable: true, length: 2 })
  idMucdich: string | null;

  @Column("int", { name: "IdMucluong" })
  idMucluong: number;

  @Column("bit", { name: "chkPL01", nullable: true })
  chkPl01: boolean | null;

  @Column("bit", { name: "chkPL02", nullable: true })
  chkPl02: boolean | null;

  @Column("bit", { name: "chkPL03", nullable: true })
  chkPl03: boolean | null;

  @Column("bit", { name: "chkPL04", nullable: true })
  chkPl04: boolean | null;

  @Column("numeric", {
    name: "TienPhucloi",
    nullable: true,
    precision: 18,
    scale: 0,
  })
  tienPhucloi: number | null;

  @Column("bit", { name: "chkPL05", nullable: true })
  chkPl05: boolean | null;

  @Column("bit", { name: "chkPL06", nullable: true })
  chkPl06: boolean | null;

  @Column("bit", { name: "chkPL07", nullable: true })
  chkPl07: boolean | null;

  @Column("bit", { name: "chkPL08", nullable: true })
  chkPl08: boolean | null;

  @Column("bit", { name: "chkPL09", nullable: true })
  chkPl09: boolean | null;

  @Column("bit", { name: "chkPL10", nullable: true })
  chkPl10: boolean | null;

  @Column("bit", { name: "chkPL11", nullable: true })
  chkPl11: boolean | null;

  @Column("bit", { name: "chkPL12", nullable: true })
  chkPl12: boolean | null;

  @Column("bit", { name: "chkPL13", nullable: true })
  chkPl13: boolean | null;

  @Column("bit", { name: "chkPL14", nullable: true })
  chkPl14: boolean | null;

  @Column("bit", { name: "chkPL15", nullable: true })
  chkPl15: boolean | null;

  @Column("bit", { name: "chkPL16", nullable: true })
  chkPl16: boolean | null;

  @Column("bit", { name: "chkPL17", nullable: true })
  chkPl17: boolean | null;

  @Column("nvarchar", { name: "Phucloikhac", nullable: true, length: 50 })
  phucloikhac: string | null;

  @Column("bit", { name: "chkNL1", nullable: true })
  chkNl1: boolean | null;

  @Column("bit", { name: "chkNL2", nullable: true })
  chkNl2: boolean | null;

  @Column("bit", { name: "chkNL3", nullable: true })
  chkNl3: boolean | null;

  @Column("bit", { name: "chkTL1", nullable: true })
  chkTl1: boolean | null;

  @Column("bit", { name: "chkTL2", nullable: true })
  chkTl2: boolean | null;

  @Column("bit", { name: "chkTL3", nullable: true })
  chkTl3: boolean | null;

  @Column("bit", { name: "chkDL1", nullable: true })
  chkDl1: boolean | null;

  @Column("bit", { name: "chkDL2", nullable: true })
  chkDl2: boolean | null;

  @Column("bit", { name: "chkDL3", nullable: true })
  chkDl3: boolean | null;

  @Column("bit", { name: "chkNN1", nullable: true })
  chkNn1: boolean | null;

  @Column("bit", { name: "chkNN2", nullable: true })
  chkNn2: boolean | null;

  @Column("bit", { name: "chkNN3", nullable: true })
  chkNn3: boolean | null;

  @Column("bit", { name: "chkY01", nullable: true })
  chkY01: boolean | null;

  @Column("bit", { name: "chkY02", nullable: true })
  chkY02: boolean | null;

  @Column("bit", { name: "chkTY1", nullable: true })
  chkTy1: boolean | null;

  @Column("bit", { name: "chkTY2", nullable: true })
  chkTy2: boolean | null;

  @Column("bit", { name: "chkTY3", nullable: true })
  chkTy3: boolean | null;

  @Column("bit", { name: "chk2T1", nullable: true })
  chk2T1: boolean | null;

  @Column("bit", { name: "chk2T2", nullable: true })
  chk2T2: boolean | null;

  @Column("bit", { name: "chk2T3", nullable: true })
  chk2T3: boolean | null;

  @Column("bit", { name: "chk2T4", nullable: true })
  chk2T4: boolean | null;

  @Column("bit", { name: "chk2T5", nullable: true })
  chk2T5: boolean | null;

  @Column("int", { name: "IdDoituong", nullable: true })
  idDoituong: number | null;

  @Column("varchar", { name: "IdHinhthucTD", nullable: true, length: 2 })
  idHinhthucTd: string | null;

  @Column("datetime", {
    name: "ThoihanTD",
    nullable: true,
    default: () => "getdate()",
  })
  thoihanTd: Date | null;

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

  @Column("varchar", { name: "Matinh", nullable: true, length: 2 })
  matinh: string | null;

  @Column("varchar", { name: "Mahuyen", nullable: true, length: 5 })
  mahuyen: string | null;

  @Column("varchar", { name: "Maxa", nullable: true, length: 8 })
  maxa: string | null;

  @Column("int", { name: "idKhuCN", nullable: true })
  idKhuCn: number | null;
}
