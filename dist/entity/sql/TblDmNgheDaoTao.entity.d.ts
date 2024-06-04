import { TblDKyDtn } from './TblDKyDtn.entity';
export declare class TblDmNgheDaoTao {
    id: number;
    nnTen: string | null;
    bachoc: string | null;
    summary: string | null;
    displayOrder: number;
    createdDate: Date;
    createdBy: string;
    modifiredDate: Date;
    modifiredBy: string;
    status: boolean;
    tblDKyDtns: TblDKyDtn[];
    tblDKyDtns2: TblDKyDtn[];
    tblDKyDtns3: TblDKyDtn[];
}
