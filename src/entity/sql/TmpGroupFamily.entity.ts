import { Column, Entity, Index, OneToMany } from "typeorm";
import { TmpFamily } from "./TmpFamily.entity";

@Index("PK_tmpGroupFamily", ["idGroup"], { unique: true })
@Entity("tmpGroupFamily", { schema: "dbo" })
export class TmpGroupFamily {
  @Column("int", { primary: true, name: "IdGroup" })
  idGroup: number;

  @Column("varchar", { name: "Kyhieu", nullable: true, length: 5 })
  kyhieu: string | null;

  @Column("nvarchar", { name: "Ten", nullable: true, length: 255 })
  ten: string | null;

  @Column("bit", { name: "Status", nullable: true })
  status: boolean | null;

  @OneToMany(() => TmpFamily, (tmpFamily) => tmpFamily.idGroup2)
  tmpFamilies: TmpFamily[];
}
