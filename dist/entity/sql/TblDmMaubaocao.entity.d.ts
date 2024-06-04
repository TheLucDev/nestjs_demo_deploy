import { TblDmLoaibaocao } from './TblDmLoaibaocao.entity';
export declare class TblDmMaubaocao {
    id: number;
    sohieu: string | null;
    tenMenu: string | null;
    tenbaocao: string | null;
    phaply: string | null;
    ngaybh: Date | null;
    ngayHl: Date | null;
    filePath: string | null;
    fileType: string | null;
    status: boolean | null;
    maso: TblDmLoaibaocao;
}
