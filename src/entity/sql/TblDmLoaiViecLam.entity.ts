import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tb_dm_loaivieclam", ["loaivieclamId"], { unique: true })
@Entity("tblDmLoaiViecLam", { schema: "dbo" })
export class TblDmLoaiViecLam {
  @PrimaryGeneratedColumn({ type: "int", name: "loaivieclam_id" })
  loaivieclamId: number;

  @Column("nvarchar", { name: "loaivieclam_ten", length: 100 })
  loaivieclamTen: string;

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
