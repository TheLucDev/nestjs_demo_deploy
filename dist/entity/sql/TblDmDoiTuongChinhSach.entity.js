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
exports.TblDmDoiTuongChinhSach = void 0;
const typeorm_1 = require("typeorm");
const TblDKyDtn_entity_1 = require("./TblDKyDtn.entity");
const TblDKyXkld_entity_1 = require("./TblDKyXkld.entity");
const TblHoSoUngVien_entity_1 = require("./TblHoSoUngVien.entity");
let TblDmDoiTuongChinhSach = class TblDmDoiTuongChinhSach {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'dtcs_id' }),
    __metadata("design:type", Number)
], TblDmDoiTuongChinhSach.prototype, "dtcsId", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'dtcs_ten', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblDmDoiTuongChinhSach.prototype, "dtcsTen", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder', default: () => '(1)' }),
    __metadata("design:type", Number)
], TblDmDoiTuongChinhSach.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'CreatedDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblDmDoiTuongChinhSach.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'CreatedBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblDmDoiTuongChinhSach.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ModifiredDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblDmDoiTuongChinhSach.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'ModifiredBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblDmDoiTuongChinhSach.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TblDmDoiTuongChinhSach.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TblDKyDtn_entity_1.TblDKyDtn, (tblDKyDtn) => tblDKyDtn.dkdtndmDoituongchinhsach),
    __metadata("design:type", Array)
], TblDmDoiTuongChinhSach.prototype, "tblDKyDtns", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TblDKyXkld_entity_1.TblDKyXkld, (tblDKyXkld) => tblDKyXkld.dkxklddmDoituongchinhsach),
    __metadata("design:type", Array)
], TblDmDoiTuongChinhSach.prototype, "tblDKyXklds", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TblHoSoUngVien_entity_1.TblHoSoUngVien, (tblHoSoUngVien) => tblHoSoUngVien.uvDoituongchinhsach),
    __metadata("design:type", Array)
], TblDmDoiTuongChinhSach.prototype, "tblHoSoUngViens", void 0);
TblDmDoiTuongChinhSach = __decorate([
    (0, typeorm_1.Index)('PK_tb_dm_doituongchinhsach', ['dtcsId'], { unique: true }),
    (0, typeorm_1.Entity)('tblDmDoiTuongChinhSach', { schema: 'dbo' })
], TblDmDoiTuongChinhSach);
exports.TblDmDoiTuongChinhSach = TblDmDoiTuongChinhSach;
//# sourceMappingURL=TblDmDoiTuongChinhSach.entity.js.map