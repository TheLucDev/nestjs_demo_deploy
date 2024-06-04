import { Column, Entity, Index } from "typeorm";

@Index("PK_sysController", ["idController"], { unique: true })
@Entity("sysController", { schema: "dbo" })
export class SysController {
  @Column("varchar", { primary: true, name: "IdController", length: 30 })
  idController: string;

  @Column("nvarchar", { name: "Title", length: 50 })
  title: string;

  @Column("int", { name: "DisplayOrder" })
  displayOrder: number;

  @Column("bit", { name: "Status", default: () => "(1)" })
  status: boolean;
}
