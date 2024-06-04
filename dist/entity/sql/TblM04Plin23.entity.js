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
exports.TblM04Plin23 = void 0;
const typeorm_1 = require("typeorm");
let TblM04Plin23 = class TblM04Plin23 {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "bigint", name: "Id" }),
    __metadata("design:type", String)
], TblM04Plin23.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "Ngaylap", default: () => "getdate()" }),
    __metadata("design:type", Date)
], TblM04Plin23.prototype, "ngaylap", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "IdUV" }),
    __metadata("design:type", String)
], TblM04Plin23.prototype, "idUv", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "IdDN" }),
    __metadata("design:type", String)
], TblM04Plin23.prototype, "idDn", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "IdChucdanh" }),
    __metadata("design:type", Number)
], TblM04Plin23.prototype, "idChucdanh", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "IdNganhC4" }),
    __metadata("design:type", Number)
], TblM04Plin23.prototype, "idNganhC4", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "Mucluongchinh",
        nullable: true,
        precision: 18,
        scale: 0,
    }),
    __metadata("design:type", Number)
], TblM04Plin23.prototype, "mucluongchinh", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "MucluongBHTN",
        nullable: true,
        precision: 18,
        scale: 0,
    }),
    __metadata("design:type", Number)
], TblM04Plin23.prototype, "mucluongBhtn", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "IdLoaiDHLD", nullable: true, length: 4 }),
    __metadata("design:type", String)
], TblM04Plin23.prototype, "idLoaiDhld", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "NgayHDLD", default: () => "getdate()" }),
    __metadata("design:type", Date)
], TblM04Plin23.prototype, "ngayHdld", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "NgayHieuluc", default: () => "getdate()" }),
    __metadata("design:type", Date)
], TblM04Plin23.prototype, "ngayHieuluc", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "Ngayketthuc", default: () => "getdate()" }),
    __metadata("design:type", Date)
], TblM04Plin23.prototype, "ngayketthuc", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Ghichu", nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblM04Plin23.prototype, "ghichu", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "Status", default: () => "(1)" }),
    __metadata("design:type", Boolean)
], TblM04Plin23.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "DisplayOrder", default: () => "(0)" }),
    __metadata("design:type", Number)
], TblM04Plin23.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "CreatedDate", default: () => "getdate()" }),
    __metadata("design:type", Date)
], TblM04Plin23.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "CreatedBy", nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblM04Plin23.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "ModifiredDate", default: () => "getdate()" }),
    __metadata("design:type", Date)
], TblM04Plin23.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "ModifiredBy", nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblM04Plin23.prototype, "modifiredBy", void 0);
TblM04Plin23 = __decorate([
    (0, typeorm_1.Index)("PK_tblM04PLIN23", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("tblM04PLIN23", { schema: "dbo" })
], TblM04Plin23);
exports.TblM04Plin23 = TblM04Plin23;
//# sourceMappingURL=TblM04Plin23.entity.js.map