import { Column, Entity, Index } from "typeorm";

@Index("PK_tblAppDonvi", ["madonvi"], { unique: true })
@Entity("tblAppDonvi", { schema: "dbo" })
export class TblAppDonvi {
  @Column("int", { name: "Sott" })
  sott: number;

  @Column("int", { name: "IdCapQL" })
  idCapQl: number;

  @Column("varchar", { name: "Macaptren", length: 15 })
  macaptren: string;

  @Column("nvarchar", { name: "Tencaptren", nullable: true, length: 255 })
  tencaptren: string | null;

  @Column("varchar", { primary: true, name: "Madonvi", length: 15 })
  madonvi: string;

  @Column("nvarchar", { name: "Tendonvi", nullable: true, length: 255 })
  tendonvi: string | null;

  @Column("nvarchar", { name: "TenReport", nullable: true, length: 255 })
  tenReport: string | null;

  @Column("nvarchar", { name: "Diachi", nullable: true, length: 255 })
  diachi: string | null;

  @Column("varchar", { name: "Dienthoai", nullable: true, length: 30 })
  dienthoai: string | null;

  @Column("varchar", { name: "Email", nullable: true, length: 255 })
  email: string | null;

  @Column("varchar", { name: "Masothue", nullable: true, length: 30 })
  masothue: string | null;

  @Column("varchar", { name: "Sotk", nullable: true, length: 30 })
  sotk: string | null;

  @Column("nvarchar", { name: "Nganhang", nullable: true, length: 255 })
  nganhang: string | null;

  @Column("nvarchar", { name: "ChucdanhLD", nullable: true, length: 50 })
  chucdanhLd: string | null;

  @Column("nvarchar", { name: "TenLD", nullable: true, length: 50 })
  tenLd: string | null;

  @Column("nvarchar", { name: "ChucdanhKT", nullable: true, length: 50 })
  chucdanhKt: string | null;

  @Column("nvarchar", { name: "TenKT", nullable: true, length: 50 })
  tenKt: string | null;

  @Column("nvarchar", { name: "ChucdanhQT", nullable: true, length: 50 })
  chucdanhQt: string | null;

  @Column("nvarchar", { name: "TenQT", nullable: true, length: 50 })
  tenQt: string | null;

  @Column("nvarchar", { name: "EmailDefault", nullable: true, length: 255 })
  emailDefault: string | null;

  @Column("nvarchar", { name: "PasswordDefault", nullable: true, length: 255 })
  passwordDefault: string | null;

  @Column("varchar", { name: "SmtpServer", nullable: true, length: 150 })
  smtpServer: string | null;

  @Column("int", { name: "SmtpPort", nullable: true, default: () => "(25)" })
  smtpPort: number | null;

  @Column("bit", { name: "EnableSsl", nullable: true, default: () => "(1)" })
  enableSsl: boolean | null;

  @Column("bit", {
    name: "SmtpUseDefaultCredentials",
    nullable: true,
    default: () => "(0)",
  })
  smtpUseDefaultCredentials: boolean | null;

  @Column("nvarchar", { name: "EmailUser", nullable: true, length: 255 })
  emailUser: string | null;

  @Column("nvarchar", { name: "EmailPassword", nullable: true, length: 255 })
  emailPassword: string | null;

  @Column("varchar", { name: "MaTinh", nullable: true, length: 2 })
  maTinh: string | null;

  @Column("varchar", { name: "MaHuyen", nullable: true, length: 5 })
  maHuyen: string | null;

  @Column("varchar", { name: "MaXa", nullable: true, length: 8 })
  maXa: string | null;

  @Column("nvarchar", { name: "Thonbuon", nullable: true, length: 50 })
  thonbuon: string | null;

  @Column("image", { name: "logos", nullable: true })
  logos: Buffer | null;

  @Column("bit", { name: "Status", default: () => "(0)" })
  status: boolean;
}
