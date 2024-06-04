import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TtldBaocaochitiet } from './TtldBaocaochitiet.entity';

@Index('PK_tmpBaocao', ['idTemp'], { unique: true })
@Entity('tmpBaocao', { schema: 'dbo' })
export class TmpBaocao {
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
    () => TtldBaocaochitiet,
    (ttldBaocaochitiet) => ttldBaocaochitiet.idTemp,
  )
  ttldBaocaochitiets: TtldBaocaochitiet[];
}
