import { DataSource } from 'typeorm';
import { LinqRepository } from 'typeorm-linq-repository';
import { TbUser } from 'src/entity/sql/TbUser.entity';
import { TbMenuAdmin } from 'src/entity/sql/TbMenuAdmin.entity';
export declare class UnitOfWork {
    private dataSource;
    constructor(dataSource: DataSource);
    private tbUsers;
    TbUserRepo(): LinqRepository<TbUser>;
    private tbMenuAdmin;
    TbMenuAdminRepo(): LinqRepository<TbMenuAdmin>;
}
