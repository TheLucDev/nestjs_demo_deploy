import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { QlcvChiTiet } from './QlcvChiTiet.entity';
import { QlcvPhancong } from './QlcvPhancong.entity';

@Index('PK_QLCV_CongViec', ['idqlcv'], { unique: true })
@Entity('QLCV_CongViec', { schema: 'dbo' })
export class QlcvCongViec {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'Idqlcv' })
  idqlcv: string;

  @Column('int', { name: 'GroupLevel', nullable: true })
  groupLevel: number | null;

  @Column('int', { name: 'Stt', nullable: true })
  stt: number | null;

  @Column('int', { name: 'IdDot', nullable: true })
  idDot: number | null;

  @Column('datetime', { name: 'Ngay', nullable: true })
  ngay: Date | null;

  @Column('nvarchar', { name: 'TenCongViec', nullable: true, length: 255 })
  tenCongViec: string | null;

  @Column('nvarchar', { name: 'MoTa', nullable: true, length: 500 })
  moTa: string | null;

  @Column('varchar', { name: 'IdDonviChuTri', nullable: true, length: 15 })
  idDonviChuTri: string | null;

  @Column('varchar', { name: 'IdNguoiChuTri', nullable: true, length: 15 })
  idNguoiChuTri: string | null;

  @Column('varchar', { name: 'IdNguoithuchien', nullable: true, length: 15 })
  idNguoithuchien: string | null;

  @Column('varchar', { name: 'IdDonviPhoihop', nullable: true, length: 15 })
  idDonviPhoihop: string | null;

  @Column('nvarchar', { name: 'NguoiPhoiHop', nullable: true, length: 50 })
  nguoiPhoiHop: string | null;

  @Column('datetime', { name: 'NgayBatDau', nullable: true })
  ngayBatDau: Date | null;

  @Column('datetime', { name: 'NgayKetThuc', nullable: true })
  ngayKetThuc: Date | null;

  @Column('nvarchar', { name: 'MucDoUuTien', nullable: true, length: 50 })
  mucDoUuTien: string | null;

  @Column('nvarchar', { name: 'KhoKhan', nullable: true, length: 500 })
  khoKhan: string | null;

  @Column('nvarchar', { name: 'Thuanloi', nullable: true, length: 500 })
  thuanloi: string | null;

  @Column('nvarchar', { name: 'Danhgia', nullable: true, length: 500 })
  danhgia: string | null;

  @Column('nvarchar', { name: 'Comment', nullable: true, length: 500 })
  comment: string | null;

  @Column('datetime', { name: 'StartDate', nullable: true })
  startDate: Date | null;

  @Column('datetime', { name: 'EndDate', nullable: true })
  endDate: Date | null;

  @Column('bit', { name: 'DuyetTeam', nullable: true })
  duyetTeam: boolean | null;

  @Column('varchar', { name: 'UserIdTeam', nullable: true, length: 50 })
  userIdTeam: string | null;

  @Column('datetime', { name: 'TeamDate', nullable: true })
  teamDate: Date | null;

  @Column('nvarchar', { name: 'TeamComment', nullable: true, length: 255 })
  teamComment: string | null;

  @Column('bit', { name: 'DuyetAccount', nullable: true })
  duyetAccount: boolean | null;

  @Column('varchar', { name: 'UserIdAccount', nullable: true, length: 50 })
  userIdAccount: string | null;

  @Column('datetime', { name: 'AccountDate', nullable: true })
  accountDate: Date | null;

  @Column('nvarchar', { name: 'AccountComment', nullable: true, length: 255 })
  accountComment: string | null;

  @Column('bit', { name: 'DuyetLeader', nullable: true })
  duyetLeader: boolean | null;

  @Column('varchar', { name: 'UserIdLeader', nullable: true, length: 50 })
  userIdLeader: string | null;

  @Column('nvarchar', { name: 'LeaderComment', nullable: true, length: 255 })
  leaderComment: string | null;

  @Column('datetime', { name: 'LeaderDate', nullable: true })
  leaderDate: Date | null;

  @Column('numeric', {
    name: 'KinhPhiDuTru',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  kinhPhiDuTru: number | null;

  @Column('numeric', {
    name: 'KinhPhiDuyet',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  kinhPhiDuyet: number | null;

  @Column('numeric', {
    name: 'Advance',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  advance: number | null;

  @Column('numeric', {
    name: 'Payment',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  payment: number | null;

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

  @Column('int', { name: 'ProjectStatus', nullable: true })
  projectStatus: number | null;

  @Column('int', { name: 'Monitor', nullable: true })
  monitor: number | null;

  @Column('bit', { name: 'Status', default: () => '(1)' })
  status: boolean;

  @OneToMany(() => QlcvChiTiet, (qlcvChiTiet) => qlcvChiTiet.idqlcv)
  qlcvChiTiets: QlcvChiTiet[];

  @ManyToOne(() => QlcvCongViec, (qlcvCongViec) => qlcvCongViec.qlcvCongViecs)
  @JoinColumn([{ name: 'IdParent', referencedColumnName: 'idqlcv' }])
  idParent: QlcvCongViec;

  @OneToMany(() => QlcvCongViec, (qlcvCongViec) => qlcvCongViec.idParent)
  qlcvCongViecs: QlcvCongViec[];

  @OneToMany(() => QlcvPhancong, (qlcvPhancong) => qlcvPhancong.idqlcv)
  qlcvPhancongs: QlcvPhancong[];
}
