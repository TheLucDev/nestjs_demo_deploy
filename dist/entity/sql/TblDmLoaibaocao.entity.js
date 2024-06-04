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
exports.TblDmLoaibaocao = void 0;
const typeorm_1 = require("typeorm");
const TblDmMaubaocao_entity_1 = require("./TblDmMaubaocao.entity");
let TblDmLoaibaocao = class TblDmLoaibaocao {
};
__decorate([
    (0, typeorm_1.Column)('int', { name: 'Id', nullable: true }),
    __metadata("design:type", Number)
], TblDmLoaibaocao.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'Maso', length: 10 }),
    __metadata("design:type", String)
], TblDmLoaibaocao.prototype, "maso", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Tenso', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblDmLoaibaocao.prototype, "tenso", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Show', nullable: true }),
    __metadata("design:type", Boolean)
], TblDmLoaibaocao.prototype, "show", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TblDmMaubaocao_entity_1.TblDmMaubaocao, (tblDmMaubaocao) => tblDmMaubaocao.maso),
    __metadata("design:type", Array)
], TblDmLoaibaocao.prototype, "tblDmMaubaocaos", void 0);
TblDmLoaibaocao = __decorate([
    (0, typeorm_1.Index)('PK_tblDmLoaibaocao', ['maso'], { unique: true }),
    (0, typeorm_1.Entity)('tblDmLoaibaocao', { schema: 'dbo' })
], TblDmLoaibaocao);
exports.TblDmLoaibaocao = TblDmLoaibaocao;
//# sourceMappingURL=TblDmLoaibaocao.entity.js.map