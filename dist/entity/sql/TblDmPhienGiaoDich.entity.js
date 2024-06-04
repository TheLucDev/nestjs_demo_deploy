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
exports.TblDmPhienGiaoDich = void 0;
const typeorm_1 = require("typeorm");
const TblDKySgd_entity_1 = require("./TblDKySgd.entity");
let TblDmPhienGiaoDich = class TblDmPhienGiaoDich {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], TblDmPhienGiaoDich.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'pgd_ten', length: 300 }),
    __metadata("design:type", String)
], TblDmPhienGiaoDich.prototype, "pgdTen", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder', default: () => '(1)' }),
    __metadata("design:type", Number)
], TblDmPhienGiaoDich.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'CreatedDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblDmPhienGiaoDich.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'CreatedBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblDmPhienGiaoDich.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ModifiredDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblDmPhienGiaoDich.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'ModifiredBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblDmPhienGiaoDich.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TblDmPhienGiaoDich.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TblDKySgd_entity_1.TblDKySgd, (tblDKySgd) => tblDKySgd.dksgddmPhiengiaodichlan),
    __metadata("design:type", Array)
], TblDmPhienGiaoDich.prototype, "tblDKySgds", void 0);
TblDmPhienGiaoDich = __decorate([
    (0, typeorm_1.Index)('PK_tb_dm_phiengiaodichvieclam', ['id'], { unique: true }),
    (0, typeorm_1.Entity)('tblDmPhienGiaoDich', { schema: 'dbo' })
], TblDmPhienGiaoDich);
exports.TblDmPhienGiaoDich = TblDmPhienGiaoDich;
//# sourceMappingURL=TblDmPhienGiaoDich.entity.js.map