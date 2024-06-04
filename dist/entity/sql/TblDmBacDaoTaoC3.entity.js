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
exports.TblDmBacDaoTaoC3 = void 0;
const typeorm_1 = require("typeorm");
let TblDmBacDaoTaoC3 = class TblDmBacDaoTaoC3 {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Idc2', length: 2 }),
    __metadata("design:type", String)
], TblDmBacDaoTaoC3.prototype, "idc2", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)('varchar', { primary: true, name: 'Id', length: 4 }),
    __metadata("design:type", String)
], TblDmBacDaoTaoC3.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Description', nullable: true, length: 128 }),
    __metadata("design:type", String)
], TblDmBacDaoTaoC3.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder', nullable: true }),
    __metadata("design:type", Number)
], TblDmBacDaoTaoC3.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'CreatedDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblDmBacDaoTaoC3.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'CreatedBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblDmBacDaoTaoC3.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ModifiredDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblDmBacDaoTaoC3.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'ModifiredBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblDmBacDaoTaoC3.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TblDmBacDaoTaoC3.prototype, "status", void 0);
TblDmBacDaoTaoC3 = __decorate([
    (0, typeorm_1.Index)('PK_tblDmBacDaoTaoC3', ['id'], { unique: true }),
    (0, typeorm_1.Entity)('tblDmBacDaoTaoC3', { schema: 'dbo' })
], TblDmBacDaoTaoC3);
exports.TblDmBacDaoTaoC3 = TblDmBacDaoTaoC3;
//# sourceMappingURL=TblDmBacDaoTaoC3.entity.js.map