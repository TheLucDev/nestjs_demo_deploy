import { Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Index('PK_ttldDmPhuongphap', ['id'], { unique: true })
@Entity('ttldDmPhuongphap', { schema: 'dbo' })
export class TtldDmPhuongphap {
  @PrimaryColumn('int', { primary: true, name: 'Id' })
  id: number;

  @Column('nvarchar', { name: 'Ten', nullable: true, length: 50 })
  ten: string | null;

  @Column('bit', { name: 'Status', nullable: true })
  status: boolean | null;
}
