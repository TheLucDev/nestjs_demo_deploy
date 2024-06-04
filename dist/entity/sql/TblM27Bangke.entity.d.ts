import { TblM27Socung } from './TblM27Socung.entity';
import { TblM27Chitiet } from './TblM27Chitiet.entity';
export declare class TblM27Bangke {
    idMaho: string;
    diachi: string;
    sothanhvien: number;
    ghichu: string;
    displayOrder: number;
    createdDate: Date;
    createdBy: string;
    modifiredDate: Date;
    modifiredBy: string;
    status: boolean;
    idm: TblM27Socung;
    tblM27Chitiets: TblM27Chitiet[];
}
