import { Column, Entity, Index } from "typeorm";

@Index("PK_QLCV_Dot", ["idDot"], { unique: true })
@Entity("QLCV_Dot", { schema: "dbo" })
export class QlcvDot {
  @Column("int", { primary: true, name: "IdDot" })
  idDot: number;

  @Column("nvarchar", { name: "Ten", length: 255 })
  ten: string;

  @Column("datetime", { name: "Ngay" })
  ngay: Date;

  @Column("datetime", { name: "Batdau" })
  batdau: Date;

  @Column("datetime", { name: "Ketthuc" })
  ketthuc: Date;

  @Column("bit", { name: "Status", default: () => "(1)" })
  status: boolean;

  @Column("int", { name: "Monitor" })
  monitor: number;

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
