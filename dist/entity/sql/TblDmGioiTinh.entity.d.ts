import { TblDKyDtn } from './TblDKyDtn.entity';
import { TblDKyXkld } from './TblDKyXkld.entity';
export declare class TblDmGioiTinh {
    idGioiTinh: number;
    tenGioiTinh: string;
    tblDKyDtns: TblDKyDtn[];
    tblDKyXklds: TblDKyXkld[];
}
