import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblDmVung", ["id"], { unique: true })
@Entity("tblDmVung", { schema: "dbo" })
export class TblDmVung {
  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @Column("varchar", { name: "Code", nullable: true, length: 2 })
  code: string | null;

  @Column("nvarchar", { name: "Ten", nullable: true, length: 50 })
  ten: string | null;

  @Column("nvarchar", { name: "TinhTP", nullable: true, length: 500 })
  tinhTp: string | null;

  @Column("int", { name: "DisplayOrder" })
  displayOrder: number;

  @Column("datetime", { name: "CreatedDate", default: () => "getdate()" })
  createdDate: Date;

  @Column("varchar", {
    name: "CreatedBy",
    length: 50,
    default: () => "'System'",
  })
  createdBy: string;

  @Column("datetime", { name: "ModifiredDate", default: () => "getdate()" })
  modifiredDate: Date;

  @Column("varchar", {
    name: "ModifiredBy",
    length: 50,
    default: () => "'System'",
  })
  modifiredBy: string;

  @Column("bit", { name: "Status", default: () => "(0)" })
  status: boolean;
}
