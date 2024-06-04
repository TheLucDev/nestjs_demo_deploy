import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tb_dm_tinhtrangvieclam", ["maTrangThai"], { unique: true })
@Entity("tblDmTinhTrangViecLam", { schema: "dbo" })
export class TblDmTinhTrangViecLam {
  @PrimaryGeneratedColumn({ type: "int", name: "MA_TRANG_THAI" })
  maTrangThai: number;

  @Column("nvarchar", { name: "TEN_TRANG_THAI", length: 50 })
  tenTrangThai: string;

  @Column("int", { name: "DisplayOrder", default: () => "(1)" })
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
