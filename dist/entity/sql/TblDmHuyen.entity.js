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
exports.TblDmHuyen = void 0;
const typeorm_1 = require("typeorm");
const TblDmTinh_entity_1 = require("./TblDmTinh.entity");
const TblDmXa_entity_1 = require("./TblDmXa.entity");
let TblDmHuyen = class TblDmHuyen {
};
__decorate([
    (0, typeorm_1.Column)("varchar", { primary: true, name: "mahuyen", length: 5 }),
    __metadata("design:type", String)
], TblDmHuyen.prototype, "mahuyen", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "tenhuyen", nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblDmHuyen.prototype, "tenhuyen", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "sott", nullable: true }),
    __metadata("design:type", Number)
], TblDmHuyen.prototype, "sott", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "show", nullable: true }),
    __metadata("design:type", Boolean)
], TblDmHuyen.prototype, "show", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblDmTinh_entity_1.TblDmTinh, (tblDmTinh) => tblDmTinh.tblDmHuyens, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "matinh", referencedColumnName: "matinh" }]),
    __metadata("design:type", TblDmTinh_entity_1.TblDmTinh)
], TblDmHuyen.prototype, "matinh", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TblDmXa_entity_1.TblDmXa, (tblDmXa) => tblDmXa.mahuyen),
    __metadata("design:type", Array)
], TblDmHuyen.prototype, "tblDmXas", void 0);
TblDmHuyen = __decorate([
    (0, typeorm_1.Index)("PK_dmhuyen", ["mahuyen"], { unique: true }),
    (0, typeorm_1.Entity)("tblDmHuyen", { schema: "dbo" })
], TblDmHuyen);
exports.TblDmHuyen = TblDmHuyen;
//# sourceMappingURL=TblDmHuyen.entity.js.map