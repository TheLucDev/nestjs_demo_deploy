import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblDmKhuVuc", ["idKhuVuc"], { unique: true })
@Entity("tblDmKhuVuc", { schema: "dbo" })
export class TblDmKhuVuc {
  @PrimaryGeneratedColumn({ type: "int", name: "IdKhuVuc" })
  idKhuVuc: number;

  @Column("nvarchar", { name: "TenKhuVuc", nullable: true, length: 250 })
  tenKhuVuc: string | null;

  @Column("int", { name: "IdKhuVucTrucThuoc", nullable: true })
  idKhuVucTrucThuoc: number | null;

  @Column("int", { name: "DisplayOrder" })
  displayOrder: number;

  @Column("datetime", { name: "CreatedDate", default: () => "getdate()" })
  createdDate: Date;

  @Column("varchar", {
    name: "CreatedBy",
    length: 50,
    default: () => "'System'",
  })
  createdBy: string;

  @Column("datetime", { name: "ModifiredDate", default: () => "getdate()" })
  modifiredDate: Date;

  @Column("varchar", {
    name: "ModifiredBy",
    length: 50,
    default: () => "'System'",
  })
  modifiredBy: string;

  @Column("bit", { name: "Status", default: () => "(0)" })
  status: boolean;
}
