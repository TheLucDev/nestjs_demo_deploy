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
exports.ThTren15TtheoTdcmkt = void 0;
const typeorm_1 = require("typeorm");
let ThTren15TtheoTdcmkt = class ThTren15TtheoTdcmkt {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "bigint", name: "Id" }),
    __metadata("design:type", String)
], ThTren15TtheoTdcmkt.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "IdDoanhNghiep" }),
    __metadata("design:type", String)
], ThTren15TtheoTdcmkt.prototype, "idDoanhNghiep", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "Madonvi", length: 15 }),
    __metadata("design:type", String)
], ThTren15TtheoTdcmkt.prototype, "madonvi", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Thangbc" }),
    __metadata("design:type", Number)
], ThTren15TtheoTdcmkt.prototype, "thangbc", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Nambc" }),
    __metadata("design:type", Number)
], ThTren15TtheoTdcmkt.prototype, "nambc", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Tongso", nullable: true }),
    __metadata("design:type", Number)
], ThTren15TtheoTdcmkt.prototype, "tongso", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Chuaquadaotao", nullable: true }),
    __metadata("design:type", Number)
], ThTren15TtheoTdcmkt.prototype, "chuaquadaotao", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "CMKTKhongbang", nullable: true }),
    __metadata("design:type", Number)
], ThTren15TtheoTdcmkt.prototype, "cmktKhongbang", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Daotaoduoi3thang", nullable: true }),
    __metadata("design:type", Number)
], ThTren15TtheoTdcmkt.prototype, "daotaoduoi3thang", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Socapnghe", nullable: true }),
    __metadata("design:type", Number)
], ThTren15TtheoTdcmkt.prototype, "socapnghe", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Bangnghedaihan", nullable: true }),
    __metadata("design:type", Number)
], ThTren15TtheoTdcmkt.prototype, "bangnghedaihan", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Trungcapnghe", nullable: true }),
    __metadata("design:type", Number)
], ThTren15TtheoTdcmkt.prototype, "trungcapnghe", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Trunghocchuyennghiep", nullable: true }),
    __metadata("design:type", Number)
], ThTren15TtheoTdcmkt.prototype, "trunghocchuyennghiep", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Caodangnghe", nullable: true }),
    __metadata("design:type", Number)
], ThTren15TtheoTdcmkt.prototype, "caodangnghe", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Caodangnghechuyennghiep", nullable: true }),
    __metadata("design:type", Number)
], ThTren15TtheoTdcmkt.prototype, "caodangnghechuyennghiep", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Daihoc", nullable: true }),
    __metadata("design:type", Number)
], ThTren15TtheoTdcmkt.prototype, "daihoc", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Thacsy", nullable: true }),
    __metadata("design:type", Number)
], ThTren15TtheoTdcmkt.prototype, "thacsy", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Tiensy", nullable: true }),
    __metadata("design:type", Number)
], ThTren15TtheoTdcmkt.prototype, "tiensy", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Khac", nullable: true }),
    __metadata("design:type", Number)
], ThTren15TtheoTdcmkt.prototype, "khac", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "Status", nullable: true }),
    __metadata("design:type", Boolean)
], ThTren15TtheoTdcmkt.prototype, "status", void 0);
ThTren15TtheoTdcmkt = __decorate([
    (0, typeorm_1.Index)("PK_thTren15TtheoTDCMKT", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("thTren15TtheoTDCMKT", { schema: "dbo" })
], ThTren15TtheoTdcmkt);
exports.ThTren15TtheoTdcmkt = ThTren15TtheoTdcmkt;
//# sourceMappingURL=ThTren15TtheoTdcmkt.entity.js.map