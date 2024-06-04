import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblM28Tonghop", ["id"], { unique: true })
@Entity("tblM28Tonghop", { schema: "dbo" })
export class TblM28Tonghop {
  @PrimaryGeneratedColumn({ type: "bigint", name: "Id" })
  id: string;

  @Column("bigint", { name: "IdDN" })
  idDn: string;

  @Column("int", { name: "Thang" })
  thang: number;

  @Column("int", { name: "Nam" })
  nam: number;

  @Column("int", { name: "DisplayOrder" })
  displayOrder: number;

  @Column("int", { name: "Tongso", nullable: true })
  tongso: number | null;

  @Column("int", { name: "TongsoNu", nullable: true })
  tongsoNu: number | null;

  @Column("int", { name: "Chuaquadaotao", nullable: true })
  chuaquadaotao: number | null;

  @Column("int", { name: "CMKTKhongbang", nullable: true })
  cmktKhongbang: number | null;

  @Column("int", { name: "Daotaoduoi3thang", nullable: true })
  daotaoduoi3thang: number | null;

  @Column("int", { name: "Socapnghe", nullable: true })
  socapnghe: number | null;

  @Column("int", { name: "Trungcap", nullable: true })
  trungcap: number | null;

  @Column("int", { name: "Caodang", nullable: true })
  caodang: number | null;

  @Column("int", { name: "Daihoc", nullable: true })
  daihoc: number | null;

  @Column("numeric", {
    name: "Thacsy",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  thacsy: number | null;

  @Column("numeric", {
    name: "Tiensy",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  tiensy: number | null;

  @Column("numeric", { name: "Khac", nullable: true, precision: 18, scale: 2 })
  khac: number | null;

  @Column("bit", { name: "Status", nullable: true })
  status: boolean | null;

  @Column("varchar", { name: "NamThang", nullable: true, length: 60 })
  namThang: string | null;
}
