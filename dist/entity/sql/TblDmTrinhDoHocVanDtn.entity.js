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
exports.TblDmTrinhDoHocVanDtn = void 0;
const typeorm_1 = require("typeorm");
const TblDKyDtn_entity_1 = require("./TblDKyDtn.entity");
const TblDKyXkld_entity_1 = require("./TblDKyXkld.entity");
let TblDmTrinhDoHocVanDtn = class TblDmTrinhDoHocVanDtn {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'hocvan_id' }),
    __metadata("design:type", Number)
], TblDmTrinhDoHocVanDtn.prototype, "hocvanId", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'hocvan_ten', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblDmTrinhDoHocVanDtn.prototype, "hocvanTen", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder', default: () => '(1)' }),
    __metadata("design:type", Number)
], TblDmTrinhDoHocVanDtn.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'CreatedDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblDmTrinhDoHocVanDtn.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'CreatedBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblDmTrinhDoHocVanDtn.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ModifiredDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblDmTrinhDoHocVanDtn.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'ModifiredBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblDmTrinhDoHocVanDtn.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TblDmTrinhDoHocVanDtn.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TblDKyDtn_entity_1.TblDKyDtn, (tblDKyDtn) => tblDKyDtn.dkdtndmTrinhdohocvanDtn),
    __metadata("design:type", Array)
], TblDmTrinhDoHocVanDtn.prototype, "tblDKyDtns", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TblDKyXkld_entity_1.TblDKyXkld, (tblDKyXkld) => tblDKyXkld.dkxklddmTrinhdohocvan),
    __metadata("design:type", Array)
], TblDmTrinhDoHocVanDtn.prototype, "tblDKyXklds", void 0);
TblDmTrinhDoHocVanDtn = __decorate([
    (0, typeorm_1.Index)('PK_tb_dm_trinhdohocvan_dtn', ['hocvanId'], { unique: true }),
    (0, typeorm_1.Entity)('tblDmTrinhDoHocVanDTN', { schema: 'dbo' })
], TblDmTrinhDoHocVanDtn);
exports.TblDmTrinhDoHocVanDtn = TblDmTrinhDoHocVanDtn;
//# sourceMappingURL=TblDmTrinhDoHocVanDtn.entity.js.map