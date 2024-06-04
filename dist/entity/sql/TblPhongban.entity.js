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
exports.TblPhongban = void 0;
const typeorm_1 = require("typeorm");
const TblDmnhanvien_entity_1 = require("./TblDmnhanvien.entity");
let TblPhongban = class TblPhongban {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'maphong', length: 4 }),
    __metadata("design:type", String)
], TblPhongban.prototype, "maphong", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'tenphong', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblPhongban.prototype, "tenphong", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'diachi', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblPhongban.prototype, "diachi", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'dienthoai', nullable: true, length: 30 }),
    __metadata("design:type", String)
], TblPhongban.prototype, "dienthoai", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'email', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblPhongban.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'lanhdao', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblPhongban.prototype, "lanhdao", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder', default: () => '(0)' }),
    __metadata("design:type", Number)
], TblPhongban.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'CreatedDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblPhongban.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'CreatedBy',
        length: 50,
        default: () => "'SYSTEM'",
    }),
    __metadata("design:type", String)
], TblPhongban.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ModifiredDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblPhongban.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'ModifiredBy',
        length: 50,
        default: () => "'SYSTEM'",
    }),
    __metadata("design:type", String)
], TblPhongban.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TblPhongban.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Madonvi', nullable: true, length: 15 }),
    __metadata("design:type", String)
], TblPhongban.prototype, "madonvi", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TblDmnhanvien_entity_1.TblDmnhanvien, (tblDmnhanvien) => tblDmnhanvien.maphong),
    __metadata("design:type", Array)
], TblPhongban.prototype, "tblDmnhanviens", void 0);
TblPhongban = __decorate([
    (0, typeorm_1.Index)('PK_tblPhongban', ['maphong'], { unique: true }),
    (0, typeorm_1.Entity)('tblPhongban', { schema: 'dbo' })
], TblPhongban);
exports.TblPhongban = TblPhongban;
//# sourceMappingURL=TblPhongban.entity.js.map