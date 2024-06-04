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
exports.TblDKyDtn = void 0;
const typeorm_1 = require("typeorm");
const TblDmNgheDaoTao_entity_1 = require("./TblDmNgheDaoTao.entity");
const TblDmGioiTinh_entity_1 = require("./TblDmGioiTinh.entity");
const TblDmNganhHoc_entity_1 = require("./TblDmNganhHoc.entity");
const TblDmTrangThai_entity_1 = require("./TblDmTrangThai.entity");
const TblDmTrangThaiTrungTuyen_entity_1 = require("./TblDmTrangThaiTrungTuyen.entity");
const TblDmTrinhDoHocVanDtn_entity_1 = require("./TblDmTrinhDoHocVanDtn.entity");
const TblDmDoiTuongChinhSach_entity_1 = require("./TblDmDoiTuongChinhSach.entity");
let TblDKyDtn = class TblDKyDtn {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'id' }),
    __metadata("design:type", String)
], TblDKyDtn.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'dkdtn_username', length: 50 }),
    __metadata("design:type", String)
], TblDKyDtn.prototype, "dkdtnUsername", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'dkdtn_email', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblDKyDtn.prototype, "dkdtnEmail", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'dkdtn_password', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblDKyDtn.prototype, "dkdtnPassword", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'dkdtn_hoten', nullable: true, length: 250 }),
    __metadata("design:type", String)
], TblDKyDtn.prototype, "dkdtnHoten", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'ImagePath', nullable: true, length: 250 }),
    __metadata("design:type", String)
], TblDKyDtn.prototype, "imagePath", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'dkdtn_ngaysinh', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblDKyDtn.prototype, "dkdtnNgaysinh", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'dkdtn_chuyenmon', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblDKyDtn.prototype, "dkdtnChuyenmon", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'dkdtn_dienthoai', nullable: true, length: 25 }),
    __metadata("design:type", String)
], TblDKyDtn.prototype, "dkdtnDienthoai", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'dkdtn_dantoc', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblDKyDtn.prototype, "dkdtnDantoc", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'dkdtn_tongiao', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblDKyDtn.prototype, "dkdtnTongiao", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', {
        name: 'dkdtn_hokhauthuongtru',
        nullable: true,
        length: 200,
    }),
    __metadata("design:type", String)
], TblDKyDtn.prototype, "dkdtnHokhauthuongtru", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'dkdtn_ghichu', nullable: true, length: 4000 }),
    __metadata("design:type", String)
], TblDKyDtn.prototype, "dkdtnGhichu", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'dkdtnht_telephone', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TblDKyDtn.prototype, "dkdtnhtTelephone", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'dkdtnht_email', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TblDKyDtn.prototype, "dkdtnhtEmail", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'dkdtnht_address', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TblDKyDtn.prototype, "dkdtnhtAddress", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'CreatedDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblDKyDtn.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'CreatedBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblDKyDtn.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ModifiredDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblDKyDtn.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'ModifiredBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblDKyDtn.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'SoNhaDuong', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblDKyDtn.prototype, "soNhaDuong", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'MaTinh', nullable: true, length: 2 }),
    __metadata("design:type", String)
], TblDKyDtn.prototype, "maTinh", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'MaHuyen', nullable: true, length: 5 }),
    __metadata("design:type", String)
], TblDKyDtn.prototype, "maHuyen", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'MaXa', nullable: true, length: 8 }),
    __metadata("design:type", String)
], TblDKyDtn.prototype, "maXa", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdDaoTao', nullable: true }),
    __metadata("design:type", Number)
], TblDKyDtn.prototype, "idDaoTao", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'NguyenQuan', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblDKyDtn.prototype, "nguyenQuan", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IdTDNgoaiNgu', nullable: true, length: 5 }),
    __metadata("design:type", String)
], TblDKyDtn.prototype, "idTdNgoaiNgu", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'ChieuCao', nullable: true, length: 10 }),
    __metadata("design:type", String)
], TblDKyDtn.prototype, "chieuCao", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'CanNang', nullable: true, length: 10 }),
    __metadata("design:type", String)
], TblDKyDtn.prototype, "canNang", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'MatTrai', nullable: true, length: 10 }),
    __metadata("design:type", String)
], TblDKyDtn.prototype, "matTrai", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'MatPhai', nullable: true, length: 10 }),
    __metadata("design:type", String)
], TblDKyDtn.prototype, "matPhai", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'MuMau', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblDKyDtn.prototype, "muMau", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'HoTenCha', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblDKyDtn.prototype, "hoTenCha", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'HoTenMe', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblDKyDtn.prototype, "hoTenMe", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'DiaChiBaoTin', nullable: true, length: 200 }),
    __metadata("design:type", String)
], TblDKyDtn.prototype, "diaChiBaoTin", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'DienThoaiBaoTin', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblDKyDtn.prototype, "dienThoaiBaoTin", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'TinNhanBaoTin', nullable: true, length: 200 }),
    __metadata("design:type", String)
], TblDKyDtn.prototype, "tinNhanBaoTin", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'SoHoChieu', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblDKyDtn.prototype, "soHoChieu", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'DocThan', nullable: true }),
    __metadata("design:type", Boolean)
], TblDKyDtn.prototype, "docThan", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'DaCoGiaDinh', nullable: true }),
    __metadata("design:type", Boolean)
], TblDKyDtn.prototype, "daCoGiaDinh", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'DaLyDi', nullable: true }),
    __metadata("design:type", Boolean)
], TblDKyDtn.prototype, "daLyDi", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'SoCon', nullable: true }),
    __metadata("design:type", Number)
], TblDKyDtn.prototype, "soCon", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', {
        name: 'DaLamViecONuocNgoai',
        nullable: true,
        length: 200,
    }),
    __metadata("design:type", String)
], TblDKyDtn.prototype, "daLamViecONuocNgoai", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'CoBHTN', nullable: true, default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TblDKyDtn.prototype, "coBhtn", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblDmNgheDaoTao_entity_1.TblDmNgheDaoTao, (tblDmNgheDaoTao) => tblDmNgheDaoTao.tblDKyDtns),
    (0, typeorm_1.JoinColumn)([{ name: 'dkdtndm_nghedaotao', referencedColumnName: 'id' }]),
    __metadata("design:type", TblDmNgheDaoTao_entity_1.TblDmNgheDaoTao)
], TblDKyDtn.prototype, "dkdtndmNghedaotao", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblDmNgheDaoTao_entity_1.TblDmNgheDaoTao, (tblDmNgheDaoTao) => tblDmNgheDaoTao.tblDKyDtns2),
    (0, typeorm_1.JoinColumn)([{ name: 'dkdtndm_nganhcaodang', referencedColumnName: 'id' }]),
    __metadata("design:type", TblDmNgheDaoTao_entity_1.TblDmNgheDaoTao)
], TblDKyDtn.prototype, "dkdtndmNganhcaodang", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblDmGioiTinh_entity_1.TblDmGioiTinh, (tblDmGioiTinh) => tblDmGioiTinh.tblDKyDtns),
    (0, typeorm_1.JoinColumn)([{ name: 'dkdtn_gioitinh', referencedColumnName: 'idGioiTinh' }]),
    __metadata("design:type", TblDmGioiTinh_entity_1.TblDmGioiTinh)
], TblDKyDtn.prototype, "dkdtnGioitinh", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblDmNganhHoc_entity_1.TblDmNganhHoc, (tblDmNganhHoc) => tblDmNganhHoc.tblDKyDtns),
    (0, typeorm_1.JoinColumn)([{ name: 'dkdtndm_truong', referencedColumnName: 'id' }]),
    __metadata("design:type", TblDmNganhHoc_entity_1.TblDmNganhHoc)
], TblDKyDtn.prototype, "dkdtndmTruong", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblDmNgheDaoTao_entity_1.TblDmNgheDaoTao, (tblDmNgheDaoTao) => tblDmNgheDaoTao.tblDKyDtns3),
    (0, typeorm_1.JoinColumn)([{ name: 'dkdtndm_nganhtrungcap', referencedColumnName: 'id' }]),
    __metadata("design:type", TblDmNgheDaoTao_entity_1.TblDmNgheDaoTao)
], TblDKyDtn.prototype, "dkdtndmNganhtrungcap", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblDmTrangThai_entity_1.TblDmTrangThai, (tblDmTrangThai) => tblDmTrangThai.tblDKyDtns),
    (0, typeorm_1.JoinColumn)([{ name: 'dkdtn_duyet', referencedColumnName: 'idTrangThai' }]),
    __metadata("design:type", TblDmTrangThai_entity_1.TblDmTrangThai)
], TblDKyDtn.prototype, "dkdtnDuyet", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblDmTrangThaiTrungTuyen_entity_1.TblDmTrangThaiTrungTuyen, (tblDmTrangThaiTrungTuyen) => tblDmTrangThaiTrungTuyen.tblDKyDtns),
    (0, typeorm_1.JoinColumn)([{ name: 'IdTrangThaiTrungTuyen', referencedColumnName: 'id' }]),
    __metadata("design:type", TblDmTrangThaiTrungTuyen_entity_1.TblDmTrangThaiTrungTuyen)
], TblDKyDtn.prototype, "idTrangThaiTrungTuyen", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblDmTrinhDoHocVanDtn_entity_1.TblDmTrinhDoHocVanDtn, (tblDmTrinhDoHocVanDtn) => tblDmTrinhDoHocVanDtn.tblDKyDtns),
    (0, typeorm_1.JoinColumn)([
        { name: 'dkdtndm_trinhdohocvan_dtn', referencedColumnName: 'hocvanId' },
    ]),
    __metadata("design:type", TblDmTrinhDoHocVanDtn_entity_1.TblDmTrinhDoHocVanDtn)
], TblDKyDtn.prototype, "dkdtndmTrinhdohocvanDtn", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblDmDoiTuongChinhSach_entity_1.TblDmDoiTuongChinhSach, (tblDmDoiTuongChinhSach) => tblDmDoiTuongChinhSach.tblDKyDtns, { onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)([
        { name: 'dkdtndm_doituongchinhsach', referencedColumnName: 'dtcsId' },
    ]),
    __metadata("design:type", TblDmDoiTuongChinhSach_entity_1.TblDmDoiTuongChinhSach)
], TblDKyDtn.prototype, "dkdtndmDoituongchinhsach", void 0);
TblDKyDtn = __decorate([
    (0, typeorm_1.Index)('PK_tb_dkdtn', ['id'], { unique: true }),
    (0, typeorm_1.Entity)('tblDKyDTN', { schema: 'dbo' })
], TblDKyDtn);
exports.TblDKyDtn = TblDKyDtn;
//# sourceMappingURL=TblDKyDtn.entity.js.map