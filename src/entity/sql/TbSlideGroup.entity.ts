import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TbSlide } from './TbSlide.entity';

@Index('PK_tbSlideGroup', ['idSlideGroup'], { unique: true })
@Entity('tbSlideGroup', { schema: 'dbo' })
export class TbSlideGroup {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'IdSlideGroup' })
  idSlideGroup: string;

  @Column('nvarchar', { name: 'Title', length: 250 })
  title: string;

  @Column('int', { name: 'DisplayOrder', default: () => '(0)' })
  displayOrder: number;

  @Column('varchar', { name: 'IdSliderType', nullable: true, length: 10 })
  idSliderType: string | null;

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

  @OneToMany(() => TbSlide, (tbSlide) => tbSlide.idSlideGroup)
  tbSlides: TbSlide[];
}
