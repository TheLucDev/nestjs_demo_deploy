import { Column, Entity, Index } from "typeorm";

@Index("PK_tblAppSettings", ["idInformation"], { unique: true })
@Entity("tblAppSettings", { schema: "dbo" })
export class TblAppSettings {
  @Column("bit", { primary: true, name: "IdInformation" })
  idInformation: boolean;

  @Column("varchar", { name: "Madonvi", nullable: true, length: 15 })
  madonvi: string | null;

  @Column("nvarchar", { name: "NoiNopHoSo", nullable: true, length: 4000 })
  noiNopHoSo: string | null;

  @Column("nvarchar", {
    name: "HoSoTuyenDungBaoGom",
    nullable: true,
    length: 4000,
  })
  hoSoTuyenDungBaoGom: string | null;

  @Column("nvarchar", { name: "GhiChuTuyenDung", nullable: true, length: 4000 })
  ghiChuTuyenDung: string | null;

  @Column("nvarchar", {
    name: "QuyenLoiTuyenDung",
    nullable: true,
    length: 4000,
  })
  quyenLoiTuyenDung: string | null;

  @Column("varchar", { name: "EmailDefault", nullable: true, length: 150 })
  emailDefault: string | null;

  @Column("varchar", { name: "PasswordDefault", nullable: true, length: 150 })
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

  @Column("varchar", { name: "EmailUser", nullable: true, length: 255 })
  emailUser: string | null;

  @Column("varchar", { name: "EmailPassword", nullable: true, length: 255 })
  emailPassword: string | null;

  @Column("varchar", { name: "MaTinh", nullable: true, length: 2 })
  maTinh: string | null;

  @Column("varchar", { name: "MaHuyen", nullable: true, length: 5 })
  maHuyen: string | null;

  @Column("varchar", { name: "MaXa", nullable: true, length: 8 })
  maXa: string | null;

  @Column("numeric", {
    name: "Tongdanso",
    nullable: true,
    precision: 18,
    scale: 0,
  })
  tongdanso: number | null;

  @Column("numeric", {
    name: "TyleNam",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  tyleNam: number | null;

  @Column("numeric", {
    name: "DansoNam",
    nullable: true,
    precision: 18,
    scale: 0,
  })
  dansoNam: number | null;

  @Column("numeric", {
    name: "TyleNu",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  tyleNu: number | null;

  @Column("numeric", {
    name: "DansoNu",
    nullable: true,
    precision: 18,
    scale: 0,
  })
  dansoNu: number | null;

  @Column("numeric", {
    name: "TyleTT",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  tyleTt: number | null;

  @Column("numeric", {
    name: "Thanhthi",
    nullable: true,
    precision: 18,
    scale: 0,
  })
  thanhthi: number | null;

  @Column("numeric", {
    name: "TyleNT",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  tyleNt: number | null;

  @Column("numeric", {
    name: "Nongthon",
    nullable: true,
    precision: 18,
    scale: 0,
  })
  nongthon: number | null;

  @Column("numeric", {
    name: "TyleLD",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  tyleLd: number | null;

  @Column("numeric", {
    name: "DansoLD",
    nullable: true,
    precision: 18,
    scale: 0,
  })
  dansoLd: number | null;
}
