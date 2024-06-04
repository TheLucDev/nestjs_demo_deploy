import { TblDKyDtn } from './TblDKyDtn.entity';
import { TblDKyXkld } from './TblDKyXkld.entity';
import { TblHoSoUngVien } from './TblHoSoUngVien.entity';
export declare class TblDmDoiTuongChinhSach {
    dtcsId: number;
    dtcsTen: string | null;
    displayOrder: number;
    createdDate: Date;
    createdBy: string;
    modifiredDate: Date;
    modifiredBy: string;
    status: boolean;
    tblDKyDtns: TblDKyDtn[];
    tblDKyXklds: TblDKyXkld[];
    tblHoSoUngViens: TblHoSoUngVien[];
}
