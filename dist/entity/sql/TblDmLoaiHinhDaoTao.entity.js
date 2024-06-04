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
exports.TblDmLoaiHinhDaoTao = void 0;
const typeorm_1 = require("typeorm");
let TblDmLoaiHinhDaoTao = class TblDmLoaiHinhDaoTao {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "loaihinh_id" }),
    __metadata("design:type", Number)
], TblDmLoaiHinhDaoTao.prototype, "loaihinhId", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "loaihinh_ten", nullable: true, length: 150 }),
    __metadata("design:type", String)
], TblDmLoaiHinhDaoTao.prototype, "loaihinhTen", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "DisplayOrder", default: () => "(1)" }),
    __metadata("design:type", Number)
], TblDmLoaiHinhDaoTao.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "CreatedDate", default: () => "getdate()" }),
    __metadata("design:type", Date)
], TblDmLoaiHinhDaoTao.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "CreatedBy",
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblDmLoaiHinhDaoTao.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "ModifiredDate", default: () => "getdate()" }),
    __metadata("design:type", Date)
], TblDmLoaiHinhDaoTao.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "ModifiredBy",
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblDmLoaiHinhDaoTao.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "Status", default: () => "(1)" }),
    __metadata("design:type", Boolean)
], TblDmLoaiHinhDaoTao.prototype, "status", void 0);
TblDmLoaiHinhDaoTao = __decorate([
    (0, typeorm_1.Index)("PK_tb_dm_loaihinhdaotao", ["loaihinhId"], { unique: true }),
    (0, typeorm_1.Entity)("tblDmLoaiHinhDaoTao", { schema: "dbo" })
], TblDmLoaiHinhDaoTao);
exports.TblDmLoaiHinhDaoTao = TblDmLoaiHinhDaoTao;
//# sourceMappingURL=TblDmLoaiHinhDaoTao.entity.js.map