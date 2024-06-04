import { Column, Entity, Index } from "typeorm";

@Index("PK_tblDmBacDaoTaoC2", ["idc2"], { unique: true })
@Entity("tblDmBacDaoTaoC2", { schema: "dbo" })
export class TblDmBacDaoTaoC2 {
  @Column("varchar", { primary: true, name: "Idc2", length: 2 })
  idc2: string;

  @Column("nvarchar", { name: "Description", nullable: true, length: 128 })
  description: string | null;

  @Column("int", { name: "DisplayOrder", nullable: true })
  displayOrder: number | null;

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
