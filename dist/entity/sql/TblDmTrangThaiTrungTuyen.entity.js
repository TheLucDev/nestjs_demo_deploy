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
exports.TblDmTrangThaiTrungTuyen = void 0;
const typeorm_1 = require("typeorm");
const TblDKyDtn_entity_1 = require("./TblDKyDtn.entity");
let TblDmTrangThaiTrungTuyen = class TblDmTrangThaiTrungTuyen {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)('bit', { primary: true, name: 'Id' }),
    __metadata("design:type", Boolean)
], TblDmTrangThaiTrungTuyen.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'TrangThaiTrungTuyen', length: 16 }),
    __metadata("design:type", String)
], TblDmTrangThaiTrungTuyen.prototype, "trangThaiTrungTuyen", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TblDKyDtn_entity_1.TblDKyDtn, (tblDKyDtn) => tblDKyDtn.idTrangThaiTrungTuyen),
    __metadata("design:type", Array)
], TblDmTrangThaiTrungTuyen.prototype, "tblDKyDtns", void 0);
TblDmTrangThaiTrungTuyen = __decorate([
    (0, typeorm_1.Index)('PK_tblDmTrangThaiTrungTuyen', ['id'], { unique: true }),
    (0, typeorm_1.Entity)('tblDmTrangThaiTrungTuyen', { schema: 'dbo' })
], TblDmTrangThaiTrungTuyen);
exports.TblDmTrangThaiTrungTuyen = TblDmTrangThaiTrungTuyen;
//# sourceMappingURL=TblDmTrangThaiTrungTuyen.entity.js.map