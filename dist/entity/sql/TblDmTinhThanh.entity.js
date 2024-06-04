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
exports.TblDmTinhThanh = void 0;
const typeorm_1 = require("typeorm");
const TblTuyenDung_entity_1 = require("./TblTuyenDung.entity");
let TblDmTinhThanh = class TblDmTinhThanh {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'tp_id' }),
    __metadata("design:type", Number)
], TblDmTinhThanh.prototype, "tpId", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'tp_ten', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblDmTinhThanh.prototype, "tpTen", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder', default: () => '(1)' }),
    __metadata("design:type", Number)
], TblDmTinhThanh.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'CreatedDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblDmTinhThanh.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'CreatedBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblDmTinhThanh.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ModifiredDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblDmTinhThanh.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'ModifiredBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblDmTinhThanh.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TblDmTinhThanh.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'matinh', nullable: true, length: 2 }),
    __metadata("design:type", String)
], TblDmTinhThanh.prototype, "matinh", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TblTuyenDung_entity_1.TblTuyenDung, (tblTuyenDung) => tblTuyenDung.tdNoilamviec),
    __metadata("design:type", Array)
], TblDmTinhThanh.prototype, "tblTuyenDungs", void 0);
TblDmTinhThanh = __decorate([
    (0, typeorm_1.Index)('PK_tb_tinhthanh', ['tpId'], { unique: true }),
    (0, typeorm_1.Entity)('tblDmTinhThanh', { schema: 'dbo' })
], TblDmTinhThanh);
exports.TblDmTinhThanh = TblDmTinhThanh;
//# sourceMappingURL=TblDmTinhThanh.entity.js.map