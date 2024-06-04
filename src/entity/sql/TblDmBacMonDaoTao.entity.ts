import { Column, Entity, Index } from "typeorm";

@Index("PK_tblDmBacHoc", ["idBacHoc"], { unique: true })
@Entity("tblDmBacMonDaoTao", { schema: "dbo" })
export class TblDmBacMonDaoTao {
  @Column("varchar", { primary: true, name: "IdBacHoc", length: 4 })
  idBacHoc: string;

  @Column("nvarchar", { name: "Description", nullable: true, length: 128 })
  description: string | null;

  @Column("int", { name: "OrdinalNumbers", nullable: true })
  ordinalNumbers: number | null;

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
