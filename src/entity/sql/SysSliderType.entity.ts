import { Column, Entity, Index } from "typeorm";

@Index("PK_sysSliderType", ["idSliderType"], { unique: true })
@Entity("sysSliderType", { schema: "dbo" })
export class SysSliderType {
  @Column("varchar", { primary: true, name: "IdSliderType", length: 10 })
  idSliderType: string;

  @Column("int", { name: "DisplayOrder" })
  displayOrder: number;

  @Column("bit", { name: "Status" })
  status: boolean;
}
