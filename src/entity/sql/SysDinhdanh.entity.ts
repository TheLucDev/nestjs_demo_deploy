import { Column, Entity, Index } from "typeorm";

@Index("PK_sysDinhdanh", ["madd"], { unique: true })
@Entity("sysDinhdanh", { schema: "dbo" })
export class SysDinhdanh {
  @Column("int", { name: "Sott", nullable: true })
  sott: number | null;

  @Column("varchar", { primary: true, name: "Madd", length: 20 })
  madd: string;

  @Column("nvarchar", { name: "Tencoquan", nullable: true, length: 255 })
  tencoquan: string | null;

  @Column("nvarchar", { name: "Diachi", nullable: true, length: 255 })
  diachi: string | null;

  @Column("nvarchar", { name: "Email", nullable: true, length: 255 })
  email: string | null;

  @Column("nvarchar", { name: "Dienthoai", nullable: true, length: 50 })
  dienthoai: string | null;

  @Column("varchar", { name: "Website", nullable: true, length: 255 })
  website: string | null;

  @Column("varchar", { name: "MaQCVN102", nullable: true, length: 20 })
  maQcvn102: string | null;
}
