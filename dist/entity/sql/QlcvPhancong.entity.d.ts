import { QlcvCongViec } from './QlcvCongViec.entity';
export declare class QlcvPhancong {
    id: string;
    displayOrder: number;
    idNhanvien: string;
    tencongviec: string | null;
    comment: string | null;
    startday: Date | null;
    endday: Date | null;
    monitor: number | null;
    status: boolean;
    idqlcv: QlcvCongViec;
}
