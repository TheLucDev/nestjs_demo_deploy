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
exports.TtldLaborGroup = void 0;
const typeorm_1 = require("typeorm");
const TmpLaborMark_entity_1 = require("./TmpLaborMark.entity");
let TtldLaborGroup = class TtldLaborGroup {
};
__decorate([
    (0, typeorm_1.Column)('int', { primary: true, name: 'LbKey' }),
    __metadata("design:type", Number)
], TtldLaborGroup.prototype, "lbKey", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'BlockName', nullable: true, length: 10 }),
    __metadata("design:type", String)
], TtldLaborGroup.prototype, "blockName", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Name', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TtldLaborGroup.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Show' }),
    __metadata("design:type", Boolean)
], TtldLaborGroup.prototype, "show", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TmpLaborMark_entity_1.TmpLaborMark, (tmpLaborMark) => tmpLaborMark.lbKey2),
    __metadata("design:type", Array)
], TtldLaborGroup.prototype, "tmpLaborMarks", void 0);
TtldLaborGroup = __decorate([
    (0, typeorm_1.Index)('PK_ttldLaborGroup', ['lbKey'], { unique: true }),
    (0, typeorm_1.Entity)('ttldLaborGroup', { schema: 'dbo' })
], TtldLaborGroup);
exports.TtldLaborGroup = TtldLaborGroup;
//# sourceMappingURL=TtldLaborGroup.entity.js.map