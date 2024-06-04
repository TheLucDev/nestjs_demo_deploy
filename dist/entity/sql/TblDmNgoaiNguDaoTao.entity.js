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
exports.TblDmNgoaiNguDaoTao = void 0;
const typeorm_1 = require("typeorm");
const TblDKyXkld_entity_1 = require("./TblDKyXkld.entity");
let TblDmNgoaiNguDaoTao = class TblDmNgoaiNguDaoTao {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'ma_ngoaingudaotao' }),
    __metadata("design:type", Number)
], TblDmNgoaiNguDaoTao.prototype, "maNgoaingudaotao", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'ten_ngoaingudaotao', length: 50 }),
    __metadata("design:type", String)
], TblDmNgoaiNguDaoTao.prototype, "tenNgoaingudaotao", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder', default: () => '(1)' }),
    __metadata("design:type", Number)
], TblDmNgoaiNguDaoTao.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'CreatedDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblDmNgoaiNguDaoTao.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'CreatedBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblDmNgoaiNguDaoTao.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ModifiredDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblDmNgoaiNguDaoTao.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'ModifiredBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblDmNgoaiNguDaoTao.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TblDmNgoaiNguDaoTao.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TblDKyXkld_entity_1.TblDKyXkld, (tblDKyXkld) => tblDKyXkld.dkxklddmNgoaingudaotao),
    __metadata("design:type", Array)
], TblDmNgoaiNguDaoTao.prototype, "tblDKyXklds", void 0);
TblDmNgoaiNguDaoTao = __decorate([
    (0, typeorm_1.Index)('PK_tb_dm_ngoaingudaotao', ['maNgoaingudaotao'], { unique: true }),
    (0, typeorm_1.Entity)('tblDmNgoaiNguDaoTao', { schema: 'dbo' })
], TblDmNgoaiNguDaoTao);
exports.TblDmNgoaiNguDaoTao = TblDmNgoaiNguDaoTao;
//# sourceMappingURL=TblDmNgoaiNguDaoTao.entity.js.map