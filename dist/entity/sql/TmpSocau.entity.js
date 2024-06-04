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
exports.TmpSocau = void 0;
const typeorm_1 = require("typeorm");
let TmpSocau = class TmpSocau {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "Id" }),
    __metadata("design:type", Number)
], TmpSocau.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "DisplayOrder", nullable: true }),
    __metadata("design:type", Number)
], TmpSocau.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "GroupId" }),
    __metadata("design:type", Number)
], TmpSocau.prototype, "groupId", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "thutu", nullable: true, length: 10 }),
    __metadata("design:type", String)
], TmpSocau.prototype, "thutu", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "Address", nullable: true, length: 10 }),
    __metadata("design:type", String)
], TmpSocau.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "Matk", nullable: true, length: 20 }),
    __metadata("design:type", String)
], TmpSocau.prototype, "matk", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Chitieu", length: 255 }),
    __metadata("design:type", String)
], TmpSocau.prototype, "chitieu", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "Header" }),
    __metadata("design:type", Boolean)
], TmpSocau.prototype, "header", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "Status" }),
    __metadata("design:type", Boolean)
], TmpSocau.prototype, "status", void 0);
TmpSocau = __decorate([
    (0, typeorm_1.Index)("PK_tmpSocau", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("tmpSocau", { schema: "dbo" })
], TmpSocau);
exports.TmpSocau = TmpSocau;
//# sourceMappingURL=TmpSocau.entity.js.map