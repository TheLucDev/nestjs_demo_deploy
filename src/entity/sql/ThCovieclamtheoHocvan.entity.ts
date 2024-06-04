import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_thCovieclamtheoHocvan", ["id"], { unique: true })
@Entity("thCovieclamtheoHocvan", { schema: "dbo" })
export class ThCovieclamtheoHocvan {
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

  @Column("int", { name: "Tongso_Trongdotuoi", nullable: true })
  tongsoTrongdotuoi: number | null;

  @Column("int", { name: "Nam_Trongdotuoi", nullable: true })
  namTrongdotuoi: number | null;

  @Column("int", { name: "Nu_Trongdotuoi", nullable: true })
  nuTrongdotuoi: number | null;

  @Column("int", { name: "Nam_Trendotuoi", nullable: true })
  namTrendotuoi: number | null;

  @Column("int", { name: "Nu_Trendotuoi", nullable: true })
  nuTrendotuoi: number | null;

  @Column("int", { name: "Duoitieuhoc", nullable: true })
  duoitieuhoc: number | null;

  @Column("int", { name: "Hettieuhoc", nullable: true })
  hettieuhoc: number | null;

  @Column("int", { name: "HetTHCS", nullable: true })
  hetThcs: number | null;

  @Column("int", { name: "HetTHPT", nullable: true })
  hetThpt: number | null;

  @Column("bit", { name: "Status", nullable: true })
  status: boolean | null;
}
