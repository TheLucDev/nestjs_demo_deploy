import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TbContentHtml } from './TbContentHtml.entity';

@Index('PK_tbl_Positions', ['idPosition'], { unique: true })
@Entity('tbPosition', { schema: 'dbo' })
export class TbPosition {
  @Column('varchar', { primary: true, name: 'IdPosition', length: 30 })
  idPosition: string;

  @Column('int', { name: 'DisplayOrder', default: () => '(0)' })
  displayOrder: number;

  @Column('int', { name: 'GroupLevel', default: () => '(0)' })
  groupLevel: number;

  @Column('bit', { name: 'Status', default: () => '(0)' })
  status: boolean;

  @OneToMany(() => TbContentHtml, (tbContentHtml) => tbContentHtml.idPosition)
  tbContentHtmls: TbContentHtml[];

  @ManyToOne(() => TbPosition, (tbPosition) => tbPosition.tbPositions)
  @JoinColumn([{ name: 'ParentId', referencedColumnName: 'idPosition' }])
  parent: TbPosition;

  @OneToMany(() => TbPosition, (tbPosition) => tbPosition.parent)
  tbPositions: TbPosition[];
}
