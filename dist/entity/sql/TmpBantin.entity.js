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
exports.TmpBantin = void 0;
const typeorm_1 = require("typeorm");
const TtldBantinchitiet_entity_1 = require("./TtldBantinchitiet.entity");
let TmpBantin = class TmpBantin {
};
__decorate([
    (0, typeorm_1.Column)('int', { primary: true, name: 'IdTemp' }),
    __metadata("design:type", Number)
], TmpBantin.prototype, "idTemp", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder' }),
    __metadata("design:type", Number)
], TmpBantin.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Thutu', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TmpBantin.prototype, "thutu", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Tieumuc', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TmpBantin.prototype, "tieumuc", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Phanloai', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TmpBantin.prototype, "phanloai", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Keyword', nullable: true, length: 10 }),
    __metadata("design:type", String)
], TmpBantin.prototype, "keyword", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', nullable: true }),
    __metadata("design:type", Boolean)
], TmpBantin.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TtldBantinchitiet_entity_1.TtldBantinchitiet, (ttldBantinchitiet) => ttldBantinchitiet.idTemp),
    __metadata("design:type", Array)
], TmpBantin.prototype, "ttldBantinchitiets", void 0);
TmpBantin = __decorate([
    (0, typeorm_1.Index)('PK_tmpBantin', ['idTemp'], { unique: true }),
    (0, typeorm_1.Entity)('tmpBantin', { schema: 'dbo' })
], TmpBantin);
exports.TmpBantin = TmpBantin;
//# sourceMappingURL=TmpBantin.entity.js.map