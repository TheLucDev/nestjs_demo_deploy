import { Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Index('PK_ttldDmMohinh', ['id'], { unique: true })
@Entity('ttldDmMohinh', { schema: 'dbo' })
export class TtldDmMohinh {
  @PrimaryColumn('int', { primary: true, name: 'Id' })
  id: number;

  @Column('nvarchar', { name: 'Ten', nullable: true, length: 50 })
  ten: string | null;

  @Column('int', { name: 'Idphuongphap' })
  idphuongphap: number;

  @Column('nvarchar', { name: 'noidung', nullable: true })
  noidung: string | null;

  @Column('bit', { name: 'Status' })
  status: boolean;
}
