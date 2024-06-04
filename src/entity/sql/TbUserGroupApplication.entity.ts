import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TbUserGroup } from './TbUserGroup.entity';
import { TbMenuApplication } from './TbMenuApplication.entity';

@Index('PK_tbUserGroupApplication', ['id'], { unique: true })
@Entity('tbUserGroupApplication', { schema: 'dbo' })
export class TbUserGroupApplication {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'Id' })
  id: string;

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

  @Column('bit', {
    name: 'ExecuteSelect',
    nullable: true,
    default: () => '(0)',
  })
  executeSelect: boolean | null;

  @Column('bit', {
    name: 'ExecuteInsert',
    nullable: true,
    default: () => '(0)',
  })
  executeInsert: boolean | null;

  @Column('bit', {
    name: 'ExecuteUpdate',
    nullable: true,
    default: () => '(0)',
  })
  executeUpdate: boolean | null;

  @Column('bit', {
    name: 'ExecuteDelete',
    nullable: true,
    default: () => '(0)',
  })
  executeDelete: boolean | null;

  @Column('bit', { name: 'ExecuteDuyet', nullable: true, default: () => '(0)' })
  executeDuyet: boolean | null;

  @ManyToOne(
    () => TbUserGroup,
    (tbUserGroup) => tbUserGroup.tbUserGroupApplications,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'IdUserGroup', referencedColumnName: 'idUserGroup' }])
  idUserGroup: TbUserGroup;

  @ManyToOne(
    () => TbMenuApplication,
    (tbMenuApplication) => tbMenuApplication.tbUserGroupApplications,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'IdMenu', referencedColumnName: 'idMenu' }])
  idMenu: TbMenuApplication;
}
