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
exports.TblDKyXkld = void 0;
const typeorm_1 = require("typeorm");
const TblDmTrinhDoHocVanDtn_entity_1 = require("./TblDmTrinhDoHocVanDtn.entity");
const TblDmGioiTinh_entity_1 = require("./TblDmGioiTinh.entity");
const TblDmKhaNangTaiChinh_entity_1 = require("./TblDmKhaNangTaiChinh.entity");
const TblDmNgoaiNguDaoTao_entity_1 = require("./TblDmNgoaiNguDaoTao.entity");
const TblDmTrangThai_entity_1 = require("./TblDmTrangThai.entity");
const TblDmTtHoChieu_entity_1 = require("./TblDmTtHoChieu.entity");
const TblDmTtHonNhan_entity_1 = require("./TblDmTtHonNhan.entity");
const TblDmTtHoSo_entity_1 = require("./TblDmTtHoSo.entity");
const TblDmTtkqpv_entity_1 = require("./TblDmTtkqpv.entity");
const TblDmDoiTuongChinhSach_entity_1 = require("./TblDmDoiTuongChinhSach.entity");
const TblDmQuocGia_entity_1 = require("./TblDmQuocGia.entity");
let TblDKyXkld = class TblDKyXkld {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'id' }),
    __metadata("design:type", String)
], TblDKyXkld.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'dkxkld_ngay' }),
    __metadata("design:type", Date)
], TblDKyXkld.prototype, "dkxkldNgay", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'dkxkld_username', length: 50 }),
    __metadata("design:type", String)
], TblDKyXkld.prototype, "dkxkldUsername", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'ImagePath', nullable: true, length: 250 }),
    __metadata("design:type", String)
], TblDKyXkld.prototype, "imagePath", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'dkxkld_email', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblDKyXkld.prototype, "dkxkldEmail", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'dkxkld_password', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblDKyXkld.prototype, "dkxkldPassword", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'dkxkld_hoten', nullable: true, length: 250 }),
    __metadata("design:type", String)
], TblDKyXkld.prototype, "dkxkldHoten", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'dkxkld_ngaysinh', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblDKyXkld.prototype, "dkxkldNgaysinh", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'dkxkld_sohochieu', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblDKyXkld.prototype, "dkxkldSohochieu", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'dkxkld_dienthoai', nullable: true, length: 25 }),
    __metadata("design:type", String)
], TblDKyXkld.prototype, "dkxkldDienthoai", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'dkxkld_soCMND', nullable: true, length: 20 }),
    __metadata("design:type", String)
], TblDKyXkld.prototype, "dkxkldSoCmnd", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', {
        name: 'dkxkld_Ngaycap',
        nullable: true,
        default: () => 'getdate()',
    }),
    __metadata("design:type", Date)
], TblDKyXkld.prototype, "dkxkldNgaycap", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'dkxkld_Noicap', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblDKyXkld.prototype, "dkxkldNoicap", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'dkxkld_dantoc', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblDKyXkld.prototype, "dkxkldDantoc", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'dkxkld_tongiao', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblDKyXkld.prototype, "dkxkldTongiao", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'dkxkld_chieucao', nullable: true, length: 10 }),
    __metadata("design:type", String)
], TblDKyXkld.prototype, "dkxkldChieucao", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'dkxkld_cannang', nullable: true, length: 10 }),
    __metadata("design:type", String)
], TblDKyXkld.prototype, "dkxkldCannang", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', {
        name: 'dkxkld_nguyenquan',
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", String)
], TblDKyXkld.prototype, "dkxkldNguyenquan", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', {
        name: 'dkxkld_hokhauthuongtru',
        nullable: true,
        length: 200,
    }),
    __metadata("design:type", String)
], TblDKyXkld.prototype, "dkxkldHokhauthuongtru", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', {
        name: 'dkxkld_diachitamtru',
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", String)
], TblDKyXkld.prototype, "dkxkldDiachitamtru", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'dkxkld_chuyenmon', nullable: true, length: 400 }),
    __metadata("design:type", String)
], TblDKyXkld.prototype, "dkxkldChuyenmon", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'dkxkld_bacdaotao', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblDKyXkld.prototype, "dkxkldBacdaotao", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'dkxkld_dangdoan', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblDKyXkld.prototype, "dkxkldDangdoan", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', {
        name: 'dkxkld_nganhnghemongmuon',
        nullable: true,
        length: 50,
    }),
    __metadata("design:type", String)
], TblDKyXkld.prototype, "dkxkldNganhnghemongmuon", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', {
        name: 'dkxkld_nndaduocdaotao',
        nullable: true,
        length: 50,
    }),
    __metadata("design:type", String)
], TblDKyXkld.prototype, "dkxkldNndaduocdaotao", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'dkxkld_ghichu', nullable: true, length: 4000 }),
    __metadata("design:type", String)
], TblDKyXkld.prototype, "dkxkldGhichu", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'dkxkld_solanxem', default: () => '(0)' }),
    __metadata("design:type", Number)
], TblDKyXkld.prototype, "dkxkldSolanxem", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'dkxkldht_telephone', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TblDKyXkld.prototype, "dkxkldhtTelephone", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'dkxkldht_email', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TblDKyXkld.prototype, "dkxkldhtEmail", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'dkxkldht_address', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TblDKyXkld.prototype, "dkxkldhtAddress", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'DaXuatCanh', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TblDKyXkld.prototype, "daXuatCanh", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'NgayXuatCanh', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblDKyXkld.prototype, "ngayXuatCanh", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'CreatedDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblDKyXkld.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'CreatedBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblDKyXkld.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ModifiredDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblDKyXkld.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'ModifiredBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblDKyXkld.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'DaXem', nullable: true, default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TblDKyXkld.prototype, "daXem", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'IdDoanhNghiep', nullable: true }),
    __metadata("design:type", String)
], TblDKyXkld.prototype, "idDoanhNghiep", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'NgayGioiThieu', nullable: true }),
    __metadata("design:type", Date)
], TblDKyXkld.prototype, "ngayGioiThieu", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'NguoiBaoLanh', nullable: true, length: 250 }),
    __metadata("design:type", String)
], TblDKyXkld.prototype, "nguoiBaoLanh", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Dienthoailienhe', nullable: true, length: 30 }),
    __metadata("design:type", String)
], TblDKyXkld.prototype, "dienthoailienhe", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'ThonBuon', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblDKyXkld.prototype, "thonBuon", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'XaPhuong', nullable: true, length: 8 }),
    __metadata("design:type", String)
], TblDKyXkld.prototype, "xaPhuong", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'HuyenThiThanhPho', nullable: true, length: 5 }),
    __metadata("design:type", String)
], TblDKyXkld.prototype, "huyenThiThanhPho", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Tinh', nullable: true, length: 2 }),
    __metadata("design:type", String)
], TblDKyXkld.prototype, "tinh", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'DatSoTuyen', nullable: true, default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TblDKyXkld.prototype, "datSoTuyen", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder' }),
    __metadata("design:type", Number)
], TblDKyXkld.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Venuoc', nullable: true, default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TblDKyXkld.prototype, "venuoc", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'Ngayvenuoc', nullable: true }),
    __metadata("design:type", Date)
], TblDKyXkld.prototype, "ngayvenuoc", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Lydovenuoc', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblDKyXkld.prototype, "lydovenuoc", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IdNganhKinhTe', nullable: true, length: 4 }),
    __metadata("design:type", String)
], TblDKyXkld.prototype, "idNganhKinhTe", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'Vitrimongmuon', nullable: true }),
    __metadata("design:type", Number)
], TblDKyXkld.prototype, "vitrimongmuon", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Viecdanglam', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblDKyXkld.prototype, "viecdanglam", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblDmTrinhDoHocVanDtn_entity_1.TblDmTrinhDoHocVanDtn, (tblDmTrinhDoHocVanDtn) => tblDmTrinhDoHocVanDtn.tblDKyXklds),
    (0, typeorm_1.JoinColumn)([
        { name: 'dkxklddm_trinhdohocvan', referencedColumnName: 'hocvanId' },
    ]),
    __metadata("design:type", TblDmTrinhDoHocVanDtn_entity_1.TblDmTrinhDoHocVanDtn)
], TblDKyXkld.prototype, "dkxklddmTrinhdohocvan", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblDmGioiTinh_entity_1.TblDmGioiTinh, (tblDmGioiTinh) => tblDmGioiTinh.tblDKyXklds),
    (0, typeorm_1.JoinColumn)([{ name: 'dkxkld_gioitinh', referencedColumnName: 'idGioiTinh' }]),
    __metadata("design:type", TblDmGioiTinh_entity_1.TblDmGioiTinh)
], TblDKyXkld.prototype, "dkxkldGioitinh", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblDmKhaNangTaiChinh_entity_1.TblDmKhaNangTaiChinh, (tblDmKhaNangTaiChinh) => tblDmKhaNangTaiChinh.tblDKyXklds),
    (0, typeorm_1.JoinColumn)([
        { name: 'dkxkld_khanangtaichinh', referencedColumnName: 'idKnTaiChinh' },
    ]),
    __metadata("design:type", TblDmKhaNangTaiChinh_entity_1.TblDmKhaNangTaiChinh)
], TblDKyXkld.prototype, "dkxkldKhanangtaichinh", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblDmNgoaiNguDaoTao_entity_1.TblDmNgoaiNguDaoTao, (tblDmNgoaiNguDaoTao) => tblDmNgoaiNguDaoTao.tblDKyXklds),
    (0, typeorm_1.JoinColumn)([
        {
            name: 'dkxklddm_ngoaingudaotao',
            referencedColumnName: 'maNgoaingudaotao',
        },
    ]),
    __metadata("design:type", TblDmNgoaiNguDaoTao_entity_1.TblDmNgoaiNguDaoTao)
], TblDKyXkld.prototype, "dkxklddmNgoaingudaotao", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblDmTrangThai_entity_1.TblDmTrangThai, (tblDmTrangThai) => tblDmTrangThai.tblDKyXklds),
    (0, typeorm_1.JoinColumn)([{ name: 'dkxkld_duyet', referencedColumnName: 'idTrangThai' }]),
    __metadata("design:type", TblDmTrangThai_entity_1.TblDmTrangThai)
], TblDKyXkld.prototype, "dkxkldDuyet", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblDmTtHoChieu_entity_1.TblDmTtHoChieu, (tblDmTtHoChieu) => tblDmTtHoChieu.tblDKyXklds),
    (0, typeorm_1.JoinColumn)([{ name: 'dkxkld_hochieu', referencedColumnName: 'idTtHoChieu' }]),
    __metadata("design:type", TblDmTtHoChieu_entity_1.TblDmTtHoChieu)
], TblDKyXkld.prototype, "dkxkldHochieu", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblDmTtHonNhan_entity_1.TblDmTtHonNhan, (tblDmTtHonNhan) => tblDmTtHonNhan.tblDKyXklds),
    (0, typeorm_1.JoinColumn)([{ name: 'dkxkld_honnhan', referencedColumnName: 'idTtHonNhan' }]),
    __metadata("design:type", TblDmTtHonNhan_entity_1.TblDmTtHonNhan)
], TblDKyXkld.prototype, "dkxkldHonnhan", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblDmTtHoSo_entity_1.TblDmTtHoSo, (tblDmTtHoSo) => tblDmTtHoSo.tblDKyXklds),
    (0, typeorm_1.JoinColumn)([{ name: 'dkxkld_IdTTHS', referencedColumnName: 'idTths' }]),
    __metadata("design:type", TblDmTtHoSo_entity_1.TblDmTtHoSo)
], TblDKyXkld.prototype, "dkxkldIdTths", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblDmTtkqpv_entity_1.TblDmTtkqpv, (tblDmTtkqpv) => tblDmTtkqpv.tblDKyXklds),
    (0, typeorm_1.JoinColumn)([{ name: 'dkxkld_IdKQPV', referencedColumnName: 'idKqpv' }]),
    __metadata("design:type", TblDmTtkqpv_entity_1.TblDmTtkqpv)
], TblDKyXkld.prototype, "dkxkldIdKqpv", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblDmDoiTuongChinhSach_entity_1.TblDmDoiTuongChinhSach, (tblDmDoiTuongChinhSach) => tblDmDoiTuongChinhSach.tblDKyXklds),
    (0, typeorm_1.JoinColumn)([
        { name: 'dkxklddm_doituongchinhsach', referencedColumnName: 'dtcsId' },
    ]),
    __metadata("design:type", TblDmDoiTuongChinhSach_entity_1.TblDmDoiTuongChinhSach)
], TblDKyXkld.prototype, "dkxklddmDoituongchinhsach", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblDmQuocGia_entity_1.TblDmQuocGia, (tblDmQuocGia) => tblDmQuocGia.tblDKyXklds),
    (0, typeorm_1.JoinColumn)([{ name: 'dkxklddm_quocgia', referencedColumnName: 'maQuocGia' }]),
    __metadata("design:type", TblDmQuocGia_entity_1.TblDmQuocGia)
], TblDKyXkld.prototype, "dkxklddmQuocgia", void 0);
TblDKyXkld = __decorate([
    (0, typeorm_1.Index)('PK_tb_dkxkld', ['id'], { unique: true }),
    (0, typeorm_1.Entity)('tblDKyXKLD', { schema: 'dbo' })
], TblDKyXkld);
exports.TblDKyXkld = TblDKyXkld;
//# sourceMappingURL=TblDKyXkld.entity.js.map