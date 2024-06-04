import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblChapNoiNhaTuyenDungUngVien", ["id"], { unique: true })
@Entity("tblChapNoi", { schema: "dbo" })
export class TblChapNoi {
  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @Column("varchar", {
    name: "IdKieuChapNoi",
    length: 3,
    default: () => "'PCN'",
  })
  idKieuChapNoi: string;

  @Column("bigint", { name: "IdUngVien", nullable: true })
  idUngVien: string | null;

  @Column("bigint", { name: "IdDoanhNghiep", nullable: true })
  idDoanhNghiep: string | null;

  @Column("bigint", { name: "IdTuyenDung", nullable: true })
  idTuyenDung: string | null;

  @Column("datetime", { name: "NgayMuonHS", default: () => "getdate()" })
  ngayMuonHs: Date;

  @Column("datetime", {
    name: "NgayTraHS",
    nullable: true,
    default: () => "getdate()",
  })
  ngayTraHs: Date | null;

  @Column("ntext", { name: "GhiChu", nullable: true })
  ghiChu: string | null;

  @Column("int", { name: "IdKetQua" })
  idKetQua: number;

  @Column("int", { name: "DisplayOrder" })
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
}
