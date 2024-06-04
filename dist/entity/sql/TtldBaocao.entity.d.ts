import { TtldBaocaochitiet } from './TtldBaocaochitiet.entity';
export declare class TtldBaocao {
    idBaocao: string;
    madonvi: string;
    quy: number;
    nam: number;
    displayOrder: number;
    tieude: string | null;
    trichdan: string | null;
    lienhe: string | null;
    noidung: string | null;
    fileLink: string | null;
    status: boolean;
    checkByBanBt: boolean | null;
    maTbbt: string | null;
    checkByVt: boolean | null;
    maVt: string | null;
    checkByTp: boolean | null;
    maTp: string | null;
    checkByTbt: boolean | null;
    maTbt: string | null;
    phathanh: boolean | null;
    createdDate: Date;
    createdBy: string;
    modifiredDate: Date;
    modifiredBy: string;
    namQuy: string | null;
    ttldBaocaochitiets: TtldBaocaochitiet[];
}
