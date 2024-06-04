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
exports.TblDmThoiGianLamViec = void 0;
const typeorm_1 = require("typeorm");
const TblHoSoUngVien_entity_1 = require("./TblHoSoUngVien.entity");
const TblTuyenDung_entity_1 = require("./TblTuyenDung.entity");
let TblDmThoiGianLamViec = class TblDmThoiGianLamViec {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'ma_thoigian' }),
    __metadata("design:type", Number)
], TblDmThoiGianLamViec.prototype, "maThoigian", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'ten_thoigian', length: 50 }),
    __metadata("design:type", String)
], TblDmThoiGianLamViec.prototype, "tenThoigian", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder', default: () => '(1)' }),
    __metadata("design:type", Number)
], TblDmThoiGianLamViec.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'CreatedDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblDmThoiGianLamViec.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'CreatedBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblDmThoiGianLamViec.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ModifiredDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblDmThoiGianLamViec.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'ModifiredBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblDmThoiGianLamViec.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TblDmThoiGianLamViec.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TblHoSoUngVien_entity_1.TblHoSoUngVien, (tblHoSoUngVien) => tblHoSoUngVien.uvnvThoigian),
    __metadata("design:type", Array)
], TblDmThoiGianLamViec.prototype, "tblHoSoUngViens", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TblTuyenDung_entity_1.TblTuyenDung, (tblTuyenDung) => tblTuyenDung.tdThoigianlamviec),
    __metadata("design:type", Array)
], TblDmThoiGianLamViec.prototype, "tblTuyenDungs", void 0);
TblDmThoiGianLamViec = __decorate([
    (0, typeorm_1.Index)('PK_tb_dm_thoigianlamviec', ['maThoigian'], { unique: true }),
    (0, typeorm_1.Entity)('tblDmThoiGianLamViec', { schema: 'dbo' })
], TblDmThoiGianLamViec);
exports.TblDmThoiGianLamViec = TblDmThoiGianLamViec;
//# sourceMappingURL=TblDmThoiGianLamViec.entity.js.map