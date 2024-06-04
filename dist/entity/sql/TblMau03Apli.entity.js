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
exports.TblMau03Apli = void 0;
const typeorm_1 = require("typeorm");
let TblMau03Apli = class TblMau03Apli {
};
__decorate([
    (0, typeorm_1.Column)("bigint", { primary: true, name: "Idphieu" }),
    __metadata("design:type", String)
], TblMau03Apli.prototype, "idphieu", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "Ngaylap", default: () => "getdate()" }),
    __metadata("design:type", Date)
], TblMau03Apli.prototype, "ngaylap", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "Madk", length: 20 }),
    __metadata("design:type", String)
], TblMau03Apli.prototype, "madk", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "TenCV", length: 255 }),
    __metadata("design:type", String)
], TblMau03Apli.prototype, "tenCv", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "MotaCV", nullable: true }),
    __metadata("design:type", String)
], TblMau03Apli.prototype, "motaCv", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Soluong", default: () => "(0)" }),
    __metadata("design:type", Number)
], TblMau03Apli.prototype, "soluong", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "NganhId", nullable: true }),
    __metadata("design:type", Number)
], TblMau03Apli.prototype, "nganhId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "level1", nullable: true }),
    __metadata("design:type", Number)
], TblMau03Apli.prototype, "level1", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "level2", nullable: true }),
    __metadata("design:type", Number)
], TblMau03Apli.prototype, "level2", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "level3", nullable: true }),
    __metadata("design:type", Number)
], TblMau03Apli.prototype, "level3", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "level4", nullable: true }),
    __metadata("design:type", Number)
], TblMau03Apli.prototype, "level4", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "IdChucvu" }),
    __metadata("design:type", Number)
], TblMau03Apli.prototype, "idChucvu", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Chucvukhac", nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblMau03Apli.prototype, "chucvukhac", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Idhocvan" }),
    __metadata("design:type", Number)
], TblMau03Apli.prototype, "idhocvan", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "IdBacHoc", nullable: true, length: 4 }),
    __metadata("design:type", String)
], TblMau03Apli.prototype, "idBacHoc", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "IdngheDT" }),
    __metadata("design:type", Number)
], TblMau03Apli.prototype, "idngheDt", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Trinhdok1", nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblMau03Apli.prototype, "trinhdok1", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Trinhdok2", nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblMau03Apli.prototype, "trinhdok2", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "TrinhdoNghe", nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblMau03Apli.prototype, "trinhdoNghe", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "BacNghe", nullable: true }),
    __metadata("design:type", Number)
], TblMau03Apli.prototype, "bacNghe", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "IdNNDT1", nullable: true }),
    __metadata("design:type", Number)
], TblMau03Apli.prototype, "idNndt1", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "IdTDNN1", nullable: true, length: 5 }),
    __metadata("design:type", String)
], TblMau03Apli.prototype, "idTdnn1", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "MucNN1", nullable: true }),
    __metadata("design:type", Number)
], TblMau03Apli.prototype, "mucNn1", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "IdNNDT2", nullable: true }),
    __metadata("design:type", Number)
], TblMau03Apli.prototype, "idNndt2", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "IdTDNN2", nullable: true, length: 5 }),
    __metadata("design:type", String)
], TblMau03Apli.prototype, "idTdnn2", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "MucNN2", nullable: true }),
    __metadata("design:type", Number)
], TblMau03Apli.prototype, "mucNn2", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "IdTDTH", nullable: true, length: 5 }),
    __metadata("design:type", String)
], TblMau03Apli.prototype, "idTdth", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "MucTH", nullable: true }),
    __metadata("design:type", Number)
], TblMau03Apli.prototype, "mucTh", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "IdKynang", nullable: true, length: 4 }),
    __metadata("design:type", String)
], TblMau03Apli.prototype, "idKynang", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkGT", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "chkGt", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkNS", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "chkNs", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkNHOM", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "chkNhom", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkGS", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "chkGs", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkKHAC", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "chkKhac", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkTTR", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "chkTtr", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkTH", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "chkTh", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkDL", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "chkDl", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkPB", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "chkPb", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkQLTG", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "chkQltg", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkTU", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "chkTu", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkAPL", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "chkApl", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Kynangkhac", nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblMau03Apli.prototype, "kynangkhac", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "IdKinhnghiem", nullable: true, length: 4 }),
    __metadata("design:type", String)
], TblMau03Apli.prototype, "idKinhnghiem", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "NoiLVTinh", nullable: true, length: 2 }),
    __metadata("design:type", String)
], TblMau03Apli.prototype, "noiLvTinh", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "NoiLVKCN", nullable: true }),
    __metadata("design:type", Number)
], TblMau03Apli.prototype, "noiLvkcn", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "IdLoaiDHLD", nullable: true, length: 4 }),
    __metadata("design:type", String)
], TblMau03Apli.prototype, "idLoaiDhld", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "IdCalamviec", nullable: true }),
    __metadata("design:type", Number)
], TblMau03Apli.prototype, "idCalamviec", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "IdHinhthuc", nullable: true, length: 2 }),
    __metadata("design:type", String)
], TblMau03Apli.prototype, "idHinhthuc", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "IdMucdich", nullable: true, length: 2 }),
    __metadata("design:type", String)
], TblMau03Apli.prototype, "idMucdich", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "IdMucluong" }),
    __metadata("design:type", Number)
], TblMau03Apli.prototype, "idMucluong", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkPL01", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "chkPl01", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkPL02", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "chkPl02", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkPL03", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "chkPl03", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkPL04", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "chkPl04", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "TienPhucloi",
        nullable: true,
        precision: 18,
        scale: 0,
    }),
    __metadata("design:type", Number)
], TblMau03Apli.prototype, "tienPhucloi", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkPL05", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "chkPl05", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkPL06", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "chkPl06", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkPL07", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "chkPl07", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkPL08", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "chkPl08", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkPL09", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "chkPl09", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkPL10", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "chkPl10", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkPL11", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "chkPl11", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkPL12", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "chkPl12", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkPL13", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "chkPl13", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkPL14", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "chkPl14", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkPL15", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "chkPl15", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkPL16", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "chkPl16", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkPL17", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "chkPl17", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Phucloikhac", nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblMau03Apli.prototype, "phucloikhac", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkNL1", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "chkNl1", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkNL2", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "chkNl2", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkNL3", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "chkNl3", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkTL1", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "chkTl1", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkTL2", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "chkTl2", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkTL3", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "chkTl3", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkDL1", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "chkDl1", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkDL2", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "chkDl2", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkDL3", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "chkDl3", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkNN1", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "chkNn1", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkNN2", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "chkNn2", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkNN3", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "chkNn3", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkY01", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "chkY01", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkY02", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "chkY02", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkTY1", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "chkTy1", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkTY2", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "chkTy2", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkTY3", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "chkTy3", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chk2T1", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "chk2T1", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chk2T2", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "chk2T2", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chk2T3", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "chk2T3", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chk2T4", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "chk2T4", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chk2T5", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "chk2T5", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "IdDoituong", nullable: true }),
    __metadata("design:type", Number)
], TblMau03Apli.prototype, "idDoituong", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "IdHinhthucTD", nullable: true, length: 2 }),
    __metadata("design:type", String)
], TblMau03Apli.prototype, "idHinhthucTd", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", {
        name: "ThoihanTD",
        nullable: true,
        default: () => "getdate()",
    }),
    __metadata("design:type", Date)
], TblMau03Apli.prototype, "thoihanTd", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "TenLienhe", nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblMau03Apli.prototype, "tenLienhe", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Chucvu", nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblMau03Apli.prototype, "chucvu", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Dienthoai", nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblMau03Apli.prototype, "dienthoai", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Email", nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblMau03Apli.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "NhanSMS", nullable: true, default: () => "(1)" }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "nhanSms", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "NhanEMail", nullable: true, default: () => "(1)" }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "nhanEMail", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Hinhthuckhac", nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblMau03Apli.prototype, "hinhthuckhac", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "ChkTuvan", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "chkTuvan", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "ChkGTVL", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "chkGtvl", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "ChkCULD", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "chkCuld", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "UserName", length: 50 }),
    __metadata("design:type", String)
], TblMau03Apli.prototype, "userName", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "DisplayOrder", default: () => "(0)" }),
    __metadata("design:type", Number)
], TblMau03Apli.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "CreatedDate", default: () => "getdate()" }),
    __metadata("design:type", Date)
], TblMau03Apli.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "CreatedBy", length: 50 }),
    __metadata("design:type", String)
], TblMau03Apli.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "ModifiredDate", default: () => "getdate()" }),
    __metadata("design:type", Date)
], TblMau03Apli.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "ModifiredBy", length: 50 }),
    __metadata("design:type", String)
], TblMau03Apli.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "Status", default: () => "(1)" }),
    __metadata("design:type", Boolean)
], TblMau03Apli.prototype, "status", void 0);
TblMau03Apli = __decorate([
    (0, typeorm_1.Index)("PK_tblMau03APLI", ["idphieu"], { unique: true }),
    (0, typeorm_1.Entity)("tblMau03APLI", { schema: "dbo" })
], TblMau03Apli);
exports.TblMau03Apli = TblMau03Apli;
//# sourceMappingURL=TblMau03Apli.entity.js.map