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
exports.TblDmCapnghe = void 0;
const typeorm_1 = require("typeorm");
let TblDmCapnghe = class TblDmCapnghe {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "Id" }),
    __metadata("design:type", Number)
], TblDmCapnghe.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "GroupId", nullable: true }),
    __metadata("design:type", Number)
], TblDmCapnghe.prototype, "groupId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "level1" }),
    __metadata("design:type", Number)
], TblDmCapnghe.prototype, "level1", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "level2", nullable: true }),
    __metadata("design:type", Number)
], TblDmCapnghe.prototype, "level2", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "level3", nullable: true }),
    __metadata("design:type", Number)
], TblDmCapnghe.prototype, "level3", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "level4", nullable: true }),
    __metadata("design:type", Number)
], TblDmCapnghe.prototype, "level4", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "level5", nullable: true }),
    __metadata("design:type", Number)
], TblDmCapnghe.prototype, "level5", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "ten", length: 255 }),
    __metadata("design:type", String)
], TblDmCapnghe.prototype, "ten", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "DisplayOrder", default: () => "(0)" }),
    __metadata("design:type", Number)
], TblDmCapnghe.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "CreatedDate", default: () => "getdate()" }),
    __metadata("design:type", Date)
], TblDmCapnghe.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "CreatedBy", nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblDmCapnghe.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "ModifiredDate", default: () => "getdate()" }),
    __metadata("design:type", Date)
], TblDmCapnghe.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "ModifiredBy", nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblDmCapnghe.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "Status", default: () => "(1)" }),
    __metadata("design:type", Boolean)
], TblDmCapnghe.prototype, "status", void 0);
TblDmCapnghe = __decorate([
    (0, typeorm_1.Index)("PK_tblcapnghe", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("tblDmCapnghe", { schema: "dbo" })
], TblDmCapnghe);
exports.TblDmCapnghe = TblDmCapnghe;
//# sourceMappingURL=TblDmCapnghe.entity.js.map