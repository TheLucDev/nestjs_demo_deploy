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
exports.TblDmNganhHoc = void 0;
const typeorm_1 = require("typeorm");
const TblDKyDtn_entity_1 = require("./TblDKyDtn.entity");
let TblDmNganhHoc = class TblDmNganhHoc {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], TblDmNganhHoc.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'nganhhoc_ten', length: 300 }),
    __metadata("design:type", String)
], TblDmNganhHoc.prototype, "nganhhocTen", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder', default: () => '(1)' }),
    __metadata("design:type", Number)
], TblDmNganhHoc.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'CreatedDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblDmNganhHoc.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'CreatedBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblDmNganhHoc.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ModifiredDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblDmNganhHoc.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'ModifiredBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblDmNganhHoc.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TblDmNganhHoc.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TblDKyDtn_entity_1.TblDKyDtn, (tblDKyDtn) => tblDKyDtn.dkdtndmTruong),
    __metadata("design:type", Array)
], TblDmNganhHoc.prototype, "tblDKyDtns", void 0);
TblDmNganhHoc = __decorate([
    (0, typeorm_1.Index)('PK_tb_dm_nganhcaodang', ['id'], { unique: true }),
    (0, typeorm_1.Entity)('tblDmNganhHoc', { schema: 'dbo' })
], TblDmNganhHoc);
exports.TblDmNganhHoc = TblDmNganhHoc;
//# sourceMappingURL=TblDmNganhHoc.entity.js.map