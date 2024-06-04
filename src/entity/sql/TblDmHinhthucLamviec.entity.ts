import { Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Index('PK_tblDmHinhthucLamviec', ['id'], { unique: true })
@Entity('tblDmHinhthucLamviec', { schema: 'dbo' })
export class TblDmHinhthucLamviec {
  @PrimaryColumn('varchar', { primary: true, name: 'id', length: 2 })
  id: string;

  @Column('nvarchar', { name: 'ten', length: 50 })
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
