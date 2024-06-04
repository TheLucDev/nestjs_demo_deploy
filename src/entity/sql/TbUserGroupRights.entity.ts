import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TbMenuAdmin } from './TbMenuAdmin.entity';
import { TbUserGroup } from './TbUserGroup.entity';

@Index('PK_tbUserGroupRights', ['id'], { unique: true })
@Entity('tbUserGroupRights', { schema: 'dbo' })
export class TbUserGroupRights {
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

  @ManyToOne(
    () => TbMenuAdmin,
    (tbMenuAdmin) => tbMenuAdmin.tbUserGroupRights,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'IdMenu', referencedColumnName: 'idMenu' }])
  idMenu: TbMenuAdmin;

  @ManyToOne(
    () => TbUserGroup,
    (tbUserGroup) => tbUserGroup.tbUserGroupRights,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'IdUserGroup', referencedColumnName: 'idUserGroup' }])
  idUserGroup: TbUserGroup;
}
