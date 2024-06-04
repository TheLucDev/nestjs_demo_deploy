import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TbUserGroupRights } from './TbUserGroupRights.entity';

@Index('PK_tbMenuAdmin', ['idMenu'], { unique: true })
@Entity('tbMenuAdmin', { schema: 'dbo' })
export class TbMenuAdmin {
  @PrimaryGeneratedColumn({ type: 'int', name: 'IdMenu' })
  idMenu: number;

  @Column({ type: 'int', name: 'ParentId' })
  parentId: number;

  @Column('nvarchar', { name: 'Title', length: 250 })
  title: string;

  @Column('varchar', { name: 'IdController', length: 21 })
  idController: string;

  @Column('varchar', { name: 'IdAction', nullable: true, length: 15 })
  idAction: string | null;

  @Column('nvarchar', { name: 'ControllerActive', nullable: true, length: 500 })
  controllerActive: string | null;

  @Column('bit', { name: 'href', default: () => '(1)' })
  href: boolean;

  @Column('int', { name: 'DisplayOrder', default: () => '(0)' })
  displayOrder: number;

  @Column('int', { name: 'GroupLevel', default: () => '(0)' })
  groupLevel: number;

  @Column('datetime', { name: 'CreatedDate', default: () => 'getdate()' })
  createdDate: Date;

  @Column('varchar', {
    name: 'CreatedBy',
    length: 50,
    default: () => "'System'",
  })
  createdBy: string;

  @Column('datetime', { name: 'ModifiredDate', default: () => 'getdate()' })
  modifiredDate: Date;

  @Column('nvarchar', {
    name: 'ModifiredBy',
    length: 50,
    default: () => "N'System'",
  })
  modifiredBy: string;

  @Column('bit', { name: 'Status', default: () => '(1)' })
  status: boolean;

  // @ManyToOne(() => TbMenuAdmin, (tbMenuAdmin) => tbMenuAdmin.parentId)
  // @JoinColumn([{ name: 'ParentId', referencedColumnName: 'ParentId' }])
  // parent: TbMenuAdmin;

  // @OneToMany(() => TbMenuAdmin, (tbMenuAdmin) => tbMenuAdmin.parent)
  // tbMenuAdmins: TbMenuAdmin[];

  @OneToMany(
    () => TbUserGroupRights,
    (tbUserGroupRights) => tbUserGroupRights.idMenu,
  )
  tbUserGroupRights: TbUserGroupRights[];
}
