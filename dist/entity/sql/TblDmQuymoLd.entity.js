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
exports.TblDmQuymoLd = void 0;
const typeorm_1 = require("typeorm");
let TblDmQuymoLd = class TblDmQuymoLd {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "IdQuymo" }),
    __metadata("design:type", Number)
], TblDmQuymoLd.prototype, "idQuymo", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "TenQuymo", length: 50 }),
    __metadata("design:type", String)
], TblDmQuymoLd.prototype, "tenQuymo", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "DisplayOrder", default: () => "(0)" }),
    __metadata("design:type", Number)
], TblDmQuymoLd.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "CreatedDate", default: () => "getdate()" }),
    __metadata("design:type", Date)
], TblDmQuymoLd.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "CreatedBy",
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblDmQuymoLd.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "ModifiredDate", default: () => "getdate()" }),
    __metadata("design:type", Date)
], TblDmQuymoLd.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "ModifiredBy",
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblDmQuymoLd.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "Status", default: () => "(1)" }),
    __metadata("design:type", Boolean)
], TblDmQuymoLd.prototype, "status", void 0);
TblDmQuymoLd = __decorate([
    (0, typeorm_1.Index)("PK_tblDmQuymoLD", ["idQuymo"], { unique: true }),
    (0, typeorm_1.Entity)("tblDmQuymoLD", { schema: "dbo" })
], TblDmQuymoLd);
exports.TblDmQuymoLd = TblDmQuymoLd;
//# sourceMappingURL=TblDmQuymoLd.entity.js.map