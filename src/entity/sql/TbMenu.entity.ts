import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TbMenuGroup } from './TbMenuGroup.entity';

@Index('PK_tbl_Menu', ['idMenu'], { unique: true })
@Entity('tbMenu', { schema: 'dbo' })
export class TbMenu {
  @PrimaryGeneratedColumn({ type: 'int', name: 'IdMenu' })
  idMenu: number;

  @Column('nvarchar', { name: 'Title', length: 250 })
  title: string;

  @Column('nvarchar', { name: 'Alias', length: 250 })
  alias: string;

  @Column('nvarchar', { name: 'LinkPath', nullable: true, length: 250 })
  linkPath: string | null;

  @Column('nvarchar', { name: 'ImgPath', nullable: true, length: 250 })
  imgPath: string | null;

  @Column('int', { name: 'DisplayOrder', default: () => '(0)' })
  displayOrder: number;

  @Column('int', { name: 'GroupLevel', default: () => '(0)' })
  groupLevel: number;

  @Column('datetime', { name: 'CreatedDate', default: () => 'getdate()' })
  createdDate: Date;

  @Column('varchar', { name: 'CreatedBy', nullable: true, length: 50 })
  createdBy: string | null;

  @Column('datetime', { name: 'ModifiredDate', default: () => 'getdate()' })
  modifiredDate: Date;

  @Column('nvarchar', { name: 'ModifiredBy', nullable: true, length: 50 })
  modifiredBy: string | null;

  @Column('bit', { name: 'Status', default: () => '(1)' })
  status: boolean;

  @Column('varchar', { name: 'IdController', nullable: true, length: 30 })
  idController: string | null;

  @Column('bit', { name: 'NoneLink', default: () => '(0)' })
  noneLink: boolean;

  @Column('bit', { name: 'IsShowParameter', default: () => '(1)' })
  isShowParameter: boolean;

  @Column('bit', { name: 'IsHome', default: () => '(0)' })
  isHome: boolean;

  @Column('varchar', { name: 'PK_String', nullable: true, length: 30 })
  pkString: string | null;

  @Column('bigint', { name: 'PK_Long', nullable: true })
  pkLong: string | null;

  @ManyToOne(() => TbMenu, (tbMenu) => tbMenu.tbMenus)
  @JoinColumn([{ name: 'ParentId', referencedColumnName: 'idMenu' }])
  parent: TbMenu;

  @OneToMany(() => TbMenu, (tbMenu) => tbMenu.parent)
  tbMenus: TbMenu[];

  @ManyToOne(() => TbMenuGroup, (tbMenuGroup) => tbMenuGroup.tbMenus)
  @JoinColumn([{ name: 'IdMenuGroup', referencedColumnName: 'idMenuGroup' }])
  idMenuGroup: TbMenuGroup;
}
