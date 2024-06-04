import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TbSlideGroup } from './TbSlideGroup.entity';

@Index('PK_tbSlide', ['idSlide'], { unique: true })
@Entity('tbSlide', { schema: 'dbo' })
export class TbSlide {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'IdSlide' })
  idSlide: string;

  @Column('nvarchar', { name: 'Title', length: 250 })
  title: string;

  @Column('varchar', { name: 'ImagePath', length: 250 })
  imagePath: string;

  @Column('bit', { name: 'ShowExpand', default: () => '(0)' })
  showExpand: boolean;

  @Column('nvarchar', { name: 'Description', nullable: true })
  description: string | null;

  @Column('varchar', { name: 'LinkExpand', nullable: true, length: 250 })
  linkExpand: string | null;

  @Column('nvarchar', { name: 'LinkTitle', nullable: true, length: 50 })
  linkTitle: string | null;

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

  @ManyToOne(() => TbSlideGroup, (tbSlideGroup) => tbSlideGroup.tbSlides)
  @JoinColumn([{ name: 'IdSlideGroup', referencedColumnName: 'idSlideGroup' }])
  idSlideGroup: TbSlideGroup;
}
