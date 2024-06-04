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
exports.TtldBaocao = void 0;
const typeorm_1 = require("typeorm");
const TtldBaocaochitiet_entity_1 = require("./TtldBaocaochitiet.entity");
let TtldBaocao = class TtldBaocao {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'IdBaocao' }),
    __metadata("design:type", String)
], TtldBaocao.prototype, "idBaocao", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Madonvi', length: 15 }),
    __metadata("design:type", String)
], TtldBaocao.prototype, "madonvi", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'Quy' }),
    __metadata("design:type", Number)
], TtldBaocao.prototype, "quy", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'Nam' }),
    __metadata("design:type", Number)
], TtldBaocao.prototype, "nam", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder' }),
    __metadata("design:type", Number)
], TtldBaocao.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Tieude', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TtldBaocao.prototype, "tieude", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Trichdan', nullable: true, length: 1000 }),
    __metadata("design:type", String)
], TtldBaocao.prototype, "trichdan", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Lienhe', nullable: true, length: 500 }),
    __metadata("design:type", String)
], TtldBaocao.prototype, "lienhe", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Noidung', nullable: true }),
    __metadata("design:type", String)
], TtldBaocao.prototype, "noidung", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'FileLink', nullable: true, length: 500 }),
    __metadata("design:type", String)
], TtldBaocao.prototype, "fileLink", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TtldBaocao.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'CheckByBanBT', nullable: true }),
    __metadata("design:type", Boolean)
], TtldBaocao.prototype, "checkByBanBt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'MaTBBT', nullable: true, length: 15 }),
    __metadata("design:type", String)
], TtldBaocao.prototype, "maTbbt", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'CheckByVT', nullable: true }),
    __metadata("design:type", Boolean)
], TtldBaocao.prototype, "checkByVt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'MaVT', nullable: true, length: 15 }),
    __metadata("design:type", String)
], TtldBaocao.prototype, "maVt", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'CheckByTP', nullable: true }),
    __metadata("design:type", Boolean)
], TtldBaocao.prototype, "checkByTp", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'MaTP', nullable: true, length: 15 }),
    __metadata("design:type", String)
], TtldBaocao.prototype, "maTp", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'CheckByTBT', nullable: true }),
    __metadata("design:type", Boolean)
], TtldBaocao.prototype, "checkByTbt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'MaTBT', nullable: true, length: 15 }),
    __metadata("design:type", String)
], TtldBaocao.prototype, "maTbt", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Phathanh', nullable: true }),
    __metadata("design:type", Boolean)
], TtldBaocao.prototype, "phathanh", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'CreatedDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TtldBaocao.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'CreatedBy',
        length: 50,
        default: () => "'SYSTEM'",
    }),
    __metadata("design:type", String)
], TtldBaocao.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ModifiredDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TtldBaocao.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'ModifiredBy',
        length: 50,
        default: () => "'SYSTEM'",
    }),
    __metadata("design:type", String)
], TtldBaocao.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'NamQuy', nullable: true, length: 60 }),
    __metadata("design:type", String)
], TtldBaocao.prototype, "namQuy", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TtldBaocaochitiet_entity_1.TtldBaocaochitiet, (ttldBaocaochitiet) => ttldBaocaochitiet.idBaocao),
    __metadata("design:type", Array)
], TtldBaocao.prototype, "ttldBaocaochitiets", void 0);
TtldBaocao = __decorate([
    (0, typeorm_1.Index)('PK_ttldBaocao', ['idBaocao'], { unique: true }),
    (0, typeorm_1.Entity)('ttldBaocao', { schema: 'dbo' })
], TtldBaocao);
exports.TtldBaocao = TtldBaocao;
//# sourceMappingURL=TtldBaocao.entity.js.map