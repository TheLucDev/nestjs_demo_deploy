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
exports.TblDaidienNtd = void 0;
const typeorm_1 = require("typeorm");
const TblNhaTuyenDung_entity_1 = require("./TblNhaTuyenDung.entity");
let TblDaidienNtd = class TblDaidienNtd {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'IdLienhe' }),
    __metadata("design:type", String)
], TblDaidienNtd.prototype, "idLienhe", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'Iduv' }),
    __metadata("design:type", String)
], TblDaidienNtd.prototype, "iduv", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Hoten', length: 50 }),
    __metadata("design:type", String)
], TblDaidienNtd.prototype, "hoten", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdGioitinh' }),
    __metadata("design:type", Number)
], TblDaidienNtd.prototype, "idGioitinh", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'Idchucvu' }),
    __metadata("design:type", Number)
], TblDaidienNtd.prototype, "idchucvu", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Diachi', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblDaidienNtd.prototype, "diachi", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Dienthoai', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblDaidienNtd.prototype, "dienthoai", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Email', length: 50 }),
    __metadata("design:type", String)
], TblDaidienNtd.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder', default: () => '(0)' }),
    __metadata("design:type", Number)
], TblDaidienNtd.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'CreatedDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblDaidienNtd.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'CreatedBy', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblDaidienNtd.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ModifiredDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblDaidienNtd.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'ModifiredBy', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblDaidienNtd.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TblDaidienNtd.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblNhaTuyenDung_entity_1.TblNhaTuyenDung, (tblNhaTuyenDung) => tblNhaTuyenDung.tblDaidienNtds, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)([
        { name: 'IdDoanhNghiep', referencedColumnName: 'idDoanhNghiep' },
    ]),
    __metadata("design:type", TblNhaTuyenDung_entity_1.TblNhaTuyenDung)
], TblDaidienNtd.prototype, "idDoanhNghiep", void 0);
TblDaidienNtd = __decorate([
    (0, typeorm_1.Index)('PK_tblDaidienNTD', ['idLienhe'], { unique: true }),
    (0, typeorm_1.Entity)('tblDaidienNTD', { schema: 'dbo' })
], TblDaidienNtd);
exports.TblDaidienNtd = TblDaidienNtd;
//# sourceMappingURL=TblDaidienNtd.entity.js.map