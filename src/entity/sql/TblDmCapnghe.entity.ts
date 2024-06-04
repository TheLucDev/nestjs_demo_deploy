import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblcapnghe", ["id"], { unique: true })
@Entity("tblDmCapnghe", { schema: "dbo" })
export class TblDmCapnghe {
  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @Column("int", { name: "GroupId", nullable: true })
  groupId: number | null;

  @Column("int", { name: "level1" })
  level1: number;

  @Column("int", { name: "level2", nullable: true })
  level2: number | null;

  @Column("int", { name: "level3", nullable: true })
  level3: number | null;

  @Column("int", { name: "level4", nullable: true })
  level4: number | null;

  @Column("int", { name: "level5", nullable: true })
  level5: number | null;

  @Column("nvarchar", { name: "ten", length: 255 })
  ten: string;

  @Column("int", { name: "DisplayOrder", default: () => "(0)" })
  displayOrder: number;

  @Column("datetime", { name: "CreatedDate", default: () => "getdate()" })
  createdDate: Date;

  @Column("varchar", { name: "CreatedBy", nullable: true, length: 50 })
  createdBy: string | null;

  @Column("datetime", { name: "ModifiredDate", default: () => "getdate()" })
  modifiredDate: Date;

  @Column("nvarchar", { name: "ModifiredBy", nullable: true, length: 50 })
  modifiredBy: string | null;

  @Column("bit", { name: "Status", default: () => "(1)" })
  status: boolean;
}
