import { Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Index('PK_tblThongKe', ['id'], { unique: true })
@Entity('tblThongKe', { schema: 'dbo' })
export class TblThongKe {
  @PrimaryColumn('bit', { primary: true, name: 'Id' })
  id: boolean;

  @Column('bigint', { name: 'TongTruyCap', default: () => '(0)' })
  tongTruyCap: string;

  @Column('bigint', { name: 'DoanhNghiep', default: () => '(0)' })
  doanhNghiep: string;

  @Column('bigint', { name: 'ViecLam', default: () => '(0)' })
  viecLam: string;

  @Column('bigint', { name: 'HoSo', default: () => '(0)' })
  hoSo: string;
}
