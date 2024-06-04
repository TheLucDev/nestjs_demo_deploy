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
exports.TmpChartYear = void 0;
const typeorm_1 = require("typeorm");
let TmpChartYear = class TmpChartYear {
};
__decorate([
    (0, typeorm_1.Column)("varchar", { primary: true, name: "Phanloai", length: 50 }),
    __metadata("design:type", String)
], TmpChartYear.prototype, "phanloai", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { primary: true, name: "NamQuy", length: 10 }),
    __metadata("design:type", String)
], TmpChartYear.prototype, "namQuy", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "CNXD", precision: 18, scale: 2 }),
    __metadata("design:type", Number)
], TmpChartYear.prototype, "cnxd", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "DV", nullable: true, precision: 18, scale: 2 }),
    __metadata("design:type", Number)
], TmpChartYear.prototype, "dv", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "NLTS", nullable: true, precision: 18, scale: 2 }),
    __metadata("design:type", Number)
], TmpChartYear.prototype, "nlts", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "KHAC", nullable: true, precision: 18, scale: 2 }),
    __metadata("design:type", Number)
], TmpChartYear.prototype, "khac", void 0);
TmpChartYear = __decorate([
    (0, typeorm_1.Index)("PK_tmpChartYear", ["phanloai", "namQuy"], { unique: true }),
    (0, typeorm_1.Entity)("tmpChartYear", { schema: "dbo" })
], TmpChartYear);
exports.TmpChartYear = TmpChartYear;
//# sourceMappingURL=TmpChartYear.entity.js.map