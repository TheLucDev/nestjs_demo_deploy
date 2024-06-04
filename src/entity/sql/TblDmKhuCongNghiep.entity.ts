import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tb_dm_khucongnghiep", ["kcnId"], { unique: true })
@Entity("tblDmKhuCongNghiep", { schema: "dbo" })
export class TblDmKhuCongNghiep {
  @PrimaryGeneratedColumn({ type: "int", name: "kcn_id" })
  kcnId: number;

  @Column("nvarchar", { name: "kcn_ten", nullable: true, length: 100 })
  kcnTen: string | null;

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
