"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TblTuyenDung = void 0;
const typeorm_1 = require("typeorm");
const TblNhaTuyenDung_entity_1 = require("./TblNhaTuyenDung.entity");
const TblDmTinhThanh_entity_1 = require("./TblDmTinhThanh.entity");
const TblDmTrinhDoHocVan_entity_1 = require("./TblDmTrinhDoHocVan.entity");
const TblDmTrinhDoTinHoc_entity_1 = require("./TblDmTrinhDoTinHoc.entity");
const TblDmNganh_entity_1 = require("./TblDmNganh.entity");
const TblDmThoiGianLamViec_entity_1 = require("./TblDmThoiGianLamViec.entity");
const TblDmTrinhDoNgoaiNgu_entity_1 = require("./TblDmTrinhDoNgoaiNgu.entity");
const TblDmYeuCauGioiTinh_entity_1 = require("./TblDmYeuCauGioiTinh.entity");
let TblTuyenDung = class TblTuyenDung {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'IdTuyenDung' }),
    __metadata("design:type", String)
], TblTuyenDung.prototype, "idTuyenDung", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'td_tieude', nullable: true, length: 500 }),
    __metadata("design:type", String)
], TblTuyenDung.prototype, "tdTieude", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'td_chuc_danh', nullable: true }),
    __metadata("design:type", Number)
], TblTuyenDung.prototype, "tdChucDanh", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'td_nganhkhac', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblTuyenDung.prototype, "tdNganhkhac", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'td_soluong', default: () => '(0)' }),
    __metadata("design:type", Number)
], TblTuyenDung.prototype, "tdSoluong", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'td_motacongviec', nullable: true, length: 4000 }),
    __metadata("design:type", String)
], TblTuyenDung.prototype, "tdMotacongviec", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'td_motayeucau', nullable: true, length: 4000 }),
    __metadata("design:type", String)
], TblTuyenDung.prototype, "tdMotayeucau", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'td_quyenloi', nullable: true, length: 4000 }),
    __metadata("design:type", String)
], TblTuyenDung.prototype, "tdQuyenloi", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'td_ghichu', nullable: true, length: 4000 }),
    __metadata("design:type", String)
], TblTuyenDung.prototype, "tdGhichu", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', {
        name: 'td_luongkhoidiem',
        nullable: true,
        precision: 18,
        scale: 0,
    }),
    __metadata("design:type", Number)
], TblTuyenDung.prototype, "tdLuongkhoidiem", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'NgayNhanHoSo', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblTuyenDung.prototype, "ngayNhanHoSo", void 0);
__decorate([
    (0, typeorm_1.Column)('date', {
        name: 'NgayHetNhanHoSo',
        nullable: true,
        default: () => 'getdate()',
    }),
    __metadata("design:type", Date)
], TblTuyenDung.prototype, "ngayHetNhanHoSo", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'IsDenKhiTuyenXong', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TblTuyenDung.prototype, "isDenKhiTuyenXong", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'td_noinophoso', nullable: true, length: 4000 }),
    __metadata("design:type", String)
], TblTuyenDung.prototype, "tdNoinophoso", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'td_hosobaogom', nullable: true, length: 4000 }),
    __metadata("design:type", String)
], TblTuyenDung.prototype, "tdHosobaogom", void 0);
__decorate([
    (0, typeorm_1.Column)('int', {
        name: 'td_YeuCauChieuCao',
        nullable: true,
        default: () => '(0)',
    }),
    __metadata("design:type", Number)
], TblTuyenDung.prototype, "tdYeuCauChieuCao", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'td_yeucau_kinhnghiem', nullable: true }),
    __metadata("design:type", Number)
], TblTuyenDung.prototype, "tdYeucauKinhnghiem", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'td_yeucau_tuoiMin', nullable: true }),
    __metadata("design:type", Number)
], TblTuyenDung.prototype, "tdYeucauTuoiMin", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'td_yeucau_tuoiMax', nullable: true }),
    __metadata("design:type", Number)
], TblTuyenDung.prototype, "tdYeucauTuoiMax", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'td_lanxem', default: () => '(0)' }),
    __metadata("design:type", Number)
], TblTuyenDung.prototype, "tdLanxem", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'td_duyet', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TblTuyenDung.prototype, "tdDuyet", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'CreatedDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblTuyenDung.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'CreatedBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblTuyenDung.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ModifiredDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblTuyenDung.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'ModifiredBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblTuyenDung.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'td_id', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblTuyenDung.prototype, "tdId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'td_id_doanhnghiep', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblTuyenDung.prototype, "tdIdDoanhnghiep", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'NguonThuThap',
        nullable: true,
        length: 3,
        default: () => "'ITN'",
    }),
    __metadata("design:type", String)
], TblTuyenDung.prototype, "nguonThuThap", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'SoLuongDat', default: () => '(0)' }),
    __metadata("design:type", Number)
], TblTuyenDung.prototype, "soLuongDat", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'SoLuongKhongDat', default: () => '(0)' }),
    __metadata("design:type", Number)
], TblTuyenDung.prototype, "soLuongKhongDat", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'SoLuongChoKetQua', default: () => '(0)' }),
    __metadata("design:type", Number)
], TblTuyenDung.prototype, "soLuongChoKetQua", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdMucLuong', nullable: true }),
    __metadata("design:type", Number)
], TblTuyenDung.prototype, "idMucLuong", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdDoTuoi', nullable: true }),
    __metadata("design:type", Number)
], TblTuyenDung.prototype, "idDoTuoi", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', {
        name: 'DoanhNghiepYeuCau',
        nullable: true,
        length: 4000,
    }),
    __metadata("design:type", String)
], TblTuyenDung.prototype, "doanhNghiepYeuCau", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblNhaTuyenDung_entity_1.TblNhaTuyenDung, (tblNhaTuyenDung) => tblNhaTuyenDung.tblTuyenDungs, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)([
        { name: 'IdDoanhNghiep', referencedColumnName: 'idDoanhNghiep' },
    ]),
    __metadata("design:type", TblNhaTuyenDung_entity_1.TblNhaTuyenDung)
], TblTuyenDung.prototype, "idDoanhNghiep", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblDmTinhThanh_entity_1.TblDmTinhThanh, (tblDmTinhThanh) => tblDmTinhThanh.tblTuyenDungs, { onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)([{ name: 'td_noilamviec', referencedColumnName: 'tpId' }]),
    __metadata("design:type", TblDmTinhThanh_entity_1.TblDmTinhThanh)
], TblTuyenDung.prototype, "tdNoilamviec", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblDmTrinhDoHocVan_entity_1.TblDmTrinhDoHocVan, (tblDmTrinhDoHocVan) => tblDmTrinhDoHocVan.tblTuyenDungs, { onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)([{ name: 'td_YeuCauHocVan', referencedColumnName: 'hocvanId' }]),
    __metadata("design:type", TblDmTrinhDoHocVan_entity_1.TblDmTrinhDoHocVan)
], TblTuyenDung.prototype, "tdYeuCauHocVan", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblDmTrinhDoTinHoc_entity_1.TblDmTrinhDoTinHoc, (tblDmTrinhDoTinHoc) => tblDmTrinhDoTinHoc.tblTuyenDungs, { onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)([{ name: 'td_YeuCauTinHoc', referencedColumnName: 'tdthId' }]),
    __metadata("design:type", TblDmTrinhDoTinHoc_entity_1.TblDmTrinhDoTinHoc)
], TblTuyenDung.prototype, "tdYeuCauTinHoc", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblDmNganh_entity_1.TblDmNganh, (tblDmNganh) => tblDmNganh.tblTuyenDungs, {
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'td_nganhnghe', referencedColumnName: 'nganhId' }]),
    __metadata("design:type", TblDmNganh_entity_1.TblDmNganh)
], TblTuyenDung.prototype, "tdNganhnghe", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblDmThoiGianLamViec_entity_1.TblDmThoiGianLamViec, (tblDmThoiGianLamViec) => tblDmThoiGianLamViec.tblTuyenDungs, { onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)([
        { name: 'td_thoigianlamviec', referencedColumnName: 'maThoigian' },
    ]),
    __metadata("design:type", TblDmThoiGianLamViec_entity_1.TblDmThoiGianLamViec)
], TblTuyenDung.prototype, "tdThoigianlamviec", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblDmTrinhDoNgoaiNgu_entity_1.TblDmTrinhDoNgoaiNgu, (tblDmTrinhDoNgoaiNgu) => tblDmTrinhDoNgoaiNgu.tblTuyenDungs, { onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)([{ name: 'td_YeuCauNgoaiNgu', referencedColumnName: 'tdnnId' }]),
    __metadata("design:type", TblDmTrinhDoNgoaiNgu_entity_1.TblDmTrinhDoNgoaiNgu)
], TblTuyenDung.prototype, "tdYeuCauNgoaiNgu", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblDmYeuCauGioiTinh_entity_1.TblDmYeuCauGioiTinh, (tblDmYeuCauGioiTinh) => tblDmYeuCauGioiTinh.tblTuyenDungs, { onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)([{ name: 'td_YeuCauGioiTinh', referencedColumnName: 'idYcgt' }]),
    __metadata("design:type", TblDmYeuCauGioiTinh_entity_1.TblDmYeuCauGioiTinh)
], TblTuyenDung.prototype, "tdYeuCauGioiTinh", void 0);
TblTuyenDung = __decorate([
    (0, typeorm_1.Index)('PK_tb_tuyendung', ['idTuyenDung'], { unique: true }),
    (0, typeorm_1.Entity)('tblTuyenDung', { schema: 'dbo' })
], TblTuyenDung);
exports.TblTuyenDung = TblTuyenDung;
//# sourceMappingURL=TblTuyenDung.entity.js.map