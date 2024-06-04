import { Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Index('PK_tblDmLoaiBH', ['id'], { unique: true })
@Entity('tblDmLoaiBH', { schema: 'dbo' })
export class TblDmLoaiBh {
  @PrimaryColumn('int', { primary: true, name: 'Id' })
  id: number;

  @Column('nvarchar', { name: 'Ten', nullable: true, length: 50 })
  ten: string | null;

  @Column('int', { name: 'DisplayOrder', default: () => '(0)' })
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

  @Column('bit', { name: 'Status' })
  status: boolean;
}
