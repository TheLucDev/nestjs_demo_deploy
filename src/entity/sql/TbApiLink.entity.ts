import { Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Index('PK_tbApiLink', ['id'], { unique: true })
@Entity('tbApiLink', { schema: 'dbo' })
export class TbApiLink {
  @PrimaryColumn('int', { primary: true, name: 'Id' })
  id: number;

  @Column('varchar', { name: 'GroupId', nullable: true, length: 10 })
  groupId: string | null;

  @Column('nvarchar', { name: 'LinkAPI', nullable: true, length: 255 })
  linkApi: string | null;

  @Column('varchar', { name: 'Method', nullable: true, length: 50 })
  method: string | null;

  @Column('nvarchar', { name: 'RequesHeader', nullable: true, length: 255 })
  requesHeader: string | null;

  @Column('nvarchar', { name: 'AccessKey', nullable: true, length: 255 })
  accessKey: string | null;

  @Column('nvarchar', { name: 'SecretKey', nullable: true, length: 255 })
  secretKey: string | null;

  @Column('varchar', { name: 'AppName', nullable: true, length: 50 })
  appName: string | null;

  @Column('nvarchar', { name: 'PartnerCod', nullable: true, length: 50 })
  partnerCod: string | null;

  @Column('nvarchar', { name: 'PartnerCodeCus', nullable: true, length: 50 })
  partnerCodeCus: string | null;

  @Column('nvarchar', { name: 'Authorization', nullable: true, length: 1000 })
  authorization: string | null;

  @Column('bit', { name: 'Status' })
  status: boolean;
}
