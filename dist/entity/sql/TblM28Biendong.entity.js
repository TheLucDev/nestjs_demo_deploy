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
exports.TblM28Biendong = void 0;
const typeorm_1 = require("typeorm");
const TblM28info_entity_1 = require("./TblM28info.entity");
const TblM28TainanLd_entity_1 = require("./TblM28TainanLd.entity");
let TblM28Biendong = class TblM28Biendong {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'Idphieu' }),
    __metadata("design:type", String)
], TblM28Biendong.prototype, "idphieu", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'Ngaylap', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblM28Biendong.prototype, "ngaylap", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Maphieu', length: 20 }),
    __metadata("design:type", String)
], TblM28Biendong.prototype, "maphieu", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'IdUV' }),
    __metadata("design:type", String)
], TblM28Biendong.prototype, "idUv", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'IdDN' }),
    __metadata("design:type", String)
], TblM28Biendong.prototype, "idDn", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'MasoBHXH', nullable: true, length: 20 }),
    __metadata("design:type", String)
], TblM28Biendong.prototype, "masoBhxh", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IdBacHoc', nullable: true, length: 4 }),
    __metadata("design:type", String)
], TblM28Biendong.prototype, "idBacHoc", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'ChkCNKTKhongBang', nullable: true }),
    __metadata("design:type", Boolean)
], TblM28Biendong.prototype, "chkCnktKhongBang", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'ChkCCN3thang', nullable: true }),
    __metadata("design:type", Boolean)
], TblM28Biendong.prototype, "chkCcn3thang", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'ChkCCNSocap', nullable: true }),
    __metadata("design:type", Boolean)
], TblM28Biendong.prototype, "chkCcnSocap", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'ChkTrungcap', nullable: true }),
    __metadata("design:type", Boolean)
], TblM28Biendong.prototype, "chkTrungcap", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'ChkCaodang', nullable: true }),
    __metadata("design:type", Boolean)
], TblM28Biendong.prototype, "chkCaodang", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'ChkDaihocSDH', nullable: true }),
    __metadata("design:type", Boolean)
], TblM28Biendong.prototype, "chkDaihocSdh", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IdLoaiDHLD', nullable: true, length: 4 }),
    __metadata("design:type", String)
], TblM28Biendong.prototype, "idLoaiDhld", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'NgayHDLD', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblM28Biendong.prototype, "ngayHdld", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'NgayHieuluc', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblM28Biendong.prototype, "ngayHieuluc", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdTinhtrangHD' }),
    __metadata("design:type", Number)
], TblM28Biendong.prototype, "idTinhtrangHd", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdChucdanh' }),
    __metadata("design:type", Number)
], TblM28Biendong.prototype, "idChucdanh", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdLoaiBH' }),
    __metadata("design:type", Number)
], TblM28Biendong.prototype, "idLoaiBh", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'NgayBaohiem', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblM28Biendong.prototype, "ngayBaohiem", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', {
        name: 'Mucluongchinh',
        nullable: true,
        precision: 18,
        scale: 0,
    }),
    __metadata("design:type", Number)
], TblM28Biendong.prototype, "mucluongchinh", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', {
        name: 'MucluongBHTN',
        nullable: true,
        precision: 18,
        scale: 0,
    }),
    __metadata("design:type", Number)
], TblM28Biendong.prototype, "mucluongBhtn", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', {
        name: 'ThoigianBHTN',
        nullable: true,
        precision: 18,
        scale: 2,
    }),
    __metadata("design:type", Number)
], TblM28Biendong.prototype, "thoigianBhtn", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'ChkNhanvienmoi', nullable: true }),
    __metadata("design:type", Boolean)
], TblM28Biendong.prototype, "chkNhanvienmoi", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'NgayBatdau', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblM28Biendong.prototype, "ngayBatdau", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'NgayThoiviec', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblM28Biendong.prototype, "ngayThoiviec", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdLydoNghi' }),
    __metadata("design:type", Number)
], TblM28Biendong.prototype, "idLydoNghi", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Ghichu', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblM28Biendong.prototype, "ghichu", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'StartDate', nullable: true }),
    __metadata("design:type", Date)
], TblM28Biendong.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'EndDate', nullable: true }),
    __metadata("design:type", Date)
], TblM28Biendong.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'Idphieu03', nullable: true }),
    __metadata("design:type", String)
], TblM28Biendong.prototype, "idphieu03", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TblM28Biendong.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder', default: () => '(0)' }),
    __metadata("design:type", Number)
], TblM28Biendong.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'CreatedDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblM28Biendong.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'CreatedBy', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblM28Biendong.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ModifiredDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblM28Biendong.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'ModifiredBy', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblM28Biendong.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TblM28info_entity_1.TblM28info, (tblM28info) => tblM28info.idphieu),
    __metadata("design:type", Array)
], TblM28Biendong.prototype, "tblM28infos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TblM28TainanLd_entity_1.TblM28TainanLd, (tblM28TainanLd) => tblM28TainanLd.idPhieu),
    __metadata("design:type", Array)
], TblM28Biendong.prototype, "tblM28TainanLds", void 0);
TblM28Biendong = __decorate([
    (0, typeorm_1.Index)('PK_tblM28Biendong', ['idphieu'], { unique: true }),
    (0, typeorm_1.Entity)('tblM28Biendong', { schema: 'dbo' })
], TblM28Biendong);
exports.TblM28Biendong = TblM28Biendong;
//# sourceMappingURL=TblM28Biendong.entity.js.map