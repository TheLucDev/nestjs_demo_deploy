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
exports.ThTren15TtheotheoHocvan = void 0;
const typeorm_1 = require("typeorm");
let ThTren15TtheotheoHocvan = class ThTren15TtheotheoHocvan {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "bigint", name: "Id" }),
    __metadata("design:type", String)
], ThTren15TtheotheoHocvan.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "IdDoanhNghiep" }),
    __metadata("design:type", String)
], ThTren15TtheotheoHocvan.prototype, "idDoanhNghiep", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "Madonvi", length: 15 }),
    __metadata("design:type", String)
], ThTren15TtheotheoHocvan.prototype, "madonvi", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Thangbc" }),
    __metadata("design:type", Number)
], ThTren15TtheotheoHocvan.prototype, "thangbc", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Nambc" }),
    __metadata("design:type", Number)
], ThTren15TtheotheoHocvan.prototype, "nambc", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Tongso", nullable: true }),
    __metadata("design:type", Number)
], ThTren15TtheotheoHocvan.prototype, "tongso", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Nam", nullable: true }),
    __metadata("design:type", Number)
], ThTren15TtheotheoHocvan.prototype, "nam", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Nu", nullable: true }),
    __metadata("design:type", Number)
], ThTren15TtheotheoHocvan.prototype, "nu", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "ThanhThi", nullable: true }),
    __metadata("design:type", Number)
], ThTren15TtheotheoHocvan.prototype, "thanhThi", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "NongThon", nullable: true }),
    __metadata("design:type", Number)
], ThTren15TtheotheoHocvan.prototype, "nongThon", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Tongso_Trongdotuoi", nullable: true }),
    __metadata("design:type", Number)
], ThTren15TtheotheoHocvan.prototype, "tongsoTrongdotuoi", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Nam_Trongdotuoi", nullable: true }),
    __metadata("design:type", Number)
], ThTren15TtheotheoHocvan.prototype, "namTrongdotuoi", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Nu_Trongdotuoi", nullable: true }),
    __metadata("design:type", Number)
], ThTren15TtheotheoHocvan.prototype, "nuTrongdotuoi", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Nam_Trendotuoi", nullable: true }),
    __metadata("design:type", Number)
], ThTren15TtheotheoHocvan.prototype, "namTrendotuoi", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Nu_Trendotuoi", nullable: true }),
    __metadata("design:type", Number)
], ThTren15TtheotheoHocvan.prototype, "nuTrendotuoi", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Duoitieuhoc", nullable: true }),
    __metadata("design:type", Number)
], ThTren15TtheotheoHocvan.prototype, "duoitieuhoc", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Hettieuhoc", nullable: true }),
    __metadata("design:type", Number)
], ThTren15TtheotheoHocvan.prototype, "hettieuhoc", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "HetTHCS", nullable: true }),
    __metadata("design:type", Number)
], ThTren15TtheotheoHocvan.prototype, "hetThcs", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "HetTHPT", nullable: true }),
    __metadata("design:type", Number)
], ThTren15TtheotheoHocvan.prototype, "hetThpt", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "Status", nullable: true }),
    __metadata("design:type", Boolean)
], ThTren15TtheotheoHocvan.prototype, "status", void 0);
ThTren15TtheotheoHocvan = __decorate([
    (0, typeorm_1.Index)("PK_thTren15TtheotheoHocvan", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("thTren15TtheotheoHocvan", { schema: "dbo" })
], ThTren15TtheotheoHocvan);
exports.ThTren15TtheotheoHocvan = ThTren15TtheotheoHocvan;
//# sourceMappingURL=ThTren15TtheotheoHocvan.entity.js.map