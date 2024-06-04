import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tbContact", ["idContact"], { unique: true })
@Entity("tbContact", { schema: "dbo" })
export class TbContact {
  @PrimaryGeneratedColumn({ type: "int", name: "IdContact" })
  idContact: number;

  @Column("varchar", { name: "Type", length: 4 })
  type: string;

  @Column("nvarchar", { name: "Name", length: 200 })
  name: string;

  @Column("nvarchar", { name: "Company", nullable: true, length: 50 })
  company: string | null;

  @Column("nvarchar", { name: "Address", nullable: true, length: 100 })
  address: string | null;

  @Column("varchar", { name: "Phone", nullable: true, length: 50 })
  phone: string | null;

  @Column("varchar", { name: "Email", length: 150 })
  email: string;

  @Column("nvarchar", { name: "Contact", length: 4000 })
  contact: string;

  @Column("nvarchar", { name: "Anwser", nullable: true })
  anwser: string | null;

  @Column("bit", { name: "Reply", default: () => "(0)" })
  reply: boolean;

  @Column("bit", { name: "Status", default: () => "(1)" })
  status: boolean;

  @Column("datetime", { name: "CreatedDate", default: () => "getdate()" })
  createdDate: Date;

  @Column("varchar", {
    name: "CreatedBy",
    nullable: true,
    length: 50,
    default: () => "'System'",
  })
  createdBy: string | null;

  @Column("datetime", { name: "ModifiredDate", default: () => "getdate()" })
  modifiredDate: Date;

  @Column("nvarchar", {
    name: "ModifiredBy",
    nullable: true,
    length: 50,
    default: () => "N'System'",
  })
  modifiredBy: string | null;
}
