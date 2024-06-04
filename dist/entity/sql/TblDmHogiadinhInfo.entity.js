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
exports.TblDmHogiadinhInfo = void 0;
const typeorm_1 = require("typeorm");
const TblDmHogiadinh_entity_1 = require("./TblDmHogiadinh.entity");
let TblDmHogiadinhInfo = class TblDmHogiadinhInfo {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)('int', { primary: true, name: 'Id' }),
    __metadata("design:type", Number)
], TblDmHogiadinhInfo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'Maho', length: 20 }),
    __metadata("design:type", String)
], TblDmHogiadinhInfo.prototype, "maho", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdGroup', nullable: true }),
    __metadata("design:type", Number)
], TblDmHogiadinhInfo.prototype, "idGroup", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'LabelName', length: 255 }),
    __metadata("design:type", String)
], TblDmHogiadinhInfo.prototype, "labelName", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Type', nullable: true, length: 10 }),
    __metadata("design:type", String)
], TblDmHogiadinhInfo.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'TextInfo', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblDmHogiadinhInfo.prototype, "textInfo", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'CheckOK', nullable: true }),
    __metadata("design:type", Boolean)
], TblDmHogiadinhInfo.prototype, "checkOk", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'CheckOption', nullable: true }),
    __metadata("design:type", Boolean)
], TblDmHogiadinhInfo.prototype, "checkOption", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Isheader', nullable: true }),
    __metadata("design:type", Boolean)
], TblDmHogiadinhInfo.prototype, "isheader", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder' }),
    __metadata("design:type", Number)
], TblDmHogiadinhInfo.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status' }),
    __metadata("design:type", Boolean)
], TblDmHogiadinhInfo.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblDmHogiadinh_entity_1.TblDmHogiadinh, (tblDmHogiadinh) => tblDmHogiadinh.tblDmHogiadinhInfos, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)([{ name: 'Maho', referencedColumnName: 'maho' }]),
    __metadata("design:type", TblDmHogiadinh_entity_1.TblDmHogiadinh)
], TblDmHogiadinhInfo.prototype, "maho2", void 0);
TblDmHogiadinhInfo = __decorate([
    (0, typeorm_1.Index)('PK_tblDmHGDInfo', ['id', 'maho'], { unique: true }),
    (0, typeorm_1.Entity)('tblDmHogiadinhInfo', { schema: 'dbo' })
], TblDmHogiadinhInfo);
exports.TblDmHogiadinhInfo = TblDmHogiadinhInfo;
//# sourceMappingURL=TblDmHogiadinhInfo.entity.js.map