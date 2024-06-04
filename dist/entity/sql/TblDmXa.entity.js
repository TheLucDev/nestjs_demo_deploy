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
exports.TblDmXa = void 0;
const typeorm_1 = require("typeorm");
const TblDmThon_entity_1 = require("./TblDmThon.entity");
const TblDmHuyen_entity_1 = require("./TblDmHuyen.entity");
let TblDmXa = class TblDmXa {
};
__decorate([
    (0, typeorm_1.Column)('int', { name: 'sott', nullable: true }),
    __metadata("design:type", Number)
], TblDmXa.prototype, "sott", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'kind', default: () => '(0)' }),
    __metadata("design:type", Number)
], TblDmXa.prototype, "kind", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'maxa', length: 8 }),
    __metadata("design:type", String)
], TblDmXa.prototype, "maxa", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'tenxa', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblDmXa.prototype, "tenxa", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'matinh', nullable: true, length: 2 }),
    __metadata("design:type", String)
], TblDmXa.prototype, "matinh", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'show', nullable: true }),
    __metadata("design:type", Boolean)
], TblDmXa.prototype, "show", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TblDmThon_entity_1.TblDmThon, (tblDmThon) => tblDmThon.maxa),
    __metadata("design:type", Array)
], TblDmXa.prototype, "tblDmThons", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblDmHuyen_entity_1.TblDmHuyen, (tblDmHuyen) => tblDmHuyen.tblDmXas, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'mahuyen', referencedColumnName: 'mahuyen' }]),
    __metadata("design:type", TblDmHuyen_entity_1.TblDmHuyen)
], TblDmXa.prototype, "mahuyen", void 0);
TblDmXa = __decorate([
    (0, typeorm_1.Index)('PK_dmxa', ['maxa'], { unique: true }),
    (0, typeorm_1.Entity)('tblDmXa', { schema: 'dbo' })
], TblDmXa);
exports.TblDmXa = TblDmXa;
//# sourceMappingURL=TblDmXa.entity.js.map