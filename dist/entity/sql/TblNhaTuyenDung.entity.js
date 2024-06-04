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
exports.TblNhaTuyenDung = void 0;
const typeorm_1 = require("typeorm");
const TblDaidienNtd_entity_1 = require("./TblDaidienNtd.entity");
const TblDmHinhThucDoanhNghiep_entity_1 = require("./TblDmHinhThucDoanhNghiep.entity");
const TblTuyenDung_entity_1 = require("./TblTuyenDung.entity");
let TblNhaTuyenDung = class TblNhaTuyenDung {
};
__decorate([
    (0, typeorm_1.Column)('bigint', { primary: true, name: 'IdDoanhNghiep' }),
    __metadata("design:type", String)
], TblNhaTuyenDung.prototype, "idDoanhNghiep", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'username', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblNhaTuyenDung.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'password', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblNhaTuyenDung.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'ntd_madn', length: 20 }),
    __metadata("design:type", String)
], TblNhaTuyenDung.prototype, "ntdMadn", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'ntd_tentat', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblNhaTuyenDung.prototype, "ntdTentat", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'ntd_ten', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblNhaTuyenDung.prototype, "ntdTen", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'ImagePath', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblNhaTuyenDung.prototype, "imagePath", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'MST', nullable: true, length: 20 }),
    __metadata("design:type", String)
], TblNhaTuyenDung.prototype, "mst", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'ntd_solaodong', nullable: true }),
    __metadata("design:type", Number)
], TblNhaTuyenDung.prototype, "ntdSolaodong", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'ntd_gioithieu', nullable: true, length: 500 }),
    __metadata("design:type", String)
], TblNhaTuyenDung.prototype, "ntdGioithieu", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', {
        name: 'ntd_thuockhucongnghiep',
        nullable: true,
        length: 500,
    }),
    __metadata("design:type", String)
], TblNhaTuyenDung.prototype, "ntdThuockhucongnghiep", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'ntd_diachithanhpho', nullable: true }),
    __metadata("design:type", Number)
], TblNhaTuyenDung.prototype, "ntdDiachithanhpho", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'ntd_diachihuyen', nullable: true, length: 5 }),
    __metadata("design:type", String)
], TblNhaTuyenDung.prototype, "ntdDiachihuyen", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'ntd_diachixaphuong', nullable: true, length: 8 }),
    __metadata("design:type", String)
], TblNhaTuyenDung.prototype, "ntdDiachixaphuong", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', {
        name: 'ntd_diachichitiet',
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", String)
], TblNhaTuyenDung.prototype, "ntdDiachichitiet", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'ntd_nguoilienhe', nullable: true, length: 100 }),
    __metadata("design:type", String)
], TblNhaTuyenDung.prototype, "ntdNguoilienhe", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'ntd_chucvu', nullable: true, length: 100 }),
    __metadata("design:type", String)
], TblNhaTuyenDung.prototype, "ntdChucvu", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'ntd_dienthoai', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblNhaTuyenDung.prototype, "ntdDienthoai", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'ntd_fax', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblNhaTuyenDung.prototype, "ntdFax", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'ntd_email', nullable: true, length: 250 }),
    __metadata("design:type", String)
], TblNhaTuyenDung.prototype, "ntdEmail", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'ntd_website', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblNhaTuyenDung.prototype, "ntdWebsite", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'ntd_duyet', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TblNhaTuyenDung.prototype, "ntdDuyet", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'ntd_topblock', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TblNhaTuyenDung.prototype, "ntdTopblock", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'ntd_quocgia', nullable: true, length: 30 }),
    __metadata("design:type", String)
], TblNhaTuyenDung.prototype, "ntdQuocgia", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'ntd_namthanhlap', nullable: true }),
    __metadata("design:type", Number)
], TblNhaTuyenDung.prototype, "ntdNamthanhlap", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', {
        name: 'ntd_linhvuchoatdong',
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", String)
], TblNhaTuyenDung.prototype, "ntdLinhvuchoatdong", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'ntdht_nlh', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TblNhaTuyenDung.prototype, "ntdhtNlh", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'ntdht_telephone', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TblNhaTuyenDung.prototype, "ntdhtTelephone", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'ntdht_web', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TblNhaTuyenDung.prototype, "ntdhtWeb", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'ntdht_fax', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TblNhaTuyenDung.prototype, "ntdhtFax", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'ntdht_email', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TblNhaTuyenDung.prototype, "ntdhtEmail", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'ntdht_address', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TblNhaTuyenDung.prototype, "ntdhtAddress", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'CreatedDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblNhaTuyenDung.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'CreatedBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblNhaTuyenDung.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ModifiredDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblNhaTuyenDung.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'ModifiredBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblNhaTuyenDung.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'ntd_id', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblNhaTuyenDung.prototype, "ntdId", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'NewsletterSubscription', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TblNhaTuyenDung.prototype, "newsletterSubscription", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'JobsletterSubscription', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TblNhaTuyenDung.prototype, "jobsletterSubscription", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'ntd_Loai', nullable: true, default: () => '(0)' }),
    __metadata("design:type", Number)
], TblNhaTuyenDung.prototype, "ntdLoai", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'NongThonThanhThi', nullable: true, length: 9 }),
    __metadata("design:type", String)
], TblNhaTuyenDung.prototype, "nongThonThanhThi", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'IdLoaiHinhDoanhNghiep',
        nullable: true,
        length: 3,
    }),
    __metadata("design:type", String)
], TblNhaTuyenDung.prototype, "idLoaiHinhDoanhNghiep", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IdNganhKinhTe', nullable: true, length: 4 }),
    __metadata("design:type", String)
], TblNhaTuyenDung.prototype, "idNganhKinhTe", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdThoiGianHoatDong', nullable: true }),
    __metadata("design:type", Number)
], TblNhaTuyenDung.prototype, "idThoiGianHoatDong", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'idStatus' }),
    __metadata("design:type", Number)
], TblNhaTuyenDung.prototype, "idStatus", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder' }),
    __metadata("design:type", Number)
], TblNhaTuyenDung.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TblDaidienNtd_entity_1.TblDaidienNtd, (tblDaidienNtd) => tblDaidienNtd.idDoanhNghiep),
    __metadata("design:type", Array)
], TblNhaTuyenDung.prototype, "tblDaidienNtds", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblDmHinhThucDoanhNghiep_entity_1.TblDmHinhThucDoanhNghiep, (tblDmHinhThucDoanhNghiep) => tblDmHinhThucDoanhNghiep.tblNhaTuyenDungs),
    (0, typeorm_1.JoinColumn)([
        { name: 'ntd_hinhthucdoanhnghiep', referencedColumnName: 'maHinhthuc' },
    ]),
    __metadata("design:type", TblDmHinhThucDoanhNghiep_entity_1.TblDmHinhThucDoanhNghiep)
], TblNhaTuyenDung.prototype, "ntdHinhthucdoanhnghiep", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TblTuyenDung_entity_1.TblTuyenDung, (tblTuyenDung) => tblTuyenDung.idDoanhNghiep),
    __metadata("design:type", Array)
], TblNhaTuyenDung.prototype, "tblTuyenDungs", void 0);
TblNhaTuyenDung = __decorate([
    (0, typeorm_1.Index)('PK_tb_nhatuyendung', ['idDoanhNghiep'], { unique: true }),
    (0, typeorm_1.Entity)('tblNhaTuyenDung', { schema: 'dbo' })
], TblNhaTuyenDung);
exports.TblNhaTuyenDung = TblNhaTuyenDung;
//# sourceMappingURL=TblNhaTuyenDung.entity.js.map