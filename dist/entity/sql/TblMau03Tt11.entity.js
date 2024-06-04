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
exports.TblMau03Tt11 = void 0;
const typeorm_1 = require("typeorm");
let TblMau03Tt11 = class TblMau03Tt11 {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "bigint", name: "Idphieu" }),
    __metadata("design:type", String)
], TblMau03Tt11.prototype, "idphieu", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "Maphieu", length: 20 }),
    __metadata("design:type", String)
], TblMau03Tt11.prototype, "maphieu", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "Ngaylap", default: () => "getdate()" }),
    __metadata("design:type", Date)
], TblMau03Tt11.prototype, "ngaylap", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "Iduv" }),
    __metadata("design:type", String)
], TblMau03Tt11.prototype, "iduv", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Hoten", length: 255 }),
    __metadata("design:type", String)
], TblMau03Tt11.prototype, "hoten", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", {
        name: "Ngaysinh",
        nullable: true,
        default: () => "getdate()",
    }),
    __metadata("design:type", Date)
], TblMau03Tt11.prototype, "ngaysinh", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "IdGioitinh" }),
    __metadata("design:type", Number)
], TblMau03Tt11.prototype, "idGioitinh", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "SoCMND", nullable: true, length: 20 }),
    __metadata("design:type", String)
], TblMau03Tt11.prototype, "soCmnd", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "MasoBHXH", nullable: true, length: 20 }),
    __metadata("design:type", String)
], TblMau03Tt11.prototype, "masoBhxh", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "IdDantoc", nullable: true }),
    __metadata("design:type", Number)
], TblMau03Tt11.prototype, "idDantoc", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "IdTongiao", nullable: true }),
    __metadata("design:type", Number)
], TblMau03Tt11.prototype, "idTongiao", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "MatinhHK", length: 2 }),
    __metadata("design:type", String)
], TblMau03Tt11.prototype, "matinhHk", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "MahuyenHK", length: 5 }),
    __metadata("design:type", String)
], TblMau03Tt11.prototype, "mahuyenHk", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "MaxaHK", length: 8 }),
    __metadata("design:type", String)
], TblMau03Tt11.prototype, "maxaHk", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "DiachiHK", nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblMau03Tt11.prototype, "diachiHk", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "MatinhTT", length: 2 }),
    __metadata("design:type", String)
], TblMau03Tt11.prototype, "matinhTt", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "MahuyenTT", length: 5 }),
    __metadata("design:type", String)
], TblMau03Tt11.prototype, "mahuyenTt", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "MaxaTT", length: 8 }),
    __metadata("design:type", String)
], TblMau03Tt11.prototype, "maxaTt", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "DiachiTT", nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblMau03Tt11.prototype, "diachiTt", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Iddoituong" }),
    __metadata("design:type", Number)
], TblMau03Tt11.prototype, "iddoituong", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkTantat", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Tt11.prototype, "chkTantat", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "IdTantat", nullable: true }),
    __metadata("design:type", Number)
], TblMau03Tt11.prototype, "idTantat", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkHongheo", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Tt11.prototype, "chkHongheo", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkHocanngheo", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Tt11.prototype, "chkHocanngheo", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "Thuhoidat", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Tt11.prototype, "thuhoidat", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "Cocongcm", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Tt11.prototype, "cocongcm", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "Dantocts", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Tt11.prototype, "dantocts", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "IdDantocts", nullable: true }),
    __metadata("design:type", Number)
], TblMau03Tt11.prototype, "idDantocts", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Idhocvan", nullable: true }),
    __metadata("design:type", Number)
], TblMau03Tt11.prototype, "idhocvan", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "IdBacHoc", nullable: true, length: 4 }),
    __metadata("design:type", String)
], TblMau03Tt11.prototype, "idBacHoc", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "IdChuyennganh", nullable: true, length: 3 }),
    __metadata("design:type", String)
], TblMau03Tt11.prototype, "idChuyennganh", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "IdNganh", nullable: true }),
    __metadata("design:type", Number)
], TblMau03Tt11.prototype, "idNganh", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkCovieclam", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Tt11.prototype, "chkCovieclam", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkThatnghiep", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Tt11.prototype, "chkThatnghiep", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkKhongthamgia", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Tt11.prototype, "chkKhongthamgia", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkDihoc", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Tt11.prototype, "chkDihoc", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkHuutri", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Tt11.prototype, "chkHuutri", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkNoitro", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Tt11.prototype, "chkNoitro", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkKhuyettat", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Tt11.prototype, "chkKhuyettat", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkKhac", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Tt11.prototype, "chkKhac", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "IdVithevieclam", nullable: true }),
    __metadata("design:type", Number)
], TblMau03Tt11.prototype, "idVithevieclam", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Viecdanglam", length: 255 }),
    __metadata("design:type", String)
], TblMau03Tt11.prototype, "viecdanglam", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "IdLoaiBH", nullable: true }),
    __metadata("design:type", Number)
], TblMau03Tt11.prototype, "idLoaiBh", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkHopdongLD", nullable: true }),
    __metadata("design:type", Boolean)
], TblMau03Tt11.prototype, "chkHopdongLd", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "IdLoaiHD", nullable: true, length: 4 }),
    __metadata("design:type", String)
], TblMau03Tt11.prototype, "idLoaiHd", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", {
        name: "ThoigianHD",
        nullable: true,
        default: () => "getdate()",
    }),
    __metadata("design:type", Date)
], TblMau03Tt11.prototype, "thoigianHd", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Noilamviec", nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblMau03Tt11.prototype, "noilamviec", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "IdLoaiHinhNoilamviec", nullable: true }),
    __metadata("design:type", Number)
], TblMau03Tt11.prototype, "idLoaiHinhNoilamviec", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "IdLoaihinhDN", nullable: true, length: 3 }),
    __metadata("design:type", String)
], TblMau03Tt11.prototype, "idLoaihinhDn", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "DiachiNoilamviec", nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblMau03Tt11.prototype, "diachiNoilamviec", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "IdLoaithatnghiep", nullable: true }),
    __metadata("design:type", Number)
], TblMau03Tt11.prototype, "idLoaithatnghiep", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "IdTGThatnghiep", nullable: true }),
    __metadata("design:type", Number)
], TblMau03Tt11.prototype, "idTgThatnghiep", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Ghichu", nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblMau03Tt11.prototype, "ghichu", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "TenNguoiViet", nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblMau03Tt11.prototype, "tenNguoiViet", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "Dienthoai", nullable: true, length: 30 }),
    __metadata("design:type", String)
], TblMau03Tt11.prototype, "dienthoai", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Email", nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblMau03Tt11.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "DisplayOrder", default: () => "(0)" }),
    __metadata("design:type", Number)
], TblMau03Tt11.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "CreatedDate", default: () => "getdate()" }),
    __metadata("design:type", Date)
], TblMau03Tt11.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "CreatedBy", nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblMau03Tt11.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "ModifiredDate", default: () => "getdate()" }),
    __metadata("design:type", Date)
], TblMau03Tt11.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "ModifiredBy", nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblMau03Tt11.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "MahoGD", nullable: true, length: 20 }),
    __metadata("design:type", String)
], TblMau03Tt11.prototype, "mahoGd", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "Status", default: () => "(1)" }),
    __metadata("design:type", Boolean)
], TblMau03Tt11.prototype, "status", void 0);
TblMau03Tt11 = __decorate([
    (0, typeorm_1.Index)("PK_tblMau03TT11", ["idphieu"], { unique: true }),
    (0, typeorm_1.Entity)("tblMau03TT11", { schema: "dbo" })
], TblMau03Tt11);
exports.TblMau03Tt11 = TblMau03Tt11;
//# sourceMappingURL=TblMau03Tt11.entity.js.map