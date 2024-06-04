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
exports.SysDinhdanh = void 0;
const typeorm_1 = require("typeorm");
let SysDinhdanh = class SysDinhdanh {
};
__decorate([
    (0, typeorm_1.Column)("int", { name: "Sott", nullable: true }),
    __metadata("design:type", Number)
], SysDinhdanh.prototype, "sott", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { primary: true, name: "Madd", length: 20 }),
    __metadata("design:type", String)
], SysDinhdanh.prototype, "madd", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Tencoquan", nullable: true, length: 255 }),
    __metadata("design:type", String)
], SysDinhdanh.prototype, "tencoquan", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Diachi", nullable: true, length: 255 }),
    __metadata("design:type", String)
], SysDinhdanh.prototype, "diachi", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Email", nullable: true, length: 255 }),
    __metadata("design:type", String)
], SysDinhdanh.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Dienthoai", nullable: true, length: 50 }),
    __metadata("design:type", String)
], SysDinhdanh.prototype, "dienthoai", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "Website", nullable: true, length: 255 }),
    __metadata("design:type", String)
], SysDinhdanh.prototype, "website", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "MaQCVN102", nullable: true, length: 20 }),
    __metadata("design:type", String)
], SysDinhdanh.prototype, "maQcvn102", void 0);
SysDinhdanh = __decorate([
    (0, typeorm_1.Index)("PK_sysDinhdanh", ["madd"], { unique: true }),
    (0, typeorm_1.Entity)("sysDinhdanh", { schema: "dbo" })
], SysDinhdanh);
exports.SysDinhdanh = SysDinhdanh;
//# sourceMappingURL=SysDinhdanh.entity.js.map