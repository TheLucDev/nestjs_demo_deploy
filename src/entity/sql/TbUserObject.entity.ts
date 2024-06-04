import { Column, Entity, Index } from "typeorm";

@Index("PK_tbUserObject", ["obiId"], { unique: true })
@Entity("tbUserObject", { schema: "dbo" })
export class TbUserObject {
  @Column("int", { primary: true, name: "ObiId" })
  obiId: number;

  @Column("nvarchar", { name: "ObjName", nullable: true, length: 50 })
  objName: string | null;

  @Column("int", { name: "DisplayOrder", default: () => "(0)" })
  displayOrder: number;

  @Column("bit", { name: "Status", default: () => "(1)" })
  status: boolean;
}
