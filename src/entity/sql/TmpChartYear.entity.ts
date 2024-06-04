import { Column, Entity, Index } from "typeorm";

@Index("PK_tmpChartYear", ["phanloai", "namQuy"], { unique: true })
@Entity("tmpChartYear", { schema: "dbo" })
export class TmpChartYear {
  @Column("varchar", { primary: true, name: "Phanloai", length: 50 })
  phanloai: string;

  @Column("varchar", { primary: true, name: "NamQuy", length: 10 })
  namQuy: string;

  @Column("numeric", { name: "CNXD", precision: 18, scale: 2 })
  cnxd: number;

  @Column("numeric", { name: "DV", nullable: true, precision: 18, scale: 2 })
  dv: number | null;

  @Column("numeric", { name: "NLTS", nullable: true, precision: 18, scale: 2 })
  nlts: number | null;

  @Column("numeric", { name: "KHAC", nullable: true, precision: 18, scale: 2 })
  khac: number | null;
}
