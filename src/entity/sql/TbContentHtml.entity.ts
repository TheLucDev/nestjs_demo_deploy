import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TbPosition } from './TbPosition.entity';

@Index('PK_tbl_ContentHTML', ['idContentHtml'], { unique: true })
@Entity('tbContentHtml', { schema: 'dbo' })
export class TbContentHtml {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'IdContentHTML' })
  idContentHtml: string;

  @Column('nvarchar', { name: 'Title', nullable: true, length: 150 })
  title: string | null;

  @Column('nvarchar', { name: 'Description', nullable: true, length: 300 })
  description: string | null;

  @Column('nvarchar', { name: 'ContentHTML', nullable: true })
  contentHtml: string | null;

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

  @Column('bit', { name: 'ShowAllController', default: () => '(0)' })
  showAllController: boolean;

  @Column('bit', { name: 'ShowOnlyController', default: () => '(0)' })
  showOnlyController: boolean;

  @Column('varchar', { name: 'IdController', nullable: true, length: 30 })
  idController: string | null;

  @Column('bit', { name: 'ShowListController', default: () => '(0)' })
  showListController: boolean;

  @Column('varchar', { name: 'ListController', nullable: true, length: 150 })
  listController: string | null;

  @Column('varchar', { name: 'PK_String', nullable: true, length: 30 })
  pkString: string | null;

  @Column('bigint', { name: 'PK_Long', nullable: true })
  pkLong: string | null;

  @Column('bigint', { name: 'ViewCount', nullable: true, default: () => '(0)' })
  viewCount: string | null;

  @Column('bit', { name: 'IsContentHTML', default: () => '(1)' })
  isContentHtml: boolean;

  @Column('bit', { name: 'IsSlide', default: () => '(0)' })
  isSlide: boolean;

  @Column('bit', { name: 'IsMenu', default: () => '(0)' })
  isMenu: boolean;

  @Column('bit', { name: 'IsProduct', default: () => '(0)' })
  isProduct: boolean;

  @Column('bit', { name: 'IsArticle', default: () => '(0)' })
  isArticle: boolean;

  @ManyToOne(() => TbPosition, (tbPosition) => tbPosition.tbContentHtmls)
  @JoinColumn([{ name: 'IdPosition', referencedColumnName: 'idPosition' }])
  idPosition: TbPosition;
}
