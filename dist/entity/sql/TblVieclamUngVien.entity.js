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
exports.TblVieclamUngVien = void 0;
const typeorm_1 = require("typeorm");
const TblHoSoUngVien_entity_1 = require("./TblHoSoUngVien.entity");
let TblVieclamUngVien = class TblVieclamUngVien {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'IdVL' }),
    __metadata("design:type", String)
], TblVieclamUngVien.prototype, "idVl", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Maphieu', length: 20 }),
    __metadata("design:type", String)
], TblVieclamUngVien.prototype, "maphieu", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'Ngaylap', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblVieclamUngVien.prototype, "ngaylap", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IdNguoiduyet', length: 15 }),
    __metadata("design:type", String)
], TblVieclamUngVien.prototype, "idNguoiduyet", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'MaCV', nullable: true, length: 20 }),
    __metadata("design:type", String)
], TblVieclamUngVien.prototype, "maCv", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'MasoLD', nullable: true, length: 20 }),
    __metadata("design:type", String)
], TblVieclamUngVien.prototype, "masoLd", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdLoaiDN' }),
    __metadata("design:type", Number)
], TblVieclamUngVien.prototype, "idLoaiDn", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IdTinh', nullable: true, length: 2 }),
    __metadata("design:type", String)
], TblVieclamUngVien.prototype, "idTinh", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Idhuyen', nullable: true, length: 5 }),
    __metadata("design:type", String)
], TblVieclamUngVien.prototype, "idhuyen", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Idxa', nullable: true, length: 8 }),
    __metadata("design:type", String)
], TblVieclamUngVien.prototype, "idxa", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'DiachiLV', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblVieclamUngVien.prototype, "diachiLv", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'IdDN' }),
    __metadata("design:type", String)
], TblVieclamUngVien.prototype, "idDn", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdKhuVuc' }),
    __metadata("design:type", Number)
], TblVieclamUngVien.prototype, "idKhuVuc", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IdNKT', nullable: true, length: 4 }),
    __metadata("design:type", String)
], TblVieclamUngVien.prototype, "idNkt", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdLoaiHD' }),
    __metadata("design:type", Number)
], TblVieclamUngVien.prototype, "idLoaiHd", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Tencongviec', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblVieclamUngVien.prototype, "tencongviec", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'MatVL', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TblVieclamUngVien.prototype, "matVl", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', {
        name: 'NgaymatVL',
        nullable: true,
        default: () => 'getdate()',
    }),
    __metadata("design:type", Date)
], TblVieclamUngVien.prototype, "ngaymatVl", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Diengiai', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblVieclamUngVien.prototype, "diengiai", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Ghichu', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblVieclamUngVien.prototype, "ghichu", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TblVieclamUngVien.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder' }),
    __metadata("design:type", Number)
], TblVieclamUngVien.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'CreatedDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblVieclamUngVien.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'CreatedBy',
        length: 50,
        default: () => "'System'",
    }),
    __metadata("design:type", String)
], TblVieclamUngVien.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ModifiredDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblVieclamUngVien.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', {
        name: 'ModifiredBy',
        length: 50,
        default: () => "N'System'",
    }),
    __metadata("design:type", String)
], TblVieclamUngVien.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblHoSoUngVien_entity_1.TblHoSoUngVien, (tblHoSoUngVien) => tblHoSoUngVien.tblVieclamUngViens, { onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)([{ name: 'Iduv', referencedColumnName: 'id' }]),
    __metadata("design:type", TblHoSoUngVien_entity_1.TblHoSoUngVien)
], TblVieclamUngVien.prototype, "iduv", void 0);
TblVieclamUngVien = __decorate([
    (0, typeorm_1.Index)('PK_tblVieclamUngVien', ['idVl'], { unique: true }),
    (0, typeorm_1.Entity)('tblVieclamUngVien', { schema: 'dbo' })
], TblVieclamUngVien);
exports.TblVieclamUngVien = TblVieclamUngVien;
//# sourceMappingURL=TblVieclamUngVien.entity.js.map