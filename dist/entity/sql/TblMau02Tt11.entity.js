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
exports.TblMau02Tt11 = void 0;
const typeorm_1 = require("typeorm");
const TblMau02Kn_entity_1 = require("./TblMau02Kn.entity");
let TblMau02Tt11 = class TblMau02Tt11 {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'Idphieu' }),
    __metadata("design:type", String)
], TblMau02Tt11.prototype, "idphieu", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'Ngaylap', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblMau02Tt11.prototype, "ngaylap", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Maphieu', length: 20 }),
    __metadata("design:type", String)
], TblMau02Tt11.prototype, "maphieu", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'Iduv' }),
    __metadata("design:type", String)
], TblMau02Tt11.prototype, "iduv", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Hoten', length: 255 }),
    __metadata("design:type", String)
], TblMau02Tt11.prototype, "hoten", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'SoCMND', nullable: true, length: 20 }),
    __metadata("design:type", String)
], TblMau02Tt11.prototype, "soCmnd", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'MasoBHXH', nullable: true, length: 20 }),
    __metadata("design:type", String)
], TblMau02Tt11.prototype, "masoBhxh", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', {
        name: 'Ngaysinh',
        nullable: true,
        default: () => 'getdate()',
    }),
    __metadata("design:type", Date)
], TblMau02Tt11.prototype, "ngaysinh", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdGioitinh' }),
    __metadata("design:type", Number)
], TblMau02Tt11.prototype, "idGioitinh", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdDantoc', nullable: true }),
    __metadata("design:type", Number)
], TblMau02Tt11.prototype, "idDantoc", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdTongiao', nullable: true }),
    __metadata("design:type", Number)
], TblMau02Tt11.prototype, "idTongiao", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'MatinhHK', nullable: true, length: 2 }),
    __metadata("design:type", String)
], TblMau02Tt11.prototype, "matinhHk", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'MahuyenHK', nullable: true, length: 5 }),
    __metadata("design:type", String)
], TblMau02Tt11.prototype, "mahuyenHk", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'MaxaHK', nullable: true, length: 8 }),
    __metadata("design:type", String)
], TblMau02Tt11.prototype, "maxaHk", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'DiachiHK', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblMau02Tt11.prototype, "diachiHk", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'MatinhTT', nullable: true, length: 2 }),
    __metadata("design:type", String)
], TblMau02Tt11.prototype, "matinhTt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'MahuyenTT', nullable: true, length: 5 }),
    __metadata("design:type", String)
], TblMau02Tt11.prototype, "mahuyenTt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'MaxaTT', nullable: true, length: 8 }),
    __metadata("design:type", String)
], TblMau02Tt11.prototype, "maxaTt", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'DiachiTT', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblMau02Tt11.prototype, "diachiTt", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'Idhocvan' }),
    __metadata("design:type", Number)
], TblMau02Tt11.prototype, "idhocvan", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IdBacHoc', nullable: true, length: 4 }),
    __metadata("design:type", String)
], TblMau02Tt11.prototype, "idBacHoc", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdChuyenmon' }),
    __metadata("design:type", Number)
], TblMau02Tt11.prototype, "idChuyenmon", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IdBacHocKhac', nullable: true, length: 4 }),
    __metadata("design:type", String)
], TblMau02Tt11.prototype, "idBacHocKhac", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdChuyenmonKhac' }),
    __metadata("design:type", Number)
], TblMau02Tt11.prototype, "idChuyenmonKhac", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Trinhdok1', length: 255 }),
    __metadata("design:type", String)
], TblMau02Tt11.prototype, "trinhdok1", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Trinhdok2', length: 255 }),
    __metadata("design:type", String)
], TblMau02Tt11.prototype, "trinhdok2", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Kynangnghe', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblMau02Tt11.prototype, "kynangnghe", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'Backynang', nullable: true }),
    __metadata("design:type", Number)
], TblMau02Tt11.prototype, "backynang", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdNNDT1', nullable: true }),
    __metadata("design:type", Number)
], TblMau02Tt11.prototype, "idNndt1", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IdTDNN1', nullable: true, length: 5 }),
    __metadata("design:type", String)
], TblMau02Tt11.prototype, "idTdnn1", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'MucNN1', nullable: true }),
    __metadata("design:type", Number)
], TblMau02Tt11.prototype, "mucNn1", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdNNDT2', nullable: true }),
    __metadata("design:type", Number)
], TblMau02Tt11.prototype, "idNndt2", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IdTDNN2', nullable: true, length: 5 }),
    __metadata("design:type", String)
], TblMau02Tt11.prototype, "idTdnn2", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'MucNN2', nullable: true }),
    __metadata("design:type", Number)
], TblMau02Tt11.prototype, "mucNn2", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IdTDTH', nullable: true, length: 5 }),
    __metadata("design:type", String)
], TblMau02Tt11.prototype, "idTdth", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'MucTH', nullable: true }),
    __metadata("design:type", Number)
], TblMau02Tt11.prototype, "mucTh", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IdKynang', nullable: true, length: 4 }),
    __metadata("design:type", String)
], TblMau02Tt11.prototype, "idKynang", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkGT', nullable: true }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "chkGt", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkNS', nullable: true }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "chkNs", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkNHOM', nullable: true }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "chkNhom", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkGS', nullable: true }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "chkGs", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkKHAC', nullable: true }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "chkKhac", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkTTR', nullable: true }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "chkTtr", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkTH', nullable: true }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "chkTh", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkDL', nullable: true }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "chkDl", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkPB', nullable: true }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "chkPb", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkQLTG', nullable: true }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "chkQltg", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkTU', nullable: true }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "chkTu", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkAPL', nullable: true }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "chkApl", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Kynangkhac', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblMau02Tt11.prototype, "kynangkhac", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'KinhnghiemLV', nullable: true }),
    __metadata("design:type", String)
], TblMau02Tt11.prototype, "kinhnghiemLv", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'LVNuocngoai', nullable: true, default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "lvNuocngoai", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'LVNuocngoaitai', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblMau02Tt11.prototype, "lvNuocngoaitai", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IdLHDN', nullable: true, length: 3 }),
    __metadata("design:type", String)
], TblMau02Tt11.prototype, "idLhdn", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'TenVV', length: 255 }),
    __metadata("design:type", String)
], TblMau02Tt11.prototype, "tenVv", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'MotaCV' }),
    __metadata("design:type", String)
], TblMau02Tt11.prototype, "motaCv", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'NganhId', nullable: true }),
    __metadata("design:type", Number)
], TblMau02Tt11.prototype, "nganhId", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'level1', nullable: true }),
    __metadata("design:type", Number)
], TblMau02Tt11.prototype, "level1", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'level2', nullable: true }),
    __metadata("design:type", Number)
], TblMau02Tt11.prototype, "level2", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'level3', nullable: true }),
    __metadata("design:type", Number)
], TblMau02Tt11.prototype, "level3", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'level4', nullable: true }),
    __metadata("design:type", Number)
], TblMau02Tt11.prototype, "level4", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdChucvu', nullable: true }),
    __metadata("design:type", Number)
], TblMau02Tt11.prototype, "idChucvu", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IdKinhnghiem', nullable: true, length: 4 }),
    __metadata("design:type", String)
], TblMau02Tt11.prototype, "idKinhnghiem", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'NoiLVTinh1', nullable: true, length: 2 }),
    __metadata("design:type", String)
], TblMau02Tt11.prototype, "noiLvTinh1", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'NoiLVKCN1', nullable: true }),
    __metadata("design:type", Number)
], TblMau02Tt11.prototype, "noiLvkcn1", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'NoiLVTinh2', nullable: true, length: 2 }),
    __metadata("design:type", String)
], TblMau02Tt11.prototype, "noiLvTinh2", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'NoiLVKCN2', nullable: true }),
    __metadata("design:type", Number)
], TblMau02Tt11.prototype, "noiLvkcn2", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IdLoaiDHLD', nullable: true, length: 4 }),
    __metadata("design:type", String)
], TblMau02Tt11.prototype, "idLoaiDhld", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdCalamviec', nullable: true }),
    __metadata("design:type", Number)
], TblMau02Tt11.prototype, "idCalamviec", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IdHinhthuc', nullable: true, length: 2 }),
    __metadata("design:type", String)
], TblMau02Tt11.prototype, "idHinhthuc", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IdMucdich', nullable: true, length: 2 }),
    __metadata("design:type", String)
], TblMau02Tt11.prototype, "idMucdich", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdMucluong', nullable: true }),
    __metadata("design:type", Number)
], TblMau02Tt11.prototype, "idMucluong", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkPL01', nullable: true }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "chkPl01", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkPL02', nullable: true }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "chkPl02", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkPL03', nullable: true }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "chkPl03", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkPL04', nullable: true }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "chkPl04", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', {
        name: 'TienPhucloi',
        nullable: true,
        precision: 18,
        scale: 0,
    }),
    __metadata("design:type", Number)
], TblMau02Tt11.prototype, "tienPhucloi", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkPL05', nullable: true }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "chkPl05", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkPL06', nullable: true }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "chkPl06", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkPL07', nullable: true }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "chkPl07", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkPL08', nullable: true }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "chkPl08", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkPL09', nullable: true }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "chkPl09", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkPL10', nullable: true }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "chkPl10", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkPL11', nullable: true }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "chkPl11", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkPL12', nullable: true }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "chkPl12", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkPL13', nullable: true }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "chkPl13", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkPL14', nullable: true }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "chkPl14", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkPL15', nullable: true }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "chkPl15", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkPL16', nullable: true }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "chkPl16", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkPL17', nullable: true }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "chkPl17", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Phucloikhac', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblMau02Tt11.prototype, "phucloikhac", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkNL1', nullable: true }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "chkNl1", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkNL2', nullable: true }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "chkNl2", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkNL3', nullable: true }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "chkNl3", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkTL1', nullable: true }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "chkTl1", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkTL2', nullable: true }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "chkTl2", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkTL3', nullable: true }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "chkTl3", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkDL1', nullable: true }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "chkDl1", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkDL2', nullable: true }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "chkDl2", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkDL3', nullable: true }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "chkDl3", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkNN1', nullable: true }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "chkNn1", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkNN2', nullable: true }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "chkNn2", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkNN3', nullable: true }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "chkNn3", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkY01', nullable: true }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "chkY01", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkY02', nullable: true }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "chkY02", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkTY1', nullable: true }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "chkTy1", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkTY2', nullable: true }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "chkTy2", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkTY3', nullable: true }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "chkTy3", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chk2T1', nullable: true }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "chk2T1", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chk2T2', nullable: true }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "chk2T2", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chk2T3', nullable: true }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "chk2T3", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chk2T4', nullable: true }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "chk2T4", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chk2T5', nullable: true }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "chk2T5", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'SSLV1', nullable: true }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "sslv1", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'SSLV2', nullable: true }),
    __metadata("design:type", Number)
], TblMau02Tt11.prototype, "sslv2", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IdHinhthucTD', nullable: true, length: 2 }),
    __metadata("design:type", String)
], TblMau02Tt11.prototype, "idHinhthucTd", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'TenLienhe', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblMau02Tt11.prototype, "tenLienhe", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Dienthoai', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblMau02Tt11.prototype, "dienthoai", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Email', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblMau02Tt11.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'NhanSMS', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "nhanSms", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'NhanEMail', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "nhanEMail", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Hinhthuckhac', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblMau02Tt11.prototype, "hinhthuckhac", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'TenNguoiViet', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblMau02Tt11.prototype, "tenNguoiViet", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder', default: () => '(0)' }),
    __metadata("design:type", Number)
], TblMau02Tt11.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'CreatedDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblMau02Tt11.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'CreatedBy', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblMau02Tt11.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ModifiredDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblMau02Tt11.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'ModifiredBy', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblMau02Tt11.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'MahoGD', nullable: true, length: 20 }),
    __metadata("design:type", String)
], TblMau02Tt11.prototype, "mahoGd", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TblMau02Tt11.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TblMau02Kn_entity_1.TblMau02Kn, (tblMau02Kn) => tblMau02Kn.idphieu2),
    __metadata("design:type", Array)
], TblMau02Tt11.prototype, "tblMau02Kns", void 0);
TblMau02Tt11 = __decorate([
    (0, typeorm_1.Index)('PK_Mau02TT11', ['idphieu'], { unique: true }),
    (0, typeorm_1.Entity)('tblMau02TT11', { schema: 'dbo' })
], TblMau02Tt11);
exports.TblMau02Tt11 = TblMau02Tt11;
//# sourceMappingURL=TblMau02Tt11.entity.js.map