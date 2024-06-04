import { Column, Entity, Index } from "typeorm";

@Index("PK_tbMenuConfig", ["pkString"], { unique: true })
@Entity("tbMenuConfig", { schema: "dbo" })
export class TbMenuConfig {
  @Column("varchar", { primary: true, name: "PK_String", length: 20 })
  pkString: string;

  @Column("nvarchar", { name: "Title", length: 50 })
  title: string;

  @Column("int", { name: "DisplayOrder", default: () => "(0)" })
  displayOrder: number;
}
