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
exports.TbNhatuyendung = void 0;
const typeorm_1 = require("typeorm");
let TbNhatuyendung = class TbNhatuyendung {
};
__decorate([
    (0, typeorm_1.Column)('int', { name: 'id' }),
    __metadata("design:type", Number)
], TbNhatuyendung.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)('varchar', { primary: true, name: 'ntd_id', length: 50 }),
    __metadata("design:type", String)
], TbNhatuyendung.prototype, "ntdId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'username', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TbNhatuyendung.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'password', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TbNhatuyendung.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'ntd_tentat', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TbNhatuyendung.prototype, "ntdTentat", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'ntd_ten', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TbNhatuyendung.prototype, "ntdTen", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'ntd_hinhthucdoanhnghiep', nullable: true }),
    __metadata("design:type", Number)
], TbNhatuyendung.prototype, "ntdHinhthucdoanhnghiep", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'ntd_solaodong', nullable: true }),
    __metadata("design:type", Number)
], TbNhatuyendung.prototype, "ntdSolaodong", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'ntd_gioithieu', nullable: true, length: 300 }),
    __metadata("design:type", String)
], TbNhatuyendung.prototype, "ntdGioithieu", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', {
        name: 'ntd_thuockhucongnghiep',
        nullable: true,
        length: 500,
    }),
    __metadata("design:type", String)
], TbNhatuyendung.prototype, "ntdThuockhucongnghiep", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'ntd_diachithanhpho', nullable: true }),
    __metadata("design:type", Number)
], TbNhatuyendung.prototype, "ntdDiachithanhpho", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'ntd_diachixaphuong', nullable: true }),
    __metadata("design:type", Number)
], TbNhatuyendung.prototype, "ntdDiachixaphuong", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', {
        name: 'ntd_diachichitiet',
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", String)
], TbNhatuyendung.prototype, "ntdDiachichitiet", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'ntd_nguoilienhe', nullable: true, length: 100 }),
    __metadata("design:type", String)
], TbNhatuyendung.prototype, "ntdNguoilienhe", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'ntd_chucvu', nullable: true, length: 100 }),
    __metadata("design:type", String)
], TbNhatuyendung.prototype, "ntdChucvu", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'ntd_dienthoai', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TbNhatuyendung.prototype, "ntdDienthoai", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'ntd_fax', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TbNhatuyendung.prototype, "ntdFax", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'ntd_email', nullable: true, length: 250 }),
    __metadata("design:type", String)
], TbNhatuyendung.prototype, "ntdEmail", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'ntd_website', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TbNhatuyendung.prototype, "ntdWebsite", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'ntd_ngaydangky', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TbNhatuyendung.prototype, "ntdNgaydangky", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'ntd_duyet', nullable: true }),
    __metadata("design:type", Boolean)
], TbNhatuyendung.prototype, "ntdDuyet", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'ntd_topblock', nullable: true }),
    __metadata("design:type", Boolean)
], TbNhatuyendung.prototype, "ntdTopblock", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'ntd_logo', nullable: true, length: 20 }),
    __metadata("design:type", String)
], TbNhatuyendung.prototype, "ntdLogo", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'ntd_quocgia', nullable: true, length: 30 }),
    __metadata("design:type", String)
], TbNhatuyendung.prototype, "ntdQuocgia", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'ntd_namthanhlap', nullable: true }),
    __metadata("design:type", Number)
], TbNhatuyendung.prototype, "ntdNamthanhlap", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', {
        name: 'ntd_linhvuchoatdong',
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", String)
], TbNhatuyendung.prototype, "ntdLinhvuchoatdong", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'ntdht_nlh', nullable: true }),
    __metadata("design:type", Boolean)
], TbNhatuyendung.prototype, "ntdhtNlh", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'ntdht_telephone', nullable: true }),
    __metadata("design:type", Boolean)
], TbNhatuyendung.prototype, "ntdhtTelephone", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'ntdht_web', nullable: true }),
    __metadata("design:type", Boolean)
], TbNhatuyendung.prototype, "ntdhtWeb", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'ntdht_fax', nullable: true }),
    __metadata("design:type", Boolean)
], TbNhatuyendung.prototype, "ntdhtFax", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'ntdht_email', nullable: true }),
    __metadata("design:type", Boolean)
], TbNhatuyendung.prototype, "ntdhtEmail", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'ntdht_address', nullable: true }),
    __metadata("design:type", Boolean)
], TbNhatuyendung.prototype, "ntdhtAddress", void 0);
TbNhatuyendung = __decorate([
    (0, typeorm_1.Index)('PK_tb_nhatuyendung_old', ['ntdId'], { unique: true }),
    (0, typeorm_1.Entity)('tb_nhatuyendung', { schema: 'dbo' })
], TbNhatuyendung);
exports.TbNhatuyendung = TbNhatuyendung;
//# sourceMappingURL=TbNhatuyendung.entity.js.map