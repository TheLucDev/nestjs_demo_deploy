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
exports.TblDmThon = void 0;
const typeorm_1 = require("typeorm");
const TblDmXa_entity_1 = require("./TblDmXa.entity");
let TblDmThon = class TblDmThon {
};
__decorate([
    (0, typeorm_1.Column)('int', { name: 'sott' }),
    __metadata("design:type", Number)
], TblDmThon.prototype, "sott", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'ma', length: 12 }),
    __metadata("design:type", String)
], TblDmThon.prototype, "ma", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'ten', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblDmThon.prototype, "ten", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'tenchitiet', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblDmThon.prototype, "tenchitiet", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'show', nullable: true }),
    __metadata("design:type", Boolean)
], TblDmThon.prototype, "show", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblDmXa_entity_1.TblDmXa, (tblDmXa) => tblDmXa.tblDmThons, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'maxa', referencedColumnName: 'maxa' }]),
    __metadata("design:type", TblDmXa_entity_1.TblDmXa)
], TblDmThon.prototype, "maxa", void 0);
TblDmThon = __decorate([
    (0, typeorm_1.Index)('PK_tblDmThon', ['ma'], { unique: true }),
    (0, typeorm_1.Entity)('tblDmThon', { schema: 'dbo' })
], TblDmThon);
exports.TblDmThon = TblDmThon;
//# sourceMappingURL=TblDmThon.entity.js.map