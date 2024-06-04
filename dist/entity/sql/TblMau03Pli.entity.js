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
exports.TblMau03Pli = void 0;
const typeorm_1 = require("typeorm");
let TblMau03Pli = class TblMau03Pli {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "bigint", name: "Idphieu" }),
    __metadata("design:type", String)
], TblMau03Pli.prototype, "idphieu", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "Ngaylap", default: () => "getdate()" }),
    __metadata("design:type", Date)
], TblMau03Pli.prototype, "ngaylap", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "Madk", length: 20 }),
    __metadata("design:type", String)
], TblMau03Pli.prototype, "madk", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "IdDoanhnghiep" }),
    __metadata("design:type", String)
], TblMau03Pli.prototype, "idDoanhnghiep", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "IdDN", nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblMau03Pli.prototype, "idDn", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "TenDN", length: 255 }),
    __metadata("design:type", String)
], TblMau03Pli.prototype, "tenDn", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "TenGD", length: 50 }),
    __metadata("design:type", String)
], TblMau03Pli.prototype, "tenGd", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "Masothue", length: 20 }),
    __metadata("design:type", String)
], TblMau03Pli.prototype, "masothue", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "IdLHDN", nullable: true, length: 3 }),
    __metadata("design:type", String)
], TblMau03Pli.prototype, "idLhdn", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "Matinh", nullable: true, length: 2 }),
    __metadata("design:type", String)
], TblMau03Pli.prototype, "matinh", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "Mahuyen", nullable: true, length: 5 }),
    __metadata("design:type", String)
], TblMau03Pli.prototype, "mahuyen", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "Maxa", nullable: true, length: 8 }),
    __metadata("design:type", String)
], TblMau03Pli.prototype, "maxa", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "idKhuCN", nullable: true }),
    __metadata("design:type", Number)
], TblMau03Pli.prototype, "idKhuCn", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "DiachiDN", nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblMau03Pli.prototype, "diachiDn", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "IdNKT", nullable: true, length: 4 }),
    __metadata("design:type", String)
], TblMau03Pli.prototype, "idNkt", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkNL", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Pli.prototype, "chkNl", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkCN", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Pli.prototype, "chkCn", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkSXPP", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Pli.prototype, "chkSxpp", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkVTKB", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Pli.prototype, "chkVtkb", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkTTTT", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Pli.prototype, "chkTttt", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkBDS", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Pli.prototype, "chkBds", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkDVHC", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Pli.prototype, "chkDvhc", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkYT", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Pli.prototype, "chkYt", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkBBL", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Pli.prototype, "chkBbl", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkTHUE", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Pli.prototype, "chkThue", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkKK", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Pli.prototype, "chkKk", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkXD", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Pli.prototype, "chkXd", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkCCN", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Pli.prototype, "chkCcn", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkDVLT", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Pli.prototype, "chkDvlt", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkTCNH", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Pli.prototype, "chkTcnh", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkKHCN", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Pli.prototype, "chkKhcn", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkGD", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Pli.prototype, "chkGd", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkNT", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Pli.prototype, "chkNt", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkHDXH", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Pli.prototype, "chkHdxh", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkDV", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Pli.prototype, "chkDv", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkHDQT", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Pli.prototype, "chkHdqt", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "IdQuymo" }),
    __metadata("design:type", Number)
], TblMau03Pli.prototype, "idQuymo", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Soluong", default: () => "(0)" }),
    __metadata("design:type", Number)
], TblMau03Pli.prototype, "soluong", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "Ngaydky", default: () => "getdate()" }),
    __metadata("design:type", Date)
], TblMau03Pli.prototype, "ngaydky", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkTuvanCS", default: () => "(0)" }),
    __metadata("design:type", Boolean)
], TblMau03Pli.prototype, "chkTuvanCs", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkTuvanVL", default: () => "(0)" }),
    __metadata("design:type", Boolean)
], TblMau03Pli.prototype, "chkTuvanVl", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkTuvanDT", default: () => "(0)" }),
    __metadata("design:type", Boolean)
], TblMau03Pli.prototype, "chkTuvanDt", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkDKy03A", default: () => "(0)" }),
    __metadata("design:type", Boolean)
], TblMau03Pli.prototype, "chkDKy03A", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "DKyKhac", length: 255 }),
    __metadata("design:type", String)
], TblMau03Pli.prototype, "dKyKhac", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "TenLienhe", nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblMau03Pli.prototype, "tenLienhe", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Chucvu", nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblMau03Pli.prototype, "chucvu", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Dienthoai", nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblMau03Pli.prototype, "dienthoai", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Email", nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblMau03Pli.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "NhanSMS", nullable: true, default: () => "(1)" }),
    __metadata("design:type", Boolean)
], TblMau03Pli.prototype, "nhanSms", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "NhanEMail", nullable: true, default: () => "(1)" }),
    __metadata("design:type", Boolean)
], TblMau03Pli.prototype, "nhanEMail", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Hinhthuckhac", nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblMau03Pli.prototype, "hinhthuckhac", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "UserName", length: 50 }),
    __metadata("design:type", String)
], TblMau03Pli.prototype, "userName", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "DisplayOrder", default: () => "(0)" }),
    __metadata("design:type", Number)
], TblMau03Pli.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "CreatedDate", default: () => "getdate()" }),
    __metadata("design:type", Date)
], TblMau03Pli.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "CreatedBy", length: 50 }),
    __metadata("design:type", String)
], TblMau03Pli.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "ModifiredDate", default: () => "getdate()" }),
    __metadata("design:type", Date)
], TblMau03Pli.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "ModifiredBy", length: 50 }),
    __metadata("design:type", String)
], TblMau03Pli.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "Status", default: () => "(1)" }),
    __metadata("design:type", Boolean)
], TblMau03Pli.prototype, "status", void 0);
TblMau03Pli = __decorate([
    (0, typeorm_1.Index)("PK_tblMau03PLI", ["idphieu"], { unique: true }),
    (0, typeorm_1.Entity)("tblMau03PLI", { schema: "dbo" })
], TblMau03Pli);
exports.TblMau03Pli = TblMau03Pli;
//# sourceMappingURL=TblMau03Pli.entity.js.map