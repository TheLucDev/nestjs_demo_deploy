import { Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Index('PK_tblDmStatus', ['id'], { unique: true })
@Entity('tblDmStatus', { schema: 'dbo' })
export class TblDmStatus {
  @PrimaryColumn('int', { primary: true, name: 'Id' })
  id: number;

  @Column('nvarchar', { name: 'Ten', nullable: true, length: 50 })
  ten: string | null;
}
