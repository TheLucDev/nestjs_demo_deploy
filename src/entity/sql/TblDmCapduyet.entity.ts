import { Column, Entity, Index } from "typeorm";

@Index("PK_tblDmCapduyet", ["idCap"], { unique: true })
@Entity("tblDmCapduyet", { schema: "dbo" })
export class TblDmCapduyet {
  @Column("int", { primary: true, name: "IdCap" })
  idCap: number;

  @Column("nvarchar", { name: "Ten", nullable: true, length: 50 })
  ten: string | null;

  @Column("bit", { name: "Status" })
  status: boolean;

  @Column("bit", { name: "Activate" })
  activate: boolean;
}
