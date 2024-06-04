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
exports.TblThongKe = void 0;
const typeorm_1 = require("typeorm");
let TblThongKe = class TblThongKe {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)('bit', { primary: true, name: 'Id' }),
    __metadata("design:type", Boolean)
], TblThongKe.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'TongTruyCap', default: () => '(0)' }),
    __metadata("design:type", String)
], TblThongKe.prototype, "tongTruyCap", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'DoanhNghiep', default: () => '(0)' }),
    __metadata("design:type", String)
], TblThongKe.prototype, "doanhNghiep", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'ViecLam', default: () => '(0)' }),
    __metadata("design:type", String)
], TblThongKe.prototype, "viecLam", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'HoSo', default: () => '(0)' }),
    __metadata("design:type", String)
], TblThongKe.prototype, "hoSo", void 0);
TblThongKe = __decorate([
    (0, typeorm_1.Index)('PK_tblThongKe', ['id'], { unique: true }),
    (0, typeorm_1.Entity)('tblThongKe', { schema: 'dbo' })
], TblThongKe);
exports.TblThongKe = TblThongKe;
//# sourceMappingURL=TblThongKe.entity.js.map