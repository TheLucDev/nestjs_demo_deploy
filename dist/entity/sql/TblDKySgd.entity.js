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
exports.TblDKySgd = void 0;
const typeorm_1 = require("typeorm");
const TblDmHinhThucDoanhNghiep_entity_1 = require("./TblDmHinhThucDoanhNghiep.entity");
const TblDmPhienGiaoDich_entity_1 = require("./TblDmPhienGiaoDich.entity");
const TblDmTrangThai_entity_1 = require("./TblDmTrangThai.entity");
let TblDKySgd = class TblDKySgd {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'id' }),
    __metadata("design:type", String)
], TblDKySgd.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'dksgd_username', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblDKySgd.prototype, "dksgdUsername", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'dksgd_email', nullable: true, length: 250 }),
    __metadata("design:type", String)
], TblDKySgd.prototype, "dksgdEmail", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'dksgd_password', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblDKySgd.prototype, "dksgdPassword", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'dksgd_ten', nullable: true, length: 100 }),
    __metadata("design:type", String)
], TblDKySgd.prototype, "dksgdTen", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'dksgd_tentat', nullable: true, length: 200 }),
    __metadata("design:type", String)
], TblDKySgd.prototype, "dksgdTentat", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'MaHoSo', nullable: true, length: 20 }),
    __metadata("design:type", String)
], TblDKySgd.prototype, "maHoSo", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', {
        name: 'dksgd_nguoilienhe',
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], TblDKySgd.prototype, "dksgdNguoilienhe", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'dksgd_website', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblDKySgd.prototype, "dksgdWebsite", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'dksgd_solaodong', default: () => '(0)' }),
    __metadata("design:type", Number)
], TblDKySgd.prototype, "dksgdSolaodong", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', {
        name: 'dksgd_nganhnghekinhdoanh',
        nullable: true,
        length: 500,
    }),
    __metadata("design:type", String)
], TblDKySgd.prototype, "dksgdNganhnghekinhdoanh", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'dksgd_dienthoai', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblDKySgd.prototype, "dksgdDienthoai", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'dksgd_fax', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblDKySgd.prototype, "dksgdFax", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', {
        name: 'dksgd_diachichitiet',
        nullable: true,
        length: 200,
    }),
    __metadata("design:type", String)
], TblDKySgd.prototype, "dksgdDiachichitiet", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'dksgddm_hinhthucthamgia',
        nullable: true,
        length: 50,
    }),
    __metadata("design:type", String)
], TblDKySgd.prototype, "dksgddmHinhthucthamgia", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'dksgd_nganhnghe', nullable: true }),
    __metadata("design:type", String)
], TblDKySgd.prototype, "dksgdNganhnghe", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'dksgd_ghichu', nullable: true, length: 300 }),
    __metadata("design:type", String)
], TblDKySgd.prototype, "dksgdGhichu", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'dksgd_solanxem', default: () => '(0)' }),
    __metadata("design:type", Number)
], TblDKySgd.prototype, "dksgdSolanxem", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'dksgd_hienthi', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TblDKySgd.prototype, "dksgdHienthi", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'dksgdht_nlh', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TblDKySgd.prototype, "dksgdhtNlh", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'dksgdht_telephone', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TblDKySgd.prototype, "dksgdhtTelephone", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'dksgdht_web', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TblDKySgd.prototype, "dksgdhtWeb", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'dksgdht_fax', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TblDKySgd.prototype, "dksgdhtFax", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'dksgdht_email', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TblDKySgd.prototype, "dksgdhtEmail", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'dksgdht_address', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TblDKySgd.prototype, "dksgdhtAddress", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'dksgdht_name', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TblDKySgd.prototype, "dksgdhtName", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'CreatedDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblDKySgd.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'CreatedBy',
        nullable: true,
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblDKySgd.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ModifiredDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblDKySgd.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'ModifiredBy',
        nullable: true,
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblDKySgd.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblDmHinhThucDoanhNghiep_entity_1.TblDmHinhThucDoanhNghiep, (tblDmHinhThucDoanhNghiep) => tblDmHinhThucDoanhNghiep.tblDKySgds),
    (0, typeorm_1.JoinColumn)([
        { name: 'dksgddm_hinhthucdoanhnghiep', referencedColumnName: 'maHinhthuc' },
    ]),
    __metadata("design:type", TblDmHinhThucDoanhNghiep_entity_1.TblDmHinhThucDoanhNghiep)
], TblDKySgd.prototype, "dksgddmHinhthucdoanhnghiep", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblDmPhienGiaoDich_entity_1.TblDmPhienGiaoDich, (tblDmPhienGiaoDich) => tblDmPhienGiaoDich.tblDKySgds),
    (0, typeorm_1.JoinColumn)([
        { name: 'dksgddm_phiengiaodichlan', referencedColumnName: 'id' },
    ]),
    __metadata("design:type", TblDmPhienGiaoDich_entity_1.TblDmPhienGiaoDich)
], TblDKySgd.prototype, "dksgddmPhiengiaodichlan", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblDmTrangThai_entity_1.TblDmTrangThai, (tblDmTrangThai) => tblDmTrangThai.tblDKySgds),
    (0, typeorm_1.JoinColumn)([{ name: 'dksgd_duyet', referencedColumnName: 'idTrangThai' }]),
    __metadata("design:type", TblDmTrangThai_entity_1.TblDmTrangThai)
], TblDKySgd.prototype, "dksgdDuyet", void 0);
TblDKySgd = __decorate([
    (0, typeorm_1.Index)('PK_tb_dksgd', ['id'], { unique: true }),
    (0, typeorm_1.Entity)('tblDKySGD', { schema: 'dbo' })
], TblDKySgd);
exports.TblDKySgd = TblDKySgd;
//# sourceMappingURL=TblDKySgd.entity.js.map