import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tbl_Customer", ["idCustomer"], { unique: true })
@Entity("tbCustomer", { schema: "dbo" })
export class TbCustomer {
  @PrimaryGeneratedColumn({ type: "bigint", name: "IdCustomer" })
  idCustomer: string;

  @Column("varchar", { name: "UserName", length: 50 })
  userName: string;

  @Column("nvarchar", { name: "Password", length: 128 })
  password: string;

  @Column("nvarchar", { name: "FullName", length: 200 })
  fullName: string;

  @Column("nvarchar", { name: "Email", length: 50 })
  email: string;

  @Column("nvarchar", { name: "Address", nullable: true, length: 500 })
  address: string | null;

  @Column("nvarchar", { name: "Mobile", nullable: true, length: 50 })
  mobile: string | null;

  @Column("date", { name: "BirthDay", nullable: true })
  birthDay: Date | null;

  @Column("bit", { name: "IsMale", nullable: true })
  isMale: boolean | null;

  @Column("varchar", { name: "BHYT", nullable: true, length: 15 })
  bhyt: string | null;

  @Column("date", { name: "Effective", nullable: true })
  effective: Date | null;

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

  @Column("bit", { name: "IsLocked", default: () => "(0)" })
  isLocked: boolean;
}
