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
exports.TmpChartCungcau = void 0;
const typeorm_1 = require("typeorm");
let TmpChartCungcau = class TmpChartCungcau {
};
__decorate([
    (0, typeorm_1.Column)("varchar", { primary: true, name: "NamQuy", length: 60 }),
    __metadata("design:type", String)
], TmpChartCungcau.prototype, "namQuy", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { primary: true, name: "Matk", length: 10 }),
    __metadata("design:type", String)
], TmpChartCungcau.prototype, "matk", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Noidung", nullable: true, length: 255 }),
    __metadata("design:type", String)
], TmpChartCungcau.prototype, "noidung", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "Solieucung",
        nullable: true,
        precision: 18,
        scale: 2,
    }),
    __metadata("design:type", Number)
], TmpChartCungcau.prototype, "solieucung", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "Solieucau",
        nullable: true,
        precision: 18,
        scale: 2,
    }),
    __metadata("design:type", Number)
], TmpChartCungcau.prototype, "solieucau", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "BD", nullable: true, precision: 19, scale: 2 }),
    __metadata("design:type", Number)
], TmpChartCungcau.prototype, "bd", void 0);
TmpChartCungcau = __decorate([
    (0, typeorm_1.Index)("PK_tmpChartCungcau", ["namQuy", "matk"], { unique: true }),
    (0, typeorm_1.Entity)("tmpChartCungcau", { schema: "dbo" })
], TmpChartCungcau);
exports.TmpChartCungcau = TmpChartCungcau;
//# sourceMappingURL=TmpChartCungcau.entity.js.map