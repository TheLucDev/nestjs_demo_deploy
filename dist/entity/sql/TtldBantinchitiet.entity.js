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
exports.TtldBantinchitiet = void 0;
const typeorm_1 = require("typeorm");
const TmpBantin_entity_1 = require("./TmpBantin.entity");
const TtldBantin_entity_1 = require("./TtldBantin.entity");
let TtldBantinchitiet = class TtldBantinchitiet {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'Id' }),
    __metadata("design:type", String)
], TtldBantinchitiet.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder' }),
    __metadata("design:type", Number)
], TtldBantinchitiet.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Thutu', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TtldBantinchitiet.prototype, "thutu", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Tieumuc', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TtldBantinchitiet.prototype, "tieumuc", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Phanloai', length: 50 }),
    __metadata("design:type", String)
], TtldBantinchitiet.prototype, "phanloai", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Keyword', nullable: true, length: 10 }),
    __metadata("design:type", String)
], TtldBantinchitiet.prototype, "keyword", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'TomTat', nullable: true }),
    __metadata("design:type", String)
], TtldBantinchitiet.prototype, "tomTat", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Noidung', nullable: true }),
    __metadata("design:type", String)
], TtldBantinchitiet.prototype, "noidung", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'ImgLink', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TtldBantinchitiet.prototype, "imgLink", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TtldBantinchitiet.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'CreatedDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TtldBantinchitiet.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'CreatedBy',
        length: 50,
        default: () => "'SYSTEM'",
    }),
    __metadata("design:type", String)
], TtldBantinchitiet.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ModifiredDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TtldBantinchitiet.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'ModifiredBy',
        length: 50,
        default: () => "'SYSTEM'",
    }),
    __metadata("design:type", String)
], TtldBantinchitiet.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TmpBantin_entity_1.TmpBantin, (tmpBantin) => tmpBantin.ttldBantinchitiets, {
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'IdTemp', referencedColumnName: 'idTemp' }]),
    __metadata("design:type", TmpBantin_entity_1.TmpBantin)
], TtldBantinchitiet.prototype, "idTemp", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TtldBantin_entity_1.TtldBantin, (ttldBantin) => ttldBantin.ttldBantinchitiets, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'IdBantin', referencedColumnName: 'idBantin' }]),
    __metadata("design:type", TtldBantin_entity_1.TtldBantin)
], TtldBantinchitiet.prototype, "idBantin", void 0);
TtldBantinchitiet = __decorate([
    (0, typeorm_1.Index)('PK_ttldBantinchitiet', ['id'], { unique: true }),
    (0, typeorm_1.Entity)('ttldBantinchitiet', { schema: 'dbo' })
], TtldBantinchitiet);
exports.TtldBantinchitiet = TtldBantinchitiet;
//# sourceMappingURL=TtldBantinchitiet.entity.js.map