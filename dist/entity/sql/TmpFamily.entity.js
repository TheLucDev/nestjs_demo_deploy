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
exports.TmpFamily = void 0;
const typeorm_1 = require("typeorm");
const TmpGroupFamily_entity_1 = require("./TmpGroupFamily.entity");
let TmpFamily = class TmpFamily {
};
__decorate([
    (0, typeorm_1.Column)('int', { primary: true, name: 'IdGroup' }),
    __metadata("design:type", Number)
], TmpFamily.prototype, "idGroup", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)('int', { primary: true, name: 'Id' }),
    __metadata("design:type", Number)
], TmpFamily.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'LabelName', length: 255 }),
    __metadata("design:type", String)
], TmpFamily.prototype, "labelName", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Type', nullable: true, length: 10 }),
    __metadata("design:type", String)
], TmpFamily.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder' }),
    __metadata("design:type", Number)
], TmpFamily.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status' }),
    __metadata("design:type", Boolean)
], TmpFamily.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TmpGroupFamily_entity_1.TmpGroupFamily, (tmpGroupFamily) => tmpGroupFamily.tmpFamilies, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)([{ name: 'IdGroup', referencedColumnName: 'idGroup' }]),
    __metadata("design:type", TmpGroupFamily_entity_1.TmpGroupFamily)
], TmpFamily.prototype, "idGroup2", void 0);
TmpFamily = __decorate([
    (0, typeorm_1.Index)('PK_tmpFamily', ['idGroup', 'id'], { unique: true }),
    (0, typeorm_1.Entity)('tmpFamily', { schema: 'dbo' })
], TmpFamily);
exports.TmpFamily = TmpFamily;
//# sourceMappingURL=TmpFamily.entity.js.map