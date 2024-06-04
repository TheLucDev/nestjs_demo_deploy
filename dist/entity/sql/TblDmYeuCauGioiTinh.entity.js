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
exports.TblDmYeuCauGioiTinh = void 0;
const typeorm_1 = require("typeorm");
const TblTuyenDung_entity_1 = require("./TblTuyenDung.entity");
let TblDmYeuCauGioiTinh = class TblDmYeuCauGioiTinh {
};
__decorate([
    (0, typeorm_1.Column)('int', { primary: true, name: 'IdYCGT' }),
    __metadata("design:type", Number)
], TblDmYeuCauGioiTinh.prototype, "idYcgt", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Title', length: 15 }),
    __metadata("design:type", String)
], TblDmYeuCauGioiTinh.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TblTuyenDung_entity_1.TblTuyenDung, (tblTuyenDung) => tblTuyenDung.tdYeuCauGioiTinh),
    __metadata("design:type", Array)
], TblDmYeuCauGioiTinh.prototype, "tblTuyenDungs", void 0);
TblDmYeuCauGioiTinh = __decorate([
    (0, typeorm_1.Index)('PK_tblDmYeuCauGioiTinh', ['idYcgt'], { unique: true }),
    (0, typeorm_1.Entity)('tblDmYeuCauGioiTinh', { schema: 'dbo' })
], TblDmYeuCauGioiTinh);
exports.TblDmYeuCauGioiTinh = TblDmYeuCauGioiTinh;
//# sourceMappingURL=TblDmYeuCauGioiTinh.entity.js.map