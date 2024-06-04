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
exports.TblM01Plind23 = void 0;
const typeorm_1 = require("typeorm");
const TblM01Plikn_entity_1 = require("./TblM01Plikn.entity");
let TblM01Plind23 = class TblM01Plind23 {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'Idphieu' }),
    __metadata("design:type", String)
], TblM01Plind23.prototype, "idphieu", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'IdM02T11', nullable: true, default: () => '(-1)' }),
    __metadata("design:type", String)
], TblM01Plind23.prototype, "idM02T11", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'Ngaylap', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblM01Plind23.prototype, "ngaylap", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Maphieu', length: 20 }),
    __metadata("design:type", String)
], TblM01Plind23.prototype, "maphieu", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'Iduv' }),
    __metadata("design:type", String)
], TblM01Plind23.prototype, "iduv", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Hoten', length: 255 }),
    __metadata("design:type", String)
], TblM01Plind23.prototype, "hoten", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'SoCMND', nullable: true, length: 20 }),
    __metadata("design:type", String)
], TblM01Plind23.prototype, "soCmnd", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', {
        name: 'Ngaysinh',
        nullable: true,
        default: () => 'getdate()',
    }),
    __metadata("design:type", Date)
], TblM01Plind23.prototype, "ngaysinh", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdGioitinh' }),
    __metadata("design:type", Number)
], TblM01Plind23.prototype, "idGioitinh", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdDantoc', nullable: true }),
    __metadata("design:type", Number)
], TblM01Plind23.prototype, "idDantoc", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdTongiao', nullable: true }),
    __metadata("design:type", Number)
], TblM01Plind23.prototype, "idTongiao", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'MatinhHK', nullable: true, length: 2 }),
    __metadata("design:type", String)
], TblM01Plind23.prototype, "matinhHk", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'MahuyenHK', nullable: true, length: 5 }),
    __metadata("design:type", String)
], TblM01Plind23.prototype, "mahuyenHk", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'MaxaHK', nullable: true, length: 8 }),
    __metadata("design:type", String)
], TblM01Plind23.prototype, "maxaHk", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'DiachiHK', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblM01Plind23.prototype, "diachiHk", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'MatinhTT', nullable: true, length: 2 }),
    __metadata("design:type", String)
], TblM01Plind23.prototype, "matinhTt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'MahuyenTT', nullable: true, length: 5 }),
    __metadata("design:type", String)
], TblM01Plind23.prototype, "mahuyenTt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'MaxaTT', nullable: true, length: 8 }),
    __metadata("design:type", String)
], TblM01Plind23.prototype, "maxaTt", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'DiachiTT', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblM01Plind23.prototype, "diachiTt", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'TenLienhe', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblM01Plind23.prototype, "tenLienhe", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Dienthoai', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblM01Plind23.prototype, "dienthoai", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Email', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblM01Plind23.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdDoituong', nullable: true }),
    __metadata("design:type", Number)
], TblM01Plind23.prototype, "idDoituong", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'Idhocvan' }),
    __metadata("design:type", Number)
], TblM01Plind23.prototype, "idhocvan", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IdBacHoc', nullable: true, length: 4 }),
    __metadata("design:type", String)
], TblM01Plind23.prototype, "idBacHoc", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdChuyenmon' }),
    __metadata("design:type", Number)
], TblM01Plind23.prototype, "idChuyenmon", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IdBacHocKhac', nullable: true, length: 4 }),
    __metadata("design:type", String)
], TblM01Plind23.prototype, "idBacHocKhac", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdChuyenmonKhac' }),
    __metadata("design:type", Number)
], TblM01Plind23.prototype, "idChuyenmonKhac", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Trinhdok1', length: 255 }),
    __metadata("design:type", String)
], TblM01Plind23.prototype, "trinhdok1", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Trinhdok2', length: 255 }),
    __metadata("design:type", String)
], TblM01Plind23.prototype, "trinhdok2", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Kynangnghe', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblM01Plind23.prototype, "kynangnghe", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'Backynang', nullable: true }),
    __metadata("design:type", Number)
], TblM01Plind23.prototype, "backynang", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdNNDT1', nullable: true }),
    __metadata("design:type", Number)
], TblM01Plind23.prototype, "idNndt1", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IdTDNN1', nullable: true, length: 5 }),
    __metadata("design:type", String)
], TblM01Plind23.prototype, "idTdnn1", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'MucNN1', nullable: true }),
    __metadata("design:type", Number)
], TblM01Plind23.prototype, "mucNn1", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdNNDT2', nullable: true }),
    __metadata("design:type", Number)
], TblM01Plind23.prototype, "idNndt2", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IdTDNN2', nullable: true, length: 5 }),
    __metadata("design:type", String)
], TblM01Plind23.prototype, "idTdnn2", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'MucNN2', nullable: true }),
    __metadata("design:type", Number)
], TblM01Plind23.prototype, "mucNn2", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IdTDTH', nullable: true, length: 5 }),
    __metadata("design:type", String)
], TblM01Plind23.prototype, "idTdth", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'MucTH', nullable: true }),
    __metadata("design:type", Number)
], TblM01Plind23.prototype, "mucTh", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IdKynang', nullable: true, length: 4 }),
    __metadata("design:type", String)
], TblM01Plind23.prototype, "idKynang", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkGT', nullable: true }),
    __metadata("design:type", Boolean)
], TblM01Plind23.prototype, "chkGt", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkNS', nullable: true }),
    __metadata("design:type", Boolean)
], TblM01Plind23.prototype, "chkNs", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkNHOM', nullable: true }),
    __metadata("design:type", Boolean)
], TblM01Plind23.prototype, "chkNhom", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkGS', nullable: true }),
    __metadata("design:type", Boolean)
], TblM01Plind23.prototype, "chkGs", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkKHAC', nullable: true }),
    __metadata("design:type", Boolean)
], TblM01Plind23.prototype, "chkKhac", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkTTR', nullable: true }),
    __metadata("design:type", Boolean)
], TblM01Plind23.prototype, "chkTtr", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkTH', nullable: true }),
    __metadata("design:type", Boolean)
], TblM01Plind23.prototype, "chkTh", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkDL', nullable: true }),
    __metadata("design:type", Boolean)
], TblM01Plind23.prototype, "chkDl", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkPB', nullable: true }),
    __metadata("design:type", Boolean)
], TblM01Plind23.prototype, "chkPb", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkQLTG', nullable: true }),
    __metadata("design:type", Boolean)
], TblM01Plind23.prototype, "chkQltg", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkTU', nullable: true }),
    __metadata("design:type", Boolean)
], TblM01Plind23.prototype, "chkTu", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkAPL', nullable: true }),
    __metadata("design:type", Boolean)
], TblM01Plind23.prototype, "chkApl", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Kynangkhac', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblM01Plind23.prototype, "kynangkhac", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'KinhnghiemLV', nullable: true }),
    __metadata("design:type", String)
], TblM01Plind23.prototype, "kinhnghiemLv", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'LVNuocngoai', nullable: true, default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TblM01Plind23.prototype, "lvNuocngoai", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdQuocgia', nullable: true }),
    __metadata("design:type", Number)
], TblM01Plind23.prototype, "idQuocgia", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'LVNuocngoaitai', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblM01Plind23.prototype, "lvNuocngoaitai", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkTuvanCS', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TblM01Plind23.prototype, "chkTuvanCs", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkTuvanVL', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TblM01Plind23.prototype, "chkTuvanVl", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkTuvanDT', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TblM01Plind23.prototype, "chkTuvanDt", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkDKy01A', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TblM01Plind23.prototype, "chkDKy01A", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'DKyKhac', length: 255 }),
    __metadata("design:type", String)
], TblM01Plind23.prototype, "dKyKhac", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder', default: () => '(0)' }),
    __metadata("design:type", Number)
], TblM01Plind23.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'CreatedDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblM01Plind23.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'CreatedBy', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblM01Plind23.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ModifiredDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblM01Plind23.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'ModifiredBy', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblM01Plind23.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'MahoGD', nullable: true, length: 20 }),
    __metadata("design:type", String)
], TblM01Plind23.prototype, "mahoGd", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TblM01Plind23.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TblM01Plikn_entity_1.TblM01Plikn, (tblM01Plikn) => tblM01Plikn.idphieu2),
    __metadata("design:type", Array)
], TblM01Plind23.prototype, "tblM01Plikns", void 0);
TblM01Plind23 = __decorate([
    (0, typeorm_1.Index)('PK_tblM01PLIND23', ['idphieu'], { unique: true }),
    (0, typeorm_1.Entity)('tblM01PLIND23', { schema: 'dbo' })
], TblM01Plind23);
exports.TblM01Plind23 = TblM01Plind23;
//# sourceMappingURL=TblM01Plind23.entity.js.map