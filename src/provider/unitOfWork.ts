import { Injectable, Scope } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { LinqRepository } from 'typeorm-linq-repository';
import { TbUser } from 'src/entity/sql/TbUser.entity';
import { TbMenuAdmin } from 'src/entity/sql/TbMenuAdmin.entity';

@Injectable({ scope: Scope.REQUEST })
export class UnitOfWork {
  constructor(
    @InjectDataSource()
    private dataSource: DataSource,
  ) {}

  private tbUsers: LinqRepository<TbUser>;
  TbUserRepo(): LinqRepository<TbUser> {
    return (
      this.tbUsers ||
      (this.tbUsers = new LinqRepository(this.dataSource, TbUser))
    );
  }

  private tbMenuAdmin: LinqRepository<TbMenuAdmin>;
  TbMenuAdminRepo(): LinqRepository<TbMenuAdmin> {
    return (
      this.tbMenuAdmin ||
      (this.tbMenuAdmin = new LinqRepository(this.dataSource, TbMenuAdmin))
    );
  }

  // private SysHistorySyncSalesWHs: LinqRepository<SysHistorySyncSalesWH>;
  // SysHistorySyncSalesWHRepo(): LinqRepository<SysHistorySyncSalesWH> {
  //   return (
  //     this.SysHistorySyncSalesWHs ||
  //     (this.SysHistorySyncSalesWHs = new LinqRepository(
  //       this.dataSource,
  //       SysHistorySyncSalesWH,
  //     ))
  //   );
  // }
}
