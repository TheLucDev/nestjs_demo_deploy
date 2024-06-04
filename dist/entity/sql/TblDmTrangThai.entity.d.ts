import { TblDKyDtn } from './TblDKyDtn.entity';
import { TblDKySgd } from './TblDKySgd.entity';
import { TblDKyXkld } from './TblDKyXkld.entity';
export declare class TblDmTrangThai {
    idTrangThai: boolean;
    tenTrangThai: string;
    tblDKyDtns: TblDKyDtn[];
    tblDKySgds: TblDKySgd[];
    tblDKyXklds: TblDKyXkld[];
}
