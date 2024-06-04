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
exports.TblDmTtHoSo = void 0;
const typeorm_1 = require("typeorm");
const TblDKyXkld_entity_1 = require("./TblDKyXkld.entity");
let TblDmTtHoSo = class TblDmTtHoSo {
};
__decorate([
    (0, typeorm_1.Column)('bit', { primary: true, name: 'IdTTHS' }),
    __metadata("design:type", Boolean)
], TblDmTtHoSo.prototype, "idTths", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'TrangThaiHoSo', length: 14 }),
    __metadata("design:type", String)
], TblDmTtHoSo.prototype, "trangThaiHoSo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TblDKyXkld_entity_1.TblDKyXkld, (tblDKyXkld) => tblDKyXkld.dkxkldIdTths),
    __metadata("design:type", Array)
], TblDmTtHoSo.prototype, "tblDKyXklds", void 0);
TblDmTtHoSo = __decorate([
    (0, typeorm_1.Index)('PK_tbDmTTHoSo', ['idTths'], { unique: true }),
    (0, typeorm_1.Entity)('tblDmTTHoSo', { schema: 'dbo' })
], TblDmTtHoSo);
exports.TblDmTtHoSo = TblDmTtHoSo;
//# sourceMappingURL=TblDmTtHoSo.entity.js.map