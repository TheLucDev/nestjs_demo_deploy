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
exports.TblDmnhanvien = void 0;
const typeorm_1 = require("typeorm");
const TblPhongban_entity_1 = require("./TblPhongban.entity");
let TblDmnhanvien = class TblDmnhanvien {
};
__decorate([
    (0, typeorm_1.Column)('int', { name: 'sott' }),
    __metadata("design:type", Number)
], TblDmnhanvien.prototype, "sott", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'manv', length: 15 }),
    __metadata("design:type", String)
], TblDmnhanvien.prototype, "manv", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'mahoso', length: 15 }),
    __metadata("design:type", String)
], TblDmnhanvien.prototype, "mahoso", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'holot', length: 40 }),
    __metadata("design:type", String)
], TblDmnhanvien.prototype, "holot", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'ten', length: 10 }),
    __metadata("design:type", String)
], TblDmnhanvien.prototype, "ten", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'bidanh', nullable: true, length: 60 }),
    __metadata("design:type", String)
], TblDmnhanvien.prototype, "bidanh", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ngaysinh' }),
    __metadata("design:type", Date)
], TblDmnhanvien.prototype, "ngaysinh", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'noisinh', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblDmnhanvien.prototype, "noisinh", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'quequan', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblDmnhanvien.prototype, "quequan", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'gioitinh', length: 20 }),
    __metadata("design:type", String)
], TblDmnhanvien.prototype, "gioitinh", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'idtrinhdo', nullable: true }),
    __metadata("design:type", Number)
], TblDmnhanvien.prototype, "idtrinhdo", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'idngoaingu', nullable: true, length: 5 }),
    __metadata("design:type", String)
], TblDmnhanvien.prototype, "idngoaingu", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'idtinhoc', nullable: true, length: 5 }),
    __metadata("design:type", String)
], TblDmnhanvien.prototype, "idtinhoc", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'idchuyenmon', nullable: true, length: 3 }),
    __metadata("design:type", String)
], TblDmnhanvien.prototype, "idchuyenmon", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'idhocvi', nullable: true, length: 5 }),
    __metadata("design:type", String)
], TblDmnhanvien.prototype, "idhocvi", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'idchucvu', nullable: true }),
    __metadata("design:type", Number)
], TblDmnhanvien.prototype, "idchucvu", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'iddantoc', nullable: true }),
    __metadata("design:type", Number)
], TblDmnhanvien.prototype, "iddantoc", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'idtongiao', nullable: true }),
    __metadata("design:type", Number)
], TblDmnhanvien.prototype, "idtongiao", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'socmnd', nullable: true, length: 20 }),
    __metadata("design:type", String)
], TblDmnhanvien.prototype, "socmnd", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ngaycap', nullable: true }),
    __metadata("design:type", Date)
], TblDmnhanvien.prototype, "ngaycap", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'noicap', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblDmnhanvien.prototype, "noicap", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'sobhxh', nullable: true, length: 20 }),
    __metadata("design:type", String)
], TblDmnhanvien.prototype, "sobhxh", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'masothue', nullable: true, length: 20 }),
    __metadata("design:type", String)
], TblDmnhanvien.prototype, "masothue", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'diachi', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblDmnhanvien.prototype, "diachi", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'dienthoai', nullable: true, length: 30 }),
    __metadata("design:type", String)
], TblDmnhanvien.prototype, "dienthoai", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'email', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblDmnhanvien.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'sotruong', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblDmnhanvien.prototype, "sotruong", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'bangcapkhac', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblDmnhanvien.prototype, "bangcapkhac", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'chungchikhac', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblDmnhanvien.prototype, "chungchikhac", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'uudiem', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblDmnhanvien.prototype, "uudiem", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'khuyetdiem', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblDmnhanvien.prototype, "khuyetdiem", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'diachilienhe', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblDmnhanvien.prototype, "diachilienhe", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'kinhnghiem', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblDmnhanvien.prototype, "kinhnghiem", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ngayluuhs', nullable: true }),
    __metadata("design:type", Date)
], TblDmnhanvien.prototype, "ngayluuhs", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'lydoluuhs', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblDmnhanvien.prototype, "lydoluuhs", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'trangthai' }),
    __metadata("design:type", Number)
], TblDmnhanvien.prototype, "trangthai", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ngaynhap', nullable: true }),
    __metadata("design:type", Date)
], TblDmnhanvien.prototype, "ngaynhap", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'nguoinhap', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblDmnhanvien.prototype, "nguoinhap", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ngaysua', nullable: true }),
    __metadata("design:type", Date)
], TblDmnhanvien.prototype, "ngaysua", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'nguoisua', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblDmnhanvien.prototype, "nguoisua", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'iddonvi', nullable: true, length: 15 }),
    __metadata("design:type", String)
], TblDmnhanvien.prototype, "iddonvi", void 0);
__decorate([
    (0, typeorm_1.Column)('image', { name: 'avatar', nullable: true }),
    __metadata("design:type", Buffer)
], TblDmnhanvien.prototype, "avatar", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'hoten', length: 51 }),
    __metadata("design:type", String)
], TblDmnhanvien.prototype, "hoten", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblPhongban_entity_1.TblPhongban, (tblPhongban) => tblPhongban.tblDmnhanviens, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'maphong', referencedColumnName: 'maphong' }]),
    __metadata("design:type", TblPhongban_entity_1.TblPhongban)
], TblDmnhanvien.prototype, "maphong", void 0);
TblDmnhanvien = __decorate([
    (0, typeorm_1.Index)('PK_tblDmnhanvien', ['manv'], { unique: true }),
    (0, typeorm_1.Entity)('tblDmnhanvien', { schema: 'dbo' })
], TblDmnhanvien);
exports.TblDmnhanvien = TblDmnhanvien;
//# sourceMappingURL=TblDmnhanvien.entity.js.map