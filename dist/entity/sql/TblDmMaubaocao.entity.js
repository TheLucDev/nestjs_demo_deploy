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
exports.TblDmMaubaocao = void 0;
const typeorm_1 = require("typeorm");
const TblDmLoaibaocao_entity_1 = require("./TblDmLoaibaocao.entity");
let TblDmMaubaocao = class TblDmMaubaocao {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)('int', { primary: true, name: 'Id' }),
    __metadata("design:type", Number)
], TblDmMaubaocao.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Sohieu', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblDmMaubaocao.prototype, "sohieu", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'TenMenu', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblDmMaubaocao.prototype, "tenMenu", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Tenbaocao', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblDmMaubaocao.prototype, "tenbaocao", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Phaply', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblDmMaubaocao.prototype, "phaply", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'Ngaybh', nullable: true }),
    __metadata("design:type", Date)
], TblDmMaubaocao.prototype, "ngaybh", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'NgayHL', nullable: true }),
    __metadata("design:type", Date)
], TblDmMaubaocao.prototype, "ngayHl", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'FilePath', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblDmMaubaocao.prototype, "filePath", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'FileType', nullable: true, length: 6 }),
    __metadata("design:type", String)
], TblDmMaubaocao.prototype, "fileType", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', nullable: true }),
    __metadata("design:type", Boolean)
], TblDmMaubaocao.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblDmLoaibaocao_entity_1.TblDmLoaibaocao, (tblDmLoaibaocao) => tblDmLoaibaocao.tblDmMaubaocaos, { onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)([{ name: 'Maso', referencedColumnName: 'maso' }]),
    __metadata("design:type", TblDmLoaibaocao_entity_1.TblDmLoaibaocao)
], TblDmMaubaocao.prototype, "maso", void 0);
TblDmMaubaocao = __decorate([
    (0, typeorm_1.Index)('PK_tblDmMaubaocao', ['id'], { unique: true }),
    (0, typeorm_1.Entity)('tblDmMaubaocao', { schema: 'dbo' })
], TblDmMaubaocao);
exports.TblDmMaubaocao = TblDmMaubaocao;
//# sourceMappingURL=TblDmMaubaocao.entity.js.map