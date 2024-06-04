import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("tmpChitieuthongke", { schema: "dbo" })
export class TmpChitieuthongke {
  @PrimaryColumn("int", { name: "Id" })
  id: number;

  @Column("varchar", { name: "Madonvi", length: 15 })
  madonvi: string;

  @Column("int", { name: "Quy" })
  quy: number;

  @Column("int", { name: "Nam" })
  nam: number;

  @Column("varchar", { name: "Matk", nullable: true, length: 10 })
  matk: string | null;

  @Column("nvarchar", { name: "Noidung", nullable: true, length: 511 })
  noidung: string | null;

  @Column("numeric", {
    name: "Solieu",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  solieu: number | null;
}
