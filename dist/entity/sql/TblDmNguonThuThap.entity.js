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
exports.TblDmNguonThuThap = void 0;
const typeorm_1 = require("typeorm");
let TblDmNguonThuThap = class TblDmNguonThuThap {
};
__decorate([
    (0, typeorm_1.Column)("varchar", { primary: true, name: "IdNguonThuThap", length: 3 }),
    __metadata("design:type", String)
], TblDmNguonThuThap.prototype, "idNguonThuThap", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "TenNguonThuThap", length: 100 }),
    __metadata("design:type", String)
], TblDmNguonThuThap.prototype, "tenNguonThuThap", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "DisplayOrder", default: () => "(0)" }),
    __metadata("design:type", Number)
], TblDmNguonThuThap.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "CreatedDate", default: () => "getdate()" }),
    __metadata("design:type", Date)
], TblDmNguonThuThap.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "CreatedBy",
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblDmNguonThuThap.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "ModifiredDate", default: () => "getdate()" }),
    __metadata("design:type", Date)
], TblDmNguonThuThap.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "ModifiredBy",
        length: 50,
        default: () => "N'system'",
    }),
    __metadata("design:type", String)
], TblDmNguonThuThap.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "Status", default: () => "(1)" }),
    __metadata("design:type", Boolean)
], TblDmNguonThuThap.prototype, "status", void 0);
TblDmNguonThuThap = __decorate([
    (0, typeorm_1.Index)("PK_tblDmNguonThuThap", ["idNguonThuThap"], { unique: true }),
    (0, typeorm_1.Entity)("tblDmNguonThuThap", { schema: "dbo" })
], TblDmNguonThuThap);
exports.TblDmNguonThuThap = TblDmNguonThuThap;
//# sourceMappingURL=TblDmNguonThuThap.entity.js.map