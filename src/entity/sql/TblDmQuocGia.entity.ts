import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TblDKyXkld } from './TblDKyXkld.entity';

@Index('PK_tb_dm_quocgia', ['maQuocGia'], { unique: true })
@Entity('tblDmQuocGia', { schema: 'dbo' })
export class TblDmQuocGia {
  @Column('int', { primary: true, name: 'ma_quoc_gia' })
  maQuocGia: number;

  @Column('nvarchar', { name: 'ten_quoc_gia', length: 255 })
  tenQuocGia: string;

  @Column('varchar', { name: 'viettat', nullable: true, length: 5 })
  viettat: string | null;

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

  @OneToMany(() => TblDKyXkld, (tblDKyXkld) => tblDKyXkld.dkxklddmQuocgia)
  tblDKyXklds: TblDKyXkld[];
}
