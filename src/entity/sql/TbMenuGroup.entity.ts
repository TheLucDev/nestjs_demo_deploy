import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TbMenu } from './TbMenu.entity';

@Index('PK_MenuGroups', ['idMenuGroup'], { unique: true })
@Entity('tbMenuGroup', { schema: 'dbo' })
export class TbMenuGroup {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'IdMenuGroup' })
  idMenuGroup: string;

  @Column('nvarchar', { name: 'Title', length: 50 })
  title: string;

  @Column('nvarchar', { name: 'Description', nullable: true, length: 250 })
  description: string | null;

  @Column('int', { name: 'DisplayOrder', default: () => '(0)' })
  displayOrder: number;

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

  @OneToMany(() => TbMenu, (tbMenu) => tbMenu.idMenuGroup)
  tbMenus: TbMenu[];
}
