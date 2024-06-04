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
exports.TbHosoungvien = void 0;
const typeorm_1 = require("typeorm");
let TbHosoungvien = class TbHosoungvien {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)('int', { primary: true, name: 'id' }),
    __metadata("design:type", Number)
], TbHosoungvien.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'uv_id', length: 50 }),
    __metadata("design:type", String)
], TbHosoungvien.prototype, "uvId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'uv_username', length: 50 }),
    __metadata("design:type", String)
], TbHosoungvien.prototype, "uvUsername", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'uv_password', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TbHosoungvien.prototype, "uvPassword", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'uv_hoten', nullable: true, length: 250 }),
    __metadata("design:type", String)
], TbHosoungvien.prototype, "uvHoten", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'uv_email', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TbHosoungvien.prototype, "uvEmail", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'uv_diachi_x', nullable: true }),
    __metadata("design:type", Number)
], TbHosoungvien.prototype, "uvDiachiX", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'uv_diachichitiet', nullable: true, length: 200 }),
    __metadata("design:type", String)
], TbHosoungvien.prototype, "uvDiachichitiet", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'uv_dienthoai', nullable: true, length: 25 }),
    __metadata("design:type", String)
], TbHosoungvien.prototype, "uvDienthoai", void 0);
__decorate([
    (0, typeorm_1.Column)('char', { name: 'uv_soCMND', nullable: true, length: 9 }),
    __metadata("design:type", String)
], TbHosoungvien.prototype, "uvSoCmnd", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'uv_gioitinh', nullable: true }),
    __metadata("design:type", Number)
], TbHosoungvien.prototype, "uvGioitinh", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'uv_chieucao', nullable: true, length: 10 }),
    __metadata("design:type", String)
], TbHosoungvien.prototype, "uvChieucao", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'uv_cannang', nullable: true, length: 10 }),
    __metadata("design:type", String)
], TbHosoungvien.prototype, "uvCannang", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'uv_doituongchinhsach',
        nullable: true,
        length: 50,
    }),
    __metadata("design:type", String)
], TbHosoungvien.prototype, "uvDoituongchinhsach", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'uv_tinhtrangtantat', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TbHosoungvien.prototype, "uvTinhtrangtantat", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'uv_honnhan', nullable: true }),
    __metadata("design:type", Number)
], TbHosoungvien.prototype, "uvHonnhan", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'uv_ngaysinh', nullable: true, length: 25 }),
    __metadata("design:type", String)
], TbHosoungvien.prototype, "uvNgaysinh", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', {
        name: 'uvnv_tencongviec',
        nullable: true,
        length: 4000,
    }),
    __metadata("design:type", String)
], TbHosoungvien.prototype, "uvnvTencongviec", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'uvnv_nganhnghe', nullable: true, length: 400 }),
    __metadata("design:type", String)
], TbHosoungvien.prototype, "uvnvNganhnghe", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'uvnv_vitrimongmuon', nullable: true, length: 10 }),
    __metadata("design:type", String)
], TbHosoungvien.prototype, "uvnvVitrimongmuon", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'uvnv_thoigian', nullable: true }),
    __metadata("design:type", Number)
], TbHosoungvien.prototype, "uvnvThoigian", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'uvnv_noilamviec', nullable: true, length: 20 }),
    __metadata("design:type", String)
], TbHosoungvien.prototype, "uvnvNoilamviec", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'uvnv_quanhuyen', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TbHosoungvien.prototype, "uvnvQuanhuyen", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'uvnv_mucluong', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TbHosoungvien.prototype, "uvnvMucluong", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'uvnv_hinhthuccongty', nullable: true }),
    __metadata("design:type", Number)
], TbHosoungvien.prototype, "uvnvHinhthuccongty", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'uv_ghichu', nullable: true, length: 4000 }),
    __metadata("design:type", String)
], TbHosoungvien.prototype, "uvGhichu", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'uvcm_trinhdo', nullable: true }),
    __metadata("design:type", Number)
], TbHosoungvien.prototype, "uvcmTrinhdo", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'uvcm_bangcap', nullable: true, length: 4000 }),
    __metadata("design:type", String)
], TbHosoungvien.prototype, "uvcmBangcap", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', {
        name: 'uvcm_congviechientai',
        nullable: true,
        length: 250,
    }),
    __metadata("design:type", String)
], TbHosoungvien.prototype, "uvcmCongviechientai", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'uvcm_kynang', nullable: true, length: 200 }),
    __metadata("design:type", String)
], TbHosoungvien.prototype, "uvcmKynang", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', {
        name: 'uvcm_trinhdongoaingu',
        nullable: true,
        length: 400,
    }),
    __metadata("design:type", String)
], TbHosoungvien.prototype, "uvcmTrinhdongoaingu", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', {
        name: 'uvcm_trinhdotinhoc',
        nullable: true,
        length: 400,
    }),
    __metadata("design:type", String)
], TbHosoungvien.prototype, "uvcmTrinhdotinhoc", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', {
        name: 'uvcm_kinhnghiem',
        nullable: true,
        precision: 18,
        scale: 1,
    }),
    __metadata("design:type", Number)
], TbHosoungvien.prototype, "uvcmKinhnghiem", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'uv_ngaydang', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TbHosoungvien.prototype, "uvNgaydang", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'uv_thoihandang', nullable: true }),
    __metadata("design:type", Date)
], TbHosoungvien.prototype, "uvThoihandang", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'uv_solanxem', nullable: true }),
    __metadata("design:type", Number)
], TbHosoungvien.prototype, "uvSolanxem", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'uv_duyet', nullable: true }),
    __metadata("design:type", Boolean)
], TbHosoungvien.prototype, "uvDuyet", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'uv_hienthi', nullable: true }),
    __metadata("design:type", Boolean)
], TbHosoungvien.prototype, "uvHienthi", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'uvht_telephone', nullable: true }),
    __metadata("design:type", Boolean)
], TbHosoungvien.prototype, "uvhtTelephone", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'uvht_email', nullable: true }),
    __metadata("design:type", Boolean)
], TbHosoungvien.prototype, "uvhtEmail", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'uvht_address', nullable: true }),
    __metadata("design:type", Boolean)
], TbHosoungvien.prototype, "uvhtAddress", void 0);
TbHosoungvien = __decorate([
    (0, typeorm_1.Index)('PK_tb_hosoungvien_old', ['id'], { unique: true }),
    (0, typeorm_1.Entity)('tb_hosoungvien', { schema: 'dbo' })
], TbHosoungvien);
exports.TbHosoungvien = TbHosoungvien;
//# sourceMappingURL=TbHosoungvien.entity.js.map