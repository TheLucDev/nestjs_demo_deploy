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
exports.TbMenuAdmin = void 0;
const typeorm_1 = require("typeorm");
const TbUserGroupRights_entity_1 = require("./TbUserGroupRights.entity");
let TbMenuAdmin = class TbMenuAdmin {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'IdMenu' }),
    __metadata("design:type", Number)
], TbMenuAdmin.prototype, "idMenu", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'ParentId' }),
    __metadata("design:type", Number)
], TbMenuAdmin.prototype, "parentId", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Title', length: 250 }),
    __metadata("design:type", String)
], TbMenuAdmin.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IdController', length: 21 }),
    __metadata("design:type", String)
], TbMenuAdmin.prototype, "idController", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IdAction', nullable: true, length: 15 }),
    __metadata("design:type", String)
], TbMenuAdmin.prototype, "idAction", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'ControllerActive', nullable: true, length: 500 }),
    __metadata("design:type", String)
], TbMenuAdmin.prototype, "controllerActive", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'href', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TbMenuAdmin.prototype, "href", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder', default: () => '(0)' }),
    __metadata("design:type", Number)
], TbMenuAdmin.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'GroupLevel', default: () => '(0)' }),
    __metadata("design:type", Number)
], TbMenuAdmin.prototype, "groupLevel", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'CreatedDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TbMenuAdmin.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'CreatedBy',
        length: 50,
        default: () => "'System'",
    }),
    __metadata("design:type", String)
], TbMenuAdmin.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ModifiredDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TbMenuAdmin.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', {
        name: 'ModifiredBy',
        length: 50,
        default: () => "N'System'",
    }),
    __metadata("design:type", String)
], TbMenuAdmin.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TbMenuAdmin.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TbUserGroupRights_entity_1.TbUserGroupRights, (tbUserGroupRights) => tbUserGroupRights.idMenu),
    __metadata("design:type", Array)
], TbMenuAdmin.prototype, "tbUserGroupRights", void 0);
TbMenuAdmin = __decorate([
    (0, typeorm_1.Index)('PK_tbMenuAdmin', ['idMenu'], { unique: true }),
    (0, typeorm_1.Entity)('tbMenuAdmin', { schema: 'dbo' })
], TbMenuAdmin);
exports.TbMenuAdmin = TbMenuAdmin;
//# sourceMappingURL=TbMenuAdmin.entity.js.map