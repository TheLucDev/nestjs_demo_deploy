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
exports.TbSlideGroup = void 0;
const typeorm_1 = require("typeorm");
const TbSlide_entity_1 = require("./TbSlide.entity");
let TbSlideGroup = class TbSlideGroup {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'IdSlideGroup' }),
    __metadata("design:type", String)
], TbSlideGroup.prototype, "idSlideGroup", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Title', length: 250 }),
    __metadata("design:type", String)
], TbSlideGroup.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder', default: () => '(0)' }),
    __metadata("design:type", Number)
], TbSlideGroup.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IdSliderType', nullable: true, length: 10 }),
    __metadata("design:type", String)
], TbSlideGroup.prototype, "idSliderType", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'CreatedDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TbSlideGroup.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'CreatedBy', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TbSlideGroup.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ModifiredDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TbSlideGroup.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'ModifiredBy', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TbSlideGroup.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TbSlideGroup.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TbSlide_entity_1.TbSlide, (tbSlide) => tbSlide.idSlideGroup),
    __metadata("design:type", Array)
], TbSlideGroup.prototype, "tbSlides", void 0);
TbSlideGroup = __decorate([
    (0, typeorm_1.Index)('PK_tbSlideGroup', ['idSlideGroup'], { unique: true }),
    (0, typeorm_1.Entity)('tbSlideGroup', { schema: 'dbo' })
], TbSlideGroup);
exports.TbSlideGroup = TbSlideGroup;
//# sourceMappingURL=TbSlideGroup.entity.js.map