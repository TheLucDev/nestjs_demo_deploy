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
exports.TblMau02Pli = void 0;
const typeorm_1 = require("typeorm");
let TblMau02Pli = class TblMau02Pli {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "bigint", name: "Idphieu" }),
    __metadata("design:type", String)
], TblMau02Pli.prototype, "idphieu", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "Ngaylap", default: () => "getdate()" }),
    __metadata("design:type", Date)
], TblMau02Pli.prototype, "ngaylap", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "Maso", length: 20 }),
    __metadata("design:type", String)
], TblMau02Pli.prototype, "maso", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Noiden", nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblMau02Pli.prototype, "noiden", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Soluong", default: () => "(0)" }),
    __metadata("design:type", Number)
], TblMau02Pli.prototype, "soluong", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Daidien", nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblMau02Pli.prototype, "daidien", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "DiachiLH", nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblMau02Pli.prototype, "diachiLh", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Dienthoai", nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblMau02Pli.prototype, "dienthoai", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Email", nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblMau02Pli.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "TenLienkhac", nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblMau02Pli.prototype, "tenLienkhac", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkTuvanCS", default: () => "(0)" }),
    __metadata("design:type", Boolean)
], TblMau02Pli.prototype, "chkTuvanCs", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkTuvanVL", default: () => "(0)" }),
    __metadata("design:type", Boolean)
], TblMau02Pli.prototype, "chkTuvanVl", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkTuvanDT", default: () => "(0)" }),
    __metadata("design:type", Boolean)
], TblMau02Pli.prototype, "chkTuvanDt", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "chkTuvankhac", default: () => "(0)" }),
    __metadata("design:type", Boolean)
], TblMau02Pli.prototype, "chkTuvankhac", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "DKyKhac", nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblMau02Pli.prototype, "dKyKhac", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "ThoigianDK", nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblMau02Pli.prototype, "thoigianDk", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "UserName", length: 50 }),
    __metadata("design:type", String)
], TblMau02Pli.prototype, "userName", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "DisplayOrder", default: () => "(0)" }),
    __metadata("design:type", Number)
], TblMau02Pli.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "CreatedDate", default: () => "getdate()" }),
    __metadata("design:type", Date)
], TblMau02Pli.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "CreatedBy", length: 50 }),
    __metadata("design:type", String)
], TblMau02Pli.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "ModifiredDate", default: () => "getdate()" }),
    __metadata("design:type", Date)
], TblMau02Pli.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "ModifiredBy", length: 50 }),
    __metadata("design:type", String)
], TblMau02Pli.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "Status", default: () => "(1)" }),
    __metadata("design:type", Boolean)
], TblMau02Pli.prototype, "status", void 0);
TblMau02Pli = __decorate([
    (0, typeorm_1.Index)("PK_tblMau02PLI", ["idphieu"], { unique: true }),
    (0, typeorm_1.Entity)("tblMau02PLI", { schema: "dbo" })
], TblMau02Pli);
exports.TblMau02Pli = TblMau02Pli;
//# sourceMappingURL=TblMau02Pli.entity.js.map