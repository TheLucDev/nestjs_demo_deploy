import { TtldBaocao } from './TtldBaocao.entity';
import { TmpBaocao } from './TmpBaocao.entity';
export declare class TtldBaocaochitiet {
    id: string;
    displayOrder: number;
    thutu: string | null;
    tieumuc: string | null;
    phanloai: string;
    keyword: string | null;
    tomtat: string | null;
    noidung: string | null;
    status: boolean;
    createdDate: Date;
    createdBy: string;
    modifiredDate: Date;
    modifiredBy: string;
    idBaocao: TtldBaocao;
    idTemp: TmpBaocao;
}
