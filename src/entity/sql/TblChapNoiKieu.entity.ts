import { Column, Entity, Index } from "typeorm";

@Index("PK_tblChapNoiLoai", ["idKieuChapNoi"], { unique: true })
@Entity("tblChapNoiKieu", { schema: "dbo" })
export class TblChapNoiKieu {
  @Column("varchar", { primary: true, name: "IdKieuChapNoi", length: 3 })
  idKieuChapNoi: string;

  @Column("nvarchar", { name: "TenKieuChapNoi", length: 100 })
  tenKieuChapNoi: string;

  @Column("int", { name: "DisplayOrder", default: () => "(0)" })
  displayOrder: number;

  @Column("datetime", { name: "CreatedDate", default: () => "getdate()" })
  createdDate: Date;

  @Column("varchar", {
    name: "CreatedBy",
    length: 50,
    default: () => "'system'",
  })
  createdBy: string;

  @Column("datetime", { name: "ModifiredDate", default: () => "getdate()" })
  modifiredDate: Date;

  @Column("varchar", {
    name: "ModifiredBy",
    length: 50,
    default: () => "'system'",
  })
  modifiredBy: string;

  @Column("bit", { name: "Status", default: () => "(1)" })
  status: boolean;
}
