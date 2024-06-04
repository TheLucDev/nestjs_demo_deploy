import { TblDmHogiadinh } from './TblDmHogiadinh.entity';
export declare class TblDmHogiadinhInfo {
    id: number;
    maho: string;
    idGroup: number | null;
    labelName: string;
    type: string | null;
    textInfo: string | null;
    checkOk: boolean | null;
    checkOption: boolean | null;
    isheader: boolean | null;
    displayOrder: number;
    status: boolean;
    maho2: TblDmHogiadinh;
}
