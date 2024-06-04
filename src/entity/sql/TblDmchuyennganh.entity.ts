import { Column, Entity, Index } from "typeorm";

@Index("PK_tblDmchuyennganh", ["ma"], { unique: true })
@Entity("tblDmchuyennganh", { schema: "dbo" })
export class TblDmchuyennganh {
  @Column("int", { name: "sott" })
  sott: number;

  @Column("int", { primary: true, name: "ma" })
  ma: number;

  @Column("nvarchar", { name: "ten", nullable: true, length: 255 })
  ten: string | null;

  @Column("bit", { name: "show" })
  show: boolean;
}
