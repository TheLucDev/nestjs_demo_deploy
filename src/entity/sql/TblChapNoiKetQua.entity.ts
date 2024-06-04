import { Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Index('PK_tblChapNoiKetQuaGGT', ['id'], { unique: true })
@Entity('tblChapNoiKetQua', { schema: 'dbo' })
export class TblChapNoiKetQua {
  @PrimaryColumn('int', { primary: true, name: 'Id' })
  id: number;

  @Column('nvarchar', { name: 'Description', length: 50 })
  description: string;
}
