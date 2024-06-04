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
exports.TblDmNganh = void 0;
const typeorm_1 = require("typeorm");
const TblHoSoUngVien_entity_1 = require("./TblHoSoUngVien.entity");
const TblTuyenDung_entity_1 = require("./TblTuyenDung.entity");
let TblDmNganh = class TblDmNganh {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'manhom', nullable: true, length: 4 }),
    __metadata("design:type", String)
], TblDmNganh.prototype, "manhom", void 0);
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'nganh_id' }),
    __metadata("design:type", Number)
], TblDmNganh.prototype, "nganhId", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'nganh_ten', nullable: true, length: 200 }),
    __metadata("design:type", String)
], TblDmNganh.prototype, "nganhTen", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder', default: () => '(1)' }),
    __metadata("design:type", Number)
], TblDmNganh.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'CreatedDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblDmNganh.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'CreatedBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblDmNganh.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ModifiredDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblDmNganh.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'ModifiredBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblDmNganh.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TblDmNganh.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TblHoSoUngVien_entity_1.TblHoSoUngVien, (tblHoSoUngVien) => tblHoSoUngVien.uvnvNganhnghe),
    __metadata("design:type", Array)
], TblDmNganh.prototype, "tblHoSoUngViens", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TblTuyenDung_entity_1.TblTuyenDung, (tblTuyenDung) => tblTuyenDung.tdNganhnghe),
    __metadata("design:type", Array)
], TblDmNganh.prototype, "tblTuyenDungs", void 0);
TblDmNganh = __decorate([
    (0, typeorm_1.Index)('PK_tb_dm_nganh', ['nganhId'], { unique: true }),
    (0, typeorm_1.Entity)('tblDmNganh', { schema: 'dbo' })
], TblDmNganh);
exports.TblDmNganh = TblDmNganh;
//# sourceMappingURL=TblDmNganh.entity.js.map