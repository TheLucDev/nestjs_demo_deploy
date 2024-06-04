import { Column, Entity, Index } from "typeorm";

@Index("PK_LaborMark", ["keyId", "displayOrder"], { unique: true })
@Entity("ttldLaborMark", { schema: "dbo" })
export class TtldLaborMark {
  @Column("varchar", { primary: true, name: "KeyId", length: 6 })
  keyId: string;

  @Column("int", { primary: true, name: "DisplayOrder" })
  displayOrder: number;

  @Column("int", { name: "Quy" })
  quy: number;

  @Column("int", { name: "Year" })
  year: number;

  @Column("varchar", { name: "Block", nullable: true, length: 10 })
  block: string | null;

  @Column("nvarchar", { name: "Description", nullable: true, length: 255 })
  description: string | null;

  @Column("nvarchar", { name: "Dvt", nullable: true, length: 30 })
  dvt: string | null;

  @Column("numeric", {
    name: "Tongso",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  tongso: number | null;

  @Column("numeric", { name: "Nam", nullable: true, precision: 18, scale: 2 })
  nam: number | null;

  @Column("numeric", { name: "Nu", nullable: true, precision: 18, scale: 2 })
  nu: number | null;

  @Column("bit", { name: "Status", nullable: true })
  status: boolean | null;

  @Column("nvarchar", { name: "Ghichu", nullable: true, length: 255 })
  ghichu: string | null;
}
