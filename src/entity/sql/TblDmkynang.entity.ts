import { Column, Entity, Index } from "typeorm";

@Index("PK_tblDmkynang", ["idkn"], { unique: true })
@Entity("tblDmkynang", { schema: "dbo" })
export class TblDmkynang {
  @Column("varchar", { primary: true, name: "idkn", length: 4 })
  idkn: string;

  @Column("nvarchar", { name: "ten", length: 128 })
  ten: string;

  @Column("int", { name: "DisplayOrder", default: () => "(1)" })
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
