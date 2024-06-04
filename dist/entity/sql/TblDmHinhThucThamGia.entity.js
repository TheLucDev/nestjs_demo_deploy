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
exports.TblDmHinhThucThamGia = void 0;
const typeorm_1 = require("typeorm");
let TblDmHinhThucThamGia = class TblDmHinhThucThamGia {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "thamgia_id" }),
    __metadata("design:type", Number)
], TblDmHinhThucThamGia.prototype, "thamgiaId", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "muc_thamgia", length: 200 }),
    __metadata("design:type", String)
], TblDmHinhThucThamGia.prototype, "mucThamgia", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "DisplayOrder", default: () => "(1)" }),
    __metadata("design:type", Number)
], TblDmHinhThucThamGia.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "CreatedDate", default: () => "getdate()" }),
    __metadata("design:type", Date)
], TblDmHinhThucThamGia.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "CreatedBy",
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblDmHinhThucThamGia.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "ModifiredDate", default: () => "getdate()" }),
    __metadata("design:type", Date)
], TblDmHinhThucThamGia.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "ModifiredBy",
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblDmHinhThucThamGia.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "Status", default: () => "(1)" }),
    __metadata("design:type", Boolean)
], TblDmHinhThucThamGia.prototype, "status", void 0);
TblDmHinhThucThamGia = __decorate([
    (0, typeorm_1.Index)("PK_tb_dm_hinhthucthamgia", ["thamgiaId"], { unique: true }),
    (0, typeorm_1.Entity)("tblDmHinhThucThamGia", { schema: "dbo" })
], TblDmHinhThucThamGia);
exports.TblDmHinhThucThamGia = TblDmHinhThucThamGia;
//# sourceMappingURL=TblDmHinhThucThamGia.entity.js.map