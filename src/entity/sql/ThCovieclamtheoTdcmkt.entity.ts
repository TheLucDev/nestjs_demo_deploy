import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_thCovieclamtheoTDCMKT", ["id"], { unique: true })
@Entity("thCovieclamtheoTDCMKT", { schema: "dbo" })
export class ThCovieclamtheoTdcmkt {
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

  @Column("int", { name: "Chuaquadaotao", nullable: true })
  chuaquadaotao: number | null;

  @Column("int", { name: "CMKTKhongbang", nullable: true })
  cmktKhongbang: number | null;

  @Column("int", { name: "Daotaoduoi3thang", nullable: true })
  daotaoduoi3thang: number | null;

  @Column("int", { name: "Socapnghe", nullable: true })
  socapnghe: number | null;

  @Column("int", { name: "Bangnghedaihan", nullable: true })
  bangnghedaihan: number | null;

  @Column("int", { name: "Trungcapnghe", nullable: true })
  trungcapnghe: number | null;

  @Column("int", { name: "Trunghocchuyennghiep", nullable: true })
  trunghocchuyennghiep: number | null;

  @Column("int", { name: "Caodangnghe", nullable: true })
  caodangnghe: number | null;

  @Column("int", { name: "Caodangnghechuyennghiep", nullable: true })
  caodangnghechuyennghiep: number | null;

  @Column("int", { name: "Daihoc", nullable: true })
  daihoc: number | null;

  @Column("int", { name: "Thacsy", nullable: true })
  thacsy: number | null;

  @Column("int", { name: "Tiensy", nullable: true })
  tiensy: number | null;

  @Column("int", { name: "Khac", nullable: true })
  khac: number | null;

  @Column("bit", { name: "Status", nullable: true })
  status: boolean | null;
}
