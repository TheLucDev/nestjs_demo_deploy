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
exports.TblDmTrinhDoHocVan = void 0;
const typeorm_1 = require("typeorm");
const TblHoSoUngVien_entity_1 = require("./TblHoSoUngVien.entity");
const TblTuyenDung_entity_1 = require("./TblTuyenDung.entity");
let TblDmTrinhDoHocVan = class TblDmTrinhDoHocVan {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'hocvan_id' }),
    __metadata("design:type", Number)
], TblDmTrinhDoHocVan.prototype, "hocvanId", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'hocvan_ten', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblDmTrinhDoHocVan.prototype, "hocvanTen", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder', default: () => '(1)' }),
    __metadata("design:type", Number)
], TblDmTrinhDoHocVan.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'CreatedDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblDmTrinhDoHocVan.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'CreatedBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblDmTrinhDoHocVan.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ModifiredDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblDmTrinhDoHocVan.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'ModifiredBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblDmTrinhDoHocVan.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TblDmTrinhDoHocVan.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdCaphoc', nullable: true }),
    __metadata("design:type", Number)
], TblDmTrinhDoHocVan.prototype, "idCaphoc", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Phanloai', nullable: true, length: 4 }),
    __metadata("design:type", String)
], TblDmTrinhDoHocVan.prototype, "phanloai", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TblHoSoUngVien_entity_1.TblHoSoUngVien, (tblHoSoUngVien) => tblHoSoUngVien.uvcmTrinhdo),
    __metadata("design:type", Array)
], TblDmTrinhDoHocVan.prototype, "tblHoSoUngViens", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TblTuyenDung_entity_1.TblTuyenDung, (tblTuyenDung) => tblTuyenDung.tdYeuCauHocVan),
    __metadata("design:type", Array)
], TblDmTrinhDoHocVan.prototype, "tblTuyenDungs", void 0);
TblDmTrinhDoHocVan = __decorate([
    (0, typeorm_1.Index)('PK_tb_dm_trinhdohocvan', ['hocvanId'], { unique: true }),
    (0, typeorm_1.Entity)('tblDmTrinhDoHocVan', { schema: 'dbo' })
], TblDmTrinhDoHocVan);
exports.TblDmTrinhDoHocVan = TblDmTrinhDoHocVan;
//# sourceMappingURL=TblDmTrinhDoHocVan.entity.js.map