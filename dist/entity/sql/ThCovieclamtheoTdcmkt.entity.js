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
exports.ThCovieclamtheoTdcmkt = void 0;
const typeorm_1 = require("typeorm");
let ThCovieclamtheoTdcmkt = class ThCovieclamtheoTdcmkt {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "bigint", name: "Id" }),
    __metadata("design:type", String)
], ThCovieclamtheoTdcmkt.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "IdDoanhNghiep" }),
    __metadata("design:type", String)
], ThCovieclamtheoTdcmkt.prototype, "idDoanhNghiep", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "Madonvi", length: 15 }),
    __metadata("design:type", String)
], ThCovieclamtheoTdcmkt.prototype, "madonvi", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Thangbc" }),
    __metadata("design:type", Number)
], ThCovieclamtheoTdcmkt.prototype, "thangbc", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Nambc" }),
    __metadata("design:type", Number)
], ThCovieclamtheoTdcmkt.prototype, "nambc", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Tongso", nullable: true }),
    __metadata("design:type", Number)
], ThCovieclamtheoTdcmkt.prototype, "tongso", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Chuaquadaotao", nullable: true }),
    __metadata("design:type", Number)
], ThCovieclamtheoTdcmkt.prototype, "chuaquadaotao", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "CMKTKhongbang", nullable: true }),
    __metadata("design:type", Number)
], ThCovieclamtheoTdcmkt.prototype, "cmktKhongbang", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Daotaoduoi3thang", nullable: true }),
    __metadata("design:type", Number)
], ThCovieclamtheoTdcmkt.prototype, "daotaoduoi3thang", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Socapnghe", nullable: true }),
    __metadata("design:type", Number)
], ThCovieclamtheoTdcmkt.prototype, "socapnghe", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Bangnghedaihan", nullable: true }),
    __metadata("design:type", Number)
], ThCovieclamtheoTdcmkt.prototype, "bangnghedaihan", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Trungcapnghe", nullable: true }),
    __metadata("design:type", Number)
], ThCovieclamtheoTdcmkt.prototype, "trungcapnghe", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Trunghocchuyennghiep", nullable: true }),
    __metadata("design:type", Number)
], ThCovieclamtheoTdcmkt.prototype, "trunghocchuyennghiep", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Caodangnghe", nullable: true }),
    __metadata("design:type", Number)
], ThCovieclamtheoTdcmkt.prototype, "caodangnghe", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Caodangnghechuyennghiep", nullable: true }),
    __metadata("design:type", Number)
], ThCovieclamtheoTdcmkt.prototype, "caodangnghechuyennghiep", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Daihoc", nullable: true }),
    __metadata("design:type", Number)
], ThCovieclamtheoTdcmkt.prototype, "daihoc", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Thacsy", nullable: true }),
    __metadata("design:type", Number)
], ThCovieclamtheoTdcmkt.prototype, "thacsy", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Tiensy", nullable: true }),
    __metadata("design:type", Number)
], ThCovieclamtheoTdcmkt.prototype, "tiensy", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Khac", nullable: true }),
    __metadata("design:type", Number)
], ThCovieclamtheoTdcmkt.prototype, "khac", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "Status", nullable: true }),
    __metadata("design:type", Boolean)
], ThCovieclamtheoTdcmkt.prototype, "status", void 0);
ThCovieclamtheoTdcmkt = __decorate([
    (0, typeorm_1.Index)("PK_thCovieclamtheoTDCMKT", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("thCovieclamtheoTDCMKT", { schema: "dbo" })
], ThCovieclamtheoTdcmkt);
exports.ThCovieclamtheoTdcmkt = ThCovieclamtheoTdcmkt;
//# sourceMappingURL=ThCovieclamtheoTdcmkt.entity.js.map