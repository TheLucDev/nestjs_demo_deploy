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
exports.TtldB09ChitieuNganh = void 0;
const typeorm_1 = require("typeorm");
let TtldB09ChitieuNganh = class TtldB09ChitieuNganh {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)('int', { primary: true, name: 'Id' }),
    __metadata("design:type", Number)
], TtldB09ChitieuNganh.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'Madonvi', length: 15 }),
    __metadata("design:type", String)
], TtldB09ChitieuNganh.prototype, "madonvi", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { primary: true, name: 'Quy' }),
    __metadata("design:type", Number)
], TtldB09ChitieuNganh.prototype, "quy", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { primary: true, name: 'Nam' }),
    __metadata("design:type", Number)
], TtldB09ChitieuNganh.prototype, "nam", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder' }),
    __metadata("design:type", Number)
], TtldB09ChitieuNganh.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Matk', nullable: true, length: 10 }),
    __metadata("design:type", String)
], TtldB09ChitieuNganh.prototype, "matk", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Noidung', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TtldB09ChitieuNganh.prototype, "noidung", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', {
        name: 'Solieu',
        nullable: true,
        precision: 18,
        scale: 2,
    }),
    __metadata("design:type", Number)
], TtldB09ChitieuNganh.prototype, "solieu", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', nullable: true }),
    __metadata("design:type", Boolean)
], TtldB09ChitieuNganh.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'NamQuy', nullable: true, length: 60 }),
    __metadata("design:type", String)
], TtldB09ChitieuNganh.prototype, "namQuy", void 0);
TtldB09ChitieuNganh = __decorate([
    (0, typeorm_1.Index)('PK_ttldB09ChitieuNganh', ['id', 'madonvi', 'quy', 'nam'], {
        unique: true,
    }),
    (0, typeorm_1.Entity)('ttldB09ChitieuNganh', { schema: 'dbo' })
], TtldB09ChitieuNganh);
exports.TtldB09ChitieuNganh = TtldB09ChitieuNganh;
//# sourceMappingURL=TtldB09ChitieuNganh.entity.js.map