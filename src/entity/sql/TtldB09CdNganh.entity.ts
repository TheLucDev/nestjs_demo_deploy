import { Column, Entity, Index } from "typeorm";

@Index("PK_ttldB09CDNganh", ["manhom", "madonvi", "quy", "nam"], {
  unique: true,
})
@Entity("ttldB09CDNganh", { schema: "dbo" })
export class TtldB09CdNganh {
  @Column("varchar", { primary: true, name: "Madonvi", length: 15 })
  madonvi: string;

  @Column("int", { primary: true, name: "Quy" })
  quy: number;

  @Column("int", { primary: true, name: "Nam" })
  nam: number;

  @Column("varchar", { primary: true, name: "Manhom", length: 4 })
  manhom: string;

  @Column("numeric", {
    name: "Solieu",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  solieu: number | null;

  @Column("varchar", { name: "NamQuy", nullable: true, length: 60 })
  namQuy: string | null;
}
