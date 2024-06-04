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
exports.TblDmHogiadinhBd = void 0;
const typeorm_1 = require("typeorm");
let TblDmHogiadinhBd = class TblDmHogiadinhBd {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)('bigint', { primary: true, name: 'Id' }),
    __metadata("design:type", String)
], TblDmHogiadinhBd.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'Code', length: 12 }),
    __metadata("design:type", String)
], TblDmHogiadinhBd.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'Mahodi', length: 20 }),
    __metadata("design:type", String)
], TblDmHogiadinhBd.prototype, "mahodi", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'Mahoden', length: 20 }),
    __metadata("design:type", String)
], TblDmHogiadinhBd.prototype, "mahoden", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'Ngaydi', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblDmHogiadinhBd.prototype, "ngaydi", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'Ngayden', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblDmHogiadinhBd.prototype, "ngayden", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'Idmoi' }),
    __metadata("design:type", String)
], TblDmHogiadinhBd.prototype, "idmoi", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TblDmHogiadinhBd.prototype, "status", void 0);
TblDmHogiadinhBd = __decorate([
    (0, typeorm_1.Index)('PK_tblDmHogiadinhBD', ['id', 'code', 'mahodi', 'mahoden'], {
        unique: true,
    }),
    (0, typeorm_1.Entity)('tblDmHogiadinhBD', { schema: 'dbo' })
], TblDmHogiadinhBd);
exports.TblDmHogiadinhBd = TblDmHogiadinhBd;
//# sourceMappingURL=TblDmHogiadinhBd.entity.js.map