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
exports.TblDmkinhnghiem = void 0;
const typeorm_1 = require("typeorm");
let TblDmkinhnghiem = class TblDmkinhnghiem {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)('varchar', { primary: true, name: 'id', length: 4 }),
    __metadata("design:type", String)
], TblDmkinhnghiem.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'ten', length: 128 }),
    __metadata("design:type", String)
], TblDmkinhnghiem.prototype, "ten", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder', default: () => '(1)' }),
    __metadata("design:type", Number)
], TblDmkinhnghiem.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'CreatedDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblDmkinhnghiem.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'CreatedBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblDmkinhnghiem.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ModifiredDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblDmkinhnghiem.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'ModifiredBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblDmkinhnghiem.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TblDmkinhnghiem.prototype, "status", void 0);
TblDmkinhnghiem = __decorate([
    (0, typeorm_1.Index)('PK_tblDmkinhnghiem', ['id'], { unique: true }),
    (0, typeorm_1.Entity)('tblDmkinhnghiem', { schema: 'dbo' })
], TblDmkinhnghiem);
exports.TblDmkinhnghiem = TblDmkinhnghiem;
//# sourceMappingURL=TblDmkinhnghiem.entity.js.map