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
exports.TblHoSoUngVien = void 0;
const typeorm_1 = require("typeorm");
const TblDmTinhTrangTanTat_entity_1 = require("./TblDmTinhTrangTanTat.entity");
const TblDmDanToc_entity_1 = require("./TblDmDanToc.entity");
const TblDmTtHonNhan_entity_1 = require("./TblDmTtHonNhan.entity");
const TblDmChucDanh_entity_1 = require("./TblDmChucDanh.entity");
const TblDmThoiGianLamViec_entity_1 = require("./TblDmThoiGianLamViec.entity");
const TblDmDoiTuongChinhSach_entity_1 = require("./TblDmDoiTuongChinhSach.entity");
const TblDmTrinhDoHocVan_entity_1 = require("./TblDmTrinhDoHocVan.entity");
const TblDmNganh_entity_1 = require("./TblDmNganh.entity");
const TblDmHinhThucDoanhNghiep_entity_1 = require("./TblDmHinhThucDoanhNghiep.entity");
const TblVieclamUngVien_entity_1 = require("./TblVieclamUngVien.entity");
let TblHoSoUngVien = class TblHoSoUngVien {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'id' }),
    __metadata("design:type", String)
], TblHoSoUngVien.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'uv_username', length: 50 }),
    __metadata("design:type", String)
], TblHoSoUngVien.prototype, "uvUsername", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'uv_password', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblHoSoUngVien.prototype, "uvPassword", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'uv_hoten', nullable: true, length: 100 }),
    __metadata("design:type", String)
], TblHoSoUngVien.prototype, "uvHoten", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'uv_email', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblHoSoUngVien.prototype, "uvEmail", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'MaHoSo', nullable: true, length: 20 }),
    __metadata("design:type", String)
], TblHoSoUngVien.prototype, "maHoSo", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'CVMongMuon', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblHoSoUngVien.prototype, "cvMongMuon", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'DocumentPath', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblHoSoUngVien.prototype, "documentPath", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'ImagePath', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblHoSoUngVien.prototype, "imagePath", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'uv_diachichitiet', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblHoSoUngVien.prototype, "uvDiachichitiet", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'uv_dienthoai', nullable: true, length: 30 }),
    __metadata("design:type", String)
], TblHoSoUngVien.prototype, "uvDienthoai", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'uv_soCMND', nullable: true, length: 16 }),
    __metadata("design:type", String)
], TblHoSoUngVien.prototype, "uvSoCmnd", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'uv_Ngaycap', nullable: true }),
    __metadata("design:type", Date)
], TblHoSoUngVien.prototype, "uvNgaycap", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'uv_Noicap', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblHoSoUngVien.prototype, "uvNoicap", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'uv_gioitinh', nullable: true }),
    __metadata("design:type", Number)
], TblHoSoUngVien.prototype, "uvGioitinh", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'uv_chieucao', nullable: true, length: 10 }),
    __metadata("design:type", String)
], TblHoSoUngVien.prototype, "uvChieucao", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'uv_cannang', nullable: true, length: 10 }),
    __metadata("design:type", String)
], TblHoSoUngVien.prototype, "uvCannang", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'uv_ngaysinh', nullable: true }),
    __metadata("design:type", Date)
], TblHoSoUngVien.prototype, "uvNgaysinh", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', {
        name: 'uvcm_congviechientai',
        nullable: true,
        length: 4000,
    }),
    __metadata("design:type", String)
], TblHoSoUngVien.prototype, "uvcmCongviechientai", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'uvnv_noilamviec', nullable: true, length: 20 }),
    __metadata("design:type", String)
], TblHoSoUngVien.prototype, "uvnvNoilamviec", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'uvnv_mucluong', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblHoSoUngVien.prototype, "uvnvMucluong", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'uv_ghichu', nullable: true, length: 4000 }),
    __metadata("design:type", String)
], TblHoSoUngVien.prototype, "uvGhichu", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'uvcm_bangcap', nullable: true, length: 4000 }),
    __metadata("design:type", String)
], TblHoSoUngVien.prototype, "uvcmBangcap", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'uvcm_kynang', nullable: true, length: 200 }),
    __metadata("design:type", String)
], TblHoSoUngVien.prototype, "uvcmKynang", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', {
        name: 'uvcm_trinhdongoaingu',
        nullable: true,
        length: 400,
    }),
    __metadata("design:type", String)
], TblHoSoUngVien.prototype, "uvcmTrinhdongoaingu", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', {
        name: 'uvcm_trinhdotinhoc',
        nullable: true,
        length: 400,
    }),
    __metadata("design:type", String)
], TblHoSoUngVien.prototype, "uvcmTrinhdotinhoc", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'uvcm_kinhnghiem', default: () => '(0)' }),
    __metadata("design:type", Number)
], TblHoSoUngVien.prototype, "uvcmKinhnghiem", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'uv_solanxem', default: () => '(0)' }),
    __metadata("design:type", Number)
], TblHoSoUngVien.prototype, "uvSolanxem", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'Interview', default: () => '(0)' }),
    __metadata("design:type", Number)
], TblHoSoUngVien.prototype, "interview", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'Interviewed', default: () => '(0)' }),
    __metadata("design:type", Number)
], TblHoSoUngVien.prototype, "interviewed", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'uv_duyet', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TblHoSoUngVien.prototype, "uvDuyet", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'uv_hienthi', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TblHoSoUngVien.prototype, "uvHienthi", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'uvht_telephone', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TblHoSoUngVien.prototype, "uvhtTelephone", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'uvht_email', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TblHoSoUngVien.prototype, "uvhtEmail", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'uvht_address', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TblHoSoUngVien.prototype, "uvhtAddress", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'CreatedDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblHoSoUngVien.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'CreatedBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblHoSoUngVien.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ModifiredDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblHoSoUngVien.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'ModifiredBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblHoSoUngVien.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'uv_id', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblHoSoUngVien.prototype, "uvId", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'NewsletterSubscription', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TblHoSoUngVien.prototype, "newsletterSubscription", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'JobsletterSubscription', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TblHoSoUngVien.prototype, "jobsletterSubscription", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'CoBHTN', nullable: true, default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TblHoSoUngVien.prototype, "coBhtn", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'SoNhaDuong', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblHoSoUngVien.prototype, "soNhaDuong", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdThanhPho', nullable: true }),
    __metadata("design:type", Number)
], TblHoSoUngVien.prototype, "idThanhPho", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IdTinh', nullable: true, length: 2 }),
    __metadata("design:type", String)
], TblHoSoUngVien.prototype, "idTinh", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Idhuyen', nullable: true, length: 5 }),
    __metadata("design:type", String)
], TblHoSoUngVien.prototype, "idhuyen", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Idxa', nullable: true, length: 8 }),
    __metadata("design:type", String)
], TblHoSoUngVien.prototype, "idxa", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'Idtv', nullable: true }),
    __metadata("design:type", String)
], TblHoSoUngVien.prototype, "idtv", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'MahoGD', nullable: true, length: 20 }),
    __metadata("design:type", String)
], TblHoSoUngVien.prototype, "mahoGd", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'FileCV', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblHoSoUngVien.prototype, "fileCv", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder', nullable: true }),
    __metadata("design:type", Number)
], TblHoSoUngVien.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'Ngayduyet', nullable: true }),
    __metadata("design:type", Date)
], TblHoSoUngVien.prototype, "ngayduyet", void 0);
__decorate([
    (0, typeorm_1.Column)('image', { name: 'Avatar', nullable: true }),
    __metadata("design:type", Buffer)
], TblHoSoUngVien.prototype, "avatar", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblDmTinhTrangTanTat_entity_1.TblDmTinhTrangTanTat, (tblDmTinhTrangTanTat) => tblDmTinhTrangTanTat.tblHoSoUngViens, { onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)([
        { name: 'uv_tinhtrangtantat', referencedColumnName: 'tantatId' },
    ]),
    __metadata("design:type", TblDmTinhTrangTanTat_entity_1.TblDmTinhTrangTanTat)
], TblHoSoUngVien.prototype, "uvTinhtrangtantat", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblDmDanToc_entity_1.TblDmDanToc, (tblDmDanToc) => tblDmDanToc.tblHoSoUngViens, {
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'IdDanToc', referencedColumnName: 'idDt' }]),
    __metadata("design:type", TblDmDanToc_entity_1.TblDmDanToc)
], TblHoSoUngVien.prototype, "idDanToc", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblDmTtHonNhan_entity_1.TblDmTtHonNhan, (tblDmTtHonNhan) => tblDmTtHonNhan.tblHoSoUngViens, { onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)([{ name: 'uv_honnhan', referencedColumnName: 'idTtHonNhan' }]),
    __metadata("design:type", TblDmTtHonNhan_entity_1.TblDmTtHonNhan)
], TblHoSoUngVien.prototype, "uvHonnhan", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblDmChucDanh_entity_1.TblDmChucDanh, (tblDmChucDanh) => tblDmChucDanh.tblHoSoUngViens, { onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)([
        { name: 'uvnv_vitrimongmuon', referencedColumnName: 'maChucDanh' },
    ]),
    __metadata("design:type", TblDmChucDanh_entity_1.TblDmChucDanh)
], TblHoSoUngVien.prototype, "uvnvVitrimongmuon", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblDmThoiGianLamViec_entity_1.TblDmThoiGianLamViec, (tblDmThoiGianLamViec) => tblDmThoiGianLamViec.tblHoSoUngViens, { onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)([{ name: 'uvnv_thoigian', referencedColumnName: 'maThoigian' }]),
    __metadata("design:type", TblDmThoiGianLamViec_entity_1.TblDmThoiGianLamViec)
], TblHoSoUngVien.prototype, "uvnvThoigian", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblDmDoiTuongChinhSach_entity_1.TblDmDoiTuongChinhSach, (tblDmDoiTuongChinhSach) => tblDmDoiTuongChinhSach.tblHoSoUngViens, { onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)([
        { name: 'uv_doituongchinhsach', referencedColumnName: 'dtcsId' },
    ]),
    __metadata("design:type", TblDmDoiTuongChinhSach_entity_1.TblDmDoiTuongChinhSach)
], TblHoSoUngVien.prototype, "uvDoituongchinhsach", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblDmTrinhDoHocVan_entity_1.TblDmTrinhDoHocVan, (tblDmTrinhDoHocVan) => tblDmTrinhDoHocVan.tblHoSoUngViens, { onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)([{ name: 'uvcm_trinhdo', referencedColumnName: 'hocvanId' }]),
    __metadata("design:type", TblDmTrinhDoHocVan_entity_1.TblDmTrinhDoHocVan)
], TblHoSoUngVien.prototype, "uvcmTrinhdo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblDmNganh_entity_1.TblDmNganh, (tblDmNganh) => tblDmNganh.tblHoSoUngViens, {
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'uvnv_nganhnghe', referencedColumnName: 'nganhId' }]),
    __metadata("design:type", TblDmNganh_entity_1.TblDmNganh)
], TblHoSoUngVien.prototype, "uvnvNganhnghe", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblDmHinhThucDoanhNghiep_entity_1.TblDmHinhThucDoanhNghiep, (tblDmHinhThucDoanhNghiep) => tblDmHinhThucDoanhNghiep.tblHoSoUngViens, { onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)([
        { name: 'uvnv_hinhthuccongty', referencedColumnName: 'maHinhthuc' },
    ]),
    __metadata("design:type", TblDmHinhThucDoanhNghiep_entity_1.TblDmHinhThucDoanhNghiep)
], TblHoSoUngVien.prototype, "uvnvHinhthuccongty", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TblVieclamUngVien_entity_1.TblVieclamUngVien, (tblVieclamUngVien) => tblVieclamUngVien.iduv),
    __metadata("design:type", Array)
], TblHoSoUngVien.prototype, "tblVieclamUngViens", void 0);
TblHoSoUngVien = __decorate([
    (0, typeorm_1.Index)('PK_tb_hosoungvien', ['id'], { unique: true }),
    (0, typeorm_1.Entity)('tblHoSoUngVien', { schema: 'dbo' })
], TblHoSoUngVien);
exports.TblHoSoUngVien = TblHoSoUngVien;
//# sourceMappingURL=TblHoSoUngVien.entity.js.map