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
exports.TbUserGroupApplication = void 0;
const typeorm_1 = require("typeorm");
const TbUserGroup_entity_1 = require("./TbUserGroup.entity");
const TbMenuApplication_entity_1 = require("./TbMenuApplication.entity");
let TbUserGroupApplication = class TbUserGroupApplication {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'Id' }),
    __metadata("design:type", String)
], TbUserGroupApplication.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'CreatedDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TbUserGroupApplication.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'CreatedBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TbUserGroupApplication.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ModifiredDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TbUserGroupApplication.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'ModifiredBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TbUserGroupApplication.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TbUserGroupApplication.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', {
        name: 'ExecuteSelect',
        nullable: true,
        default: () => '(0)',
    }),
    __metadata("design:type", Boolean)
], TbUserGroupApplication.prototype, "executeSelect", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', {
        name: 'ExecuteInsert',
        nullable: true,
        default: () => '(0)',
    }),
    __metadata("design:type", Boolean)
], TbUserGroupApplication.prototype, "executeInsert", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', {
        name: 'ExecuteUpdate',
        nullable: true,
        default: () => '(0)',
    }),
    __metadata("design:type", Boolean)
], TbUserGroupApplication.prototype, "executeUpdate", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', {
        name: 'ExecuteDelete',
        nullable: true,
        default: () => '(0)',
    }),
    __metadata("design:type", Boolean)
], TbUserGroupApplication.prototype, "executeDelete", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'ExecuteDuyet', nullable: true, default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TbUserGroupApplication.prototype, "executeDuyet", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TbUserGroup_entity_1.TbUserGroup, (tbUserGroup) => tbUserGroup.tbUserGroupApplications, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)([{ name: 'IdUserGroup', referencedColumnName: 'idUserGroup' }]),
    __metadata("design:type", TbUserGroup_entity_1.TbUserGroup)
], TbUserGroupApplication.prototype, "idUserGroup", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TbMenuApplication_entity_1.TbMenuApplication, (tbMenuApplication) => tbMenuApplication.tbUserGroupApplications, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)([{ name: 'IdMenu', referencedColumnName: 'idMenu' }]),
    __metadata("design:type", TbMenuApplication_entity_1.TbMenuApplication)
], TbUserGroupApplication.prototype, "idMenu", void 0);
TbUserGroupApplication = __decorate([
    (0, typeorm_1.Index)('PK_tbUserGroupApplication', ['id'], { unique: true }),
    (0, typeorm_1.Entity)('tbUserGroupApplication', { schema: 'dbo' })
], TbUserGroupApplication);
exports.TbUserGroupApplication = TbUserGroupApplication;
//# sourceMappingURL=TbUserGroupApplication.entity.js.map