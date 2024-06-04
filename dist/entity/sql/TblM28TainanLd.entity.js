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
exports.TblM28TainanLd = void 0;
const typeorm_1 = require("typeorm");
const TblM28Biendong_entity_1 = require("./TblM28Biendong.entity");
let TblM28TainanLd = class TblM28TainanLd {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'Id' }),
    __metadata("design:type", Number)
], TblM28TainanLd.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'IdDoanhnghiep', nullable: true }),
    __metadata("design:type", String)
], TblM28TainanLd.prototype, "idDoanhnghiep", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'Iduv', nullable: true }),
    __metadata("design:type", String)
], TblM28TainanLd.prototype, "iduv", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IdTainan', nullable: true, length: 2 }),
    __metadata("design:type", String)
], TblM28TainanLd.prototype, "idTainan", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'Ngay', nullable: true }),
    __metadata("design:type", Date)
], TblM28TainanLd.prototype, "ngay", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Mota', nullable: true }),
    __metadata("design:type", String)
], TblM28TainanLd.prototype, "mota", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Denghi', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblM28TainanLd.prototype, "denghi", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'TenNoinhan', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblM28TainanLd.prototype, "tenNoinhan", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'EmailNhan', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblM28TainanLd.prototype, "emailNhan", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'ZaloPhone', nullable: true, length: 30 }),
    __metadata("design:type", String)
], TblM28TainanLd.prototype, "zaloPhone", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TblM28TainanLd.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder', default: () => '(0)' }),
    __metadata("design:type", Number)
], TblM28TainanLd.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'CreatedDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblM28TainanLd.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'CreatedBy', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblM28TainanLd.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ModifiredDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblM28TainanLd.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'ModifiredBy', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblM28TainanLd.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblM28Biendong_entity_1.TblM28Biendong, (tblM28Biendong) => tblM28Biendong.tblM28TainanLds, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)([{ name: 'IdPhieu', referencedColumnName: 'idphieu' }]),
    __metadata("design:type", TblM28Biendong_entity_1.TblM28Biendong)
], TblM28TainanLd.prototype, "idPhieu", void 0);
TblM28TainanLd = __decorate([
    (0, typeorm_1.Index)('PK_tblM28TainanLD', ['id'], { unique: true }),
    (0, typeorm_1.Entity)('tblM28TainanLD', { schema: 'dbo' })
], TblM28TainanLd);
exports.TblM28TainanLd = TblM28TainanLd;
//# sourceMappingURL=TblM28TainanLd.entity.js.map