import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TtldBantinHtm } from './TtldBantinHtm.entity';

@Index('PK_ttldBantinHTMchitiet', ['idBantin', 'idCode'], { unique: true })
@Entity('ttldBantinHTMchitiet', { schema: 'dbo' })
export class TtldBantinHtMchitiet {
  @Column('int', { primary: true, name: 'IdBantin' })
  idBantin: number;

  @Column('int', { primary: true, name: 'IdCode' })
  idCode: number;

  @Column('varchar', { name: 'Itemcode', nullable: true, length: 5 })
  itemcode: string | null;

  @Column('numeric', {
    name: 'Quantity',
    precision: 18,
    scale: 2,
    default: () => '(0)',
  })
  quantity: number;

  @Column('int', { name: 'Status', default: () => '(0)' })
  status: number;

  @Column('nvarchar', { name: 'Ghichu', nullable: true, length: 255 })
  ghichu: string | null;

  @Column('nvarchar', { name: 'Truyvan', nullable: true })
  truyvan: string | null;

  @ManyToOne(
    () => TtldBantinHtm,
    (ttldBantinHtm) => ttldBantinHtm.ttldBantinHtMchitiets,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'IdBantin', referencedColumnName: 'idbantin' }])
  idBantin2: TtldBantinHtm;
}
