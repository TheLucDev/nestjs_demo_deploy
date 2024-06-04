import { TblDKyDtn } from './TblDKyDtn.entity';
export declare class TblDmNganhHoc {
    id: number;
    nganhhocTen: string;
    displayOrder: number;
    createdDate: Date;
    createdBy: string;
    modifiredDate: Date;
    modifiredBy: string;
    status: boolean;
    tblDKyDtns: TblDKyDtn[];
}
