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
exports.TmpBantinHtm = void 0;
const typeorm_1 = require("typeorm");
let TmpBantinHtm = class TmpBantinHtm {
};
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "IdCode" }),
    __metadata("design:type", Number)
], TmpBantinHtm.prototype, "idCode", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "DisplayOrder" }),
    __metadata("design:type", Number)
], TmpBantinHtm.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "Itemcode", nullable: true, length: 5 }),
    __metadata("design:type", String)
], TmpBantinHtm.prototype, "itemcode", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "ItemName", nullable: true, length: 255 }),
    __metadata("design:type", String)
], TmpBantinHtm.prototype, "itemName", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Unit", nullable: true, length: 50 }),
    __metadata("design:type", String)
], TmpBantinHtm.prototype, "unit", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Truyvan", nullable: true, length: 1000 }),
    __metadata("design:type", String)
], TmpBantinHtm.prototype, "truyvan", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "Show" }),
    __metadata("design:type", Boolean)
], TmpBantinHtm.prototype, "show", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "isHeader" }),
    __metadata("design:type", Boolean)
], TmpBantinHtm.prototype, "isHeader", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "IsReplace" }),
    __metadata("design:type", Boolean)
], TmpBantinHtm.prototype, "isReplace", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "imgPath", nullable: true, length: 255 }),
    __metadata("design:type", String)
], TmpBantinHtm.prototype, "imgPath", void 0);
TmpBantinHtm = __decorate([
    (0, typeorm_1.Index)("PK_tmpBantinHTM", ["idCode"], { unique: true }),
    (0, typeorm_1.Entity)("tmpBantinHTM", { schema: "dbo" })
], TmpBantinHtm);
exports.TmpBantinHtm = TmpBantinHtm;
//# sourceMappingURL=TmpBantinHtm.entity.js.map