import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tb_dm_loaihinhdaotao", ["loaihinhId"], { unique: true })
@Entity("tblDmLoaiHinhDaoTao", { schema: "dbo" })
export class TblDmLoaiHinhDaoTao {
  @PrimaryGeneratedColumn({ type: "int", name: "loaihinh_id" })
  loaihinhId: number;

  @Column("nvarchar", { name: "loaihinh_ten", nullable: true, length: 150 })
  loaihinhTen: string | null;

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
