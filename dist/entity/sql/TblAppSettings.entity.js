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
exports.TblAppSettings = void 0;
const typeorm_1 = require("typeorm");
let TblAppSettings = class TblAppSettings {
};
__decorate([
    (0, typeorm_1.Column)("bit", { primary: true, name: "IdInformation" }),
    __metadata("design:type", Boolean)
], TblAppSettings.prototype, "idInformation", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "Madonvi", nullable: true, length: 15 }),
    __metadata("design:type", String)
], TblAppSettings.prototype, "madonvi", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "NoiNopHoSo", nullable: true, length: 4000 }),
    __metadata("design:type", String)
], TblAppSettings.prototype, "noiNopHoSo", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", {
        name: "HoSoTuyenDungBaoGom",
        nullable: true,
        length: 4000,
    }),
    __metadata("design:type", String)
], TblAppSettings.prototype, "hoSoTuyenDungBaoGom", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "GhiChuTuyenDung", nullable: true, length: 4000 }),
    __metadata("design:type", String)
], TblAppSettings.prototype, "ghiChuTuyenDung", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", {
        name: "QuyenLoiTuyenDung",
        nullable: true,
        length: 4000,
    }),
    __metadata("design:type", String)
], TblAppSettings.prototype, "quyenLoiTuyenDung", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "EmailDefault", nullable: true, length: 150 }),
    __metadata("design:type", String)
], TblAppSettings.prototype, "emailDefault", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "PasswordDefault", nullable: true, length: 150 }),
    __metadata("design:type", String)
], TblAppSettings.prototype, "passwordDefault", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "SmtpServer", nullable: true, length: 150 }),
    __metadata("design:type", String)
], TblAppSettings.prototype, "smtpServer", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "SmtpPort", nullable: true, default: () => "(25)" }),
    __metadata("design:type", Number)
], TblAppSettings.prototype, "smtpPort", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "EnableSsl", nullable: true, default: () => "(1)" }),
    __metadata("design:type", Boolean)
], TblAppSettings.prototype, "enableSsl", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", {
        name: "SmtpUseDefaultCredentials",
        nullable: true,
        default: () => "(0)",
    }),
    __metadata("design:type", Boolean)
], TblAppSettings.prototype, "smtpUseDefaultCredentials", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "EmailUser", nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblAppSettings.prototype, "emailUser", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "EmailPassword", nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblAppSettings.prototype, "emailPassword", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "MaTinh", nullable: true, length: 2 }),
    __metadata("design:type", String)
], TblAppSettings.prototype, "maTinh", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "MaHuyen", nullable: true, length: 5 }),
    __metadata("design:type", String)
], TblAppSettings.prototype, "maHuyen", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "MaXa", nullable: true, length: 8 }),
    __metadata("design:type", String)
], TblAppSettings.prototype, "maXa", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "Tongdanso",
        nullable: true,
        precision: 18,
        scale: 0,
    }),
    __metadata("design:type", Number)
], TblAppSettings.prototype, "tongdanso", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "TyleNam",
        nullable: true,
        precision: 18,
        scale: 2,
    }),
    __metadata("design:type", Number)
], TblAppSettings.prototype, "tyleNam", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "DansoNam",
        nullable: true,
        precision: 18,
        scale: 0,
    }),
    __metadata("design:type", Number)
], TblAppSettings.prototype, "dansoNam", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "TyleNu",
        nullable: true,
        precision: 18,
        scale: 2,
    }),
    __metadata("design:type", Number)
], TblAppSettings.prototype, "tyleNu", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "DansoNu",
        nullable: true,
        precision: 18,
        scale: 0,
    }),
    __metadata("design:type", Number)
], TblAppSettings.prototype, "dansoNu", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "TyleTT",
        nullable: true,
        precision: 18,
        scale: 2,
    }),
    __metadata("design:type", Number)
], TblAppSettings.prototype, "tyleTt", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "Thanhthi",
        nullable: true,
        precision: 18,
        scale: 0,
    }),
    __metadata("design:type", Number)
], TblAppSettings.prototype, "thanhthi", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "TyleNT",
        nullable: true,
        precision: 18,
        scale: 2,
    }),
    __metadata("design:type", Number)
], TblAppSettings.prototype, "tyleNt", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "Nongthon",
        nullable: true,
        precision: 18,
        scale: 0,
    }),
    __metadata("design:type", Number)
], TblAppSettings.prototype, "nongthon", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "TyleLD",
        nullable: true,
        precision: 18,
        scale: 2,
    }),
    __metadata("design:type", Number)
], TblAppSettings.prototype, "tyleLd", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "DansoLD",
        nullable: true,
        precision: 18,
        scale: 0,
    }),
    __metadata("design:type", Number)
], TblAppSettings.prototype, "dansoLd", void 0);
TblAppSettings = __decorate([
    (0, typeorm_1.Index)("PK_tblAppSettings", ["idInformation"], { unique: true }),
    (0, typeorm_1.Entity)("tblAppSettings", { schema: "dbo" })
], TblAppSettings);
exports.TblAppSettings = TblAppSettings;
//# sourceMappingURL=TblAppSettings.entity.js.map