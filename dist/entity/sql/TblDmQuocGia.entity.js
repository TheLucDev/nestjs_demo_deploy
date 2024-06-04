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
exports.TblDmQuocGia = void 0;
const typeorm_1 = require("typeorm");
const TblDKyXkld_entity_1 = require("./TblDKyXkld.entity");
let TblDmQuocGia = class TblDmQuocGia {
};
__decorate([
    (0, typeorm_1.Column)('int', { primary: true, name: 'ma_quoc_gia' }),
    __metadata("design:type", Number)
], TblDmQuocGia.prototype, "maQuocGia", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'ten_quoc_gia', length: 255 }),
    __metadata("design:type", String)
], TblDmQuocGia.prototype, "tenQuocGia", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'viettat', nullable: true, length: 5 }),
    __metadata("design:type", String)
], TblDmQuocGia.prototype, "viettat", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder', default: () => '(1)' }),
    __metadata("design:type", Number)
], TblDmQuocGia.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'CreatedDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblDmQuocGia.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'CreatedBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblDmQuocGia.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ModifiredDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblDmQuocGia.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'ModifiredBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblDmQuocGia.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TblDmQuocGia.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TblDKyXkld_entity_1.TblDKyXkld, (tblDKyXkld) => tblDKyXkld.dkxklddmQuocgia),
    __metadata("design:type", Array)
], TblDmQuocGia.prototype, "tblDKyXklds", void 0);
TblDmQuocGia = __decorate([
    (0, typeorm_1.Index)('PK_tb_dm_quocgia', ['maQuocGia'], { unique: true }),
    (0, typeorm_1.Entity)('tblDmQuocGia', { schema: 'dbo' })
], TblDmQuocGia);
exports.TblDmQuocGia = TblDmQuocGia;
//# sourceMappingURL=TblDmQuocGia.entity.js.map