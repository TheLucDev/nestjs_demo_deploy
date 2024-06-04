import { Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Index('PK_tblDmBacDaoTaoC3', ['id'], { unique: true })
@Entity('tblDmBacDaoTaoC3', { schema: 'dbo' })
export class TblDmBacDaoTaoC3 {
  @Column('varchar', { name: 'Idc2', length: 2 })
  idc2: string;

  @PrimaryColumn('varchar', { primary: true, name: 'Id', length: 4 })
  id: string;

  @Column('nvarchar', { name: 'Description', nullable: true, length: 128 })
  description: string | null;

  @Column('int', { name: 'DisplayOrder', nullable: true })
  displayOrder: number | null;

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
