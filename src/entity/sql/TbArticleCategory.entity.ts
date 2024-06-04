import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TbArticle } from './TbArticle.entity';
import { TbUserGroupArticle } from './TbUserGroupArticle.entity';

@Index('PK_tbl_ArticleCategory', ['idCategory'], { unique: true })
@Entity('tbArticleCategory', { schema: 'dbo' })
export class TbArticleCategory {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'IdCategory' })
  idCategory: string;

  @Column('nvarchar', { name: 'Title', length: 250 })
  title: string;

  @Column('int', { name: 'DisplayOrder', default: () => '(0)' })
  displayOrder: number;

  @Column('int', { name: 'GroupLevel', default: () => '(0)' })
  groupLevel: number;

  @Column('nvarchar', { name: 'TitleMeta', nullable: true, length: 250 })
  titleMeta: string | null;

  @Column('nvarchar', { name: 'IdStyle', nullable: true, length: 50 })
  idStyle: string | null;

  @Column('nvarchar', { name: 'MetaKeywords', nullable: true, length: 250 })
  metaKeywords: string | null;

  @Column('nvarchar', { name: 'MetaDescription', nullable: true, length: 250 })
  metaDescription: string | null;

  @Column('datetime', { name: 'CreatedDate', default: () => 'getdate()' })
  createdDate: Date;

  @Column('varchar', { name: 'CreatedBy', length: 50 })
  createdBy: string;

  @Column('datetime', { name: 'ModifiredDate', default: () => 'getdate()' })
  modifiredDate: Date;

  @Column('nvarchar', { name: 'ModifiredBy', length: 50 })
  modifiredBy: string;

  @Column('bit', { name: 'Status', default: () => '(1)' })
  status: boolean;

  @Column('bit', { name: 'IsSecond', default: () => '(0)' })
  isSecond: boolean;

  @Column('bit', { name: 'ShowBreadcrumb', default: () => '(1)' })
  showBreadcrumb: boolean;

  @Column('bit', { name: 'ShowAll', default: () => '(0)' })
  showAll: boolean;

  @Column('int', { name: 'AmountLead', default: () => '(0)' })
  amountLead: number;

  @Column('int', { name: 'SumChildren', default: () => '(0)' })
  sumChildren: number;

  @Column('int', { name: 'SumArticles', default: () => '(0)' })
  sumArticles: number;

  @OneToMany(() => TbArticle, (tbArticle) => tbArticle.idCategory2nd)
  tbArticles: TbArticle[];

  @OneToMany(() => TbArticle, (tbArticle) => tbArticle.idCategory)
  tbArticles2: TbArticle[];

  @ManyToOne(
    () => TbArticleCategory,
    (tbArticleCategory) => tbArticleCategory.tbArticleCategories,
  )
  @JoinColumn([{ name: 'ParentId', referencedColumnName: 'idCategory' }])
  parent: TbArticleCategory;

  @OneToMany(
    () => TbArticleCategory,
    (tbArticleCategory) => tbArticleCategory.parent,
  )
  tbArticleCategories: TbArticleCategory[];

  @OneToMany(
    () => TbUserGroupArticle,
    (tbUserGroupArticle) => tbUserGroupArticle.idCategory,
  )
  tbUserGroupArticles: TbUserGroupArticle[];
}
