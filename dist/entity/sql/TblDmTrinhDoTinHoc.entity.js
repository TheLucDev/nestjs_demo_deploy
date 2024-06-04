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
exports.TblDmTrinhDoTinHoc = void 0;
const typeorm_1 = require("typeorm");
const TblTuyenDung_entity_1 = require("./TblTuyenDung.entity");
let TblDmTrinhDoTinHoc = class TblDmTrinhDoTinHoc {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'tdth_id', length: 5 }),
    __metadata("design:type", String)
], TblDmTrinhDoTinHoc.prototype, "tdthId", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'tdth_ten', length: 50 }),
    __metadata("design:type", String)
], TblDmTrinhDoTinHoc.prototype, "tdthTen", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder', default: () => '(1)' }),
    __metadata("design:type", Number)
], TblDmTrinhDoTinHoc.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'CreatedDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblDmTrinhDoTinHoc.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'CreatedBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblDmTrinhDoTinHoc.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ModifiredDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblDmTrinhDoTinHoc.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'ModifiredBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblDmTrinhDoTinHoc.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TblDmTrinhDoTinHoc.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TblTuyenDung_entity_1.TblTuyenDung, (tblTuyenDung) => tblTuyenDung.tdYeuCauTinHoc),
    __metadata("design:type", Array)
], TblDmTrinhDoTinHoc.prototype, "tblTuyenDungs", void 0);
TblDmTrinhDoTinHoc = __decorate([
    (0, typeorm_1.Index)('PK_tb_dm_trinhdotinhoc', ['tdthId'], { unique: true }),
    (0, typeorm_1.Entity)('tblDmTrinhDoTinHoc', { schema: 'dbo' })
], TblDmTrinhDoTinHoc);
exports.TblDmTrinhDoTinHoc = TblDmTrinhDoTinHoc;
//# sourceMappingURL=TblDmTrinhDoTinHoc.entity.js.map