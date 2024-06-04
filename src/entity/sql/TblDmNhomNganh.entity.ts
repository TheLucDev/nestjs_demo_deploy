import { Column, Entity, Index } from "typeorm";

@Index("PK_tblDmNhomNganh", ["ma"], { unique: true })
@Entity("tblDmNhomNganh", { schema: "dbo" })
export class TblDmNhomNganh {
  @Column("int", { name: "DisplayOrder", nullable: true })
  displayOrder: number | null;

  @Column("varchar", { primary: true, name: "ma", length: 4 })
  ma: string;

  @Column("nvarchar", { name: "ten", nullable: true, length: 255 })
  ten: string | null;

  @Column("bit", { name: "Status" })
  status: boolean;
}
