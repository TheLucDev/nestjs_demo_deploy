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
exports.ThKhongthamgiaHdkt = void 0;
const typeorm_1 = require("typeorm");
let ThKhongthamgiaHdkt = class ThKhongthamgiaHdkt {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "bigint", name: "Id" }),
    __metadata("design:type", String)
], ThKhongthamgiaHdkt.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "IdDoanhNghiep" }),
    __metadata("design:type", String)
], ThKhongthamgiaHdkt.prototype, "idDoanhNghiep", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "Madonvi", length: 15 }),
    __metadata("design:type", String)
], ThKhongthamgiaHdkt.prototype, "madonvi", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Thangbc" }),
    __metadata("design:type", Number)
], ThKhongthamgiaHdkt.prototype, "thangbc", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Nambc" }),
    __metadata("design:type", Number)
], ThKhongthamgiaHdkt.prototype, "nambc", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Tongso", nullable: true }),
    __metadata("design:type", Number)
], ThKhongthamgiaHdkt.prototype, "tongso", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Nam", nullable: true }),
    __metadata("design:type", Number)
], ThKhongthamgiaHdkt.prototype, "nam", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Nu", nullable: true }),
    __metadata("design:type", Number)
], ThKhongthamgiaHdkt.prototype, "nu", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "ThanhThi", nullable: true }),
    __metadata("design:type", Number)
], ThKhongthamgiaHdkt.prototype, "thanhThi", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "NongThon", nullable: true }),
    __metadata("design:type", Number)
], ThKhongthamgiaHdkt.prototype, "nongThon", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Duoidotuoi", nullable: true }),
    __metadata("design:type", Number)
], ThKhongthamgiaHdkt.prototype, "duoidotuoi", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Trongdotuoi", nullable: true }),
    __metadata("design:type", Number)
], ThKhongthamgiaHdkt.prototype, "trongdotuoi", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Trendotuoi", nullable: true }),
    __metadata("design:type", Number)
], ThKhongthamgiaHdkt.prototype, "trendotuoi", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "Status", nullable: true }),
    __metadata("design:type", Boolean)
], ThKhongthamgiaHdkt.prototype, "status", void 0);
ThKhongthamgiaHdkt = __decorate([
    (0, typeorm_1.Index)("PK_thKhongthamgiaHDKT", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("thKhongthamgiaHDKT", { schema: "dbo" })
], ThKhongthamgiaHdkt);
exports.ThKhongthamgiaHdkt = ThKhongthamgiaHdkt;
//# sourceMappingURL=ThKhongthamgiaHdkt.entity.js.map