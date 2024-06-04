import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TbUser } from './TbUser.entity';
import { TbUserGroupApplication } from './TbUserGroupApplication.entity';
import { TbUserGroupArticle } from './TbUserGroupArticle.entity';
import { TbUserGroupRights } from './TbUserGroupRights.entity';

@Index('PK_tbl_UserGroup', ['idUserGroup'], { unique: true })
@Entity('tbUserGroup', { schema: 'dbo' })
export class TbUserGroup {
  @Column('varchar', { primary: true, name: 'IdUserGroup', length: 20 })
  idUserGroup: string;

  @Column('nvarchar', { name: 'Name', nullable: true, length: 100 })
  name: string | null;

  @Column('nvarchar', { name: 'Description', nullable: true, length: 250 })
  description: string | null;

  @Column('int', { name: 'DisplayOrder', default: () => '(0)' })
  displayOrder: number;

  @Column('int', { name: 'GroupLevel', default: () => '(0)' })
  groupLevel: number;

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

  @Column('bit', { name: 'Status', default: () => '(1)' })
  status: boolean;

  @OneToMany(() => TbUser, (tbUser) => tbUser.idUserGroup)
  tbUsers: TbUser[];

  @ManyToOne(() => TbUserGroup, (tbUserGroup) => tbUserGroup.tbUserGroups)
  @JoinColumn([{ name: 'ParentId', referencedColumnName: 'idUserGroup' }])
  parent: TbUserGroup;

  @OneToMany(() => TbUserGroup, (tbUserGroup) => tbUserGroup.parent)
  tbUserGroups: TbUserGroup[];

  @OneToMany(
    () => TbUserGroupApplication,
    (tbUserGroupApplication) => tbUserGroupApplication.idUserGroup,
  )
  tbUserGroupApplications: TbUserGroupApplication[];

  @OneToMany(
    () => TbUserGroupArticle,
    (tbUserGroupArticle) => tbUserGroupArticle.idUserGroup,
  )
  tbUserGroupArticles: TbUserGroupArticle[];

  @OneToMany(
    () => TbUserGroupRights,
    (tbUserGroupRights) => tbUserGroupRights.idUserGroup,
  )
  tbUserGroupRights: TbUserGroupRights[];
}
