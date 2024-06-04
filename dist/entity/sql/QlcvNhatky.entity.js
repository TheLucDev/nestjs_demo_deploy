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
exports.QlcvNhatky = void 0;
const typeorm_1 = require("typeorm");
let QlcvNhatky = class QlcvNhatky {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)('int', { primary: true, name: 'Idnk' }),
    __metadata("design:type", Number)
], QlcvNhatky.prototype, "idnk", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'IdNhanvien', length: 15 }),
    __metadata("design:type", String)
], QlcvNhatky.prototype, "idNhanvien", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'Ngay' }),
    __metadata("design:type", Date)
], QlcvNhatky.prototype, "ngay", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'StartTime', nullable: true, length: 5 }),
    __metadata("design:type", String)
], QlcvNhatky.prototype, "startTime", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'EndTime', nullable: true, length: 5 }),
    __metadata("design:type", String)
], QlcvNhatky.prototype, "endTime", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Tencongviec', nullable: true, length: 255 }),
    __metadata("design:type", String)
], QlcvNhatky.prototype, "tencongviec", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'PPThuchien', nullable: true, length: 255 }),
    __metadata("design:type", String)
], QlcvNhatky.prototype, "ppThuchien", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdKetqua', nullable: true }),
    __metadata("design:type", Number)
], QlcvNhatky.prototype, "idKetqua", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'FinishDate', nullable: true }),
    __metadata("design:type", Date)
], QlcvNhatky.prototype, "finishDate", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DiemKPI', nullable: true }),
    __metadata("design:type", Number)
], QlcvNhatky.prototype, "diemKpi", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DiemDG', nullable: true }),
    __metadata("design:type", Number)
], QlcvNhatky.prototype, "diemDg", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], QlcvNhatky.prototype, "status", void 0);
QlcvNhatky = __decorate([
    (0, typeorm_1.Index)('PK_QLCV_nhatky', ['idnk', 'idNhanvien'], { unique: true }),
    (0, typeorm_1.Entity)('QLCV_nhatky', { schema: 'dbo' })
], QlcvNhatky);
exports.QlcvNhatky = QlcvNhatky;
//# sourceMappingURL=QlcvNhatky.entity.js.map