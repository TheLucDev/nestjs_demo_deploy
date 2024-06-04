import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TblTuyenDung } from './TblTuyenDung.entity';

@Index('PK_tb_dm_trinhdotinhoc', ['tdthId'], { unique: true })
@Entity('tblDmTrinhDoTinHoc', { schema: 'dbo' })
export class TblDmTrinhDoTinHoc {
  @Column('varchar', { primary: true, name: 'tdth_id', length: 5 })
  tdthId: string;

  @Column('nvarchar', { name: 'tdth_ten', length: 50 })
  tdthTen: string;

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

  @OneToMany(() => TblTuyenDung, (tblTuyenDung) => tblTuyenDung.tdYeuCauTinHoc)
  tblTuyenDungs: TblTuyenDung[];
}
