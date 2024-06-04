import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TtldBantinchitiet } from './TtldBantinchitiet.entity';

@Index('PK_tmpBantin', ['idTemp'], { unique: true })
@Entity('tmpBantin', { schema: 'dbo' })
export class TmpBantin {
  @Column('int', { primary: true, name: 'IdTemp' })
  idTemp: number;

  @Column('int', { name: 'DisplayOrder' })
  displayOrder: number;

  @Column('varchar', { name: 'Thutu', nullable: true, length: 50 })
  thutu: string | null;

  @Column('nvarchar', { name: 'Tieumuc', nullable: true, length: 255 })
  tieumuc: string | null;

  @Column('varchar', { name: 'Phanloai', nullable: true, length: 50 })
  phanloai: string | null;

  @Column('varchar', { name: 'Keyword', nullable: true, length: 10 })
  keyword: string | null;

  @Column('bit', { name: 'Status', nullable: true })
  status: boolean | null;

  @OneToMany(
    () => TtldBantinchitiet,
    (ttldBantinchitiet) => ttldBantinchitiet.idTemp,
  )
  ttldBantinchitiets: TtldBantinchitiet[];
}
