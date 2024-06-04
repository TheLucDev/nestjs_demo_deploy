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
exports.TblDmMucdichLamviec = void 0;
const typeorm_1 = require("typeorm");
let TblDmMucdichLamviec = class TblDmMucdichLamviec {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)('varchar', { primary: true, name: 'id', length: 2 }),
    __metadata("design:type", String)
], TblDmMucdichLamviec.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'ten', length: 50 }),
    __metadata("design:type", String)
], TblDmMucdichLamviec.prototype, "ten", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder', default: () => '(1)' }),
    __metadata("design:type", Number)
], TblDmMucdichLamviec.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'CreatedDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblDmMucdichLamviec.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'CreatedBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblDmMucdichLamviec.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ModifiredDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblDmMucdichLamviec.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'ModifiredBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblDmMucdichLamviec.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TblDmMucdichLamviec.prototype, "status", void 0);
TblDmMucdichLamviec = __decorate([
    (0, typeorm_1.Index)('PK_tblDmMucdichLamviec', ['id'], { unique: true }),
    (0, typeorm_1.Entity)('tblDmMucdichLamviec', { schema: 'dbo' })
], TblDmMucdichLamviec);
exports.TblDmMucdichLamviec = TblDmMucdichLamviec;
//# sourceMappingURL=TblDmMucdichLamviec.entity.js.map