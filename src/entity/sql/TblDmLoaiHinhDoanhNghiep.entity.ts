import { Column, Entity, Index } from "typeorm";

@Index("PK_tblDmLoaiHinhDoanhNghiep", ["idLhdn"], { unique: true })
@Entity("tblDmLoaiHinhDoanhNghiep", { schema: "dbo" })
export class TblDmLoaiHinhDoanhNghiep {
  @Column("varchar", { primary: true, name: "IdLHDN", length: 3 })
  idLhdn: string;

  @Column("nvarchar", { name: "TenLoaiHinh", length: 50 })
  tenLoaiHinh: string;

  @Column("int", { name: "DisplayOrder", default: () => "(0)" })
  displayOrder: number;

  @Column("datetime", { name: "CreatedDate", default: () => "getdate()" })
  createdDate: Date;

  @Column("varchar", {
    name: "CreatedBy",
    length: 50,
    default: () => "'system'",
  })
  createdBy: string;

  @Column("datetime", { name: "ModifiredDate", default: () => "getdate()" })
  modifiredDate: Date;

  @Column("varchar", {
    name: "ModifiredBy",
    length: 50,
    default: () => "'system'",
  })
  modifiredBy: string;

  @Column("bit", { name: "Status", default: () => "(1)" })
  status: boolean;
}
