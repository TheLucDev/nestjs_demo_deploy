import { Column, Entity, Index } from "typeorm";

@Index("PK_sysConfig", ["name"], { unique: true })
@Entity("sysConfig", { schema: "dbo" })
export class SysConfig {
  @Column("int", { name: "IdOrder", nullable: true })
  idOrder: number | null;

  @Column("varchar", { primary: true, name: "Name", length: 20 })
  name: string;

  @Column("varchar", { name: "Type", nullable: true, length: 50 })
  type: string | null;

  @Column("nvarchar", { name: "Url", nullable: true, length: 255 })
  url: string | null;

  @Column("int", { name: "ValueInterger", nullable: true })
  valueInterger: number | null;

  @Column("decimal", {
    name: "ValueNumber",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  valueNumber: number | null;

  @Column("nvarchar", { name: "ValueText", nullable: true, length: 255 })
  valueText: string | null;

  @Column("bit", { name: "Show", nullable: true })
  show: boolean | null;
}
