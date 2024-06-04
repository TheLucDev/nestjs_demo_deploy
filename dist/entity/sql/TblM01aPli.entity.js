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
exports.TblM01aPli = void 0;
const typeorm_1 = require("typeorm");
let TblM01aPli = class TblM01aPli {
};
__decorate([
    (0, typeorm_1.Column)("bigint", { primary: true, name: "Idphieu" }),
    __metadata("design:type", String)
], TblM01aPli.prototype, "idphieu", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "Ngaylap", default: () => "getdate()" }),
    __metadata("design:type", Date)
], TblM01aPli.prototype, "ngaylap", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "Maphieu", length: 20 }),
    __metadata("design:type", String)
], TblM01aPli.prototype, "maphieu", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "VieclamMM", nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblM01aPli.prototype, "vieclamMm", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "IdLHDN", nullable: true, length: 3 }),
    __metadata("design:type", String)
], TblM01aPli.prototype, "idLhdn", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "TenCV", length: 255 }),
    __metadata("design:type", String)
], TblM01aPli.prototype, "tenCv", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "MotaCV" }),
    __metadata("design:type", String)
], TblM01aPli.prototype, "motaCv", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "NganhId", nullable: true }),
    __metadata("design:type", Number)
], TblM01aPli.prototype, "nganhId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "level1", nullable: true }),
    __metadata("design:type", Number)
], TblM01aPli.prototype, "level1", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "level2", nullable: true }),
    __metadata("design:type", Number)
], TblM01aPli.prototype, "level2", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "level3", nullable: true }),
    __metadata("design:type", Number)
], TblM01aPli.prototype, "level3", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "level4", nullable: true }),
    __metadata("design:type", Number)
], TblM01aPli.prototype, "level4", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "IdChucvu", nullable: true }),
    __metadata("design:type", Number)
], TblM01aPli.prototype, "idChucvu", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Chucvukhac", length: 255 }),
    __metadata("design:type", String)
], TblM01aPli.prototype, "chucvukhac", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "IdKinhnghiem", nullable: true, length: 4 }),
    __metadata("design:type", String)
], TblM01aPli.prototype, "idKinhnghiem", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "NoiLVTinh1", nullable: true, length: 2 }),
    __metadata("design:type", String)
], TblM01aPli.prototype, "noiLvTinh1", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "NoiLVKCN1", nullable: true }),
    __metadata("design:type", Number)
], TblM01aPli.prototype, "noiLvkcn1", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "NoiLVTinh2", nullable: true, length: 2 }),
    __metadata("design:type", String)
], TblM01aPli.prototype, "noiLvTinh2", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "NoiLVKCN2", nullable: true }),
    __metadata("design:type", Number)
], TblM01aPli.prototype, "noiLvkcn2", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "IdLoaiDHLD", nullable: true, length: 4 }),
    __metadata("design:type", String)
], TblM01aPli.prototype, "idLoaiDhld", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "IdCalamviec", nullable: true }),
    __metadata("design:type", Number)
], TblM01aPli.prototype, "idCalamviec", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "IdHinhthuc", nullable: true, length: 2 }),
    __metadata("design:type", String)
], TblM01aPli.prototype, "idHinhthuc", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "IdMucdich", nullable: true, length: 2 }),
    __metadata("design:type", String)
], TblM01aPli.prototype, "idMucdich", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "IdMucluong", nullable: true }),
    __metadata("design:type", Number)
], TblM01aPli.prototype, "idMucluong", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkPL01", nullable: true }),
    __metadata("design:type", Boolean)
], TblM01aPli.prototype, "chkPl01", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkPL02", nullable: true }),
    __metadata("design:type", Boolean)
], TblM01aPli.prototype, "chkPl02", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkPL03", nullable: true }),
    __metadata("design:type", Boolean)
], TblM01aPli.prototype, "chkPl03", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkPL04", nullable: true }),
    __metadata("design:type", Boolean)
], TblM01aPli.prototype, "chkPl04", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "TienPhucloi",
        nullable: true,
        precision: 18,
        scale: 0,
    }),
    __metadata("design:type", Number)
], TblM01aPli.prototype, "tienPhucloi", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkPL05", nullable: true }),
    __metadata("design:type", Boolean)
], TblM01aPli.prototype, "chkPl05", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkPL06", nullable: true }),
    __metadata("design:type", Boolean)
], TblM01aPli.prototype, "chkPl06", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkPL07", nullable: true }),
    __metadata("design:type", Boolean)
], TblM01aPli.prototype, "chkPl07", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkPL08", nullable: true }),
    __metadata("design:type", Boolean)
], TblM01aPli.prototype, "chkPl08", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkPL09", nullable: true }),
    __metadata("design:type", Boolean)
], TblM01aPli.prototype, "chkPl09", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkPL10", nullable: true }),
    __metadata("design:type", Boolean)
], TblM01aPli.prototype, "chkPl10", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkPL11", nullable: true }),
    __metadata("design:type", Boolean)
], TblM01aPli.prototype, "chkPl11", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkPL12", nullable: true }),
    __metadata("design:type", Boolean)
], TblM01aPli.prototype, "chkPl12", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkPL13", nullable: true }),
    __metadata("design:type", Boolean)
], TblM01aPli.prototype, "chkPl13", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkPL14", nullable: true }),
    __metadata("design:type", Boolean)
], TblM01aPli.prototype, "chkPl14", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkPL15", nullable: true }),
    __metadata("design:type", Boolean)
], TblM01aPli.prototype, "chkPl15", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkPL16", nullable: true }),
    __metadata("design:type", Boolean)
], TblM01aPli.prototype, "chkPl16", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkPL17", nullable: true }),
    __metadata("design:type", Boolean)
], TblM01aPli.prototype, "chkPl17", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Phucloikhac", nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblM01aPli.prototype, "phucloikhac", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkNL1", nullable: true }),
    __metadata("design:type", Boolean)
], TblM01aPli.prototype, "chkNl1", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkNL2", nullable: true }),
    __metadata("design:type", Boolean)
], TblM01aPli.prototype, "chkNl2", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkNL3", nullable: true }),
    __metadata("design:type", Boolean)
], TblM01aPli.prototype, "chkNl3", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkTL1", nullable: true }),
    __metadata("design:type", Boolean)
], TblM01aPli.prototype, "chkTl1", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkTL2", nullable: true }),
    __metadata("design:type", Boolean)
], TblM01aPli.prototype, "chkTl2", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkTL3", nullable: true }),
    __metadata("design:type", Boolean)
], TblM01aPli.prototype, "chkTl3", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkDL1", nullable: true }),
    __metadata("design:type", Boolean)
], TblM01aPli.prototype, "chkDl1", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkDL2", nullable: true }),
    __metadata("design:type", Boolean)
], TblM01aPli.prototype, "chkDl2", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkDL3", nullable: true }),
    __metadata("design:type", Boolean)
], TblM01aPli.prototype, "chkDl3", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkNN1", nullable: true }),
    __metadata("design:type", Boolean)
], TblM01aPli.prototype, "chkNn1", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkNN2", nullable: true }),
    __metadata("design:type", Boolean)
], TblM01aPli.prototype, "chkNn2", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkNN3", nullable: true }),
    __metadata("design:type", Boolean)
], TblM01aPli.prototype, "chkNn3", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkY01", nullable: true }),
    __metadata("design:type", Boolean)
], TblM01aPli.prototype, "chkY01", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkY02", nullable: true }),
    __metadata("design:type", Boolean)
], TblM01aPli.prototype, "chkY02", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkTY1", nullable: true }),
    __metadata("design:type", Boolean)
], TblM01aPli.prototype, "chkTy1", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkTY2", nullable: true }),
    __metadata("design:type", Boolean)
], TblM01aPli.prototype, "chkTy2", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkTY3", nullable: true }),
    __metadata("design:type", Boolean)
], TblM01aPli.prototype, "chkTy3", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chk2T1", nullable: true }),
    __metadata("design:type", Boolean)
], TblM01aPli.prototype, "chk2T1", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chk2T2", nullable: true }),
    __metadata("design:type", Boolean)
], TblM01aPli.prototype, "chk2T2", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chk2T3", nullable: true }),
    __metadata("design:type", Boolean)
], TblM01aPli.prototype, "chk2T3", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chk2T4", nullable: true }),
    __metadata("design:type", Boolean)
], TblM01aPli.prototype, "chk2T4", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chk2T5", nullable: true }),
    __metadata("design:type", Boolean)
], TblM01aPli.prototype, "chk2T5", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "SSLV1", nullable: true }),
    __metadata("design:type", Boolean)
], TblM01aPli.prototype, "sslv1", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "SSLV2", nullable: true }),
    __metadata("design:type", Number)
], TblM01aPli.prototype, "sslv2", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "IdHinhthucTD", nullable: true, length: 2 }),
    __metadata("design:type", String)
], TblM01aPli.prototype, "idHinhthucTd", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "DisplayOrder", default: () => "(0)" }),
    __metadata("design:type", Number)
], TblM01aPli.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "CreatedDate", default: () => "getdate()" }),
    __metadata("design:type", Date)
], TblM01aPli.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "CreatedBy", nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblM01aPli.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "ModifiredDate", default: () => "getdate()" }),
    __metadata("design:type", Date)
], TblM01aPli.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "ModifiredBy", nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblM01aPli.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "Status", default: () => "(1)" }),
    __metadata("design:type", Boolean)
], TblM01aPli.prototype, "status", void 0);
TblM01aPli = __decorate([
    (0, typeorm_1.Index)("PK_tblM01aPLI", ["idphieu"], { unique: true }),
    (0, typeorm_1.Entity)("tblM01aPLI", { schema: "dbo" })
], TblM01aPli);
exports.TblM01aPli = TblM01aPli;
//# sourceMappingURL=TblM01aPli.entity.js.map