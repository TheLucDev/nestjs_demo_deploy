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
exports.TbArticle = void 0;
const typeorm_1 = require("typeorm");
const TbArticleCategory_entity_1 = require("./TbArticleCategory.entity");
let TbArticle = class TbArticle {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'IdArticle' }),
    __metadata("design:type", String)
], TbArticle.prototype, "idArticle", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Title', length: 400 }),
    __metadata("design:type", String)
], TbArticle.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Summary', nullable: true }),
    __metadata("design:type", String)
], TbArticle.prototype, "summary", void 0);
__decorate([
    (0, typeorm_1.Column)('ntext', { name: 'ContentArticle', nullable: true }),
    __metadata("design:type", String)
], TbArticle.prototype, "contentArticle", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Author', nullable: true, length: 150 }),
    __metadata("design:type", String)
], TbArticle.prototype, "author", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'ImagePath', nullable: true, length: 250 }),
    __metadata("design:type", String)
], TbArticle.prototype, "imagePath", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'TitleMeta', length: 200 }),
    __metadata("design:type", String)
], TbArticle.prototype, "titleMeta", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'TitleSEO', nullable: true, length: 500 }),
    __metadata("design:type", String)
], TbArticle.prototype, "titleSeo", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'MetaKeywords', nullable: true, length: 250 }),
    __metadata("design:type", String)
], TbArticle.prototype, "metaKeywords", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'MetaDescription', nullable: true, length: 250 }),
    __metadata("design:type", String)
], TbArticle.prototype, "metaDescription", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder', default: () => '(0)' }),
    __metadata("design:type", Number)
], TbArticle.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'ViewCount', default: () => '(0)' }),
    __metadata("design:type", Number)
], TbArticle.prototype, "viewCount", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'IsNew', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TbArticle.prototype, "isNew", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'CreatedDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TbArticle.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'CreatedBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TbArticle.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ModifiredDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TbArticle.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'ModifiredBy',
        length: 50,
        default: () => "N'system'",
    }),
    __metadata("design:type", String)
], TbArticle.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TbArticle.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'NewsletterSubscription', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TbArticle.prototype, "newsletterSubscription", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TbArticleCategory_entity_1.TbArticleCategory, (tbArticleCategory) => tbArticleCategory.tbArticles),
    (0, typeorm_1.JoinColumn)([{ name: 'IdCategory2nd', referencedColumnName: 'idCategory' }]),
    __metadata("design:type", TbArticleCategory_entity_1.TbArticleCategory)
], TbArticle.prototype, "idCategory2nd", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TbArticleCategory_entity_1.TbArticleCategory, (tbArticleCategory) => tbArticleCategory.tbArticles2),
    (0, typeorm_1.JoinColumn)([{ name: 'IdCategory', referencedColumnName: 'idCategory' }]),
    __metadata("design:type", TbArticleCategory_entity_1.TbArticleCategory)
], TbArticle.prototype, "idCategory", void 0);
TbArticle = __decorate([
    (0, typeorm_1.Index)('PK_tbl_Article', ['idArticle'], { unique: true }),
    (0, typeorm_1.Entity)('tbArticle', { schema: 'dbo' })
], TbArticle);
exports.TbArticle = TbArticle;
//# sourceMappingURL=TbArticle.entity.js.map