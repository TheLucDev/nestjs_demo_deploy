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
exports.TblM28Tonghop = void 0;
const typeorm_1 = require("typeorm");
let TblM28Tonghop = class TblM28Tonghop {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "bigint", name: "Id" }),
    __metadata("design:type", String)
], TblM28Tonghop.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "IdDN" }),
    __metadata("design:type", String)
], TblM28Tonghop.prototype, "idDn", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Thang" }),
    __metadata("design:type", Number)
], TblM28Tonghop.prototype, "thang", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Nam" }),
    __metadata("design:type", Number)
], TblM28Tonghop.prototype, "nam", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "DisplayOrder" }),
    __metadata("design:type", Number)
], TblM28Tonghop.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Tongso", nullable: true }),
    __metadata("design:type", Number)
], TblM28Tonghop.prototype, "tongso", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "TongsoNu", nullable: true }),
    __metadata("design:type", Number)
], TblM28Tonghop.prototype, "tongsoNu", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Chuaquadaotao", nullable: true }),
    __metadata("design:type", Number)
], TblM28Tonghop.prototype, "chuaquadaotao", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "CMKTKhongbang", nullable: true }),
    __metadata("design:type", Number)
], TblM28Tonghop.prototype, "cmktKhongbang", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Daotaoduoi3thang", nullable: true }),
    __metadata("design:type", Number)
], TblM28Tonghop.prototype, "daotaoduoi3thang", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Socapnghe", nullable: true }),
    __metadata("design:type", Number)
], TblM28Tonghop.prototype, "socapnghe", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Trungcap", nullable: true }),
    __metadata("design:type", Number)
], TblM28Tonghop.prototype, "trungcap", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Caodang", nullable: true }),
    __metadata("design:type", Number)
], TblM28Tonghop.prototype, "caodang", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Daihoc", nullable: true }),
    __metadata("design:type", Number)
], TblM28Tonghop.prototype, "daihoc", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "Thacsy",
        nullable: true,
        precision: 18,
        scale: 2,
    }),
    __metadata("design:type", Number)
], TblM28Tonghop.prototype, "thacsy", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "Tiensy",
        nullable: true,
        precision: 18,
        scale: 2,
    }),
    __metadata("design:type", Number)
], TblM28Tonghop.prototype, "tiensy", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "Khac", nullable: true, precision: 18, scale: 2 }),
    __metadata("design:type", Number)
], TblM28Tonghop.prototype, "khac", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "Status", nullable: true }),
    __metadata("design:type", Boolean)
], TblM28Tonghop.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "NamThang", nullable: true, length: 60 }),
    __metadata("design:type", String)
], TblM28Tonghop.prototype, "namThang", void 0);
TblM28Tonghop = __decorate([
    (0, typeorm_1.Index)("PK_tblM28Tonghop", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("tblM28Tonghop", { schema: "dbo" })
], TblM28Tonghop);
exports.TblM28Tonghop = TblM28Tonghop;
//# sourceMappingURL=TblM28Tonghop.entity.js.map