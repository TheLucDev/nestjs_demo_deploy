import { Column, Entity, Index } from "typeorm";

@Index("PK_tbMonitor", ["ma"], { unique: true })
@Entity("tbMonitor", { schema: "dbo" })
export class TbMonitor {
  @Column("int", { primary: true, name: "ma" })
  ma: number;

  @Column("nvarchar", { name: "ten", nullable: true, length: 50 })
  ten: string | null;
}
