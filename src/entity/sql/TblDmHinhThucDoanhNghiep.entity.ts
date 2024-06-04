import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TblDKySgd } from "./TblDKySgd.entity";
import { TblHoSoUngVien } from "./TblHoSoUngVien.entity";
import { TblNhaTuyenDung } from "./TblNhaTuyenDung.entity";

@Index("PK_tb_dm_hinhthucdoanhnghiep", ["maHinhthuc"], { unique: true })
@Entity("tblDmHinhThucDoanhNghiep", { schema: "dbo" })
export class TblDmHinhThucDoanhNghiep {
  @PrimaryGeneratedColumn({ type: "int", name: "ma_hinhthuc" })
  maHinhthuc: number;

  @Column("nvarchar", { name: "ten_hinhthuc", length: 150 })
  tenHinhthuc: string;

  @Column("int", { name: "DisplayOrder", default: () => "(1)" })
  displayOrder: number;

  @Column("datetime", { name: "CreatedDate", default: () => "getdate()" })
  createdDate: Date;

  @Column("varchar", {
    name: "CreatedBy",
    length: 50,
    default: () => "'system'",
  })
  createdBy: string;

  @Column("datetime", { name: "ModifiredDate", default: () => "getdate()" })
  modifiredDate: Date;

  @Column("varchar", {
    name: "ModifiredBy",
    length: 50,
    default: () => "'system'",
  })
  modifiredBy: string;

  @Column("bit", { name: "Status", default: () => "(1)" })
  status: boolean;

  @OneToMany(
    () => TblDKySgd,
    (tblDKySgd) => tblDKySgd.dksgddmHinhthucdoanhnghiep
  )
  tblDKySgds: TblDKySgd[];

  @OneToMany(
    () => TblHoSoUngVien,
    (tblHoSoUngVien) => tblHoSoUngVien.uvnvHinhthuccongty
  )
  tblHoSoUngViens: TblHoSoUngVien[];

  @OneToMany(
    () => TblNhaTuyenDung,
    (tblNhaTuyenDung) => tblNhaTuyenDung.ntdHinhthucdoanhnghiep
  )
  tblNhaTuyenDungs: TblNhaTuyenDung[];
}
