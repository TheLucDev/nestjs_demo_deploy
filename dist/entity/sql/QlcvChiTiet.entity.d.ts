import { QlcvCongViec } from './QlcvCongViec.entity';
export declare class QlcvChiTiet {
    id: string;
    stt: number;
    rootId: string | null;
    hangMucCongViec: string | null;
    dvt: string | null;
    soLuong: number | null;
    donGia: number | null;
    thanhTien: number | null;
    vat: number | null;
    tienThue: number | null;
    tongCong: number | null;
    ghichu: string | null;
    createdDate: Date;
    createdBy: string;
    modifiredDate: Date;
    modifiredBy: string;
    status: boolean;
    idqlcv: QlcvCongViec;
}
