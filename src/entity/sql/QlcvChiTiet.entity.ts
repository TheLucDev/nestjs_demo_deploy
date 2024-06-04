import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { QlcvCongViec } from './QlcvCongViec.entity';

@Index('PK_QLCV_ChiTiet', ['id'], { unique: true })
@Entity('QLCV_ChiTiet', { schema: 'dbo' })
export class QlcvChiTiet {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'Id' })
  id: string;

  @Column('int', { name: 'Stt' })
  stt: number;

  @Column('bigint', { name: 'RootId', nullable: true })
  rootId: string | null;

  @Column('nvarchar', { name: 'HangMucCongViec', nullable: true, length: 255 })
  hangMucCongViec: string | null;

  @Column('nvarchar', { name: 'Dvt', nullable: true, length: 50 })
  dvt: string | null;

  @Column('numeric', {
    name: 'SoLuong',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  soLuong: number | null;

  @Column('numeric', {
    name: 'DonGia',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  donGia: number | null;

  @Column('numeric', {
    name: 'ThanhTien',
    nullable: true,
    precision: 37,
    scale: 4,
  })
  thanhTien: number | null;

  @Column('int', { name: 'Vat', nullable: true })
  vat: number | null;

  @Column('numeric', {
    name: 'TienThue',
    nullable: true,
    precision: 38,
    scale: 6,
  })
  tienThue: number | null;

  @Column('numeric', {
    name: 'TongCong',
    nullable: true,
    precision: 38,
    scale: 6,
  })
  tongCong: number | null;

  @Column('nvarchar', { name: 'Ghichu', nullable: true, length: 500 })
  ghichu: string | null;

  @Column('datetime', { name: 'CreatedDate', default: () => 'getdate()' })
  createdDate: Date;

  @Column('varchar', {
    name: 'CreatedBy',
    length: 50,
    default: () => "'system'",
  })
  createdBy: string;

  @Column('datetime', { name: 'ModifiredDate', default: () => 'getdate()' })
  modifiredDate: Date;

  @Column('varchar', {
    name: 'ModifiredBy',
    length: 50,
    default: () => "'system'",
  })
  modifiredBy: string;

  @Column('bit', { name: 'Status', default: () => '(1)' })
  status: boolean;

  @ManyToOne(() => QlcvCongViec, (qlcvCongViec) => qlcvCongViec.qlcvChiTiets, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'Idqlcv', referencedColumnName: 'idqlcv' }])
  idqlcv: QlcvCongViec;
}
