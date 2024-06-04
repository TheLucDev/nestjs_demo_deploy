import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblDmLydoNghiviec", ["id"], { unique: true })
@Entity("tblDmLydoNghiviec", { schema: "dbo" })
export class TblDmLydoNghiviec {
  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @Column("nvarchar", { name: "Ten", length: 50 })
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
