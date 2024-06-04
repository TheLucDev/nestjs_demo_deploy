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
exports.TblDmThanhvienGd = void 0;
const typeorm_1 = require("typeorm");
const TblDmHogiadinh_entity_1 = require("./TblDmHogiadinh.entity");
let TblDmThanhvienGd = class TblDmThanhvienGd {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'Id' }),
    __metadata("design:type", String)
], TblDmThanhvienGd.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'NgayGhiso' }),
    __metadata("design:type", Date)
], TblDmThanhvienGd.prototype, "ngayGhiso", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'Iduv', nullable: true }),
    __metadata("design:type", String)
], TblDmThanhvienGd.prototype, "iduv", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Code', length: 12 }),
    __metadata("design:type", String)
], TblDmThanhvienGd.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Hoten', length: 50 }),
    __metadata("design:type", String)
], TblDmThanhvienGd.prototype, "hoten", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'Ngaysinh' }),
    __metadata("design:type", Date)
], TblDmThanhvienGd.prototype, "ngaysinh", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'SoCCCD', nullable: true, length: 20 }),
    __metadata("design:type", String)
], TblDmThanhvienGd.prototype, "soCccd", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'Ngaycap', nullable: true }),
    __metadata("design:type", Date)
], TblDmThanhvienGd.prototype, "ngaycap", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Masothue', nullable: true, length: 20 }),
    __metadata("design:type", String)
], TblDmThanhvienGd.prototype, "masothue", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Diachi', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblDmThanhvienGd.prototype, "diachi", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdDantoc' }),
    __metadata("design:type", Number)
], TblDmThanhvienGd.prototype, "idDantoc", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdTongiao', nullable: true }),
    __metadata("design:type", Number)
], TblDmThanhvienGd.prototype, "idTongiao", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdGioitinh' }),
    __metadata("design:type", Number)
], TblDmThanhvienGd.prototype, "idGioitinh", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdQuanhe' }),
    __metadata("design:type", Number)
], TblDmThanhvienGd.prototype, "idQuanhe", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'Cao', nullable: true }),
    __metadata("design:type", Number)
], TblDmThanhvienGd.prototype, "cao", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'Nang', nullable: true }),
    __metadata("design:type", Number)
], TblDmThanhvienGd.prototype, "nang", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkTTdihoc', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TblDmThanhvienGd.prototype, "chkTTdihoc", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdCaphoc', nullable: true }),
    __metadata("design:type", Number)
], TblDmThanhvienGd.prototype, "idCaphoc", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdGDPT', nullable: true }),
    __metadata("design:type", Number)
], TblDmThanhvienGd.prototype, "idGdpt", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdTdHocvan', nullable: true }),
    __metadata("design:type", Number)
], TblDmThanhvienGd.prototype, "idTdHocvan", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IdBachoc', nullable: true, length: 4 }),
    __metadata("design:type", String)
], TblDmThanhvienGd.prototype, "idBachoc", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'Idchuyenmon', nullable: true }),
    __metadata("design:type", Number)
], TblDmThanhvienGd.prototype, "idchuyenmon", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkBHYT', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TblDmThanhvienGd.prototype, "chkBhyt", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkInternet', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TblDmThanhvienGd.prototype, "chkInternet", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdDoituong', nullable: true }),
    __metadata("design:type", Number)
], TblDmThanhvienGd.prototype, "idDoituong", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdSatusVieclam', nullable: true }),
    __metadata("design:type", Number)
], TblDmThanhvienGd.prototype, "idSatusVieclam", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdLoaiVieclam', nullable: true }),
    __metadata("design:type", Number)
], TblDmThanhvienGd.prototype, "idLoaiVieclam", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkHDLD', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TblDmThanhvienGd.prototype, "chkHdld", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdLamconganluong', nullable: true }),
    __metadata("design:type", Number)
], TblDmThanhvienGd.prototype, "idLamconganluong", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdHuongtrocap', nullable: true }),
    __metadata("design:type", Number)
], TblDmThanhvienGd.prototype, "idHuongtrocap", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkbenhHN', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TblDmThanhvienGd.prototype, "chkbenhHn", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Congviecdanglam', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblDmThanhvienGd.prototype, "congviecdanglam", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Tencoquan', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblDmThanhvienGd.prototype, "tencoquan", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IdNKT', nullable: true, length: 4 }),
    __metadata("design:type", String)
], TblDmThanhvienGd.prototype, "idNkt", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdVithevieclam', nullable: true }),
    __metadata("design:type", Number)
], TblDmThanhvienGd.prototype, "idVithevieclam", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IdLoaihinhDN', nullable: true, length: 3 }),
    __metadata("design:type", String)
], TblDmThanhvienGd.prototype, "idLoaihinhDn", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdLoaithatnghiep', nullable: true }),
    __metadata("design:type", Number)
], TblDmThanhvienGd.prototype, "idLoaithatnghiep", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdTGthatnghiep', nullable: true }),
    __metadata("design:type", Number)
], TblDmThanhvienGd.prototype, "idTGthatnghiep", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkKhongthamgia', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TblDmThanhvienGd.prototype, "chkKhongthamgia", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Nguyennhan', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblDmThanhvienGd.prototype, "nguyennhan", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Ghichu', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblDmThanhvienGd.prototype, "ghichu", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder', default: () => '(1)' }),
    __metadata("design:type", Number)
], TblDmThanhvienGd.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'CreatedDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblDmThanhvienGd.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'CreatedBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblDmThanhvienGd.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ModifiredDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblDmThanhvienGd.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'ModifiredBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblDmThanhvienGd.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdBiendong', nullable: true }),
    __metadata("design:type", Number)
], TblDmThanhvienGd.prototype, "idBiendong", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TblDmThanhvienGd.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'TagName', nullable: true, length: 4 }),
    __metadata("design:type", String)
], TblDmThanhvienGd.prototype, "tagName", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblDmHogiadinh_entity_1.TblDmHogiadinh, (tblDmHogiadinh) => tblDmHogiadinh.tblDmThanhvienGds, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)([{ name: 'Maho', referencedColumnName: 'maho' }]),
    __metadata("design:type", TblDmHogiadinh_entity_1.TblDmHogiadinh)
], TblDmThanhvienGd.prototype, "maho", void 0);
TblDmThanhvienGd = __decorate([
    (0, typeorm_1.Index)('PK_tblDmThanhvienGD', ['id'], { unique: true }),
    (0, typeorm_1.Entity)('tblDmThanhvienGD', { schema: 'dbo' })
], TblDmThanhvienGd);
exports.TblDmThanhvienGd = TblDmThanhvienGd;
//# sourceMappingURL=TblDmThanhvienGd.entity.js.map