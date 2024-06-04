import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblDmHinhTTGTVL", ["idHinh"], { unique: true })
@Entity("tblHinhTTGTVL", { schema: "dbo" })
export class TblHinhTtgtvl {
  @PrimaryGeneratedColumn({ type: "int", name: "IdHinh" })
  idHinh: number;

  @Column("int", { name: "IdGrpCate" })
  idGrpCate: number;

  @Column("nvarchar", { name: "Title", nullable: true, length: 100 })
  title: string | null;

  @Column("nvarchar", { name: "ImagePath", nullable: true, length: 250 })
  imagePath: string | null;

  @Column("nvarchar", { name: "Description", nullable: true, length: 250 })
  description: string | null;

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
