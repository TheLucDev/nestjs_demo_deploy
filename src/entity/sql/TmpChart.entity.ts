import { Column, Entity, Index } from "typeorm";

@Index("PK_tmpChart", ["matk"], { unique: true })
@Entity("tmpChart", { schema: "dbo" })
export class TmpChart {
  @Column("varchar", { primary: true, name: "Matk", length: 10 })
  matk: string;

  @Column("nvarchar", { name: "Noidung", nullable: true, length: 255 })
  noidung: string | null;

  @Column("numeric", { name: "Q1", nullable: true, precision: 18, scale: 2 })
  q1: number | null;

  @Column("numeric", { name: "Q2", nullable: true, precision: 18, scale: 2 })
  q2: number | null;

  @Column("numeric", { name: "Q3", nullable: true, precision: 18, scale: 2 })
  q3: number | null;

  @Column("numeric", { name: "SS", nullable: true, precision: 19, scale: 2 })
  ss: number | null;

  @Column("numeric", { name: "BD", nullable: true, precision: 19, scale: 2 })
  bd: number | null;
}
