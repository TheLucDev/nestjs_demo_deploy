import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblM04PLIN23", ["id"], { unique: true })
@Entity("tblM04PLIN23", { schema: "dbo" })
export class TblM04Plin23 {
  @PrimaryGeneratedColumn({ type: "bigint", name: "Id" })
  id: string;

  @Column("datetime", { name: "Ngaylap", default: () => "getdate()" })
  ngaylap: Date;

  @Column("bigint", { name: "IdUV" })
  idUv: string;

  @Column("bigint", { name: "IdDN" })
  idDn: string;

  @Column("int", { name: "IdChucdanh" })
  idChucdanh: number;

  @Column("int", { name: "IdNganhC4" })
  idNganhC4: number;

  @Column("numeric", {
    name: "Mucluongchinh",
    nullable: true,
    precision: 18,
    scale: 0,
  })
  mucluongchinh: number | null;

  @Column("numeric", {
    name: "MucluongBHTN",
    nullable: true,
    precision: 18,
    scale: 0,
  })
  mucluongBhtn: number | null;

  @Column("varchar", { name: "IdLoaiDHLD", nullable: true, length: 4 })
  idLoaiDhld: string | null;

  @Column("datetime", { name: "NgayHDLD", default: () => "getdate()" })
  ngayHdld: Date;

  @Column("datetime", { name: "NgayHieuluc", default: () => "getdate()" })
  ngayHieuluc: Date;

  @Column("datetime", { name: "Ngayketthuc", default: () => "getdate()" })
  ngayketthuc: Date;

  @Column("nvarchar", { name: "Ghichu", nullable: true, length: 255 })
  ghichu: string | null;

  @Column("bit", { name: "Status", default: () => "(1)" })
  status: boolean;

  @Column("int", { name: "DisplayOrder", default: () => "(0)" })
  displayOrder: number;

  @Column("datetime", { name: "CreatedDate", default: () => "getdate()" })
  createdDate: Date;

  @Column("varchar", { name: "CreatedBy", nullable: true, length: 50 })
  createdBy: string | null;

  @Column("datetime", { name: "ModifiredDate", default: () => "getdate()" })
  modifiredDate: Date;

  @Column("nvarchar", { name: "ModifiredBy", nullable: true, length: 50 })
  modifiredBy: string | null;
}
