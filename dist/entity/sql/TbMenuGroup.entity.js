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
exports.TbMenuGroup = void 0;
const typeorm_1 = require("typeorm");
const TbMenu_entity_1 = require("./TbMenu.entity");
let TbMenuGroup = class TbMenuGroup {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'IdMenuGroup' }),
    __metadata("design:type", String)
], TbMenuGroup.prototype, "idMenuGroup", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Title', length: 50 }),
    __metadata("design:type", String)
], TbMenuGroup.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Description', nullable: true, length: 250 }),
    __metadata("design:type", String)
], TbMenuGroup.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder', default: () => '(0)' }),
    __metadata("design:type", Number)
], TbMenuGroup.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'CreatedDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TbMenuGroup.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'CreatedBy', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TbMenuGroup.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ModifiredDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TbMenuGroup.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'ModifiredBy', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TbMenuGroup.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TbMenuGroup.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TbMenu_entity_1.TbMenu, (tbMenu) => tbMenu.idMenuGroup),
    __metadata("design:type", Array)
], TbMenuGroup.prototype, "tbMenus", void 0);
TbMenuGroup = __decorate([
    (0, typeorm_1.Index)('PK_MenuGroups', ['idMenuGroup'], { unique: true }),
    (0, typeorm_1.Entity)('tbMenuGroup', { schema: 'dbo' })
], TbMenuGroup);
exports.TbMenuGroup = TbMenuGroup;
//# sourceMappingURL=TbMenuGroup.entity.js.map