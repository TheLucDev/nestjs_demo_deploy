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
exports.TbDksgd = void 0;
const typeorm_1 = require("typeorm");
let TbDksgd = class TbDksgd {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)('int', { name: 'id' }),
    __metadata("design:type", Number)
], TbDksgd.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'dksgd_id', length: 50 }),
    __metadata("design:type", String)
], TbDksgd.prototype, "dksgdId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'dksgd_username', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TbDksgd.prototype, "dksgdUsername", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'dksgd_email', nullable: true, length: 250 }),
    __metadata("design:type", String)
], TbDksgd.prototype, "dksgdEmail", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'dksgd_password', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TbDksgd.prototype, "dksgdPassword", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'dksgd_ten', nullable: true, length: 100 }),
    __metadata("design:type", String)
], TbDksgd.prototype, "dksgdTen", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'dksgd_tentat', nullable: true, length: 200 }),
    __metadata("design:type", String)
], TbDksgd.prototype, "dksgdTentat", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', {
        name: 'dksgd_nguoilienhe',
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], TbDksgd.prototype, "dksgdNguoilienhe", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'dksgd_website', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TbDksgd.prototype, "dksgdWebsite", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'dksgddm_hinhthucdoanhnghiep', nullable: true }),
    __metadata("design:type", Number)
], TbDksgd.prototype, "dksgddmHinhthucdoanhnghiep", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'dksgd_solaodong', nullable: true }),
    __metadata("design:type", Number)
], TbDksgd.prototype, "dksgdSolaodong", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'dksgd_nganhnghekinhdoanh',
        nullable: true,
        length: 500,
    }),
    __metadata("design:type", String)
], TbDksgd.prototype, "dksgdNganhnghekinhdoanh", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'dksgd_dienthoai', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TbDksgd.prototype, "dksgdDienthoai", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'dksgd_fax', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TbDksgd.prototype, "dksgdFax", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', {
        name: 'dksgd_diachichitiet',
        nullable: true,
        length: 200,
    }),
    __metadata("design:type", String)
], TbDksgd.prototype, "dksgdDiachichitiet", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', {
        name: 'dksgddm_phiengiaodichlan',
        nullable: true,
        length: 50,
    }),
    __metadata("design:type", String)
], TbDksgd.prototype, "dksgddmPhiengiaodichlan", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'dksgddm_hinhthucthamgia',
        nullable: true,
        length: 50,
    }),
    __metadata("design:type", String)
], TbDksgd.prototype, "dksgddmHinhthucthamgia", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'dksgd_nganhnghe', nullable: true }),
    __metadata("design:type", String)
], TbDksgd.prototype, "dksgdNganhnghe", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'dksgd_ghichu', nullable: true, length: 300 }),
    __metadata("design:type", String)
], TbDksgd.prototype, "dksgdGhichu", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'dksgd_ngaydangky', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TbDksgd.prototype, "dksgdNgaydangky", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'dksgd_solanxem', nullable: true }),
    __metadata("design:type", Number)
], TbDksgd.prototype, "dksgdSolanxem", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'dksgd_duyet', nullable: true }),
    __metadata("design:type", Boolean)
], TbDksgd.prototype, "dksgdDuyet", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'dksgd_hienthi', nullable: true }),
    __metadata("design:type", Boolean)
], TbDksgd.prototype, "dksgdHienthi", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'dksgdht_nlh', nullable: true }),
    __metadata("design:type", Boolean)
], TbDksgd.prototype, "dksgdhtNlh", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'dksgdht_telephone', nullable: true }),
    __metadata("design:type", Boolean)
], TbDksgd.prototype, "dksgdhtTelephone", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'dksgdht_web', nullable: true }),
    __metadata("design:type", Boolean)
], TbDksgd.prototype, "dksgdhtWeb", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'dksgdht_fax', nullable: true }),
    __metadata("design:type", Boolean)
], TbDksgd.prototype, "dksgdhtFax", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'dksgdht_email', nullable: true }),
    __metadata("design:type", Boolean)
], TbDksgd.prototype, "dksgdhtEmail", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'dksgdht_address', nullable: true }),
    __metadata("design:type", Boolean)
], TbDksgd.prototype, "dksgdhtAddress", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'dksgdht_name', nullable: true }),
    __metadata("design:type", Boolean)
], TbDksgd.prototype, "dksgdhtName", void 0);
TbDksgd = __decorate([
    (0, typeorm_1.Index)('PK_tb_dksgd_old', ['dksgdId'], { unique: true }),
    (0, typeorm_1.Entity)('tb_dksgd', { schema: 'dbo' })
], TbDksgd);
exports.TbDksgd = TbDksgd;
//# sourceMappingURL=TbDksgd.entity.js.map