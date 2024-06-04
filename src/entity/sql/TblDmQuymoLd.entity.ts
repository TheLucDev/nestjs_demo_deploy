import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblDmQuymoLD", ["idQuymo"], { unique: true })
@Entity("tblDmQuymoLD", { schema: "dbo" })
export class TblDmQuymoLd {
  @PrimaryGeneratedColumn({ type: "int", name: "IdQuymo" })
  idQuymo: number;

  @Column("nvarchar", { name: "TenQuymo", length: 50 })
  tenQuymo: string;

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
