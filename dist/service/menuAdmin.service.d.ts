import { UnitOfWork } from 'src/provider/unitOfWork';
export declare class MenuAdminServices {
    private readonly uow;
    constructor(uow: UnitOfWork);
    GetMenuAdmin(): Promise<any>;
}
