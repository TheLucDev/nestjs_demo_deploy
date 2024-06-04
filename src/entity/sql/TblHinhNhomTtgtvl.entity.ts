import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblDmNhomHinhTTGTVL", ["idGrpCate"], { unique: true })
@Entity("tblHinhNhomTTGTVL", { schema: "dbo" })
export class TblHinhNhomTtgtvl {
  @PrimaryGeneratedColumn({ type: "int", name: "IdGrpCate" })
  idGrpCate: number;

  @Column("nvarchar", { name: "TenNhomHinh", length: 100 })
  tenNhomHinh: string;

  @Column("nvarchar", { name: "ImagePath", nullable: true, length: 250 })
  imagePath: string | null;

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
