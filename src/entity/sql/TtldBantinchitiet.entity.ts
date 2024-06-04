import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TmpBantin } from './TmpBantin.entity';
import { TtldBantin } from './TtldBantin.entity';
import { TtldBantinchitietNd } from './TtldBantinchitietNd.entity';

@Index('PK_ttldBantinchitiet', ['id'], { unique: true })
@Entity('ttldBantinchitiet', { schema: 'dbo' })
export class TtldBantinchitiet {
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

  @Column('nvarchar', { name: 'TomTat', nullable: true })
  tomTat: string | null;

  @Column('nvarchar', { name: 'Noidung', nullable: true })
  noidung: string | null;

  @Column('nvarchar', { name: 'ImgLink', nullable: true, length: 255 })
  imgLink: string | null;

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

  @ManyToOne(() => TmpBantin, (tmpBantin) => tmpBantin.ttldBantinchitiets, {
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'IdTemp', referencedColumnName: 'idTemp' }])
  idTemp: TmpBantin;

  @ManyToOne(() => TtldBantin, (ttldBantin) => ttldBantin.ttldBantinchitiets, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'IdBantin', referencedColumnName: 'idBantin' }])
  idBantin: TtldBantin;
}
// @OneToMany(()=>TtldBantinchitietNd,ttldBantinchitietNd=>ttldBantinchitietNd.)
// ttldBantinchitietNds:TtldBantinchitietNd[];
// }
