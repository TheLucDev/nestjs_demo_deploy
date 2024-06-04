import { TblDKyDtn } from './TblDKyDtn.entity';
import { TblDKyXkld } from './TblDKyXkld.entity';
export declare class TblDmTrinhDoHocVanDtn {
    hocvanId: number;
    hocvanTen: string | null;
    displayOrder: number;
    createdDate: Date;
    createdBy: string;
    modifiredDate: Date;
    modifiredBy: string;
    status: boolean;
    tblDKyDtns: TblDKyDtn[];
    tblDKyXklds: TblDKyXkld[];
}
