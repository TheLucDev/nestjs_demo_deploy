import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TtldBaocao } from './TtldBaocao.entity';
import { TmpBaocao } from './TmpBaocao.entity';

@Index('PK_ttldBaocaochitiet', ['id'], { unique: true })
@Entity('ttldBaocaochitiet', { schema: 'dbo' })
export class TtldBaocaochitiet {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'Id' })
  id: string;

  @Column('int', { name: 'DisplayOrder' })
  displayOrder: number;

  @Column('varchar', { name: 'Thutu', nullable: true, length: 50 })
  thutu: string | null;

  @Column('nvarchar', { name: 'Tieumuc', nullable: true, length: 255 })
  tieumuc: string | null;

  @Column('varchar', { name: 'Phanloai', length: 50 })
  phanloai: string;

  @Column('varchar', { name: 'Keyword', nullable: true, length: 10 })
  keyword: string | null;

  @Column('nvarchar', { name: 'Tomtat', nullable: true })
  tomtat: string | null;

  @Column('nvarchar', { name: 'Noidung', nullable: true })
  noidung: string | null;

  @Column('bit', { name: 'Status', default: () => '(0)' })
  status: boolean;

  @Column('datetime', { name: 'CreatedDate', default: () => 'getdate()' })
  createdDate: Date;

  @Column('varchar', {
    name: 'CreatedBy',
    length: 50,
    default: () => "'SYSTEM'",
  })
  createdBy: string;

  @Column('datetime', { name: 'ModifiredDate', default: () => 'getdate()' })
  modifiredDate: Date;

  @Column('varchar', {
    name: 'ModifiredBy',
    length: 50,
    default: () => "'SYSTEM'",
  })
  modifiredBy: string;

  @ManyToOne(() => TtldBaocao, (ttldBaocao) => ttldBaocao.ttldBaocaochitiets, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'IdBaocao', referencedColumnName: 'idBaocao' }])
  idBaocao: TtldBaocao;

  @ManyToOne(() => TmpBaocao, (tmpBaocao) => tmpBaocao.ttldBaocaochitiets, {
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'IdTemp', referencedColumnName: 'idTemp' }])
  idTemp: TmpBaocao;
}
