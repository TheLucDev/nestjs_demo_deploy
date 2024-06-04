import { MenuAdminServices } from 'src/service/menuAdmin.service';
export declare class MenuAdminController {
    private readonly menuAdminService;
    constructor(menuAdminService: MenuAdminServices);
    GetAll(): Promise<any>;
}
