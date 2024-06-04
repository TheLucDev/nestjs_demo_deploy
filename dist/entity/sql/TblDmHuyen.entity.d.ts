import { TblDmTinh } from "./TblDmTinh.entity";
import { TblDmXa } from "./TblDmXa.entity";
export declare class TblDmHuyen {
    mahuyen: string;
    tenhuyen: string | null;
    sott: number | null;
    show: boolean | null;
    matinh: TblDmTinh;
    tblDmXas: TblDmXa[];
}
