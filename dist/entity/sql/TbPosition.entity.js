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
var TbPosition_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TbPosition = void 0;
const typeorm_1 = require("typeorm");
const TbContentHtml_entity_1 = require("./TbContentHtml.entity");
let TbPosition = TbPosition_1 = class TbPosition {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'IdPosition', length: 30 }),
    __metadata("design:type", String)
], TbPosition.prototype, "idPosition", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder', default: () => '(0)' }),
    __metadata("design:type", Number)
], TbPosition.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'GroupLevel', default: () => '(0)' }),
    __metadata("design:type", Number)
], TbPosition.prototype, "groupLevel", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TbPosition.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TbContentHtml_entity_1.TbContentHtml, (tbContentHtml) => tbContentHtml.idPosition),
    __metadata("design:type", Array)
], TbPosition.prototype, "tbContentHtmls", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TbPosition_1, (tbPosition) => tbPosition.tbPositions),
    (0, typeorm_1.JoinColumn)([{ name: 'ParentId', referencedColumnName: 'idPosition' }]),
    __metadata("design:type", TbPosition)
], TbPosition.prototype, "parent", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TbPosition_1, (tbPosition) => tbPosition.parent),
    __metadata("design:type", Array)
], TbPosition.prototype, "tbPositions", void 0);
TbPosition = TbPosition_1 = __decorate([
    (0, typeorm_1.Index)('PK_tbl_Positions', ['idPosition'], { unique: true }),
    (0, typeorm_1.Entity)('tbPosition', { schema: 'dbo' })
], TbPosition);
exports.TbPosition = TbPosition;
//# sourceMappingURL=TbPosition.entity.js.map