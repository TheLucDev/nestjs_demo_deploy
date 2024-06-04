import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Index("PK_tbMenuWorker", ["idMenu"], { unique: true })
@Entity("tbMenuWorker", { schema: "dbo" })
export class TbMenuWorker {
  @PrimaryGeneratedColumn({ type: "int", name: "IdOrder" })
  idOrder: number;

  @Column("varchar", { primary: true, name: "IdMenu", length: 50 })
  idMenu: string;

  @Column("int", { name: "GroupLevel", default: () => "(0)" })
  groupLevel: number;

  @Column("nvarchar", { name: "Description", length: 120 })
  description: string;

  @Column("varchar", { name: "IdController", nullable: true, length: 50 })
  idController: string | null;

  @Column("varchar", { name: "IdAction", nullable: true, length: 50 })
  idAction: string | null;

  @Column("nvarchar", { name: "ControllerActive", nullable: true, length: 500 })
  controllerActive: string | null;

  @Column("bit", { name: "href" })
  href: boolean;

  @Column("int", { name: "DisplayOrder", default: () => "(0)" })
  displayOrder: number;

  @Column("datetime", { name: "CreatedDate", default: () => "getdate()" })
  createdDate: Date;

  @Column("varchar", {
    name: "CreatedBy",
    length: 50,
    default: () => "'SYSTEM'",
  })
  createdBy: string;

  @Column("datetime", { name: "ModifiredDate", default: () => "getdate()" })
  modifiredDate: Date;

  @Column("varchar", {
    name: "ModifiredBy",
    length: 50,
    default: () => "'SYSTEM'",
  })
  modifiredBy: string;

  @Column("bit", { name: "Status", default: () => "(0)" })
  status: boolean;

  @Column("bit", { name: "ShowOnline", default: () => "(1)" })
  showOnline: boolean;

  @ManyToOne(() => TbMenuWorker, (tbMenuWorker) => tbMenuWorker.tbMenuWorkers)
  @JoinColumn([{ name: "ParentId", referencedColumnName: "idMenu" }])
  parent: TbMenuWorker;

  @OneToMany(() => TbMenuWorker, (tbMenuWorker) => tbMenuWorker.parent)
  tbMenuWorkers: TbMenuWorker[];
}
