import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblDmMucLuong", ["idMucLuong"], { unique: true })
@Entity("tblDmMucLuong", { schema: "dbo" })
export class TblDmMucLuong {
  @PrimaryGeneratedColumn({ type: "int", name: "IdMucLuong" })
  idMucLuong: number;

  @Column("nvarchar", { name: "TenMucLuong", length: 50 })
  tenMucLuong: string;

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
