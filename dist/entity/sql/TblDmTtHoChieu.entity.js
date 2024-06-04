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
exports.TblDmTtHoChieu = void 0;
const typeorm_1 = require("typeorm");
const TblDKyXkld_entity_1 = require("./TblDKyXkld.entity");
let TblDmTtHoChieu = class TblDmTtHoChieu {
};
__decorate([
    (0, typeorm_1.Column)('bit', { primary: true, name: 'IdTTHoChieu' }),
    __metadata("design:type", Boolean)
], TblDmTtHoChieu.prototype, "idTtHoChieu", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'TTHoChieu', length: 8 }),
    __metadata("design:type", String)
], TblDmTtHoChieu.prototype, "ttHoChieu", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TblDKyXkld_entity_1.TblDKyXkld, (tblDKyXkld) => tblDKyXkld.dkxkldHochieu),
    __metadata("design:type", Array)
], TblDmTtHoChieu.prototype, "tblDKyXklds", void 0);
TblDmTtHoChieu = __decorate([
    (0, typeorm_1.Index)('PK_tblDmTTHoCHieu', ['idTtHoChieu'], { unique: true }),
    (0, typeorm_1.Entity)('tblDmTTHoChieu', { schema: 'dbo' })
], TblDmTtHoChieu);
exports.TblDmTtHoChieu = TblDmTtHoChieu;
//# sourceMappingURL=TblDmTtHoChieu.entity.js.map