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
exports.TmpLaborMark = void 0;
const typeorm_1 = require("typeorm");
const TtldLaborGroup_entity_1 = require("./TtldLaborGroup.entity");
let TmpLaborMark = class TmpLaborMark {
};
__decorate([
    (0, typeorm_1.Column)('int', { primary: true, name: 'LbKey' }),
    __metadata("design:type", Number)
], TmpLaborMark.prototype, "lbKey", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { primary: true, name: 'IdKey' }),
    __metadata("design:type", Number)
], TmpLaborMark.prototype, "idKey", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Description', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TmpLaborMark.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Dvt', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TmpLaborMark.prototype, "dvt", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Show' }),
    __metadata("design:type", Boolean)
], TmpLaborMark.prototype, "show", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TtldLaborGroup_entity_1.TtldLaborGroup, (ttldLaborGroup) => ttldLaborGroup.tmpLaborMarks, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)([{ name: 'LbKey', referencedColumnName: 'lbKey' }]),
    __metadata("design:type", TtldLaborGroup_entity_1.TtldLaborGroup)
], TmpLaborMark.prototype, "lbKey2", void 0);
TmpLaborMark = __decorate([
    (0, typeorm_1.Index)('PK_tmpLaborMark', ['lbKey', 'idKey'], { unique: true }),
    (0, typeorm_1.Entity)('tmpLaborMark', { schema: 'dbo' })
], TmpLaborMark);
exports.TmpLaborMark = TmpLaborMark;
//# sourceMappingURL=TmpLaborMark.entity.js.map