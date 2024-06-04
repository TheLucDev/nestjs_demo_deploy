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
exports.TblChapNoi = void 0;
const typeorm_1 = require("typeorm");
let TblChapNoi = class TblChapNoi {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "Id" }),
    __metadata("design:type", Number)
], TblChapNoi.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "IdKieuChapNoi",
        length: 3,
        default: () => "'PCN'",
    }),
    __metadata("design:type", String)
], TblChapNoi.prototype, "idKieuChapNoi", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "IdUngVien", nullable: true }),
    __metadata("design:type", String)
], TblChapNoi.prototype, "idUngVien", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "IdDoanhNghiep", nullable: true }),
    __metadata("design:type", String)
], TblChapNoi.prototype, "idDoanhNghiep", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "IdTuyenDung", nullable: true }),
    __metadata("design:type", String)
], TblChapNoi.prototype, "idTuyenDung", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "NgayMuonHS", default: () => "getdate()" }),
    __metadata("design:type", Date)
], TblChapNoi.prototype, "ngayMuonHs", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", {
        name: "NgayTraHS",
        nullable: true,
        default: () => "getdate()",
    }),
    __metadata("design:type", Date)
], TblChapNoi.prototype, "ngayTraHs", void 0);
__decorate([
    (0, typeorm_1.Column)("ntext", { name: "GhiChu", nullable: true }),
    __metadata("design:type", String)
], TblChapNoi.prototype, "ghiChu", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "IdKetQua" }),
    __metadata("design:type", Number)
], TblChapNoi.prototype, "idKetQua", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "DisplayOrder" }),
    __metadata("design:type", Number)
], TblChapNoi.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "CreatedDate", default: () => "getdate()" }),
    __metadata("design:type", Date)
], TblChapNoi.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "CreatedBy",
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblChapNoi.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "ModifiredDate", default: () => "getdate()" }),
    __metadata("design:type", Date)
], TblChapNoi.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "ModifiredBy",
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblChapNoi.prototype, "modifiredBy", void 0);
TblChapNoi = __decorate([
    (0, typeorm_1.Index)("PK_tblChapNoiNhaTuyenDungUngVien", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("tblChapNoi", { schema: "dbo" })
], TblChapNoi);
exports.TblChapNoi = TblChapNoi;
//# sourceMappingURL=TblChapNoi.entity.js.map