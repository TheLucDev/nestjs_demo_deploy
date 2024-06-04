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
exports.TbTuyendung = void 0;
const typeorm_1 = require("typeorm");
let TbTuyendung = class TbTuyendung {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)('int', { primary: true, name: 'id' }),
    __metadata("design:type", Number)
], TbTuyendung.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'td_id', length: 50 }),
    __metadata("design:type", String)
], TbTuyendung.prototype, "tdId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'td_id_doanhnghiep', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TbTuyendung.prototype, "tdIdDoanhnghiep", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'td_tieude', nullable: true, length: 4000 }),
    __metadata("design:type", String)
], TbTuyendung.prototype, "tdTieude", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'td_vitri', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TbTuyendung.prototype, "tdVitri", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'td_nganhnghe', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TbTuyendung.prototype, "tdNganhnghe", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'td_nganhkhac', nullable: true, length: 100 }),
    __metadata("design:type", String)
], TbTuyendung.prototype, "tdNganhkhac", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'td_soluong', nullable: true, length: 500 }),
    __metadata("design:type", String)
], TbTuyendung.prototype, "tdSoluong", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'td_motacongviec', nullable: true, length: 4000 }),
    __metadata("design:type", String)
], TbTuyendung.prototype, "tdMotacongviec", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'td_motayeucau', nullable: true, length: 4000 }),
    __metadata("design:type", String)
], TbTuyendung.prototype, "tdMotayeucau", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'td_quyenloi', nullable: true, length: 4000 }),
    __metadata("design:type", String)
], TbTuyendung.prototype, "tdQuyenloi", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'td_ghichu', nullable: true, length: 4000 }),
    __metadata("design:type", String)
], TbTuyendung.prototype, "tdGhichu", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'td_thoigianlamviec', nullable: true }),
    __metadata("design:type", Number)
], TbTuyendung.prototype, "tdThoigianlamviec", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'td_noilamviec', nullable: true }),
    __metadata("design:type", Number)
], TbTuyendung.prototype, "tdNoilamviec", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'td_nuocngoai', nullable: true, length: 4000 }),
    __metadata("design:type", String)
], TbTuyendung.prototype, "tdNuocngoai", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', {
        name: 'td_luongkhoidiem',
        nullable: true,
        precision: 18,
        scale: 0,
    }),
    __metadata("design:type", Number)
], TbTuyendung.prototype, "tdLuongkhoidiem", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'td_ngaynhanhoso', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TbTuyendung.prototype, "tdNgaynhanhoso", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'td_ngayhethanhoso', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TbTuyendung.prototype, "tdNgayhethanhoso", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'td_noinophoso', nullable: true, length: 4000 }),
    __metadata("design:type", String)
], TbTuyendung.prototype, "tdNoinophoso", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'td_hosobaogom', nullable: true, length: 4000 }),
    __metadata("design:type", String)
], TbTuyendung.prototype, "tdHosobaogom", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'td_yeucauhocvan', nullable: true }),
    __metadata("design:type", Number)
], TbTuyendung.prototype, "tdYeucauhocvan", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'td_yeucaungoaingu', nullable: true, length: 200 }),
    __metadata("design:type", String)
], TbTuyendung.prototype, "tdYeucaungoaingu", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'td_yeucau_tinhoc', nullable: true, length: 200 }),
    __metadata("design:type", String)
], TbTuyendung.prototype, "tdYeucauTinhoc", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'td_yeucau_gioitinh', nullable: true }),
    __metadata("design:type", Number)
], TbTuyendung.prototype, "tdYeucauGioitinh", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'td_yeucau_chieucao', nullable: true }),
    __metadata("design:type", Number)
], TbTuyendung.prototype, "tdYeucauChieucao", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'td_yeucau_kinhnghiem', nullable: true }),
    __metadata("design:type", Number)
], TbTuyendung.prototype, "tdYeucauKinhnghiem", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'td_yeucau_tuoiMin', nullable: true }),
    __metadata("design:type", Number)
], TbTuyendung.prototype, "tdYeucauTuoiMin", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'td_yeucau_tuoiMax', nullable: true }),
    __metadata("design:type", Number)
], TbTuyendung.prototype, "tdYeucauTuoiMax", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', {
        name: 'td_yeucau_hokhau',
        nullable: true,
        length: 4000,
    }),
    __metadata("design:type", String)
], TbTuyendung.prototype, "tdYeucauHokhau", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'td_ngaydang', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TbTuyendung.prototype, "tdNgaydang", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'td_ngayhethan', nullable: true }),
    __metadata("design:type", Date)
], TbTuyendung.prototype, "tdNgayhethan", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'td_duyet', nullable: true }),
    __metadata("design:type", Boolean)
], TbTuyendung.prototype, "tdDuyet", void 0);
__decorate([
    (0, typeorm_1.Column)('char', { name: 'td_nguonvieclam', nullable: true, length: 1 }),
    __metadata("design:type", String)
], TbTuyendung.prototype, "tdNguonvieclam", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'td_soluonggioithieu', nullable: true }),
    __metadata("design:type", Number)
], TbTuyendung.prototype, "tdSoluonggioithieu", void 0);
__decorate([
    (0, typeorm_1.Column)('char', { name: 'td_loaivieclam', nullable: true, length: 1 }),
    __metadata("design:type", String)
], TbTuyendung.prototype, "tdLoaivieclam", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'td_xkld', nullable: true, length: 100 }),
    __metadata("design:type", String)
], TbTuyendung.prototype, "tdXkld", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'td_xkld_quocgia', nullable: true, length: 100 }),
    __metadata("design:type", String)
], TbTuyendung.prototype, "tdXkldQuocgia", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'td_lanxem', nullable: true }),
    __metadata("design:type", Number)
], TbTuyendung.prototype, "tdLanxem", void 0);
TbTuyendung = __decorate([
    (0, typeorm_1.Index)('PK_tb_tuyendung_old', ['id'], { unique: true }),
    (0, typeorm_1.Entity)('tb_tuyendung', { schema: 'dbo' })
], TbTuyendung);
exports.TbTuyendung = TbTuyendung;
//# sourceMappingURL=TbTuyendung.entity.js.map