import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TbArticleCategory } from './TbArticleCategory.entity';
import { TbUserGroup } from './TbUserGroup.entity';

@Index('PK_tbUserGroupArticle', ['id'], { unique: true })
@Entity('tbUserGroupArticle', { schema: 'dbo' })
export class TbUserGroupArticle {
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
    () => TbArticleCategory,
    (tbArticleCategory) => tbArticleCategory.tbUserGroupArticles,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'IdCategory', referencedColumnName: 'idCategory' }])
  idCategory: TbArticleCategory;

  @ManyToOne(
    () => TbUserGroup,
    (tbUserGroup) => tbUserGroup.tbUserGroupArticles,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'IdUserGroup', referencedColumnName: 'idUserGroup' }])
  idUserGroup: TbUserGroup;
}
