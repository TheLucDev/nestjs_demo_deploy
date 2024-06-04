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
exports.TblDmKhuVuc = void 0;
const typeorm_1 = require("typeorm");
let TblDmKhuVuc = class TblDmKhuVuc {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "IdKhuVuc" }),
    __metadata("design:type", Number)
], TblDmKhuVuc.prototype, "idKhuVuc", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "TenKhuVuc", nullable: true, length: 250 }),
    __metadata("design:type", String)
], TblDmKhuVuc.prototype, "tenKhuVuc", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "IdKhuVucTrucThuoc", nullable: true }),
    __metadata("design:type", Number)
], TblDmKhuVuc.prototype, "idKhuVucTrucThuoc", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "DisplayOrder" }),
    __metadata("design:type", Number)
], TblDmKhuVuc.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "CreatedDate", default: () => "getdate()" }),
    __metadata("design:type", Date)
], TblDmKhuVuc.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "CreatedBy",
        length: 50,
        default: () => "'System'",
    }),
    __metadata("design:type", String)
], TblDmKhuVuc.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "ModifiredDate", default: () => "getdate()" }),
    __metadata("design:type", Date)
], TblDmKhuVuc.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "ModifiredBy",
        length: 50,
        default: () => "'System'",
    }),
    __metadata("design:type", String)
], TblDmKhuVuc.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "Status", default: () => "(0)" }),
    __metadata("design:type", Boolean)
], TblDmKhuVuc.prototype, "status", void 0);
TblDmKhuVuc = __decorate([
    (0, typeorm_1.Index)("PK_tblDmKhuVuc", ["idKhuVuc"], { unique: true }),
    (0, typeorm_1.Entity)("tblDmKhuVuc", { schema: "dbo" })
], TblDmKhuVuc);
exports.TblDmKhuVuc = TblDmKhuVuc;
//# sourceMappingURL=TblDmKhuVuc.entity.js.map