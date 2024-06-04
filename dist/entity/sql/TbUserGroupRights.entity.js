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
exports.TbUserGroupRights = void 0;
const typeorm_1 = require("typeorm");
const TbMenuAdmin_entity_1 = require("./TbMenuAdmin.entity");
const TbUserGroup_entity_1 = require("./TbUserGroup.entity");
let TbUserGroupRights = class TbUserGroupRights {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'Id' }),
    __metadata("design:type", String)
], TbUserGroupRights.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'CreatedDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TbUserGroupRights.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'CreatedBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TbUserGroupRights.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ModifiredDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TbUserGroupRights.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'ModifiredBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TbUserGroupRights.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TbUserGroupRights.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TbMenuAdmin_entity_1.TbMenuAdmin, (tbMenuAdmin) => tbMenuAdmin.tbUserGroupRights, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)([{ name: 'IdMenu', referencedColumnName: 'idMenu' }]),
    __metadata("design:type", TbMenuAdmin_entity_1.TbMenuAdmin)
], TbUserGroupRights.prototype, "idMenu", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TbUserGroup_entity_1.TbUserGroup, (tbUserGroup) => tbUserGroup.tbUserGroupRights, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)([{ name: 'IdUserGroup', referencedColumnName: 'idUserGroup' }]),
    __metadata("design:type", TbUserGroup_entity_1.TbUserGroup)
], TbUserGroupRights.prototype, "idUserGroup", void 0);
TbUserGroupRights = __decorate([
    (0, typeorm_1.Index)('PK_tbUserGroupRights', ['id'], { unique: true }),
    (0, typeorm_1.Entity)('tbUserGroupRights', { schema: 'dbo' })
], TbUserGroupRights);
exports.TbUserGroupRights = TbUserGroupRights;
//# sourceMappingURL=TbUserGroupRights.entity.js.map