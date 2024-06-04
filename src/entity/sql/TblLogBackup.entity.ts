import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("tblLogBackup", { schema: "dbo" })
export class TblLogBackup {
  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @Column("nvarchar", { name: "BackupFile", nullable: true, length: 250 })
  backupFile: string | null;

  @Column("nvarchar", { name: "Description", nullable: true, length: 250 })
  description: string | null;

  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;

  @Column("datetime", { name: "CreatedDate" })
  createdDate: Date;

  @Column("varchar", { name: "ModifiredBy", length: 50 })
  modifiredBy: string;

  @Column("datetime", { name: "ModifiredDate" })
  modifiredDate: Date;
}
