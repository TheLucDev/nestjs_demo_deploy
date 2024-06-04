import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tb_dm_chuyenmon", ["maChuyenMon"], { unique: true })
@Entity("tblDmChuyenMon", { schema: "dbo" })
export class TblDmChuyenMon {
  @PrimaryGeneratedColumn({ type: "int", name: "ma_chuyen_mon" })
  maChuyenMon: number;

  @Column("nvarchar", { name: "ten_chuyen_mon", length: 100 })
  tenChuyenMon: string;

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
