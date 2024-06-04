import { Column, Entity, Index } from "typeorm";

@Index("PK_tmpChartCungcau", ["namQuy", "matk"], { unique: true })
@Entity("tmpChartCungcau", { schema: "dbo" })
export class TmpChartCungcau {
  @Column("varchar", { primary: true, name: "NamQuy", length: 60 })
  namQuy: string;

  @Column("varchar", { primary: true, name: "Matk", length: 10 })
  matk: string;

  @Column("nvarchar", { name: "Noidung", nullable: true, length: 255 })
  noidung: string | null;

  @Column("numeric", {
    name: "Solieucung",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  solieucung: number | null;

  @Column("numeric", {
    name: "Solieucau",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  solieucau: number | null;

  @Column("numeric", { name: "BD", nullable: true, precision: 19, scale: 2 })
  bd: number | null;
}
