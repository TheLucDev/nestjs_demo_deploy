import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tb_dm_nguonvieclam", ["maNguonVlt"], { unique: true })
@Entity("tblDmNguonViecLam", { schema: "dbo" })
export class TblDmNguonViecLam {
  @PrimaryGeneratedColumn({ type: "int", name: "ma_nguon_vlt" })
  maNguonVlt: number;

  @Column("nvarchar", { name: "ten_nguon_vlt", length: 50 })
  tenNguonVlt: string;

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
