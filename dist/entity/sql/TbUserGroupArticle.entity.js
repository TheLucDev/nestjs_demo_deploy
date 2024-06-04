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
exports.TbUserGroupArticle = void 0;
const typeorm_1 = require("typeorm");
const TbArticleCategory_entity_1 = require("./TbArticleCategory.entity");
const TbUserGroup_entity_1 = require("./TbUserGroup.entity");
let TbUserGroupArticle = class TbUserGroupArticle {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'Id' }),
    __metadata("design:type", String)
], TbUserGroupArticle.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'CreatedDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TbUserGroupArticle.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'CreatedBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TbUserGroupArticle.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ModifiredDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TbUserGroupArticle.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'ModifiredBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TbUserGroupArticle.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TbUserGroupArticle.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TbArticleCategory_entity_1.TbArticleCategory, (tbArticleCategory) => tbArticleCategory.tbUserGroupArticles, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)([{ name: 'IdCategory', referencedColumnName: 'idCategory' }]),
    __metadata("design:type", TbArticleCategory_entity_1.TbArticleCategory)
], TbUserGroupArticle.prototype, "idCategory", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TbUserGroup_entity_1.TbUserGroup, (tbUserGroup) => tbUserGroup.tbUserGroupArticles, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)([{ name: 'IdUserGroup', referencedColumnName: 'idUserGroup' }]),
    __metadata("design:type", TbUserGroup_entity_1.TbUserGroup)
], TbUserGroupArticle.prototype, "idUserGroup", void 0);
TbUserGroupArticle = __decorate([
    (0, typeorm_1.Index)('PK_tbUserGroupArticle', ['id'], { unique: true }),
    (0, typeorm_1.Entity)('tbUserGroupArticle', { schema: 'dbo' })
], TbUserGroupArticle);
exports.TbUserGroupArticle = TbUserGroupArticle;
//# sourceMappingURL=TbUserGroupArticle.entity.js.map