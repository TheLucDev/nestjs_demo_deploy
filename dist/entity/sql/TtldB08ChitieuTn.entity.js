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
exports.TtldB08ChitieuTn = void 0;
const typeorm_1 = require("typeorm");
let TtldB08ChitieuTn = class TtldB08ChitieuTn {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)('int', { primary: true, name: 'Id' }),
    __metadata("design:type", Number)
], TtldB08ChitieuTn.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'Madonvi', length: 15 }),
    __metadata("design:type", String)
], TtldB08ChitieuTn.prototype, "madonvi", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { primary: true, name: 'Quy' }),
    __metadata("design:type", Number)
], TtldB08ChitieuTn.prototype, "quy", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { primary: true, name: 'Nam' }),
    __metadata("design:type", Number)
], TtldB08ChitieuTn.prototype, "nam", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Nhom', nullable: true, length: 4 }),
    __metadata("design:type", String)
], TtldB08ChitieuTn.prototype, "nhom", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder' }),
    __metadata("design:type", Number)
], TtldB08ChitieuTn.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Matk', nullable: true, length: 10 }),
    __metadata("design:type", String)
], TtldB08ChitieuTn.prototype, "matk", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Noidung', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TtldB08ChitieuTn.prototype, "noidung", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', {
        name: 'Solieu',
        nullable: true,
        precision: 18,
        scale: 2,
    }),
    __metadata("design:type", Number)
], TtldB08ChitieuTn.prototype, "solieu", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', nullable: true }),
    __metadata("design:type", Boolean)
], TtldB08ChitieuTn.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'NamQuy', nullable: true, length: 60 }),
    __metadata("design:type", String)
], TtldB08ChitieuTn.prototype, "namQuy", void 0);
TtldB08ChitieuTn = __decorate([
    (0, typeorm_1.Index)('PK_ttldB08ChitieuTN', ['id', 'madonvi', 'quy', 'nam'], { unique: true }),
    (0, typeorm_1.Entity)('ttldB08ChitieuTN', { schema: 'dbo' })
], TtldB08ChitieuTn);
exports.TtldB08ChitieuTn = TtldB08ChitieuTn;
//# sourceMappingURL=TtldB08ChitieuTn.entity.js.map