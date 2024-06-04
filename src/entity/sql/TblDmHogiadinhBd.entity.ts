import { Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Index('PK_tblDmHogiadinhBD', ['id', 'code', 'mahodi', 'mahoden'], {
  unique: true,
})
@Entity('tblDmHogiadinhBD', { schema: 'dbo' })
export class TblDmHogiadinhBd {
  @PrimaryColumn('bigint', { primary: true, name: 'Id' })
  id: string;

  @Column('varchar', { primary: true, name: 'Code', length: 12 })
  code: string;

  @Column('varchar', { primary: true, name: 'Mahodi', length: 20 })
  mahodi: string;

  @Column('varchar', { primary: true, name: 'Mahoden', length: 20 })
  mahoden: string;

  @Column('datetime', { name: 'Ngaydi', default: () => 'getdate()' })
  ngaydi: Date;

  @Column('datetime', { name: 'Ngayden', default: () => 'getdate()' })
  ngayden: Date;

  @Column('bigint', { name: 'Idmoi' })
  idmoi: string;

  @Column('bit', { name: 'Status', default: () => '(1)' })
  status: boolean;
}
