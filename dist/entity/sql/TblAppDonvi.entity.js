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
exports.TblAppDonvi = void 0;
const typeorm_1 = require("typeorm");
let TblAppDonvi = class TblAppDonvi {
};
__decorate([
    (0, typeorm_1.Column)("int", { name: "Sott" }),
    __metadata("design:type", Number)
], TblAppDonvi.prototype, "sott", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "IdCapQL" }),
    __metadata("design:type", Number)
], TblAppDonvi.prototype, "idCapQl", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "Macaptren", length: 15 }),
    __metadata("design:type", String)
], TblAppDonvi.prototype, "macaptren", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Tencaptren", nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblAppDonvi.prototype, "tencaptren", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { primary: true, name: "Madonvi", length: 15 }),
    __metadata("design:type", String)
], TblAppDonvi.prototype, "madonvi", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Tendonvi", nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblAppDonvi.prototype, "tendonvi", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "TenReport", nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblAppDonvi.prototype, "tenReport", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Diachi", nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblAppDonvi.prototype, "diachi", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "Dienthoai", nullable: true, length: 30 }),
    __metadata("design:type", String)
], TblAppDonvi.prototype, "dienthoai", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "Email", nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblAppDonvi.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "Masothue", nullable: true, length: 30 }),
    __metadata("design:type", String)
], TblAppDonvi.prototype, "masothue", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "Sotk", nullable: true, length: 30 }),
    __metadata("design:type", String)
], TblAppDonvi.prototype, "sotk", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Nganhang", nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblAppDonvi.prototype, "nganhang", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "ChucdanhLD", nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblAppDonvi.prototype, "chucdanhLd", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "TenLD", nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblAppDonvi.prototype, "tenLd", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "ChucdanhKT", nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblAppDonvi.prototype, "chucdanhKt", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "TenKT", nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblAppDonvi.prototype, "tenKt", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "ChucdanhQT", nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblAppDonvi.prototype, "chucdanhQt", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "TenQT", nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblAppDonvi.prototype, "tenQt", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "EmailDefault", nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblAppDonvi.prototype, "emailDefault", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "PasswordDefault", nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblAppDonvi.prototype, "passwordDefault", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "SmtpServer", nullable: true, length: 150 }),
    __metadata("design:type", String)
], TblAppDonvi.prototype, "smtpServer", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "SmtpPort", nullable: true, default: () => "(25)" }),
    __metadata("design:type", Number)
], TblAppDonvi.prototype, "smtpPort", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "EnableSsl", nullable: true, default: () => "(1)" }),
    __metadata("design:type", Boolean)
], TblAppDonvi.prototype, "enableSsl", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", {
        name: "SmtpUseDefaultCredentials",
        nullable: true,
        default: () => "(0)",
    }),
    __metadata("design:type", Boolean)
], TblAppDonvi.prototype, "smtpUseDefaultCredentials", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "EmailUser", nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblAppDonvi.prototype, "emailUser", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "EmailPassword", nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblAppDonvi.prototype, "emailPassword", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "MaTinh", nullable: true, length: 2 }),
    __metadata("design:type", String)
], TblAppDonvi.prototype, "maTinh", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "MaHuyen", nullable: true, length: 5 }),
    __metadata("design:type", String)
], TblAppDonvi.prototype, "maHuyen", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "MaXa", nullable: true, length: 8 }),
    __metadata("design:type", String)
], TblAppDonvi.prototype, "maXa", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Thonbuon", nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblAppDonvi.prototype, "thonbuon", void 0);
__decorate([
    (0, typeorm_1.Column)("image", { name: "logos", nullable: true }),
    __metadata("design:type", Buffer)
], TblAppDonvi.prototype, "logos", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "Status", default: () => "(0)" }),
    __metadata("design:type", Boolean)
], TblAppDonvi.prototype, "status", void 0);
TblAppDonvi = __decorate([
    (0, typeorm_1.Index)("PK_tblAppDonvi", ["madonvi"], { unique: true }),
    (0, typeorm_1.Entity)("tblAppDonvi", { schema: "dbo" })
], TblAppDonvi);
exports.TblAppDonvi = TblAppDonvi;
//# sourceMappingURL=TblAppDonvi.entity.js.map