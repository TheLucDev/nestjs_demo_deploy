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
exports.TblM27Chitiet = void 0;
const typeorm_1 = require("typeorm");
const TblM27Bangke_entity_1 = require("./TblM27Bangke.entity");
let TblM27Chitiet = class TblM27Chitiet {
};
__decorate([
    (0, typeorm_1.Column)('bigint', { primary: true, name: 'Idtv' }),
    __metadata("design:type", String)
], TblM27Chitiet.prototype, "idtv", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'Iduv', nullable: true }),
    __metadata("design:type", String)
], TblM27Chitiet.prototype, "iduv", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'Idm27' }),
    __metadata("design:type", Number)
], TblM27Chitiet.prototype, "idm27", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'Ngay' }),
    __metadata("design:type", Date)
], TblM27Chitiet.prototype, "ngay", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Hoten', length: 50 }),
    __metadata("design:type", String)
], TblM27Chitiet.prototype, "hoten", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdQuanhe' }),
    __metadata("design:type", Number)
], TblM27Chitiet.prototype, "idQuanhe", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdGioitinh' }),
    __metadata("design:type", Number)
], TblM27Chitiet.prototype, "idGioitinh", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'Ngaysinh' }),
    __metadata("design:type", Date)
], TblM27Chitiet.prototype, "ngaysinh", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdDantoc' }),
    __metadata("design:type", Number)
], TblM27Chitiet.prototype, "idDantoc", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdGDPT', nullable: true }),
    __metadata("design:type", Number)
], TblM27Chitiet.prototype, "idGdpt", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdTdHocvan', nullable: true }),
    __metadata("design:type", Number)
], TblM27Chitiet.prototype, "idTdHocvan", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IdBachoc', nullable: true, length: 4 }),
    __metadata("design:type", String)
], TblM27Chitiet.prototype, "idBachoc", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'Idchuyenmon', nullable: true }),
    __metadata("design:type", Number)
], TblM27Chitiet.prototype, "idchuyenmon", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Congviecdanglam', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblM27Chitiet.prototype, "congviecdanglam", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Tencoquan', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblM27Chitiet.prototype, "tencoquan", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IdNKT', nullable: true, length: 4 }),
    __metadata("design:type", String)
], TblM27Chitiet.prototype, "idNkt", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdLamconganluong', nullable: true }),
    __metadata("design:type", Number)
], TblM27Chitiet.prototype, "idLamconganluong", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IdLoaihinhDN', nullable: true, length: 3 }),
    __metadata("design:type", String)
], TblM27Chitiet.prototype, "idLoaihinhDn", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdLoaithatnghiep', nullable: true }),
    __metadata("design:type", Number)
], TblM27Chitiet.prototype, "idLoaithatnghiep", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdTGthatnghiep', nullable: true }),
    __metadata("design:type", Number)
], TblM27Chitiet.prototype, "idTGthatnghiep", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'chkKhongthamgia', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TblM27Chitiet.prototype, "chkKhongthamgia", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Nguyennhan', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblM27Chitiet.prototype, "nguyennhan", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Ghichu', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblM27Chitiet.prototype, "ghichu", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder', default: () => '(1)' }),
    __metadata("design:type", Number)
], TblM27Chitiet.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'CreatedDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblM27Chitiet.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'CreatedBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblM27Chitiet.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ModifiredDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblM27Chitiet.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'ModifiredBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblM27Chitiet.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdBiendong', nullable: true }),
    __metadata("design:type", Number)
], TblM27Chitiet.prototype, "idBiendong", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TblM27Chitiet.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblM27Bangke_entity_1.TblM27Bangke, (tblM27Bangke) => tblM27Bangke.tblM27Chitiets, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)([{ name: 'IdMaho', referencedColumnName: 'idMaho' }]),
    __metadata("design:type", TblM27Bangke_entity_1.TblM27Bangke)
], TblM27Chitiet.prototype, "idMaho", void 0);
TblM27Chitiet = __decorate([
    (0, typeorm_1.Index)('PK_tblM27Chitiet', ['idtv'], { unique: true }),
    (0, typeorm_1.Entity)('tblM27Chitiet', { schema: 'dbo' })
], TblM27Chitiet);
exports.TblM27Chitiet = TblM27Chitiet;
//# sourceMappingURL=TblM27Chitiet.entity.js.map