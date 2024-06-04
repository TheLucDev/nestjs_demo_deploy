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
exports.ThThatnghieptheoTdcmkt = void 0;
const typeorm_1 = require("typeorm");
let ThThatnghieptheoTdcmkt = class ThThatnghieptheoTdcmkt {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "bigint", name: "Id" }),
    __metadata("design:type", String)
], ThThatnghieptheoTdcmkt.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "IdDoanhNghiep" }),
    __metadata("design:type", String)
], ThThatnghieptheoTdcmkt.prototype, "idDoanhNghiep", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "Madonvi", length: 15 }),
    __metadata("design:type", String)
], ThThatnghieptheoTdcmkt.prototype, "madonvi", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Thangbc" }),
    __metadata("design:type", Number)
], ThThatnghieptheoTdcmkt.prototype, "thangbc", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Nambc" }),
    __metadata("design:type", Number)
], ThThatnghieptheoTdcmkt.prototype, "nambc", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Tongso", nullable: true }),
    __metadata("design:type", Number)
], ThThatnghieptheoTdcmkt.prototype, "tongso", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Chuaquadaotao", nullable: true }),
    __metadata("design:type", Number)
], ThThatnghieptheoTdcmkt.prototype, "chuaquadaotao", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "CMKTKhongbang", nullable: true }),
    __metadata("design:type", Number)
], ThThatnghieptheoTdcmkt.prototype, "cmktKhongbang", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Daotaoduoi3thang", nullable: true }),
    __metadata("design:type", Number)
], ThThatnghieptheoTdcmkt.prototype, "daotaoduoi3thang", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Socapnghe", nullable: true }),
    __metadata("design:type", Number)
], ThThatnghieptheoTdcmkt.prototype, "socapnghe", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Bangnghedaihan", nullable: true }),
    __metadata("design:type", Number)
], ThThatnghieptheoTdcmkt.prototype, "bangnghedaihan", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Trungcapnghe", nullable: true }),
    __metadata("design:type", Number)
], ThThatnghieptheoTdcmkt.prototype, "trungcapnghe", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Trunghocchuyennghiep", nullable: true }),
    __metadata("design:type", Number)
], ThThatnghieptheoTdcmkt.prototype, "trunghocchuyennghiep", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Caodangnghe", nullable: true }),
    __metadata("design:type", Number)
], ThThatnghieptheoTdcmkt.prototype, "caodangnghe", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Caodangnghechuyennghiep", nullable: true }),
    __metadata("design:type", Number)
], ThThatnghieptheoTdcmkt.prototype, "caodangnghechuyennghiep", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Daihoc", nullable: true }),
    __metadata("design:type", Number)
], ThThatnghieptheoTdcmkt.prototype, "daihoc", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Thacsy", nullable: true }),
    __metadata("design:type", Number)
], ThThatnghieptheoTdcmkt.prototype, "thacsy", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Tiensy", nullable: true }),
    __metadata("design:type", Number)
], ThThatnghieptheoTdcmkt.prototype, "tiensy", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Khac", nullable: true }),
    __metadata("design:type", Number)
], ThThatnghieptheoTdcmkt.prototype, "khac", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "Status", nullable: true }),
    __metadata("design:type", Boolean)
], ThThatnghieptheoTdcmkt.prototype, "status", void 0);
ThThatnghieptheoTdcmkt = __decorate([
    (0, typeorm_1.Index)("PK_thThatnghieptheoTDCMKT", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("thThatnghieptheoTDCMKT", { schema: "dbo" })
], ThThatnghieptheoTdcmkt);
exports.ThThatnghieptheoTdcmkt = ThThatnghieptheoTdcmkt;
//# sourceMappingURL=ThThatnghieptheoTdcmkt.entity.js.map