import { Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Index('PK_tblVithevieclam', ['id'], { unique: true })
@Entity('tblDmVithevieclam', { schema: 'dbo' })
export class TblDmVithevieclam {
  @PrimaryColumn('int', { primary: true, name: 'Id' })
  id: number;

  @Column('nvarchar', { name: 'Ten', nullable: true, length: 50 })
  ten: string | null;

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

  @Column('bit', { name: 'Status', nullable: true })
  status: boolean | null;
}
