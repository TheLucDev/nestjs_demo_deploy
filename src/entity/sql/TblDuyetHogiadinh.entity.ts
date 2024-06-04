import { Column, Entity, Index } from "typeorm";

@Index("PK_tblDuyetHogiadinh", ["idCap", "maho"], { unique: true })
@Entity("tblDuyetHogiadinh", { schema: "dbo" })
export class TblDuyetHogiadinh {
  @Column("int", { primary: true, name: "IdCap" })
  idCap: number;

  @Column("varchar", { primary: true, name: "Maho", length: 20 })
  maho: string;

  @Column("varchar", {
    name: "UserName",
    length: 50,
    default: () => "'system'",
  })
  userName: string;

  @Column("datetime", { name: "Ngayduyet", default: () => "getdate()" })
  ngayduyet: Date;

  @Column("bit", { name: "Status", default: () => "(0)" })
  status: boolean;

  @Column("nvarchar", { name: "Ghichu", nullable: true, length: 255 })
  ghichu: string | null;
}
