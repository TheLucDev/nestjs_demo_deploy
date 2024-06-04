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
exports.TblDmGioiTinh = void 0;
const typeorm_1 = require("typeorm");
const TblDKyDtn_entity_1 = require("./TblDKyDtn.entity");
const TblDKyXkld_entity_1 = require("./TblDKyXkld.entity");
let TblDmGioiTinh = class TblDmGioiTinh {
};
__decorate([
    (0, typeorm_1.Column)('int', { primary: true, name: 'IdGioiTinh' }),
    __metadata("design:type", Number)
], TblDmGioiTinh.prototype, "idGioiTinh", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'TenGioiTinh', length: 3 }),
    __metadata("design:type", String)
], TblDmGioiTinh.prototype, "tenGioiTinh", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TblDKyDtn_entity_1.TblDKyDtn, (tblDKyDtn) => tblDKyDtn.dkdtnGioitinh),
    __metadata("design:type", Array)
], TblDmGioiTinh.prototype, "tblDKyDtns", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TblDKyXkld_entity_1.TblDKyXkld, (tblDKyXkld) => tblDKyXkld.dkxkldGioitinh),
    __metadata("design:type", Array)
], TblDmGioiTinh.prototype, "tblDKyXklds", void 0);
TblDmGioiTinh = __decorate([
    (0, typeorm_1.Index)('PK_tblDmGioiTinh', ['idGioiTinh'], { unique: true }),
    (0, typeorm_1.Entity)('tblDmGioiTinh', { schema: 'dbo' })
], TblDmGioiTinh);
exports.TblDmGioiTinh = TblDmGioiTinh;
//# sourceMappingURL=TblDmGioiTinh.entity.js.map