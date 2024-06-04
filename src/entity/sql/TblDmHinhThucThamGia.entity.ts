import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tb_dm_hinhthucthamgia", ["thamgiaId"], { unique: true })
@Entity("tblDmHinhThucThamGia", { schema: "dbo" })
export class TblDmHinhThucThamGia {
  @PrimaryGeneratedColumn({ type: "int", name: "thamgia_id" })
  thamgiaId: number;

  @Column("nvarchar", { name: "muc_thamgia", length: 200 })
  mucThamgia: string;

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
