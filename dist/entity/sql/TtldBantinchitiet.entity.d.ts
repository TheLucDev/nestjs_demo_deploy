import { TmpBantin } from './TmpBantin.entity';
import { TtldBantin } from './TtldBantin.entity';
export declare class TtldBantinchitiet {
    id: string;
    displayOrder: number;
    thutu: string | null;
    tieumuc: string | null;
    phanloai: string;
    keyword: string | null;
    tomTat: string | null;
    noidung: string | null;
    imgLink: string | null;
    status: boolean;
    createdDate: Date;
    createdBy: string;
    modifiredDate: Date;
    modifiredBy: string;
    idTemp: TmpBantin;
    idBantin: TtldBantin;
}
