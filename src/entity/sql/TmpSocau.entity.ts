import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tmpSocau", ["id"], { unique: true })
@Entity("tmpSocau", { schema: "dbo" })
export class TmpSocau {
  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @Column("int", { name: "DisplayOrder", nullable: true })
  displayOrder: number | null;

  @Column("int", { name: "GroupId" })
  groupId: number;

  @Column("varchar", { name: "thutu", nullable: true, length: 10 })
  thutu: string | null;

  @Column("varchar", { name: "Address", nullable: true, length: 10 })
  address: string | null;

  @Column("varchar", { name: "Matk", nullable: true, length: 20 })
  matk: string | null;

  @Column("nvarchar", { name: "Chitieu", length: 255 })
  chitieu: string;

  @Column("bit", { name: "Header" })
  header: boolean;

  @Column("bit", { name: "Status" })
  status: boolean;
}
