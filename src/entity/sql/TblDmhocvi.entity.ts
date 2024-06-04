import { Column, Entity, Index } from "typeorm";

@Index("PK_tblDmhocvi", ["ma"], { unique: true })
@Entity("tblDmhocvi", { schema: "dbo" })
export class TblDmhocvi {
  @Column("int", { name: "sott" })
  sott: number;

  @Column("varchar", { primary: true, name: "ma", length: 5 })
  ma: string;

  @Column("nvarchar", { name: "ten", nullable: true, length: 50 })
  ten: string | null;

  @Column("bit", { name: "show" })
  show: boolean;
}
