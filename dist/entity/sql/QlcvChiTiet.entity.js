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
exports.QlcvChiTiet = void 0;
const typeorm_1 = require("typeorm");
const QlcvCongViec_entity_1 = require("./QlcvCongViec.entity");
let QlcvChiTiet = class QlcvChiTiet {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'Id' }),
    __metadata("design:type", String)
], QlcvChiTiet.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'Stt' }),
    __metadata("design:type", Number)
], QlcvChiTiet.prototype, "stt", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'RootId', nullable: true }),
    __metadata("design:type", String)
], QlcvChiTiet.prototype, "rootId", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'HangMucCongViec', nullable: true, length: 255 }),
    __metadata("design:type", String)
], QlcvChiTiet.prototype, "hangMucCongViec", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Dvt', nullable: true, length: 50 }),
    __metadata("design:type", String)
], QlcvChiTiet.prototype, "dvt", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', {
        name: 'SoLuong',
        nullable: true,
        precision: 18,
        scale: 2,
    }),
    __metadata("design:type", Number)
], QlcvChiTiet.prototype, "soLuong", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', {
        name: 'DonGia',
        nullable: true,
        precision: 18,
        scale: 2,
    }),
    __metadata("design:type", Number)
], QlcvChiTiet.prototype, "donGia", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', {
        name: 'ThanhTien',
        nullable: true,
        precision: 37,
        scale: 4,
    }),
    __metadata("design:type", Number)
], QlcvChiTiet.prototype, "thanhTien", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'Vat', nullable: true }),
    __metadata("design:type", Number)
], QlcvChiTiet.prototype, "vat", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', {
        name: 'TienThue',
        nullable: true,
        precision: 38,
        scale: 6,
    }),
    __metadata("design:type", Number)
], QlcvChiTiet.prototype, "tienThue", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', {
        name: 'TongCong',
        nullable: true,
        precision: 38,
        scale: 6,
    }),
    __metadata("design:type", Number)
], QlcvChiTiet.prototype, "tongCong", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Ghichu', nullable: true, length: 500 }),
    __metadata("design:type", String)
], QlcvChiTiet.prototype, "ghichu", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'CreatedDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], QlcvChiTiet.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'CreatedBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], QlcvChiTiet.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ModifiredDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], QlcvChiTiet.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'ModifiredBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], QlcvChiTiet.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], QlcvChiTiet.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => QlcvCongViec_entity_1.QlcvCongViec, (qlcvCongViec) => qlcvCongViec.qlcvChiTiets, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'Idqlcv', referencedColumnName: 'idqlcv' }]),
    __metadata("design:type", QlcvCongViec_entity_1.QlcvCongViec)
], QlcvChiTiet.prototype, "idqlcv", void 0);
QlcvChiTiet = __decorate([
    (0, typeorm_1.Index)('PK_QLCV_ChiTiet', ['id'], { unique: true }),
    (0, typeorm_1.Entity)('QLCV_ChiTiet', { schema: 'dbo' })
], QlcvChiTiet);
exports.QlcvChiTiet = QlcvChiTiet;
//# sourceMappingURL=QlcvChiTiet.entity.js.map