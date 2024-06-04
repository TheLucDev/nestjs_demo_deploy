import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tb_hinhthucdaotao", ["htdtId"], { unique: true })
@Entity("tblDmHinhThucDaoTao", { schema: "dbo" })
export class TblDmHinhThucDaoTao {
  @PrimaryGeneratedColumn({ type: "int", name: "htdt_id" })
  htdtId: number;

  @Column("nvarchar", { name: "htdt_ten", length: 150 })
  htdtTen: string;

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
