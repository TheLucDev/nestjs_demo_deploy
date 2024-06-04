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
exports.TblDmTrangThai = void 0;
const typeorm_1 = require("typeorm");
const TblDKyDtn_entity_1 = require("./TblDKyDtn.entity");
const TblDKySgd_entity_1 = require("./TblDKySgd.entity");
const TblDKyXkld_entity_1 = require("./TblDKyXkld.entity");
let TblDmTrangThai = class TblDmTrangThai {
};
__decorate([
    (0, typeorm_1.Column)('bit', { primary: true, name: 'IdTrangThai' }),
    __metadata("design:type", Boolean)
], TblDmTrangThai.prototype, "idTrangThai", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'TenTrangThai', length: 50 }),
    __metadata("design:type", String)
], TblDmTrangThai.prototype, "tenTrangThai", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TblDKyDtn_entity_1.TblDKyDtn, (tblDKyDtn) => tblDKyDtn.dkdtnDuyet),
    __metadata("design:type", Array)
], TblDmTrangThai.prototype, "tblDKyDtns", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TblDKySgd_entity_1.TblDKySgd, (tblDKySgd) => tblDKySgd.dksgdDuyet),
    __metadata("design:type", Array)
], TblDmTrangThai.prototype, "tblDKySgds", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TblDKyXkld_entity_1.TblDKyXkld, (tblDKyXkld) => tblDKyXkld.dkxkldDuyet),
    __metadata("design:type", Array)
], TblDmTrangThai.prototype, "tblDKyXklds", void 0);
TblDmTrangThai = __decorate([
    (0, typeorm_1.Index)('PK_tblDmTrangThai', ['idTrangThai'], { unique: true }),
    (0, typeorm_1.Entity)('tblDmTrangThai', { schema: 'dbo' })
], TblDmTrangThai);
exports.TblDmTrangThai = TblDmTrangThai;
//# sourceMappingURL=TblDmTrangThai.entity.js.map