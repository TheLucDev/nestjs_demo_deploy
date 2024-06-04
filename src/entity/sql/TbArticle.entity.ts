import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TbArticleCategory } from './TbArticleCategory.entity';

@Index('PK_tbl_Article', ['idArticle'], { unique: true })
@Entity('tbArticle', { schema: 'dbo' })
export class TbArticle {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'IdArticle' })
  idArticle: string;

  @Column('nvarchar', { name: 'Title', length: 400 })
  title: string;

  @Column('nvarchar', { name: 'Summary', nullable: true })
  summary: string | null;

  @Column('ntext', { name: 'ContentArticle', nullable: true })
  contentArticle: string | null;

  @Column('nvarchar', { name: 'Author', nullable: true, length: 150 })
  author: string | null;

  @Column('nvarchar', { name: 'ImagePath', nullable: true, length: 250 })
  imagePath: string | null;

  @Column('nvarchar', { name: 'TitleMeta', length: 200 })
  titleMeta: string;

  @Column('nvarchar', { name: 'TitleSEO', nullable: true, length: 500 })
  titleSeo: string | null;

  @Column('nvarchar', { name: 'MetaKeywords', nullable: true, length: 250 })
  metaKeywords: string | null;

  @Column('nvarchar', { name: 'MetaDescription', nullable: true, length: 250 })
  metaDescription: string | null;

  @Column('int', { name: 'DisplayOrder', default: () => '(0)' })
  displayOrder: number;

  @Column('int', { name: 'ViewCount', default: () => '(0)' })
  viewCount: number;

  @Column('bit', { name: 'IsNew', default: () => '(0)' })
  isNew: boolean;

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
    default: () => "N'system'",
  })
  modifiredBy: string;

  @Column('bit', { name: 'Status', default: () => '(1)' })
  status: boolean;

  @Column('bit', { name: 'NewsletterSubscription', default: () => '(0)' })
  newsletterSubscription: boolean;

  @ManyToOne(
    () => TbArticleCategory,
    (tbArticleCategory) => tbArticleCategory.tbArticles,
  )
  @JoinColumn([{ name: 'IdCategory2nd', referencedColumnName: 'idCategory' }])
  idCategory2nd: TbArticleCategory;

  @ManyToOne(
    () => TbArticleCategory,
    (tbArticleCategory) => tbArticleCategory.tbArticles2,
  )
  @JoinColumn([{ name: 'IdCategory', referencedColumnName: 'idCategory' }])
  idCategory: TbArticleCategory;
}
