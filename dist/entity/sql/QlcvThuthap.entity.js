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
exports.QlcvThuthap = void 0;
const typeorm_1 = require("typeorm");
let QlcvThuthap = class QlcvThuthap {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "bigint", name: "Idcv" }),
    __metadata("design:type", String)
], QlcvThuthap.prototype, "idcv", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "Idphancong", nullable: true }),
    __metadata("design:type", String)
], QlcvThuthap.prototype, "idphancong", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "IdNhanvien", length: 15 }),
    __metadata("design:type", String)
], QlcvThuthap.prototype, "idNhanvien", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "Ngay" }),
    __metadata("design:type", Date)
], QlcvThuthap.prototype, "ngay", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "IdNguonThuThap", nullable: true, length: 3 }),
    __metadata("design:type", String)
], QlcvThuthap.prototype, "idNguonThuThap", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "IdDoanhNghiep" }),
    __metadata("design:type", String)
], QlcvThuthap.prototype, "idDoanhNghiep", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "IdNhomNganh", nullable: true, length: 4 }),
    __metadata("design:type", String)
], QlcvThuthap.prototype, "idNhomNganh", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Nganh_id", nullable: true }),
    __metadata("design:type", Number)
], QlcvThuthap.prototype, "nganhId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Idchucdanh", nullable: true }),
    __metadata("design:type", Number)
], QlcvThuthap.prototype, "idchucdanh", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Hocvan_id", nullable: true }),
    __metadata("design:type", Number)
], QlcvThuthap.prototype, "hocvanId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Soluong", nullable: true }),
    __metadata("design:type", Number)
], QlcvThuthap.prototype, "soluong", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Sonha", nullable: true, length: 50 }),
    __metadata("design:type", String)
], QlcvThuthap.prototype, "sonha", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "Matinh", nullable: true, length: 2 }),
    __metadata("design:type", String)
], QlcvThuthap.prototype, "matinh", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "Mahuyen", nullable: true, length: 5 }),
    __metadata("design:type", String)
], QlcvThuthap.prototype, "mahuyen", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "Maxa", nullable: true, length: 8 }),
    __metadata("design:type", String)
], QlcvThuthap.prototype, "maxa", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "Mathon", nullable: true, length: 12 }),
    __metadata("design:type", String)
], QlcvThuthap.prototype, "mathon", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "DisplayOrder" }),
    __metadata("design:type", Number)
], QlcvThuthap.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "Status" }),
    __metadata("design:type", Boolean)
], QlcvThuthap.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "CreatedDate", default: () => "getdate()" }),
    __metadata("design:type", Date)
], QlcvThuthap.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "CreatedBy",
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], QlcvThuthap.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "ModifiredDate", default: () => "getdate()" }),
    __metadata("design:type", Date)
], QlcvThuthap.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "ModifiredBy",
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], QlcvThuthap.prototype, "modifiredBy", void 0);
QlcvThuthap = __decorate([
    (0, typeorm_1.Index)("PK_QLCV_Thuthap", ["idcv"], { unique: true }),
    (0, typeorm_1.Entity)("QLCV_Thuthap", { schema: "dbo" })
], QlcvThuthap);
exports.QlcvThuthap = QlcvThuthap;
//# sourceMappingURL=QlcvThuthap.entity.js.map