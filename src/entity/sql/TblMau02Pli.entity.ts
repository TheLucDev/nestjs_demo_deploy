import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblMau02PLI", ["idphieu"], { unique: true })
@Entity("tblMau02PLI", { schema: "dbo" })
export class TblMau02Pli {
  @PrimaryGeneratedColumn({ type: "bigint", name: "Idphieu" })
  idphieu: string;

  @Column("datetime", { name: "Ngaylap", default: () => "getdate()" })
  ngaylap: Date;

  @Column("varchar", { name: "Maso", length: 20 })
  maso: string;

  @Column("nvarchar", { name: "Noiden", nullable: true, length: 255 })
  noiden: string | null;

  @Column("int", { name: "Soluong", default: () => "(0)" })
  soluong: number;

  @Column("nvarchar", { name: "Daidien", nullable: true, length: 50 })
  daidien: string | null;

  @Column("nvarchar", { name: "DiachiLH", nullable: true, length: 255 })
  diachiLh: string | null;

  @Column("nvarchar", { name: "Dienthoai", nullable: true, length: 50 })
  dienthoai: string | null;

  @Column("nvarchar", { name: "Email", nullable: true, length: 255 })
  email: string | null;

  @Column("nvarchar", { name: "TenLienkhac", nullable: true, length: 255 })
  tenLienkhac: string | null;

  @Column("bit", { name: "chkTuvanCS", default: () => "(0)" })
  chkTuvanCs: boolean;

  @Column("bit", { name: "chkTuvanVL", default: () => "(0)" })
  chkTuvanVl: boolean;

  @Column("bit", { name: "chkTuvanDT", default: () => "(0)" })
  chkTuvanDt: boolean;

  @Column("bit", { name: "chkTuvankhac", default: () => "(0)" })
  chkTuvankhac: boolean;

  @Column("nvarchar", { name: "DKyKhac", nullable: true, length: 255 })
  dKyKhac: string | null;

  @Column("nvarchar", { name: "ThoigianDK", nullable: true, length: 255 })
  thoigianDk: string | null;

  @Column("varchar", { name: "UserName", length: 50 })
  userName: string;

  @Column("int", { name: "DisplayOrder", default: () => "(0)" })
  displayOrder: number;

  @Column("datetime", { name: "CreatedDate", default: () => "getdate()" })
  createdDate: Date;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "ModifiredDate", default: () => "getdate()" })
  modifiredDate: Date;

  @Column("nvarchar", { name: "ModifiredBy", length: 50 })
  modifiredBy: string;

  @Column("bit", { name: "Status", default: () => "(1)" })
  status: boolean;
}
