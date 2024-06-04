import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblDmThoiGianHoatDong", ["idThoiGianHd"], { unique: true })
@Entity("tblDmThoiGianHoatDong", { schema: "dbo" })
export class TblDmThoiGianHoatDong {
  @PrimaryGeneratedColumn({ type: "int", name: "IdThoiGianHD" })
  idThoiGianHd: number;

  @Column("nvarchar", { name: "TenThoiGianHD", length: 50 })
  tenThoiGianHd: string;

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
