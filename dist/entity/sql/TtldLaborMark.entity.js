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
exports.TtldLaborMark = void 0;
const typeorm_1 = require("typeorm");
let TtldLaborMark = class TtldLaborMark {
};
__decorate([
    (0, typeorm_1.Column)("varchar", { primary: true, name: "KeyId", length: 6 }),
    __metadata("design:type", String)
], TtldLaborMark.prototype, "keyId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "DisplayOrder" }),
    __metadata("design:type", Number)
], TtldLaborMark.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Quy" }),
    __metadata("design:type", Number)
], TtldLaborMark.prototype, "quy", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Year" }),
    __metadata("design:type", Number)
], TtldLaborMark.prototype, "year", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "Block", nullable: true, length: 10 }),
    __metadata("design:type", String)
], TtldLaborMark.prototype, "block", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Description", nullable: true, length: 255 }),
    __metadata("design:type", String)
], TtldLaborMark.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Dvt", nullable: true, length: 30 }),
    __metadata("design:type", String)
], TtldLaborMark.prototype, "dvt", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "Tongso",
        nullable: true,
        precision: 18,
        scale: 2,
    }),
    __metadata("design:type", Number)
], TtldLaborMark.prototype, "tongso", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "Nam", nullable: true, precision: 18, scale: 2 }),
    __metadata("design:type", Number)
], TtldLaborMark.prototype, "nam", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "Nu", nullable: true, precision: 18, scale: 2 }),
    __metadata("design:type", Number)
], TtldLaborMark.prototype, "nu", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "Status", nullable: true }),
    __metadata("design:type", Boolean)
], TtldLaborMark.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Ghichu", nullable: true, length: 255 }),
    __metadata("design:type", String)
], TtldLaborMark.prototype, "ghichu", void 0);
TtldLaborMark = __decorate([
    (0, typeorm_1.Index)("PK_LaborMark", ["keyId", "displayOrder"], { unique: true }),
    (0, typeorm_1.Entity)("ttldLaborMark", { schema: "dbo" })
], TtldLaborMark);
exports.TtldLaborMark = TtldLaborMark;
//# sourceMappingURL=TtldLaborMark.entity.js.map