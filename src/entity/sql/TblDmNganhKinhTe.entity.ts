import { Column, Entity, Index } from "typeorm";

@Index("PK_tblDmNganhKinhTe", ["idNkt"], { unique: true })
@Entity("tblDmNganhKinhTe", { schema: "dbo" })
export class TblDmNganhKinhTe {
  @Column("varchar", { primary: true, name: "IdNKT", length: 4 })
  idNkt: string;

  @Column("nvarchar", { name: "TenNganhKT", length: 255 })
  tenNganhKt: string;

  @Column("varchar", { name: "Manhom", nullable: true, length: 4 })
  manhom: string | null;

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
