import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TblTuyenDung } from './TblTuyenDung.entity';

@Index('PK_tb_dm_trinhdongoaingu', ['tdnnId'], { unique: true })
@Entity('tblDmTrinhDoNgoaiNgu', { schema: 'dbo' })
export class TblDmTrinhDoNgoaiNgu {
  @Column('varchar', { primary: true, name: 'tdnn_id', length: 5 })
  tdnnId: string;

  @Column('nvarchar', { name: 'tdnn_ten', length: 50 })
  tdnnTen: string;

  @Column('int', { name: 'DisplayOrder', default: () => '(1)' })
  displayOrder: number;

  @Column('datetime', { name: 'CreatedDate', default: () => 'getdate()' })
  createdDate: Date;

  @Column('varchar', {
    name: 'CreatedBy',
    length: 50,
    default: () => "'system'",
  })
  createdBy: string;

  @Column('datetime', { name: 'ModifiredDate', default: () => 'getdate()' })
  modifiredDate: Date;

  @Column('varchar', {
    name: 'ModifiredBy',
    length: 50,
    default: () => "'system'",
  })
  modifiredBy: string;

  @Column('bit', { name: 'Status', default: () => '(1)' })
  status: boolean;

  @OneToMany(
    () => TblTuyenDung,
    (tblTuyenDung) => tblTuyenDung.tdYeuCauNgoaiNgu,
  )
  tblTuyenDungs: TblTuyenDung[];
}
