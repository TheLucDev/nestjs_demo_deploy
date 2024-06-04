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
exports.TmpBaocao = void 0;
const typeorm_1 = require("typeorm");
const TtldBaocaochitiet_entity_1 = require("./TtldBaocaochitiet.entity");
let TmpBaocao = class TmpBaocao {
};
__decorate([
    (0, typeorm_1.Column)('int', { primary: true, name: 'IdTemp' }),
    __metadata("design:type", Number)
], TmpBaocao.prototype, "idTemp", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder' }),
    __metadata("design:type", Number)
], TmpBaocao.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Thutu', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TmpBaocao.prototype, "thutu", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Tieumuc', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TmpBaocao.prototype, "tieumuc", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Phanloai', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TmpBaocao.prototype, "phanloai", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Keyword', nullable: true, length: 10 }),
    __metadata("design:type", String)
], TmpBaocao.prototype, "keyword", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', nullable: true }),
    __metadata("design:type", Boolean)
], TmpBaocao.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TtldBaocaochitiet_entity_1.TtldBaocaochitiet, (ttldBaocaochitiet) => ttldBaocaochitiet.idTemp),
    __metadata("design:type", Array)
], TmpBaocao.prototype, "ttldBaocaochitiets", void 0);
TmpBaocao = __decorate([
    (0, typeorm_1.Index)('PK_tmpBaocao', ['idTemp'], { unique: true }),
    (0, typeorm_1.Entity)('tmpBaocao', { schema: 'dbo' })
], TmpBaocao);
exports.TmpBaocao = TmpBaocao;
//# sourceMappingURL=TmpBaocao.entity.js.map