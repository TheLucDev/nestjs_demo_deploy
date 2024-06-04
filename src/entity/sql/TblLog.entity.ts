import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("tblLog", { schema: "dbo" })
export class TblLog {
  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @Column("datetime", { name: "Date", default: () => "getdate()" })
  date: Date;

  @Column("nvarchar", { name: "Thread", length: 255 })
  thread: string;

  @Column("nvarchar", { name: "Level", length: 512 })
  level: string;

  @Column("nvarchar", { name: "Logger", length: 512 })
  logger: string;

  @Column("nvarchar", { name: "Message", length: 4000 })
  message: string;

  @Column("nvarchar", { name: "Exception", nullable: true, length: 4000 })
  exception: string | null;
}
