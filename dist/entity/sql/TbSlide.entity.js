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
exports.TbSlide = void 0;
const typeorm_1 = require("typeorm");
const TbSlideGroup_entity_1 = require("./TbSlideGroup.entity");
let TbSlide = class TbSlide {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'IdSlide' }),
    __metadata("design:type", String)
], TbSlide.prototype, "idSlide", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Title', length: 250 }),
    __metadata("design:type", String)
], TbSlide.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'ImagePath', length: 250 }),
    __metadata("design:type", String)
], TbSlide.prototype, "imagePath", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'ShowExpand', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TbSlide.prototype, "showExpand", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Description', nullable: true }),
    __metadata("design:type", String)
], TbSlide.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'LinkExpand', nullable: true, length: 250 }),
    __metadata("design:type", String)
], TbSlide.prototype, "linkExpand", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'LinkTitle', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TbSlide.prototype, "linkTitle", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder', default: () => '(0)' }),
    __metadata("design:type", Number)
], TbSlide.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'CreatedDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TbSlide.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'CreatedBy', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TbSlide.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ModifiredDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TbSlide.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'ModifiredBy', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TbSlide.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TbSlide.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TbSlideGroup_entity_1.TbSlideGroup, (tbSlideGroup) => tbSlideGroup.tbSlides),
    (0, typeorm_1.JoinColumn)([{ name: 'IdSlideGroup', referencedColumnName: 'idSlideGroup' }]),
    __metadata("design:type", TbSlideGroup_entity_1.TbSlideGroup)
], TbSlide.prototype, "idSlideGroup", void 0);
TbSlide = __decorate([
    (0, typeorm_1.Index)('PK_tbSlide', ['idSlide'], { unique: true }),
    (0, typeorm_1.Entity)('tbSlide', { schema: 'dbo' })
], TbSlide);
exports.TbSlide = TbSlide;
//# sourceMappingURL=TbSlide.entity.js.map