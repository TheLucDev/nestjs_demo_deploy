import { Column, Entity, Index } from "typeorm";

@Index("PK_tblDmNongThonThanhThi", ["description"], { unique: true })
@Entity("tblDmNongThonThanhThi", { schema: "dbo" })
export class TblDmNongThonThanhThi {
  @Column("int", { name: "Id", nullable: true })
  id: number | null;

  @Column("nvarchar", { primary: true, name: "Description", length: 9 })
  description: string;
}
