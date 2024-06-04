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
exports.TblM28TonghopBd = void 0;
const typeorm_1 = require("typeorm");
let TblM28TonghopBd = class TblM28TonghopBd {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "bigint", name: "Id" }),
    __metadata("design:type", String)
], TblM28TonghopBd.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "IdDoanhNghiep" }),
    __metadata("design:type", String)
], TblM28TonghopBd.prototype, "idDoanhNghiep", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "Madonvi", length: 15 }),
    __metadata("design:type", String)
], TblM28TonghopBd.prototype, "madonvi", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Thangbc" }),
    __metadata("design:type", Number)
], TblM28TonghopBd.prototype, "thangbc", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Nambc" }),
    __metadata("design:type", Number)
], TblM28TonghopBd.prototype, "nambc", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "DisplayOrder", default: () => "(0)" }),
    __metadata("design:type", Number)
], TblM28TonghopBd.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Tongso", nullable: true }),
    __metadata("design:type", Number)
], TblM28TonghopBd.prototype, "tongso", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "TrongdoNu", nullable: true }),
    __metadata("design:type", Number)
], TblM28TonghopBd.prototype, "trongdoNu", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "CMKTKhongbang", nullable: true }),
    __metadata("design:type", Number)
], TblM28TonghopBd.prototype, "cmktKhongbang", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Daotaoduoi3thang", nullable: true }),
    __metadata("design:type", Number)
], TblM28TonghopBd.prototype, "daotaoduoi3thang", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Socapnghe", nullable: true }),
    __metadata("design:type", Number)
], TblM28TonghopBd.prototype, "socapnghe", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Trungcap", nullable: true }),
    __metadata("design:type", Number)
], TblM28TonghopBd.prototype, "trungcap", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "caodang", nullable: true }),
    __metadata("design:type", Number)
], TblM28TonghopBd.prototype, "caodang", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "DaihocSDH", nullable: true }),
    __metadata("design:type", Number)
], TblM28TonghopBd.prototype, "daihocSdh", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "HdKXD", nullable: true }),
    __metadata("design:type", Number)
], TblM28TonghopBd.prototype, "hdKxd", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "HdHD3T", nullable: true }),
    __metadata("design:type", Number)
], TblM28TonghopBd.prototype, "hdHd3T", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "HdH12T", nullable: true }),
    __metadata("design:type", Number)
], TblM28TonghopBd.prototype, "hdH12T", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "HdHT12", nullable: true }),
    __metadata("design:type", Number)
], TblM28TonghopBd.prototype, "hdHt12", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "TongsoBHTN", nullable: true }),
    __metadata("design:type", Number)
], TblM28TonghopBd.prototype, "tongsoBhtn", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "Status", nullable: true }),
    __metadata("design:type", Boolean)
], TblM28TonghopBd.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Ghichu", nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblM28TonghopBd.prototype, "ghichu", void 0);
TblM28TonghopBd = __decorate([
    (0, typeorm_1.Index)("PK_tblM28TonghopBD", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("tblM28TonghopBD", { schema: "dbo" })
], TblM28TonghopBd);
exports.TblM28TonghopBd = TblM28TonghopBd;
//# sourceMappingURL=TblM28TonghopBd.entity.js.map