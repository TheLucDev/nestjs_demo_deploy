import { Column, Entity, Index } from "typeorm";

@Index("PK_tbContentHtmlConfig", ["pkString"], { unique: true })
@Entity("tbContentConfig", { schema: "dbo" })
export class TbContentConfig {
  @Column("varchar", { primary: true, name: "PK_String", length: 20 })
  pkString: string;

  @Column("nvarchar", { name: "Title", length: 50 })
  title: string;

  @Column("int", { name: "DisplayOrder", default: () => "(0)" })
  displayOrder: number;

  @Column("bit", { name: "IsContentHTML", default: () => "(1)" })
  isContentHtml: boolean;

  @Column("bit", { name: "IsSlide", default: () => "(0)" })
  isSlide: boolean;

  @Column("bit", { name: "IsMenu", default: () => "(0)" })
  isMenu: boolean;

  @Column("bit", { name: "IsProduct", default: () => "(0)" })
  isProduct: boolean;

  @Column("bit", { name: "IsArticle", default: () => "(0)" })
  isArticle: boolean;
}
