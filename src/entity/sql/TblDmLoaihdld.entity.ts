import { Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Index('PK_tblDmloaihdld', ['id'], { unique: true })
@Entity('tblDmLoaihdld', { schema: 'dbo' })
export class TblDmLoaihdld {
  @PrimaryColumn('varchar', { primary: true, name: 'id', length: 4 })
  id: string;

  @Column('nvarchar', { name: 'ten', length: 128 })
  ten: string;

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
}
