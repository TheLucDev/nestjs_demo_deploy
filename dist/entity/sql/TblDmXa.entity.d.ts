import { TblDmThon } from './TblDmThon.entity';
import { TblDmHuyen } from './TblDmHuyen.entity';
export declare class TblDmXa {
    sott: number | null;
    kind: number;
    maxa: string;
    tenxa: string | null;
    matinh: string | null;
    show: boolean | null;
    tblDmThons: TblDmThon[];
    mahuyen: TblDmHuyen;
}
