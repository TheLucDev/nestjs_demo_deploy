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
exports.TmpBantinDetail = void 0;
const typeorm_1 = require("typeorm");
let TmpBantinDetail = class TmpBantinDetail {
};
__decorate([
    (0, typeorm_1.Column)("varchar", { primary: true, name: "Somau", length: 5 }),
    __metadata("design:type", String)
], TmpBantinDetail.prototype, "somau", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "DisplayOrder" }),
    __metadata("design:type", Number)
], TmpBantinDetail.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "Nhom", nullable: true, length: 4 }),
    __metadata("design:type", String)
], TmpBantinDetail.prototype, "nhom", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "Matk", nullable: true, length: 10 }),
    __metadata("design:type", String)
], TmpBantinDetail.prototype, "matk", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Noidung", nullable: true, length: 255 }),
    __metadata("design:type", String)
], TmpBantinDetail.prototype, "noidung", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "Solieu",
        nullable: true,
        precision: 18,
        scale: 2,
    }),
    __metadata("design:type", Number)
], TmpBantinDetail.prototype, "solieu", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "Status", nullable: true }),
    __metadata("design:type", Boolean)
], TmpBantinDetail.prototype, "status", void 0);
TmpBantinDetail = __decorate([
    (0, typeorm_1.Index)("PK_tmpBantinDetail", ["somau", "displayOrder"], { unique: true }),
    (0, typeorm_1.Entity)("tmpBantinDetail", { schema: "dbo" })
], TmpBantinDetail);
exports.TmpBantinDetail = TmpBantinDetail;
//# sourceMappingURL=TmpBantinDetail.entity.js.map