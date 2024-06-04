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
var TbMenuWorker_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TbMenuWorker = void 0;
const typeorm_1 = require("typeorm");
let TbMenuWorker = TbMenuWorker_1 = class TbMenuWorker {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "IdOrder" }),
    __metadata("design:type", Number)
], TbMenuWorker.prototype, "idOrder", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { primary: true, name: "IdMenu", length: 50 }),
    __metadata("design:type", String)
], TbMenuWorker.prototype, "idMenu", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "GroupLevel", default: () => "(0)" }),
    __metadata("design:type", Number)
], TbMenuWorker.prototype, "groupLevel", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Description", length: 120 }),
    __metadata("design:type", String)
], TbMenuWorker.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "IdController", nullable: true, length: 50 }),
    __metadata("design:type", String)
], TbMenuWorker.prototype, "idController", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "IdAction", nullable: true, length: 50 }),
    __metadata("design:type", String)
], TbMenuWorker.prototype, "idAction", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "ControllerActive", nullable: true, length: 500 }),
    __metadata("design:type", String)
], TbMenuWorker.prototype, "controllerActive", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "href" }),
    __metadata("design:type", Boolean)
], TbMenuWorker.prototype, "href", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "DisplayOrder", default: () => "(0)" }),
    __metadata("design:type", Number)
], TbMenuWorker.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "CreatedDate", default: () => "getdate()" }),
    __metadata("design:type", Date)
], TbMenuWorker.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "CreatedBy",
        length: 50,
        default: () => "'SYSTEM'",
    }),
    __metadata("design:type", String)
], TbMenuWorker.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "ModifiredDate", default: () => "getdate()" }),
    __metadata("design:type", Date)
], TbMenuWorker.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "ModifiredBy",
        length: 50,
        default: () => "'SYSTEM'",
    }),
    __metadata("design:type", String)
], TbMenuWorker.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "Status", default: () => "(0)" }),
    __metadata("design:type", Boolean)
], TbMenuWorker.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "ShowOnline", default: () => "(1)" }),
    __metadata("design:type", Boolean)
], TbMenuWorker.prototype, "showOnline", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TbMenuWorker_1, (tbMenuWorker) => tbMenuWorker.tbMenuWorkers),
    (0, typeorm_1.JoinColumn)([{ name: "ParentId", referencedColumnName: "idMenu" }]),
    __metadata("design:type", TbMenuWorker)
], TbMenuWorker.prototype, "parent", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TbMenuWorker_1, (tbMenuWorker) => tbMenuWorker.parent),
    __metadata("design:type", Array)
], TbMenuWorker.prototype, "tbMenuWorkers", void 0);
TbMenuWorker = TbMenuWorker_1 = __decorate([
    (0, typeorm_1.Index)("PK_tbMenuWorker", ["idMenu"], { unique: true }),
    (0, typeorm_1.Entity)("tbMenuWorker", { schema: "dbo" })
], TbMenuWorker);
exports.TbMenuWorker = TbMenuWorker;
//# sourceMappingURL=TbMenuWorker.entity.js.map