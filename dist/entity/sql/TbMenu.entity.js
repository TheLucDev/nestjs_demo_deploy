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
var TbMenu_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TbMenu = void 0;
const typeorm_1 = require("typeorm");
const TbMenuGroup_entity_1 = require("./TbMenuGroup.entity");
let TbMenu = TbMenu_1 = class TbMenu {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'IdMenu' }),
    __metadata("design:type", Number)
], TbMenu.prototype, "idMenu", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Title', length: 250 }),
    __metadata("design:type", String)
], TbMenu.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Alias', length: 250 }),
    __metadata("design:type", String)
], TbMenu.prototype, "alias", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'LinkPath', nullable: true, length: 250 }),
    __metadata("design:type", String)
], TbMenu.prototype, "linkPath", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'ImgPath', nullable: true, length: 250 }),
    __metadata("design:type", String)
], TbMenu.prototype, "imgPath", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder', default: () => '(0)' }),
    __metadata("design:type", Number)
], TbMenu.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'GroupLevel', default: () => '(0)' }),
    __metadata("design:type", Number)
], TbMenu.prototype, "groupLevel", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'CreatedDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TbMenu.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'CreatedBy', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TbMenu.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ModifiredDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TbMenu.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'ModifiredBy', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TbMenu.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TbMenu.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IdController', nullable: true, length: 30 }),
    __metadata("design:type", String)
], TbMenu.prototype, "idController", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'NoneLink', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TbMenu.prototype, "noneLink", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'IsShowParameter', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TbMenu.prototype, "isShowParameter", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'IsHome', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TbMenu.prototype, "isHome", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'PK_String', nullable: true, length: 30 }),
    __metadata("design:type", String)
], TbMenu.prototype, "pkString", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'PK_Long', nullable: true }),
    __metadata("design:type", String)
], TbMenu.prototype, "pkLong", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TbMenu_1, (tbMenu) => tbMenu.tbMenus),
    (0, typeorm_1.JoinColumn)([{ name: 'ParentId', referencedColumnName: 'idMenu' }]),
    __metadata("design:type", TbMenu)
], TbMenu.prototype, "parent", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TbMenu_1, (tbMenu) => tbMenu.parent),
    __metadata("design:type", Array)
], TbMenu.prototype, "tbMenus", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TbMenuGroup_entity_1.TbMenuGroup, (tbMenuGroup) => tbMenuGroup.tbMenus),
    (0, typeorm_1.JoinColumn)([{ name: 'IdMenuGroup', referencedColumnName: 'idMenuGroup' }]),
    __metadata("design:type", TbMenuGroup_entity_1.TbMenuGroup)
], TbMenu.prototype, "idMenuGroup", void 0);
TbMenu = TbMenu_1 = __decorate([
    (0, typeorm_1.Index)('PK_tbl_Menu', ['idMenu'], { unique: true }),
    (0, typeorm_1.Entity)('tbMenu', { schema: 'dbo' })
], TbMenu);
exports.TbMenu = TbMenu;
//# sourceMappingURL=TbMenu.entity.js.map