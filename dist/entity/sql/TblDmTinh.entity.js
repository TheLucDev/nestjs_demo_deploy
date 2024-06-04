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
exports.TblDmTinh = void 0;
const typeorm_1 = require("typeorm");
const TblDmHuyen_entity_1 = require("./TblDmHuyen.entity");
let TblDmTinh = class TblDmTinh {
};
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder' }),
    __metadata("design:type", Number)
], TblDmTinh.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'matinh', length: 2 }),
    __metadata("design:type", String)
], TblDmTinh.prototype, "matinh", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'tentinh', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblDmTinh.prototype, "tentinh", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'mabhyt', nullable: true, length: 2 }),
    __metadata("design:type", String)
], TblDmTinh.prototype, "mabhyt", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'show' }),
    __metadata("design:type", Boolean)
], TblDmTinh.prototype, "show", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TblDmHuyen_entity_1.TblDmHuyen, (tblDmHuyen) => tblDmHuyen.matinh),
    __metadata("design:type", Array)
], TblDmTinh.prototype, "tblDmHuyens", void 0);
TblDmTinh = __decorate([
    (0, typeorm_1.Index)('PK_dmtinh', ['matinh'], { unique: true }),
    (0, typeorm_1.Entity)('tblDmTinh', { schema: 'dbo' })
], TblDmTinh);
exports.TblDmTinh = TblDmTinh;
//# sourceMappingURL=TblDmTinh.entity.js.map