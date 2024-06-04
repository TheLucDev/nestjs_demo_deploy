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
var TbUserGroup_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TbUserGroup = void 0;
const typeorm_1 = require("typeorm");
const TbUser_entity_1 = require("./TbUser.entity");
const TbUserGroupApplication_entity_1 = require("./TbUserGroupApplication.entity");
const TbUserGroupArticle_entity_1 = require("./TbUserGroupArticle.entity");
const TbUserGroupRights_entity_1 = require("./TbUserGroupRights.entity");
let TbUserGroup = TbUserGroup_1 = class TbUserGroup {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'IdUserGroup', length: 20 }),
    __metadata("design:type", String)
], TbUserGroup.prototype, "idUserGroup", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Name', nullable: true, length: 100 }),
    __metadata("design:type", String)
], TbUserGroup.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Description', nullable: true, length: 250 }),
    __metadata("design:type", String)
], TbUserGroup.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder', default: () => '(0)' }),
    __metadata("design:type", Number)
], TbUserGroup.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'GroupLevel', default: () => '(0)' }),
    __metadata("design:type", Number)
], TbUserGroup.prototype, "groupLevel", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'CreatedDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TbUserGroup.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'CreatedBy',
        length: 50,
        default: () => "'SYSTEM'",
    }),
    __metadata("design:type", String)
], TbUserGroup.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ModifiredDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TbUserGroup.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'ModifiredBy',
        length: 50,
        default: () => "'SYSTEM'",
    }),
    __metadata("design:type", String)
], TbUserGroup.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TbUserGroup.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TbUser_entity_1.TbUser, (tbUser) => tbUser.idUserGroup),
    __metadata("design:type", Array)
], TbUserGroup.prototype, "tbUsers", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TbUserGroup_1, (tbUserGroup) => tbUserGroup.tbUserGroups),
    (0, typeorm_1.JoinColumn)([{ name: 'ParentId', referencedColumnName: 'idUserGroup' }]),
    __metadata("design:type", TbUserGroup)
], TbUserGroup.prototype, "parent", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TbUserGroup_1, (tbUserGroup) => tbUserGroup.parent),
    __metadata("design:type", Array)
], TbUserGroup.prototype, "tbUserGroups", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TbUserGroupApplication_entity_1.TbUserGroupApplication, (tbUserGroupApplication) => tbUserGroupApplication.idUserGroup),
    __metadata("design:type", Array)
], TbUserGroup.prototype, "tbUserGroupApplications", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TbUserGroupArticle_entity_1.TbUserGroupArticle, (tbUserGroupArticle) => tbUserGroupArticle.idUserGroup),
    __metadata("design:type", Array)
], TbUserGroup.prototype, "tbUserGroupArticles", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TbUserGroupRights_entity_1.TbUserGroupRights, (tbUserGroupRights) => tbUserGroupRights.idUserGroup),
    __metadata("design:type", Array)
], TbUserGroup.prototype, "tbUserGroupRights", void 0);
TbUserGroup = TbUserGroup_1 = __decorate([
    (0, typeorm_1.Index)('PK_tbl_UserGroup', ['idUserGroup'], { unique: true }),
    (0, typeorm_1.Entity)('tbUserGroup', { schema: 'dbo' })
], TbUserGroup);
exports.TbUserGroup = TbUserGroup;
//# sourceMappingURL=TbUserGroup.entity.js.map