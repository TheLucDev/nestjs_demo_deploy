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
exports.TtldBaocaochitiet = void 0;
const typeorm_1 = require("typeorm");
const TtldBaocao_entity_1 = require("./TtldBaocao.entity");
const TmpBaocao_entity_1 = require("./TmpBaocao.entity");
let TtldBaocaochitiet = class TtldBaocaochitiet {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'Id' }),
    __metadata("design:type", String)
], TtldBaocaochitiet.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder' }),
    __metadata("design:type", Number)
], TtldBaocaochitiet.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Thutu', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TtldBaocaochitiet.prototype, "thutu", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Tieumuc', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TtldBaocaochitiet.prototype, "tieumuc", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Phanloai', length: 50 }),
    __metadata("design:type", String)
], TtldBaocaochitiet.prototype, "phanloai", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Keyword', nullable: true, length: 10 }),
    __metadata("design:type", String)
], TtldBaocaochitiet.prototype, "keyword", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Tomtat', nullable: true }),
    __metadata("design:type", String)
], TtldBaocaochitiet.prototype, "tomtat", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Noidung', nullable: true }),
    __metadata("design:type", String)
], TtldBaocaochitiet.prototype, "noidung", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TtldBaocaochitiet.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'CreatedDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TtldBaocaochitiet.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'CreatedBy',
        length: 50,
        default: () => "'SYSTEM'",
    }),
    __metadata("design:type", String)
], TtldBaocaochitiet.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ModifiredDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TtldBaocaochitiet.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'ModifiredBy',
        length: 50,
        default: () => "'SYSTEM'",
    }),
    __metadata("design:type", String)
], TtldBaocaochitiet.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TtldBaocao_entity_1.TtldBaocao, (ttldBaocao) => ttldBaocao.ttldBaocaochitiets, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'IdBaocao', referencedColumnName: 'idBaocao' }]),
    __metadata("design:type", TtldBaocao_entity_1.TtldBaocao)
], TtldBaocaochitiet.prototype, "idBaocao", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TmpBaocao_entity_1.TmpBaocao, (tmpBaocao) => tmpBaocao.ttldBaocaochitiets, {
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'IdTemp', referencedColumnName: 'idTemp' }]),
    __metadata("design:type", TmpBaocao_entity_1.TmpBaocao)
], TtldBaocaochitiet.prototype, "idTemp", void 0);
TtldBaocaochitiet = __decorate([
    (0, typeorm_1.Index)('PK_ttldBaocaochitiet', ['id'], { unique: true }),
    (0, typeorm_1.Entity)('ttldBaocaochitiet', { schema: 'dbo' })
], TtldBaocaochitiet);
exports.TtldBaocaochitiet = TtldBaocaochitiet;
//# sourceMappingURL=TtldBaocaochitiet.entity.js.map