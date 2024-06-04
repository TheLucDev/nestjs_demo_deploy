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
var TbMenuApplication_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TbMenuApplication = void 0;
const typeorm_1 = require("typeorm");
const TbUserGroupApplication_entity_1 = require("./TbUserGroupApplication.entity");
const TbUserPermission_entity_1 = require("./TbUserPermission.entity");
let TbMenuApplication = TbMenuApplication_1 = class TbMenuApplication {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'IdOrder' }),
    __metadata("design:type", Number)
], TbMenuApplication.prototype, "idOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'IdMenu', length: 50 }),
    __metadata("design:type", String)
], TbMenuApplication.prototype, "idMenu", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'GroupLevel', default: () => '(0)' }),
    __metadata("design:type", Number)
], TbMenuApplication.prototype, "groupLevel", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Description', length: 120 }),
    __metadata("design:type", String)
], TbMenuApplication.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IdController', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TbMenuApplication.prototype, "idController", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IdAction', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TbMenuApplication.prototype, "idAction", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'ControllerActive', nullable: true, length: 500 }),
    __metadata("design:type", String)
], TbMenuApplication.prototype, "controllerActive", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'href' }),
    __metadata("design:type", Boolean)
], TbMenuApplication.prototype, "href", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder', default: () => '(0)' }),
    __metadata("design:type", Number)
], TbMenuApplication.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'CreatedDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TbMenuApplication.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'CreatedBy',
        length: 50,
        default: () => "'SYSTEM'",
    }),
    __metadata("design:type", String)
], TbMenuApplication.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ModifiredDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TbMenuApplication.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'ModifiredBy',
        length: 50,
        default: () => "'SYSTEM'",
    }),
    __metadata("design:type", String)
], TbMenuApplication.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TbMenuApplication.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'ShowOnline', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TbMenuApplication.prototype, "showOnline", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TbMenuApplication_1, (tbMenuApplication) => tbMenuApplication.tbMenuApplications),
    (0, typeorm_1.JoinColumn)([{ name: 'ParentId', referencedColumnName: 'idMenu' }]),
    __metadata("design:type", TbMenuApplication)
], TbMenuApplication.prototype, "parent", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TbMenuApplication_1, (tbMenuApplication) => tbMenuApplication.parent),
    __metadata("design:type", Array)
], TbMenuApplication.prototype, "tbMenuApplications", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TbUserGroupApplication_entity_1.TbUserGroupApplication, (tbUserGroupApplication) => tbUserGroupApplication.idMenu),
    __metadata("design:type", Array)
], TbMenuApplication.prototype, "tbUserGroupApplications", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TbUserPermission_entity_1.TbUserPermission, (tbUserPermission) => tbUserPermission.idMenu2),
    __metadata("design:type", Array)
], TbMenuApplication.prototype, "tbUserPermissions", void 0);
TbMenuApplication = TbMenuApplication_1 = __decorate([
    (0, typeorm_1.Index)('PK_tbMenuApplication', ['idMenu'], { unique: true }),
    (0, typeorm_1.Entity)('tbMenuApplication', { schema: 'dbo' })
], TbMenuApplication);
exports.TbMenuApplication = TbMenuApplication;
//# sourceMappingURL=TbMenuApplication.entity.js.map