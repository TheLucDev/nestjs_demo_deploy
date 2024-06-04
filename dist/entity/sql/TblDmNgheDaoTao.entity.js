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
exports.TblDmNgheDaoTao = void 0;
const typeorm_1 = require("typeorm");
const TblDKyDtn_entity_1 = require("./TblDKyDtn.entity");
let TblDmNgheDaoTao = class TblDmNgheDaoTao {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], TblDmNgheDaoTao.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'nn_ten', nullable: true, length: 300 }),
    __metadata("design:type", String)
], TblDmNgheDaoTao.prototype, "nnTen", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'bachoc', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblDmNgheDaoTao.prototype, "bachoc", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Summary', nullable: true, length: 200 }),
    __metadata("design:type", String)
], TblDmNgheDaoTao.prototype, "summary", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder', default: () => '(1)' }),
    __metadata("design:type", Number)
], TblDmNgheDaoTao.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'CreatedDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblDmNgheDaoTao.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'CreatedBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblDmNgheDaoTao.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ModifiredDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblDmNgheDaoTao.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'ModifiredBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblDmNgheDaoTao.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TblDmNgheDaoTao.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TblDKyDtn_entity_1.TblDKyDtn, (tblDKyDtn) => tblDKyDtn.dkdtndmNghedaotao),
    __metadata("design:type", Array)
], TblDmNgheDaoTao.prototype, "tblDKyDtns", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TblDKyDtn_entity_1.TblDKyDtn, (tblDKyDtn) => tblDKyDtn.dkdtndmNganhcaodang),
    __metadata("design:type", Array)
], TblDmNgheDaoTao.prototype, "tblDKyDtns2", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TblDKyDtn_entity_1.TblDKyDtn, (tblDKyDtn) => tblDKyDtn.dkdtndmNganhtrungcap),
    __metadata("design:type", Array)
], TblDmNgheDaoTao.prototype, "tblDKyDtns3", void 0);
TblDmNgheDaoTao = __decorate([
    (0, typeorm_1.Index)('PK_tb_dm_nghedaotao', ['id'], { unique: true }),
    (0, typeorm_1.Entity)('tblDmNgheDaoTao', { schema: 'dbo' })
], TblDmNgheDaoTao);
exports.TblDmNgheDaoTao = TblDmNgheDaoTao;
//# sourceMappingURL=TblDmNgheDaoTao.entity.js.map