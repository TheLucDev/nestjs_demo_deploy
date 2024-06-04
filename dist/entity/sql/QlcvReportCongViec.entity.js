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
exports.QlcvReportCongViec = void 0;
const typeorm_1 = require("typeorm");
let QlcvReportCongViec = class QlcvReportCongViec {
};
__decorate([
    (0, typeorm_1.Column)("bigint", { primary: true, name: "Idqlcv" }),
    __metadata("design:type", String)
], QlcvReportCongViec.prototype, "idqlcv", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "IdParent", nullable: true }),
    __metadata("design:type", String)
], QlcvReportCongViec.prototype, "idParent", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "tagname", nullable: true, length: 20 }),
    __metadata("design:type", String)
], QlcvReportCongViec.prototype, "tagname", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "Ngay", nullable: true }),
    __metadata("design:type", Date)
], QlcvReportCongViec.prototype, "ngay", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "TenCongViec", nullable: true, length: 255 }),
    __metadata("design:type", String)
], QlcvReportCongViec.prototype, "tenCongViec", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "DonviChuTri", nullable: true, length: 255 }),
    __metadata("design:type", String)
], QlcvReportCongViec.prototype, "donviChuTri", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "NguoiChuTri", nullable: true, length: 50 }),
    __metadata("design:type", String)
], QlcvReportCongViec.prototype, "nguoiChuTri", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Nguoithuchien", nullable: true, length: 50 }),
    __metadata("design:type", String)
], QlcvReportCongViec.prototype, "nguoithuchien", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "DonviPhoihop", nullable: true, length: 255 }),
    __metadata("design:type", String)
], QlcvReportCongViec.prototype, "donviPhoihop", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "NguoiPhoiHop", nullable: true, length: 50 }),
    __metadata("design:type", String)
], QlcvReportCongViec.prototype, "nguoiPhoiHop", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "NgayBatDau", nullable: true }),
    __metadata("design:type", Date)
], QlcvReportCongViec.prototype, "ngayBatDau", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "NgayKetThuc", nullable: true }),
    __metadata("design:type", Date)
], QlcvReportCongViec.prototype, "ngayKetThuc", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "StartDate", nullable: true }),
    __metadata("design:type", Date)
], QlcvReportCongViec.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "EndDate", nullable: true }),
    __metadata("design:type", Date)
], QlcvReportCongViec.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "Status" }),
    __metadata("design:type", Boolean)
], QlcvReportCongViec.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "DuyetLeader", nullable: true }),
    __metadata("design:type", Boolean)
], QlcvReportCongViec.prototype, "duyetLeader", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Songaythuchien" }),
    __metadata("design:type", Number)
], QlcvReportCongViec.prototype, "songaythuchien", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Songaydalam" }),
    __metadata("design:type", Number)
], QlcvReportCongViec.prototype, "songaydalam", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "Tyle", nullable: true, precision: 6, scale: 2 }),
    __metadata("design:type", Number)
], QlcvReportCongViec.prototype, "tyle", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Songayquahan" }),
    __metadata("design:type", Number)
], QlcvReportCongViec.prototype, "songayquahan", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "DisplayOrder" }),
    __metadata("design:type", Number)
], QlcvReportCongViec.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Trangthai", nullable: true, length: 50 }),
    __metadata("design:type", String)
], QlcvReportCongViec.prototype, "trangthai", void 0);
QlcvReportCongViec = __decorate([
    (0, typeorm_1.Index)("PK_QLCVReportCongViec", ["idqlcv"], { unique: true }),
    (0, typeorm_1.Entity)("QLCVReportCongViec", { schema: "dbo" })
], QlcvReportCongViec);
exports.QlcvReportCongViec = QlcvReportCongViec;
//# sourceMappingURL=QlcvReportCongViec.entity.js.map