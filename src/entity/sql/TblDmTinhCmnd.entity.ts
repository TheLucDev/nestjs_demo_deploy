import { Column, Entity, Index } from "typeorm";

@Index("PK_tblDmTinhCMND", ["ma"], { unique: true })
@Entity("tblDmTinhCMND", { schema: "dbo" })
export class TblDmTinhCmnd {
  @Column("int", { name: "sott" })
  sott: number;

  @Column("varchar", { primary: true, name: "ma", length: 3 })
  ma: string;

  @Column("nvarchar", { name: "ten", nullable: true, length: 50 })
  ten: string | null;

  @Column("bit", { name: "show", nullable: true })
  show: boolean | null;
}
