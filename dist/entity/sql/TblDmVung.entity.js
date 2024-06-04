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
exports.TblDmVung = void 0;
const typeorm_1 = require("typeorm");
let TblDmVung = class TblDmVung {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "Id" }),
    __metadata("design:type", Number)
], TblDmVung.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "Code", nullable: true, length: 2 }),
    __metadata("design:type", String)
], TblDmVung.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Ten", nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblDmVung.prototype, "ten", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "TinhTP", nullable: true, length: 500 }),
    __metadata("design:type", String)
], TblDmVung.prototype, "tinhTp", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "DisplayOrder" }),
    __metadata("design:type", Number)
], TblDmVung.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "CreatedDate", default: () => "getdate()" }),
    __metadata("design:type", Date)
], TblDmVung.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "CreatedBy",
        length: 50,
        default: () => "'System'",
    }),
    __metadata("design:type", String)
], TblDmVung.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "ModifiredDate", default: () => "getdate()" }),
    __metadata("design:type", Date)
], TblDmVung.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "ModifiredBy",
        length: 50,
        default: () => "'System'",
    }),
    __metadata("design:type", String)
], TblDmVung.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "Status", default: () => "(0)" }),
    __metadata("design:type", Boolean)
], TblDmVung.prototype, "status", void 0);
TblDmVung = __decorate([
    (0, typeorm_1.Index)("PK_tblDmVung", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("tblDmVung", { schema: "dbo" })
], TblDmVung);
exports.TblDmVung = TblDmVung;
//# sourceMappingURL=TblDmVung.entity.js.map