export declare class TbMenuWorker {
    idOrder: number;
    idMenu: string;
    groupLevel: number;
    description: string;
    idController: string | null;
    idAction: string | null;
    controllerActive: string | null;
    href: boolean;
    displayOrder: number;
    createdDate: Date;
    createdBy: string;
    modifiredDate: Date;
    modifiredBy: string;
    status: boolean;
    showOnline: boolean;
    parent: TbMenuWorker;
    tbMenuWorkers: TbMenuWorker[];
}
