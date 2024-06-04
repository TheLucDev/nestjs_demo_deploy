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
exports.TblDmHinhThucDoanhNghiep = void 0;
const typeorm_1 = require("typeorm");
const TblDKySgd_entity_1 = require("./TblDKySgd.entity");
const TblHoSoUngVien_entity_1 = require("./TblHoSoUngVien.entity");
const TblNhaTuyenDung_entity_1 = require("./TblNhaTuyenDung.entity");
let TblDmHinhThucDoanhNghiep = class TblDmHinhThucDoanhNghiep {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "ma_hinhthuc" }),
    __metadata("design:type", Number)
], TblDmHinhThucDoanhNghiep.prototype, "maHinhthuc", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "ten_hinhthuc", length: 150 }),
    __metadata("design:type", String)
], TblDmHinhThucDoanhNghiep.prototype, "tenHinhthuc", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "DisplayOrder", default: () => "(1)" }),
    __metadata("design:type", Number)
], TblDmHinhThucDoanhNghiep.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "CreatedDate", default: () => "getdate()" }),
    __metadata("design:type", Date)
], TblDmHinhThucDoanhNghiep.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "CreatedBy",
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblDmHinhThucDoanhNghiep.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "ModifiredDate", default: () => "getdate()" }),
    __metadata("design:type", Date)
], TblDmHinhThucDoanhNghiep.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "ModifiredBy",
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblDmHinhThucDoanhNghiep.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "Status", default: () => "(1)" }),
    __metadata("design:type", Boolean)
], TblDmHinhThucDoanhNghiep.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TblDKySgd_entity_1.TblDKySgd, (tblDKySgd) => tblDKySgd.dksgddmHinhthucdoanhnghiep),
    __metadata("design:type", Array)
], TblDmHinhThucDoanhNghiep.prototype, "tblDKySgds", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TblHoSoUngVien_entity_1.TblHoSoUngVien, (tblHoSoUngVien) => tblHoSoUngVien.uvnvHinhthuccongty),
    __metadata("design:type", Array)
], TblDmHinhThucDoanhNghiep.prototype, "tblHoSoUngViens", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TblNhaTuyenDung_entity_1.TblNhaTuyenDung, (tblNhaTuyenDung) => tblNhaTuyenDung.ntdHinhthucdoanhnghiep),
    __metadata("design:type", Array)
], TblDmHinhThucDoanhNghiep.prototype, "tblNhaTuyenDungs", void 0);
TblDmHinhThucDoanhNghiep = __decorate([
    (0, typeorm_1.Index)("PK_tb_dm_hinhthucdoanhnghiep", ["maHinhthuc"], { unique: true }),
    (0, typeorm_1.Entity)("tblDmHinhThucDoanhNghiep", { schema: "dbo" })
], TblDmHinhThucDoanhNghiep);
exports.TblDmHinhThucDoanhNghiep = TblDmHinhThucDoanhNghiep;
//# sourceMappingURL=TblDmHinhThucDoanhNghiep.entity.js.map