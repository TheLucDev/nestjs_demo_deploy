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
exports.TblM27Socau = void 0;
const typeorm_1 = require("typeorm");
const TblM27SocauCt_entity_1 = require("./TblM27SocauCt.entity");
let TblM27Socau = class TblM27Socau {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'Idcau27' }),
    __metadata("design:type", Number)
], TblM27Socau.prototype, "idcau27", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'Ngay', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblM27Socau.prototype, "ngay", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Quyenso', length: 50 }),
    __metadata("design:type", String)
], TblM27Socau.prototype, "quyenso", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Ten', length: 255 }),
    __metadata("design:type", String)
], TblM27Socau.prototype, "ten", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Matinh', nullable: true, length: 2 }),
    __metadata("design:type", String)
], TblM27Socau.prototype, "matinh", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Mahuyen', nullable: true, length: 5 }),
    __metadata("design:type", String)
], TblM27Socau.prototype, "mahuyen", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Maxa', nullable: true, length: 8 }),
    __metadata("design:type", String)
], TblM27Socau.prototype, "maxa", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'IdDoanhNghiep' }),
    __metadata("design:type", String)
], TblM27Socau.prototype, "idDoanhNghiep", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'IdLienhe', nullable: true }),
    __metadata("design:type", String)
], TblM27Socau.prototype, "idLienhe", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'Nam' }),
    __metadata("design:type", Number)
], TblM27Socau.prototype, "nam", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Manv', nullable: true, length: 15 }),
    __metadata("design:type", String)
], TblM27Socau.prototype, "manv", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IdDonvi', nullable: true, length: 15 }),
    __metadata("design:type", String)
], TblM27Socau.prototype, "idDonvi", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'StartAdress', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblM27Socau.prototype, "startAdress", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'EndAdress', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblM27Socau.prototype, "endAdress", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder', default: () => '(1)' }),
    __metadata("design:type", Number)
], TblM27Socau.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'CreatedDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblM27Socau.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'CreatedBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblM27Socau.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ModifiredDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblM27Socau.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'ModifiredBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblM27Socau.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TblM27Socau.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TblM27SocauCt_entity_1.TblM27SocauCt, (tblM27SocauCt) => tblM27SocauCt.idcau),
    __metadata("design:type", Array)
], TblM27Socau.prototype, "tblM27SocauCts", void 0);
TblM27Socau = __decorate([
    (0, typeorm_1.Index)('PK_tblM27Socau', ['idcau27'], { unique: true }),
    (0, typeorm_1.Entity)('tblM27Socau', { schema: 'dbo' })
], TblM27Socau);
exports.TblM27Socau = TblM27Socau;
//# sourceMappingURL=TblM27Socau.entity.js.map