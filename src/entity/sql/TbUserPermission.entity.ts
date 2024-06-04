import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TbMenuApplication } from './TbMenuApplication.entity';

@Index('PK_tbUserPermission', ['userName', 'idMenu'], { unique: true })
@Entity('tbUserPermission', { schema: 'dbo' })
export class TbUserPermission {
  @Column('varchar', { primary: true, name: 'UserName', length: 50 })
  userName: string;

  @Column('varchar', { primary: true, name: 'IdMenu', length: 50 })
  idMenu: string;

  @Column('bit', { name: 'ExecuteSelect', default: () => '(0)' })
  executeSelect: boolean;

  @Column('bit', { name: 'ExecuteInsert', default: () => '(0)' })
  executeInsert: boolean;

  @Column('bit', { name: 'ExecuteUpdate', default: () => '(0)' })
  executeUpdate: boolean;

  @Column('bit', { name: 'ExecuteDelete', default: () => '(0)' })
  executeDelete: boolean;

  @Column('bit', { name: 'ExecuteDuyet', default: () => '(0)' })
  executeDuyet: boolean;

  @ManyToOne(
    () => TbMenuApplication,
    (tbMenuApplication) => tbMenuApplication.tbUserPermissions,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'IdMenu', referencedColumnName: 'idMenu' }])
  idMenu2: TbMenuApplication;
}
