import { Column, Entity, Index } from "typeorm";

@Index("PK_tmpBantinDetail", ["somau", "displayOrder"], { unique: true })
@Entity("tmpBantinDetail", { schema: "dbo" })
export class TmpBantinDetail {
  @Column("varchar", { primary: true, name: "Somau", length: 5 })
  somau: string;

  @Column("int", { primary: true, name: "DisplayOrder" })
  displayOrder: number;

  @Column("varchar", { name: "Nhom", nullable: true, length: 4 })
  nhom: string | null;

  @Column("varchar", { name: "Matk", nullable: true, length: 10 })
  matk: string | null;

  @Column("nvarchar", { name: "Noidung", nullable: true, length: 255 })
  noidung: string | null;

  @Column("numeric", {
    name: "Solieu",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  solieu: number | null;

  @Column("bit", { name: "Status", nullable: true })
  status: boolean | null;
}
