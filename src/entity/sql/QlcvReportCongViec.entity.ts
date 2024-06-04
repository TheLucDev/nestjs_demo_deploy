import { Column, Entity, Index } from "typeorm";

@Index("PK_QLCVReportCongViec", ["idqlcv"], { unique: true })
@Entity("QLCVReportCongViec", { schema: "dbo" })
export class QlcvReportCongViec {
  @Column("bigint", { primary: true, name: "Idqlcv" })
  idqlcv: string;

  @Column("bigint", { name: "IdParent", nullable: true })
  idParent: string | null;

  @Column("varchar", { name: "tagname", nullable: true, length: 20 })
  tagname: string | null;

  @Column("datetime", { name: "Ngay", nullable: true })
  ngay: Date | null;

  @Column("nvarchar", { name: "TenCongViec", nullable: true, length: 255 })
  tenCongViec: string | null;

  @Column("nvarchar", { name: "DonviChuTri", nullable: true, length: 255 })
  donviChuTri: string | null;

  @Column("nvarchar", { name: "NguoiChuTri", nullable: true, length: 50 })
  nguoiChuTri: string | null;

  @Column("nvarchar", { name: "Nguoithuchien", nullable: true, length: 50 })
  nguoithuchien: string | null;

  @Column("nvarchar", { name: "DonviPhoihop", nullable: true, length: 255 })
  donviPhoihop: string | null;

  @Column("nvarchar", { name: "NguoiPhoiHop", nullable: true, length: 50 })
  nguoiPhoiHop: string | null;

  @Column("datetime", { name: "NgayBatDau", nullable: true })
  ngayBatDau: Date | null;

  @Column("datetime", { name: "NgayKetThuc", nullable: true })
  ngayKetThuc: Date | null;

  @Column("datetime", { name: "StartDate", nullable: true })
  startDate: Date | null;

  @Column("datetime", { name: "EndDate", nullable: true })
  endDate: Date | null;

  @Column("bit", { name: "Status" })
  status: boolean;

  @Column("bit", { name: "DuyetLeader", nullable: true })
  duyetLeader: boolean | null;

  @Column("int", { name: "Songaythuchien" })
  songaythuchien: number;

  @Column("int", { name: "Songaydalam" })
  songaydalam: number;

  @Column("numeric", { name: "Tyle", nullable: true, precision: 6, scale: 2 })
  tyle: number | null;

  @Column("int", { name: "Songayquahan" })
  songayquahan: number;

  @Column("int", { name: "DisplayOrder" })
  displayOrder: number;

  @Column("nvarchar", { name: "Trangthai", nullable: true, length: 50 })
  trangthai: string | null;
}
