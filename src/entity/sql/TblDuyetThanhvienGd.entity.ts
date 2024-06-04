import { Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Index('PK_tblDuyetThanhvienGD', ['idCap', 'id'], { unique: true })
@Entity('tblDuyetThanhvienGD', { schema: 'dbo' })
export class TblDuyetThanhvienGd {
  @Column('int', { primary: true, name: 'IdCap' })
  idCap: number;

  @PrimaryColumn('bigint', { primary: true, name: 'Id' })
  id: string;

  @Column('varchar', {
    name: 'UserName',
    length: 50,
    default: () => "'system'",
  })
  userName: string;

  @Column('datetime', { name: 'Ngayduyet', default: () => 'getdate()' })
  ngayduyet: Date;

  @Column('bit', { name: 'Status', default: () => '(0)' })
  status: boolean;

  @Column('nvarchar', { name: 'Ghichu', nullable: true, length: 255 })
  ghichu: string | null;
}
