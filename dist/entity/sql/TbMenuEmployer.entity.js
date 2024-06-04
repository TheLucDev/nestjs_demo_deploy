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
var TbMenuEmployer_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TbMenuEmployer = void 0;
const typeorm_1 = require("typeorm");
let TbMenuEmployer = TbMenuEmployer_1 = class TbMenuEmployer {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "IdOrder" }),
    __metadata("design:type", Number)
], TbMenuEmployer.prototype, "idOrder", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { primary: true, name: "IdMenu", length: 50 }),
    __metadata("design:type", String)
], TbMenuEmployer.prototype, "idMenu", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "GroupLevel", default: () => "(0)" }),
    __metadata("design:type", Number)
], TbMenuEmployer.prototype, "groupLevel", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Description", length: 120 }),
    __metadata("design:type", String)
], TbMenuEmployer.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "IdController", nullable: true, length: 50 }),
    __metadata("design:type", String)
], TbMenuEmployer.prototype, "idController", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "IdAction", nullable: true, length: 50 }),
    __metadata("design:type", String)
], TbMenuEmployer.prototype, "idAction", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "ControllerActive", nullable: true, length: 500 }),
    __metadata("design:type", String)
], TbMenuEmployer.prototype, "controllerActive", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "href" }),
    __metadata("design:type", Boolean)
], TbMenuEmployer.prototype, "href", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "DisplayOrder", default: () => "(0)" }),
    __metadata("design:type", Number)
], TbMenuEmployer.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "CreatedDate", default: () => "getdate()" }),
    __metadata("design:type", Date)
], TbMenuEmployer.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "CreatedBy",
        length: 50,
        default: () => "'SYSTEM'",
    }),
    __metadata("design:type", String)
], TbMenuEmployer.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "ModifiredDate", default: () => "getdate()" }),
    __metadata("design:type", Date)
], TbMenuEmployer.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "ModifiredBy",
        length: 50,
        default: () => "'SYSTEM'",
    }),
    __metadata("design:type", String)
], TbMenuEmployer.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "Status", default: () => "(0)" }),
    __metadata("design:type", Boolean)
], TbMenuEmployer.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "ShowOnline", default: () => "(1)" }),
    __metadata("design:type", Boolean)
], TbMenuEmployer.prototype, "showOnline", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TbMenuEmployer_1, (tbMenuEmployer) => tbMenuEmployer.tbMenuEmployers),
    (0, typeorm_1.JoinColumn)([{ name: "ParentId", referencedColumnName: "idMenu" }]),
    __metadata("design:type", TbMenuEmployer)
], TbMenuEmployer.prototype, "parent", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TbMenuEmployer_1, (tbMenuEmployer) => tbMenuEmployer.parent),
    __metadata("design:type", Array)
], TbMenuEmployer.prototype, "tbMenuEmployers", void 0);
TbMenuEmployer = TbMenuEmployer_1 = __decorate([
    (0, typeorm_1.Index)("PK_tbMenuEmployer", ["idMenu"], { unique: true }),
    (0, typeorm_1.Entity)("tbMenuEmployer", { schema: "dbo" })
], TbMenuEmployer);
exports.TbMenuEmployer = TbMenuEmployer;
//# sourceMappingURL=TbMenuEmployer.entity.js.map