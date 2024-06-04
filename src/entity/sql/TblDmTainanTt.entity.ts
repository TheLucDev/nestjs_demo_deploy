import { Column, Entity, Index } from "typeorm";

@Index("PK_tblDmTainanTT", ["ma"], { unique: true })
@Entity("tblDmTainanTT", { schema: "dbo" })
export class TblDmTainanTt {
  @Column("int", { name: "sott" })
  sott: number;

  @Column("varchar", { primary: true, name: "ma", length: 2 })
  ma: string;

  @Column("nvarchar", { name: "ten", nullable: true, length: 50 })
  ten: string | null;

  @Column("nvarchar", { name: "ghichu", nullable: true, length: 50 })
  ghichu: string | null;

  @Column("bit", { name: "show", nullable: true, default: () => "(0)" })
  show: boolean | null;
}
