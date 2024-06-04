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
exports.TblDmHogiadinh = void 0;
const typeorm_1 = require("typeorm");
const TblDmHogiadinhInfo_entity_1 = require("./TblDmHogiadinhInfo.entity");
const TblDmThanhvienGd_entity_1 = require("./TblDmThanhvienGd.entity");
let TblDmHogiadinh = class TblDmHogiadinh {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'Id' }),
    __metadata("design:type", Number)
], TblDmHogiadinh.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Code', length: 12 }),
    __metadata("design:type", String)
], TblDmHogiadinh.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'Maho', length: 20 }),
    __metadata("design:type", String)
], TblDmHogiadinh.prototype, "maho", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'SoHK', nullable: true, length: 20 }),
    __metadata("design:type", String)
], TblDmHogiadinh.prototype, "soHk", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'SoKT3', nullable: true, length: 20 }),
    __metadata("design:type", String)
], TblDmHogiadinh.prototype, "soKt3", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'Nam', default: () => 'datepart(year,getdate())' }),
    __metadata("design:type", Number)
], TblDmHogiadinh.prototype, "nam", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'SoQuyen', nullable: true, length: 10 }),
    __metadata("design:type", String)
], TblDmHogiadinh.prototype, "soQuyen", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'Iduv', nullable: true, default: () => '(-1)' }),
    __metadata("design:type", String)
], TblDmHogiadinh.prototype, "iduv", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Tenchuho', length: 50 }),
    __metadata("design:type", String)
], TblDmHogiadinh.prototype, "tenchuho", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Matinh', length: 2 }),
    __metadata("design:type", String)
], TblDmHogiadinh.prototype, "matinh", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'MaHuyen', length: 5 }),
    __metadata("design:type", String)
], TblDmHogiadinh.prototype, "maHuyen", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'MaXa', length: 8 }),
    __metadata("design:type", String)
], TblDmHogiadinh.prototype, "maXa", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'MaThon', nullable: true, length: 12 }),
    __metadata("design:type", String)
], TblDmHogiadinh.prototype, "maThon", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Thonbuon', length: 50 }),
    __metadata("design:type", String)
], TblDmHogiadinh.prototype, "thonbuon", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Diachi', length: 255 }),
    __metadata("design:type", String)
], TblDmHogiadinh.prototype, "diachi", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'Ngaysinh', nullable: true }),
    __metadata("design:type", Date)
], TblDmHogiadinh.prototype, "ngaysinh", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdGioitinh', nullable: true }),
    __metadata("design:type", Number)
], TblDmHogiadinh.prototype, "idGioitinh", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'SoCCCD', nullable: true, length: 20 }),
    __metadata("design:type", String)
], TblDmHogiadinh.prototype, "soCccd", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'Ngaycap', nullable: true }),
    __metadata("design:type", Date)
], TblDmHogiadinh.prototype, "ngaycap", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Masothue', nullable: true, length: 20 }),
    __metadata("design:type", String)
], TblDmHogiadinh.prototype, "masothue", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdDantoc' }),
    __metadata("design:type", Number)
], TblDmHogiadinh.prototype, "idDantoc", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdTongiao' }),
    __metadata("design:type", Number)
], TblDmHogiadinh.prototype, "idTongiao", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdKhuvuc' }),
    __metadata("design:type", Number)
], TblDmHogiadinh.prototype, "idKhuvuc", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'ZoneID' }),
    __metadata("design:type", Number)
], TblDmHogiadinh.prototype, "zoneId", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdPhanloai' }),
    __metadata("design:type", Number)
], TblDmHogiadinh.prototype, "idPhanloai", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'Sothanhvien' }),
    __metadata("design:type", Number)
], TblDmHogiadinh.prototype, "sothanhvien", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder', default: () => '(1)' }),
    __metadata("design:type", Number)
], TblDmHogiadinh.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'CreatedDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblDmHogiadinh.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'CreatedBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblDmHogiadinh.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ModifiredDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblDmHogiadinh.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'ModifiredBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblDmHogiadinh.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdBiendong', nullable: true }),
    __metadata("design:type", Number)
], TblDmHogiadinh.prototype, "idBiendong", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TblDmHogiadinh.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'FilePath', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblDmHogiadinh.prototype, "filePath", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TblDmHogiadinhInfo_entity_1.TblDmHogiadinhInfo, (tblDmHogiadinhInfo) => tblDmHogiadinhInfo.maho2),
    __metadata("design:type", Array)
], TblDmHogiadinh.prototype, "tblDmHogiadinhInfos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TblDmThanhvienGd_entity_1.TblDmThanhvienGd, (tblDmThanhvienGd) => tblDmThanhvienGd.maho),
    __metadata("design:type", Array)
], TblDmHogiadinh.prototype, "tblDmThanhvienGds", void 0);
TblDmHogiadinh = __decorate([
    (0, typeorm_1.Index)('PK_tblDmHogiadinh', ['maho'], { unique: true }),
    (0, typeorm_1.Entity)('tblDmHogiadinh', { schema: 'dbo' })
], TblDmHogiadinh);
exports.TblDmHogiadinh = TblDmHogiadinh;
//# sourceMappingURL=TblDmHogiadinh.entity.js.map