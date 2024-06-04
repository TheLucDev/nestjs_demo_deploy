import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TblDmnhanvien } from './TblDmnhanvien.entity';

@Index('PK_tblPhongban', ['maphong'], { unique: true })
@Entity('tblPhongban', { schema: 'dbo' })
export class TblPhongban {
  @Column('varchar', { primary: true, name: 'maphong', length: 4 })
  maphong: string;

  @Column('nvarchar', { name: 'tenphong', nullable: true, length: 255 })
  tenphong: string | null;

  @Column('nvarchar', { name: 'diachi', nullable: true, length: 255 })
  diachi: string | null;

  @Column('varchar', { name: 'dienthoai', nullable: true, length: 30 })
  dienthoai: string | null;

  @Column('nvarchar', { name: 'email', nullable: true, length: 255 })
  email: string | null;

  @Column('nvarchar', { name: 'lanhdao', nullable: true, length: 255 })
  lanhdao: string | null;

  @Column('int', { name: 'DisplayOrder', default: () => '(0)' })
  displayOrder: number;

  @Column('datetime', { name: 'CreatedDate', default: () => 'getdate()' })
  createdDate: Date;

  @Column('varchar', {
    name: 'CreatedBy',
    length: 50,
    default: () => "'SYSTEM'",
  })
  createdBy: string;

  @Column('datetime', { name: 'ModifiredDate', default: () => 'getdate()' })
  modifiredDate: Date;

  @Column('varchar', {
    name: 'ModifiredBy',
    length: 50,
    default: () => "'SYSTEM'",
  })
  modifiredBy: string;

  @Column('bit', { name: 'Status', default: () => '(1)' })
  status: boolean;

  @Column('varchar', { name: 'Madonvi', nullable: true, length: 15 })
  madonvi: string | null;

  @OneToMany(() => TblDmnhanvien, (tblDmnhanvien) => tblDmnhanvien.maphong)
  tblDmnhanviens: TblDmnhanvien[];
}
