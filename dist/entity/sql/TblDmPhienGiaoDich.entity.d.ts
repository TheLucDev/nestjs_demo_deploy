import { TblDKySgd } from './TblDKySgd.entity';
export declare class TblDmPhienGiaoDich {
    id: number;
    pgdTen: string;
    displayOrder: number;
    createdDate: Date;
    createdBy: string;
    modifiredDate: Date;
    modifiredBy: string;
    status: boolean;
    tblDKySgds: TblDKySgd[];
}
