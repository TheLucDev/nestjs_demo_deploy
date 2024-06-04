import { Column, Entity, Index } from "typeorm";

@Index("PK_sysControllerBackend", ["idController"], { unique: true })
@Entity("sysControllerBackend", { schema: "dbo" })
export class SysControllerBackend {
  @Column("varchar", { primary: true, name: "IdController", length: 21 })
  idController: string;

  @Column("nvarchar", { name: "Title", length: 150 })
  title: string;

  @Column("datetime", { name: "CreatedDate", default: () => "getdate()" })
  createdDate: Date;

  @Column("varchar", {
    name: "CreatedBy",
    length: 50,
    default: () => "'System'",
  })
  createdBy: string;

  @Column("datetime", { name: "ModifiredDate", default: () => "getdate()" })
  modifiredDate: Date;

  @Column("nvarchar", {
    name: "ModifiredBy",
    length: 50,
    default: () => "N'System'",
  })
  modifiredBy: string;

  @Column("bit", { name: "Status", default: () => "(1)" })
  status: boolean;
}
