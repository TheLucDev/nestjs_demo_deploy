import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TbUserGroup } from './TbUserGroup.entity';

@Index('PK_tbl_User', ['idUser'], { unique: true })
@Index('Uk_tbl_User_UserName', ['userName'], { unique: true })
@Entity('tbUser', { schema: 'dbo' })
export class TbUser {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'IdUser' })
  idUser: string;

  @Column('varchar', { name: 'Manv', nullable: true, length: 15 })
  manv: string | null;

  @Column('varchar', { name: 'UserName', unique: true, length: 50 })
  userName: string;

  @Column('varchar', { name: 'Password', length: 128 })
  password: string;

  @Column('nvarchar', { name: 'Name', length: 250 })
  name: string;

  @Column('nvarchar', { name: 'Phone', nullable: true, length: 50 })
  phone: string | null;

  @Column('nvarchar', { name: 'Email', length: 150 })
  email: string;

  @Column('nvarchar', { name: 'Address', nullable: true, length: 500 })
  address: string | null;

  @Column('date', { name: 'Birdthday', nullable: true })
  birdthday: Date | null;

  @Column('int', { name: 'DisplayOrder', default: () => '(0)' })
  displayOrder: number;

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

  @Column('bit', { name: 'Status', default: () => '(0)' })
  status: boolean;

  @Column('bit', { name: 'IsAdmin', nullable: true, default: () => '(0)' })
  isAdmin: boolean | null;

  @Column('bit', { name: 'duyetbientap', nullable: true, default: () => '(0)' })
  duyetbientap: boolean | null;

  @Column('bit', {
    name: 'duyetchuyentin',
    nullable: true,
    default: () => '(0)',
  })
  duyetchuyentin: boolean | null;

  @Column('bit', {
    name: 'duyetcapphong',
    nullable: true,
    default: () => '(0)',
  })
  duyetcapphong: boolean | null;

  @Column('bit', { name: 'duyetgiamdoc', nullable: true, default: () => '(0)' })
  duyetgiamdoc: boolean | null;

  @Column('int', { name: 'idCapduyet', default: () => '(0)' })
  idCapduyet: number;

  @ManyToOne(() => TbUserGroup, (tbUserGroup) => tbUserGroup.tbUsers, {
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'IdUserGroup', referencedColumnName: 'idUserGroup' }])
  idUserGroup: TbUserGroup;
}
