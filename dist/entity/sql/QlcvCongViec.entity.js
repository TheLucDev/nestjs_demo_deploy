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
var QlcvCongViec_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.QlcvCongViec = void 0;
const typeorm_1 = require("typeorm");
const QlcvChiTiet_entity_1 = require("./QlcvChiTiet.entity");
const QlcvPhancong_entity_1 = require("./QlcvPhancong.entity");
let QlcvCongViec = QlcvCongViec_1 = class QlcvCongViec {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'Idqlcv' }),
    __metadata("design:type", String)
], QlcvCongViec.prototype, "idqlcv", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'GroupLevel', nullable: true }),
    __metadata("design:type", Number)
], QlcvCongViec.prototype, "groupLevel", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'Stt', nullable: true }),
    __metadata("design:type", Number)
], QlcvCongViec.prototype, "stt", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdDot', nullable: true }),
    __metadata("design:type", Number)
], QlcvCongViec.prototype, "idDot", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'Ngay', nullable: true }),
    __metadata("design:type", Date)
], QlcvCongViec.prototype, "ngay", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'TenCongViec', nullable: true, length: 255 }),
    __metadata("design:type", String)
], QlcvCongViec.prototype, "tenCongViec", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'MoTa', nullable: true, length: 500 }),
    __metadata("design:type", String)
], QlcvCongViec.prototype, "moTa", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IdDonviChuTri', nullable: true, length: 15 }),
    __metadata("design:type", String)
], QlcvCongViec.prototype, "idDonviChuTri", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IdNguoiChuTri', nullable: true, length: 15 }),
    __metadata("design:type", String)
], QlcvCongViec.prototype, "idNguoiChuTri", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IdNguoithuchien', nullable: true, length: 15 }),
    __metadata("design:type", String)
], QlcvCongViec.prototype, "idNguoithuchien", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IdDonviPhoihop', nullable: true, length: 15 }),
    __metadata("design:type", String)
], QlcvCongViec.prototype, "idDonviPhoihop", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'NguoiPhoiHop', nullable: true, length: 50 }),
    __metadata("design:type", String)
], QlcvCongViec.prototype, "nguoiPhoiHop", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'NgayBatDau', nullable: true }),
    __metadata("design:type", Date)
], QlcvCongViec.prototype, "ngayBatDau", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'NgayKetThuc', nullable: true }),
    __metadata("design:type", Date)
], QlcvCongViec.prototype, "ngayKetThuc", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'MucDoUuTien', nullable: true, length: 50 }),
    __metadata("design:type", String)
], QlcvCongViec.prototype, "mucDoUuTien", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'KhoKhan', nullable: true, length: 500 }),
    __metadata("design:type", String)
], QlcvCongViec.prototype, "khoKhan", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Thuanloi', nullable: true, length: 500 }),
    __metadata("design:type", String)
], QlcvCongViec.prototype, "thuanloi", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Danhgia', nullable: true, length: 500 }),
    __metadata("design:type", String)
], QlcvCongViec.prototype, "danhgia", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Comment', nullable: true, length: 500 }),
    __metadata("design:type", String)
], QlcvCongViec.prototype, "comment", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'StartDate', nullable: true }),
    __metadata("design:type", Date)
], QlcvCongViec.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'EndDate', nullable: true }),
    __metadata("design:type", Date)
], QlcvCongViec.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'DuyetTeam', nullable: true }),
    __metadata("design:type", Boolean)
], QlcvCongViec.prototype, "duyetTeam", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'UserIdTeam', nullable: true, length: 50 }),
    __metadata("design:type", String)
], QlcvCongViec.prototype, "userIdTeam", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'TeamDate', nullable: true }),
    __metadata("design:type", Date)
], QlcvCongViec.prototype, "teamDate", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'TeamComment', nullable: true, length: 255 }),
    __metadata("design:type", String)
], QlcvCongViec.prototype, "teamComment", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'DuyetAccount', nullable: true }),
    __metadata("design:type", Boolean)
], QlcvCongViec.prototype, "duyetAccount", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'UserIdAccount', nullable: true, length: 50 }),
    __metadata("design:type", String)
], QlcvCongViec.prototype, "userIdAccount", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'AccountDate', nullable: true }),
    __metadata("design:type", Date)
], QlcvCongViec.prototype, "accountDate", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'AccountComment', nullable: true, length: 255 }),
    __metadata("design:type", String)
], QlcvCongViec.prototype, "accountComment", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'DuyetLeader', nullable: true }),
    __metadata("design:type", Boolean)
], QlcvCongViec.prototype, "duyetLeader", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'UserIdLeader', nullable: true, length: 50 }),
    __metadata("design:type", String)
], QlcvCongViec.prototype, "userIdLeader", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'LeaderComment', nullable: true, length: 255 }),
    __metadata("design:type", String)
], QlcvCongViec.prototype, "leaderComment", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'LeaderDate', nullable: true }),
    __metadata("design:type", Date)
], QlcvCongViec.prototype, "leaderDate", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', {
        name: 'KinhPhiDuTru',
        nullable: true,
        precision: 18,
        scale: 2,
    }),
    __metadata("design:type", Number)
], QlcvCongViec.prototype, "kinhPhiDuTru", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', {
        name: 'KinhPhiDuyet',
        nullable: true,
        precision: 18,
        scale: 2,
    }),
    __metadata("design:type", Number)
], QlcvCongViec.prototype, "kinhPhiDuyet", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', {
        name: 'Advance',
        nullable: true,
        precision: 18,
        scale: 2,
    }),
    __metadata("design:type", Number)
], QlcvCongViec.prototype, "advance", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', {
        name: 'Payment',
        nullable: true,
        precision: 18,
        scale: 2,
    }),
    __metadata("design:type", Number)
], QlcvCongViec.prototype, "payment", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'CreatedDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], QlcvCongViec.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'CreatedBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], QlcvCongViec.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ModifiredDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], QlcvCongViec.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'ModifiredBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], QlcvCongViec.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'ProjectStatus', nullable: true }),
    __metadata("design:type", Number)
], QlcvCongViec.prototype, "projectStatus", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'Monitor', nullable: true }),
    __metadata("design:type", Number)
], QlcvCongViec.prototype, "monitor", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], QlcvCongViec.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => QlcvChiTiet_entity_1.QlcvChiTiet, (qlcvChiTiet) => qlcvChiTiet.idqlcv),
    __metadata("design:type", Array)
], QlcvCongViec.prototype, "qlcvChiTiets", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => QlcvCongViec_1, (qlcvCongViec) => qlcvCongViec.qlcvCongViecs),
    (0, typeorm_1.JoinColumn)([{ name: 'IdParent', referencedColumnName: 'idqlcv' }]),
    __metadata("design:type", QlcvCongViec)
], QlcvCongViec.prototype, "idParent", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => QlcvCongViec_1, (qlcvCongViec) => qlcvCongViec.idParent),
    __metadata("design:type", Array)
], QlcvCongViec.prototype, "qlcvCongViecs", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => QlcvPhancong_entity_1.QlcvPhancong, (qlcvPhancong) => qlcvPhancong.idqlcv),
    __metadata("design:type", Array)
], QlcvCongViec.prototype, "qlcvPhancongs", void 0);
QlcvCongViec = QlcvCongViec_1 = __decorate([
    (0, typeorm_1.Index)('PK_QLCV_CongViec', ['idqlcv'], { unique: true }),
    (0, typeorm_1.Entity)('QLCV_CongViec', { schema: 'dbo' })
], QlcvCongViec);
exports.QlcvCongViec = QlcvCongViec;
//# sourceMappingURL=QlcvCongViec.entity.js.map