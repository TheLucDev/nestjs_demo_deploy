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
exports.TbContentHtml = void 0;
const typeorm_1 = require("typeorm");
const TbPosition_entity_1 = require("./TbPosition.entity");
let TbContentHtml = class TbContentHtml {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'IdContentHTML' }),
    __metadata("design:type", String)
], TbContentHtml.prototype, "idContentHtml", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Title', nullable: true, length: 150 }),
    __metadata("design:type", String)
], TbContentHtml.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Description', nullable: true, length: 300 }),
    __metadata("design:type", String)
], TbContentHtml.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'ContentHTML', nullable: true }),
    __metadata("design:type", String)
], TbContentHtml.prototype, "contentHtml", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder', default: () => '(0)' }),
    __metadata("design:type", Number)
], TbContentHtml.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'CreatedDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TbContentHtml.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'CreatedBy', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TbContentHtml.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ModifiredDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TbContentHtml.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'ModifiredBy', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TbContentHtml.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TbContentHtml.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'ShowAllController', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TbContentHtml.prototype, "showAllController", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'ShowOnlyController', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TbContentHtml.prototype, "showOnlyController", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IdController', nullable: true, length: 30 }),
    __metadata("design:type", String)
], TbContentHtml.prototype, "idController", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'ShowListController', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TbContentHtml.prototype, "showListController", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'ListController', nullable: true, length: 150 }),
    __metadata("design:type", String)
], TbContentHtml.prototype, "listController", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'PK_String', nullable: true, length: 30 }),
    __metadata("design:type", String)
], TbContentHtml.prototype, "pkString", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'PK_Long', nullable: true }),
    __metadata("design:type", String)
], TbContentHtml.prototype, "pkLong", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'ViewCount', nullable: true, default: () => '(0)' }),
    __metadata("design:type", String)
], TbContentHtml.prototype, "viewCount", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'IsContentHTML', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TbContentHtml.prototype, "isContentHtml", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'IsSlide', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TbContentHtml.prototype, "isSlide", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'IsMenu', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TbContentHtml.prototype, "isMenu", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'IsProduct', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TbContentHtml.prototype, "isProduct", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'IsArticle', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TbContentHtml.prototype, "isArticle", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TbPosition_entity_1.TbPosition, (tbPosition) => tbPosition.tbContentHtmls),
    (0, typeorm_1.JoinColumn)([{ name: 'IdPosition', referencedColumnName: 'idPosition' }]),
    __metadata("design:type", TbPosition_entity_1.TbPosition)
], TbContentHtml.prototype, "idPosition", void 0);
TbContentHtml = __decorate([
    (0, typeorm_1.Index)('PK_tbl_ContentHTML', ['idContentHtml'], { unique: true }),
    (0, typeorm_1.Entity)('tbContentHtml', { schema: 'dbo' })
], TbContentHtml);
exports.TbContentHtml = TbContentHtml;
//# sourceMappingURL=TbContentHtml.entity.js.map