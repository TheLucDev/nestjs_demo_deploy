import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { TblDmLoaibaocao } from './TblDmLoaibaocao.entity';

@Index('PK_tblDmMaubaocao', ['id'], { unique: true })
@Entity('tblDmMaubaocao', { schema: 'dbo' })
export class TblDmMaubaocao {
  @PrimaryColumn('int', { primary: true, name: 'Id' })
  id: number;

  @Column('nvarchar', { name: 'Sohieu', nullable: true, length: 50 })
  sohieu: string | null;

  @Column('nvarchar', { name: 'TenMenu', nullable: true, length: 255 })
  tenMenu: string | null;

  @Column('nvarchar', { name: 'Tenbaocao', nullable: true, length: 255 })
  tenbaocao: string | null;

  @Column('nvarchar', { name: 'Phaply', nullable: true, length: 50 })
  phaply: string | null;

  @Column('datetime', { name: 'Ngaybh', nullable: true })
  ngaybh: Date | null;

  @Column('datetime', { name: 'NgayHL', nullable: true })
  ngayHl: Date | null;

  @Column('nvarchar', { name: 'FilePath', nullable: true, length: 255 })
  filePath: string | null;

  @Column('varchar', { name: 'FileType', nullable: true, length: 6 })
  fileType: string | null;

  @Column('bit', { name: 'Status', nullable: true })
  status: boolean | null;

  @ManyToOne(
    () => TblDmLoaibaocao,
    (tblDmLoaibaocao) => tblDmLoaibaocao.tblDmMaubaocaos,
    { onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'Maso', referencedColumnName: 'maso' }])
  maso: TblDmLoaibaocao;
}
