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
exports.TtldBantin = void 0;
const typeorm_1 = require("typeorm");
const TtldBantinchitiet_entity_1 = require("./TtldBantinchitiet.entity");
let TtldBantin = class TtldBantin {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'IdBantin' }),
    __metadata("design:type", String)
], TtldBantin.prototype, "idBantin", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Madonvi', length: 15 }),
    __metadata("design:type", String)
], TtldBantin.prototype, "madonvi", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'Quy' }),
    __metadata("design:type", Number)
], TtldBantin.prototype, "quy", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'Nam' }),
    __metadata("design:type", Number)
], TtldBantin.prototype, "nam", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder' }),
    __metadata("design:type", Number)
], TtldBantin.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Tieude', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TtldBantin.prototype, "tieude", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Trichdan', nullable: true, length: 1000 }),
    __metadata("design:type", String)
], TtldBantin.prototype, "trichdan", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Lienhe', nullable: true, length: 500 }),
    __metadata("design:type", String)
], TtldBantin.prototype, "lienhe", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Noidung', nullable: true }),
    __metadata("design:type", String)
], TtldBantin.prototype, "noidung", void 0);
__decorate([
    (0, typeorm_1.Column)('ntext', { name: 'HtmlCode', nullable: true }),
    __metadata("design:type", String)
], TtldBantin.prototype, "htmlCode", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'FileLink', nullable: true, length: 500 }),
    __metadata("design:type", String)
], TtldBantin.prototype, "fileLink", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TtldBantin.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'CheckByBanBT', nullable: true }),
    __metadata("design:type", Boolean)
], TtldBantin.prototype, "checkByBanBt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'MaTBBT', nullable: true, length: 15 }),
    __metadata("design:type", String)
], TtldBantin.prototype, "maTbbt", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'CheckByVT', nullable: true }),
    __metadata("design:type", Boolean)
], TtldBantin.prototype, "checkByVt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'MaVT', nullable: true, length: 15 }),
    __metadata("design:type", String)
], TtldBantin.prototype, "maVt", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'CheckByTP', nullable: true }),
    __metadata("design:type", Boolean)
], TtldBantin.prototype, "checkByTp", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'MaTP', nullable: true, length: 15 }),
    __metadata("design:type", String)
], TtldBantin.prototype, "maTp", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'CheckByTBT', nullable: true }),
    __metadata("design:type", Boolean)
], TtldBantin.prototype, "checkByTbt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'MaTBT', nullable: true, length: 15 }),
    __metadata("design:type", String)
], TtldBantin.prototype, "maTbt", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Phathanh', nullable: true }),
    __metadata("design:type", Boolean)
], TtldBantin.prototype, "phathanh", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'CreatedDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TtldBantin.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'CreatedBy',
        length: 50,
        default: () => "'SYSTEM'",
    }),
    __metadata("design:type", String)
], TtldBantin.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ModifiredDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TtldBantin.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'ModifiredBy',
        length: 50,
        default: () => "'SYSTEM'",
    }),
    __metadata("design:type", String)
], TtldBantin.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'NamQuy', nullable: true, length: 60 }),
    __metadata("design:type", String)
], TtldBantin.prototype, "namQuy", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TtldBantinchitiet_entity_1.TtldBantinchitiet, (ttldBantinchitiet) => ttldBantinchitiet.idBantin),
    __metadata("design:type", Array)
], TtldBantin.prototype, "ttldBantinchitiets", void 0);
TtldBantin = __decorate([
    (0, typeorm_1.Index)('PK_ttldBantin', ['idBantin'], { unique: true }),
    (0, typeorm_1.Entity)('ttldBantin', { schema: 'dbo' })
], TtldBantin);
exports.TtldBantin = TtldBantin;
//# sourceMappingURL=TtldBantin.entity.js.map