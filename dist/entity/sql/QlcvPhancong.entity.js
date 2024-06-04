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
exports.QlcvPhancong = void 0;
const typeorm_1 = require("typeorm");
const QlcvCongViec_entity_1 = require("./QlcvCongViec.entity");
let QlcvPhancong = class QlcvPhancong {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'Id' }),
    __metadata("design:type", String)
], QlcvPhancong.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder' }),
    __metadata("design:type", Number)
], QlcvPhancong.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IdNhanvien', length: 15 }),
    __metadata("design:type", String)
], QlcvPhancong.prototype, "idNhanvien", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Tencongviec', nullable: true, length: 255 }),
    __metadata("design:type", String)
], QlcvPhancong.prototype, "tencongviec", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Comment', nullable: true, length: 255 }),
    __metadata("design:type", String)
], QlcvPhancong.prototype, "comment", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'Startday', nullable: true }),
    __metadata("design:type", Date)
], QlcvPhancong.prototype, "startday", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'Endday', nullable: true }),
    __metadata("design:type", Date)
], QlcvPhancong.prototype, "endday", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'Monitor', nullable: true }),
    __metadata("design:type", Number)
], QlcvPhancong.prototype, "monitor", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], QlcvPhancong.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => QlcvCongViec_entity_1.QlcvCongViec, (qlcvCongViec) => qlcvCongViec.qlcvPhancongs, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'Idqlcv', referencedColumnName: 'idqlcv' }]),
    __metadata("design:type", QlcvCongViec_entity_1.QlcvCongViec)
], QlcvPhancong.prototype, "idqlcv", void 0);
QlcvPhancong = __decorate([
    (0, typeorm_1.Index)('PK_QLCV_Phancong', ['id'], { unique: true }),
    (0, typeorm_1.Entity)('QLCV_Phancong', { schema: 'dbo' })
], QlcvPhancong);
exports.QlcvPhancong = QlcvPhancong;
//# sourceMappingURL=QlcvPhancong.entity.js.map