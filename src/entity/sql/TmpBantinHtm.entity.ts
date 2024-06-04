import { Column, Entity, Index } from "typeorm";

@Index("PK_tmpBantinHTM", ["idCode"], { unique: true })
@Entity("tmpBantinHTM", { schema: "dbo" })
export class TmpBantinHtm {
  @Column("int", { primary: true, name: "IdCode" })
  idCode: number;

  @Column("int", { name: "DisplayOrder" })
  displayOrder: number;

  @Column("varchar", { name: "Itemcode", nullable: true, length: 5 })
  itemcode: string | null;

  @Column("nvarchar", { name: "ItemName", nullable: true, length: 255 })
  itemName: string | null;

  @Column("nvarchar", { name: "Unit", nullable: true, length: 50 })
  unit: string | null;

  @Column("nvarchar", { name: "Truyvan", nullable: true, length: 1000 })
  truyvan: string | null;

  @Column("bit", { name: "Show" })
  show: boolean;

  @Column("bit", { name: "isHeader" })
  isHeader: boolean;

  @Column("bit", { name: "IsReplace" })
  isReplace: boolean;

  @Column("nvarchar", { name: "imgPath", nullable: true, length: 255 })
  imgPath: string | null;
}
