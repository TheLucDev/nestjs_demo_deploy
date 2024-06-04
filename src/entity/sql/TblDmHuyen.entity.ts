import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { TblDmTinh } from "./TblDmTinh.entity";
import { TblDmXa } from "./TblDmXa.entity";

@Index("PK_dmhuyen", ["mahuyen"], { unique: true })
@Entity("tblDmHuyen", { schema: "dbo" })
export class TblDmHuyen {
  @Column("varchar", { primary: true, name: "mahuyen", length: 5 })
  mahuyen: string;

  @Column("nvarchar", { name: "tenhuyen", nullable: true, length: 50 })
  tenhuyen: string | null;

  @Column("int", { name: "sott", nullable: true })
  sott: number | null;

  @Column("bit", { name: "show", nullable: true })
  show: boolean | null;

  @ManyToOne(() => TblDmTinh, (tblDmTinh) => tblDmTinh.tblDmHuyens, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "matinh", referencedColumnName: "matinh" }])
  matinh: TblDmTinh;

  @OneToMany(() => TblDmXa, (tblDmXa) => tblDmXa.mahuyen)
  tblDmXas: TblDmXa[];
}
