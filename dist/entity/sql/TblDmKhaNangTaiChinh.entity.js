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
exports.TblDmKhaNangTaiChinh = void 0;
const typeorm_1 = require("typeorm");
const TblDKyXkld_entity_1 = require("./TblDKyXkld.entity");
let TblDmKhaNangTaiChinh = class TblDmKhaNangTaiChinh {
};
__decorate([
    (0, typeorm_1.Column)('bit', { primary: true, name: 'IdKNTaiChinh' }),
    __metadata("design:type", Boolean)
], TblDmKhaNangTaiChinh.prototype, "idKnTaiChinh", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'KhaNangTaiChinh', length: 16 }),
    __metadata("design:type", String)
], TblDmKhaNangTaiChinh.prototype, "khaNangTaiChinh", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TblDKyXkld_entity_1.TblDKyXkld, (tblDKyXkld) => tblDKyXkld.dkxkldKhanangtaichinh),
    __metadata("design:type", Array)
], TblDmKhaNangTaiChinh.prototype, "tblDKyXklds", void 0);
TblDmKhaNangTaiChinh = __decorate([
    (0, typeorm_1.Index)('PK_tblDmKhaNangTaiChinh', ['idKnTaiChinh'], { unique: true }),
    (0, typeorm_1.Entity)('tblDmKhaNangTaiChinh', { schema: 'dbo' })
], TblDmKhaNangTaiChinh);
exports.TblDmKhaNangTaiChinh = TblDmKhaNangTaiChinh;
//# sourceMappingURL=TblDmKhaNangTaiChinh.entity.js.map