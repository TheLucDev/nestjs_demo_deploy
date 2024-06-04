import { Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Index('PK_tblDictionary', ['id', 'tablename', 'fieldName'], { unique: true })
@Entity('tblDictionary', { schema: 'dbo' })
export class TblDictionary {
  @PrimaryColumn('int', { primary: true, name: 'Id' })
  id: number;

  @Column('varchar', { primary: true, name: 'Tablename', length: 50 })
  tablename: string;

  @Column('varchar', { primary: true, name: 'FieldName', length: 50 })
  fieldName: string;

  @Column('varchar', { name: 'Adress', nullable: true, length: 50 })
  adress: string | null;

  @Column('varchar', { name: 'RepText', nullable: true, length: 50 })
  repText: string | null;

  @Column('bit', { name: 'Status', nullable: true })
  status: boolean | null;
}
