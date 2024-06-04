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
var TbArticleCategory_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TbArticleCategory = void 0;
const typeorm_1 = require("typeorm");
const TbArticle_entity_1 = require("./TbArticle.entity");
const TbUserGroupArticle_entity_1 = require("./TbUserGroupArticle.entity");
let TbArticleCategory = TbArticleCategory_1 = class TbArticleCategory {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'IdCategory' }),
    __metadata("design:type", String)
], TbArticleCategory.prototype, "idCategory", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Title', length: 250 }),
    __metadata("design:type", String)
], TbArticleCategory.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder', default: () => '(0)' }),
    __metadata("design:type", Number)
], TbArticleCategory.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'GroupLevel', default: () => '(0)' }),
    __metadata("design:type", Number)
], TbArticleCategory.prototype, "groupLevel", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'TitleMeta', nullable: true, length: 250 }),
    __metadata("design:type", String)
], TbArticleCategory.prototype, "titleMeta", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'IdStyle', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TbArticleCategory.prototype, "idStyle", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'MetaKeywords', nullable: true, length: 250 }),
    __metadata("design:type", String)
], TbArticleCategory.prototype, "metaKeywords", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'MetaDescription', nullable: true, length: 250 }),
    __metadata("design:type", String)
], TbArticleCategory.prototype, "metaDescription", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'CreatedDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TbArticleCategory.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'CreatedBy', length: 50 }),
    __metadata("design:type", String)
], TbArticleCategory.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ModifiredDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TbArticleCategory.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'ModifiredBy', length: 50 }),
    __metadata("design:type", String)
], TbArticleCategory.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TbArticleCategory.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'IsSecond', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TbArticleCategory.prototype, "isSecond", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'ShowBreadcrumb', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TbArticleCategory.prototype, "showBreadcrumb", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'ShowAll', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TbArticleCategory.prototype, "showAll", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'AmountLead', default: () => '(0)' }),
    __metadata("design:type", Number)
], TbArticleCategory.prototype, "amountLead", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'SumChildren', default: () => '(0)' }),
    __metadata("design:type", Number)
], TbArticleCategory.prototype, "sumChildren", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'SumArticles', default: () => '(0)' }),
    __metadata("design:type", Number)
], TbArticleCategory.prototype, "sumArticles", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TbArticle_entity_1.TbArticle, (tbArticle) => tbArticle.idCategory2nd),
    __metadata("design:type", Array)
], TbArticleCategory.prototype, "tbArticles", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TbArticle_entity_1.TbArticle, (tbArticle) => tbArticle.idCategory),
    __metadata("design:type", Array)
], TbArticleCategory.prototype, "tbArticles2", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TbArticleCategory_1, (tbArticleCategory) => tbArticleCategory.tbArticleCategories),
    (0, typeorm_1.JoinColumn)([{ name: 'ParentId', referencedColumnName: 'idCategory' }]),
    __metadata("design:type", TbArticleCategory)
], TbArticleCategory.prototype, "parent", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TbArticleCategory_1, (tbArticleCategory) => tbArticleCategory.parent),
    __metadata("design:type", Array)
], TbArticleCategory.prototype, "tbArticleCategories", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TbUserGroupArticle_entity_1.TbUserGroupArticle, (tbUserGroupArticle) => tbUserGroupArticle.idCategory),
    __metadata("design:type", Array)
], TbArticleCategory.prototype, "tbUserGroupArticles", void 0);
TbArticleCategory = TbArticleCategory_1 = __decorate([
    (0, typeorm_1.Index)('PK_tbl_ArticleCategory', ['idCategory'], { unique: true }),
    (0, typeorm_1.Entity)('tbArticleCategory', { schema: 'dbo' })
], TbArticleCategory);
exports.TbArticleCategory = TbArticleCategory;
//# sourceMappingURL=TbArticleCategory.entity.js.map