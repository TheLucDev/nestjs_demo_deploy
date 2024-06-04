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
exports.TmpReportBiasocung = void 0;
const typeorm_1 = require("typeorm");
let TmpReportBiasocung = class TmpReportBiasocung {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)('int', { name: 'Idm27' }),
    __metadata("design:type", Number)
], TmpReportBiasocung.prototype, "idm27", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'Ngay' }),
    __metadata("design:type", Date)
], TmpReportBiasocung.prototype, "ngay", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'Nam' }),
    __metadata("design:type", Number)
], TmpReportBiasocung.prototype, "nam", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Quyenso', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TmpReportBiasocung.prototype, "quyenso", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Ten', length: 255 }),
    __metadata("design:type", String)
], TmpReportBiasocung.prototype, "ten", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'tentinh', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TmpReportBiasocung.prototype, "tentinh", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'tenhuyen', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TmpReportBiasocung.prototype, "tenhuyen", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'tenxa', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TmpReportBiasocung.prototype, "tenxa", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'tenthon', length: 50 }),
    __metadata("design:type", String)
], TmpReportBiasocung.prototype, "tenthon", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Matinh', nullable: true, length: 2 }),
    __metadata("design:type", String)
], TmpReportBiasocung.prototype, "matinh", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Mahuyen', nullable: true, length: 5 }),
    __metadata("design:type", String)
], TmpReportBiasocung.prototype, "mahuyen", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Maxa', nullable: true, length: 8 }),
    __metadata("design:type", String)
], TmpReportBiasocung.prototype, "maxa", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Mathon', nullable: true, length: 12 }),
    __metadata("design:type", String)
], TmpReportBiasocung.prototype, "mathon", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'kind' }),
    __metadata("design:type", Number)
], TmpReportBiasocung.prototype, "kind", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'hoten', length: 51 }),
    __metadata("design:type", String)
], TmpReportBiasocung.prototype, "hoten", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'diachi', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TmpReportBiasocung.prototype, "diachi", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'dienthoai', nullable: true, length: 30 }),
    __metadata("design:type", String)
], TmpReportBiasocung.prototype, "dienthoai", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'nam1', nullable: true, length: 30 }),
    __metadata("design:type", String)
], TmpReportBiasocung.prototype, "nam1", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'nam2', nullable: true, length: 30 }),
    __metadata("design:type", String)
], TmpReportBiasocung.prototype, "nam2", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'nam3', nullable: true, length: 30 }),
    __metadata("design:type", String)
], TmpReportBiasocung.prototype, "nam3", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'ht1', length: 51 }),
    __metadata("design:type", String)
], TmpReportBiasocung.prototype, "ht1", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'ht2', length: 51 }),
    __metadata("design:type", String)
], TmpReportBiasocung.prototype, "ht2", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'ht3', length: 51 }),
    __metadata("design:type", String)
], TmpReportBiasocung.prototype, "ht3", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'dc1', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TmpReportBiasocung.prototype, "dc1", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'dc2', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TmpReportBiasocung.prototype, "dc2", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'dc3', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TmpReportBiasocung.prototype, "dc3", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'tel1', nullable: true, length: 30 }),
    __metadata("design:type", String)
], TmpReportBiasocung.prototype, "tel1", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'tel2', nullable: true, length: 30 }),
    __metadata("design:type", String)
], TmpReportBiasocung.prototype, "tel2", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'tel3', nullable: true, length: 30 }),
    __metadata("design:type", String)
], TmpReportBiasocung.prototype, "tel3", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 't1', nullable: true, length: 1 }),
    __metadata("design:type", String)
], TmpReportBiasocung.prototype, "t1", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 't2', nullable: true, length: 1 }),
    __metadata("design:type", String)
], TmpReportBiasocung.prototype, "t2", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'h1', nullable: true, length: 1 }),
    __metadata("design:type", String)
], TmpReportBiasocung.prototype, "h1", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'h2', nullable: true, length: 1 }),
    __metadata("design:type", String)
], TmpReportBiasocung.prototype, "h2", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'h3', nullable: true, length: 1 }),
    __metadata("design:type", String)
], TmpReportBiasocung.prototype, "h3", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'x1', nullable: true, length: 1 }),
    __metadata("design:type", String)
], TmpReportBiasocung.prototype, "x1", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'x2', nullable: true, length: 1 }),
    __metadata("design:type", String)
], TmpReportBiasocung.prototype, "x2", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'x3', nullable: true, length: 1 }),
    __metadata("design:type", String)
], TmpReportBiasocung.prototype, "x3", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'x4', nullable: true, length: 1 }),
    __metadata("design:type", String)
], TmpReportBiasocung.prototype, "x4", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'x5', nullable: true, length: 1 }),
    __metadata("design:type", String)
], TmpReportBiasocung.prototype, "x5", void 0);
TmpReportBiasocung = __decorate([
    (0, typeorm_1.Entity)('tmpReportBiasocung', { schema: 'dbo' })
], TmpReportBiasocung);
exports.TmpReportBiasocung = TmpReportBiasocung;
//# sourceMappingURL=TmpReportBiasocung.entity.js.map