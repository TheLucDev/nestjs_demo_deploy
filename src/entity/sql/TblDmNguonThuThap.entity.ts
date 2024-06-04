import { Column, Entity, Index } from "typeorm";

@Index("PK_tblDmNguonThuThap", ["idNguonThuThap"], { unique: true })
@Entity("tblDmNguonThuThap", { schema: "dbo" })
export class TblDmNguonThuThap {
  @Column("varchar", { primary: true, name: "IdNguonThuThap", length: 3 })
  idNguonThuThap: string;

  @Column("nvarchar", { name: "TenNguonThuThap", length: 100 })
  tenNguonThuThap: string;

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
    default: () => "N'system'",
  })
  modifiredBy: string;

  @Column("bit", { name: "Status", default: () => "(1)" })
  status: boolean;
}
