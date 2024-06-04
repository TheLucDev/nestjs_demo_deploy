import { Column, Entity, Index } from "typeorm";

@Index("PK_tblM01aPLI", ["idphieu"], { unique: true })
@Entity("tblM01aPLI", { schema: "dbo" })
export class TblM01aPli {
  @Column("bigint", { primary: true, name: "Idphieu" })
  idphieu: string;

  @Column("datetime", { name: "Ngaylap", default: () => "getdate()" })
  ngaylap: Date;

  @Column("varchar", { name: "Maphieu", length: 20 })
  maphieu: string;

  @Column("nvarchar", { name: "VieclamMM", nullable: true, length: 255 })
  vieclamMm: string | null;

  @Column("varchar", { name: "IdLHDN", nullable: true, length: 3 })
  idLhdn: string | null;

  @Column("nvarchar", { name: "TenCV", length: 255 })
  tenCv: string;

  @Column("nvarchar", { name: "MotaCV" })
  motaCv: string;

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

  @Column("int", { name: "IdChucvu", nullable: true })
  idChucvu: number | null;

  @Column("nvarchar", { name: "Chucvukhac", length: 255 })
  chucvukhac: string;

  @Column("varchar", { name: "IdKinhnghiem", nullable: true, length: 4 })
  idKinhnghiem: string | null;

  @Column("varchar", { name: "NoiLVTinh1", nullable: true, length: 2 })
  noiLvTinh1: string | null;

  @Column("int", { name: "NoiLVKCN1", nullable: true })
  noiLvkcn1: number | null;

  @Column("varchar", { name: "NoiLVTinh2", nullable: true, length: 2 })
  noiLvTinh2: string | null;

  @Column("int", { name: "NoiLVKCN2", nullable: true })
  noiLvkcn2: number | null;

  @Column("varchar", { name: "IdLoaiDHLD", nullable: true, length: 4 })
  idLoaiDhld: string | null;

  @Column("int", { name: "IdCalamviec", nullable: true })
  idCalamviec: number | null;

  @Column("varchar", { name: "IdHinhthuc", nullable: true, length: 2 })
  idHinhthuc: string | null;

  @Column("varchar", { name: "IdMucdich", nullable: true, length: 2 })
  idMucdich: string | null;

  @Column("int", { name: "IdMucluong", nullable: true })
  idMucluong: number | null;

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

  @Column("bit", { name: "SSLV1", nullable: true })
  sslv1: boolean | null;

  @Column("int", { name: "SSLV2", nullable: true })
  sslv2: number | null;

  @Column("varchar", { name: "IdHinhthucTD", nullable: true, length: 2 })
  idHinhthucTd: string | null;

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

  @Column("bit", { name: "Status", default: () => "(1)" })
  status: boolean;
}
