import { Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Index('PK_tblDmcapQuanly', ['id'], { unique: true })
@Entity('tblDmCapQuanly', { schema: 'dbo' })
export class TblDmCapQuanly {
  @PrimaryColumn('int', { primary: true, name: 'Id' })
  id: number;

  @Column('varchar', { name: 'Cap', nullable: true, length: 5 })
  cap: string | null;

  @Column('nvarchar', { name: 'Ten', nullable: true, length: 50 })
  ten: string | null;

  @Column('bit', { name: 'Status', nullable: true })
  status: boolean | null;
}
