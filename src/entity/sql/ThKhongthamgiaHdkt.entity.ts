import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_thKhongthamgiaHDKT", ["id"], { unique: true })
@Entity("thKhongthamgiaHDKT", { schema: "dbo" })
export class ThKhongthamgiaHdkt {
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

  @Column("int", { name: "Tongso", nullable: true })
  tongso: number | null;

  @Column("int", { name: "Nam", nullable: true })
  nam: number | null;

  @Column("int", { name: "Nu", nullable: true })
  nu: number | null;

  @Column("int", { name: "ThanhThi", nullable: true })
  thanhThi: number | null;

  @Column("int", { name: "NongThon", nullable: true })
  nongThon: number | null;

  @Column("int", { name: "Duoidotuoi", nullable: true })
  duoidotuoi: number | null;

  @Column("int", { name: "Trongdotuoi", nullable: true })
  trongdotuoi: number | null;

  @Column("int", { name: "Trendotuoi", nullable: true })
  trendotuoi: number | null;

  @Column("bit", { name: "Status", nullable: true })
  status: boolean | null;
}
