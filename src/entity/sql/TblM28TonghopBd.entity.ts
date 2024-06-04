import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblM28TonghopBD", ["id"], { unique: true })
@Entity("tblM28TonghopBD", { schema: "dbo" })
export class TblM28TonghopBd {
  @PrimaryGeneratedColumn({ type: "bigint", name: "Id" })
  id: string;

  @Column("bigint", { name: "IdDoanhNghiep" })
  idDoanhNghiep: string;

  @Column("varchar", { name: "Madonvi", length: 15 })
  madonvi: string;

  @Column("int", { name: "Thangbc" })
  thangbc: number;

  @Column("int", { name: "Nambc" })
  nambc: number;

  @Column("int", { name: "DisplayOrder", default: () => "(0)" })
  displayOrder: number;

  @Column("int", { name: "Tongso", nullable: true })
  tongso: number | null;

  @Column("int", { name: "TrongdoNu", nullable: true })
  trongdoNu: number | null;

  @Column("int", { name: "CMKTKhongbang", nullable: true })
  cmktKhongbang: number | null;

  @Column("int", { name: "Daotaoduoi3thang", nullable: true })
  daotaoduoi3thang: number | null;

  @Column("int", { name: "Socapnghe", nullable: true })
  socapnghe: number | null;

  @Column("int", { name: "Trungcap", nullable: true })
  trungcap: number | null;

  @Column("int", { name: "caodang", nullable: true })
  caodang: number | null;

  @Column("int", { name: "DaihocSDH", nullable: true })
  daihocSdh: number | null;

  @Column("int", { name: "HdKXD", nullable: true })
  hdKxd: number | null;

  @Column("int", { name: "HdHD3T", nullable: true })
  hdHd3T: number | null;

  @Column("int", { name: "HdH12T", nullable: true })
  hdH12T: number | null;

  @Column("int", { name: "HdHT12", nullable: true })
  hdHt12: number | null;

  @Column("int", { name: "TongsoBHTN", nullable: true })
  tongsoBhtn: number | null;

  @Column("bit", { name: "Status", nullable: true })
  status: boolean | null;

  @Column("nvarchar", { name: "Ghichu", nullable: true, length: 255 })
  ghichu: string | null;
}
