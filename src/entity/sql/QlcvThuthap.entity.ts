import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_QLCV_Thuthap", ["idcv"], { unique: true })
@Entity("QLCV_Thuthap", { schema: "dbo" })
export class QlcvThuthap {
  @PrimaryGeneratedColumn({ type: "bigint", name: "Idcv" })
  idcv: string;

  @Column("bigint", { name: "Idphancong", nullable: true })
  idphancong: string | null;

  @Column("varchar", { name: "IdNhanvien", length: 15 })
  idNhanvien: string;

  @Column("datetime", { name: "Ngay" })
  ngay: Date;

  @Column("varchar", { name: "IdNguonThuThap", nullable: true, length: 3 })
  idNguonThuThap: string | null;

  @Column("bigint", { name: "IdDoanhNghiep" })
  idDoanhNghiep: string;

  @Column("varchar", { name: "IdNhomNganh", nullable: true, length: 4 })
  idNhomNganh: string | null;

  @Column("int", { name: "Nganh_id", nullable: true })
  nganhId: number | null;

  @Column("int", { name: "Idchucdanh", nullable: true })
  idchucdanh: number | null;

  @Column("int", { name: "Hocvan_id", nullable: true })
  hocvanId: number | null;

  @Column("int", { name: "Soluong", nullable: true })
  soluong: number | null;

  @Column("nvarchar", { name: "Sonha", nullable: true, length: 50 })
  sonha: string | null;

  @Column("varchar", { name: "Matinh", nullable: true, length: 2 })
  matinh: string | null;

  @Column("varchar", { name: "Mahuyen", nullable: true, length: 5 })
  mahuyen: string | null;

  @Column("varchar", { name: "Maxa", nullable: true, length: 8 })
  maxa: string | null;

  @Column("varchar", { name: "Mathon", nullable: true, length: 12 })
  mathon: string | null;

  @Column("int", { name: "DisplayOrder" })
  displayOrder: number;

  @Column("bit", { name: "Status" })
  status: boolean;

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
}
