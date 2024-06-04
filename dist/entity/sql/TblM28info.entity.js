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
exports.TblM28info = void 0;
const typeorm_1 = require("typeorm");
const TblM28Biendong_entity_1 = require("./TblM28Biendong.entity");
let TblM28info = class TblM28info {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'Id' }),
    __metadata("design:type", Number)
], TblM28info.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'Ngaylap', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblM28info.prototype, "ngaylap", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', {
        name: 'MucluongCu',
        nullable: true,
        precision: 18,
        scale: 0,
    }),
    __metadata("design:type", Number)
], TblM28info.prototype, "mucluongCu", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', {
        name: 'MucluongMoi',
        nullable: true,
        precision: 18,
        scale: 0,
    }),
    __metadata("design:type", Number)
], TblM28info.prototype, "mucluongMoi", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdChucdanhCu', nullable: true }),
    __metadata("design:type", Number)
], TblM28info.prototype, "idChucdanhCu", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdChucdanhMoi', nullable: true }),
    __metadata("design:type", Number)
], TblM28info.prototype, "idChucdanhMoi", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IdBacHocCu', nullable: true, length: 4 }),
    __metadata("design:type", String)
], TblM28info.prototype, "idBacHocCu", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IdBacHocMoi', nullable: true, length: 4 }),
    __metadata("design:type", String)
], TblM28info.prototype, "idBacHocMoi", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdNganhCu', nullable: true }),
    __metadata("design:type", Number)
], TblM28info.prototype, "idNganhCu", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IdNganhMoi', nullable: true }),
    __metadata("design:type", Number)
], TblM28info.prototype, "idNganhMoi", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IdLoaiDHLDCu', nullable: true, length: 4 }),
    __metadata("design:type", String)
], TblM28info.prototype, "idLoaiDhldCu", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IdLoaiDHLDMoi', nullable: true, length: 4 }),
    __metadata("design:type", String)
], TblM28info.prototype, "idLoaiDhldMoi", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Ghichu', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblM28info.prototype, "ghichu", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status' }),
    __metadata("design:type", Boolean)
], TblM28info.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder' }),
    __metadata("design:type", Number)
], TblM28info.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'CreatedDate' }),
    __metadata("design:type", Date)
], TblM28info.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'CreatedBy', length: 50 }),
    __metadata("design:type", String)
], TblM28info.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ModifiredDate' }),
    __metadata("design:type", Date)
], TblM28info.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'ModifiredBy', length: 50 }),
    __metadata("design:type", String)
], TblM28info.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblM28Biendong_entity_1.TblM28Biendong, (tblM28Biendong) => tblM28Biendong.tblM28infos, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)([{ name: 'Idphieu', referencedColumnName: 'idphieu' }]),
    __metadata("design:type", TblM28Biendong_entity_1.TblM28Biendong)
], TblM28info.prototype, "idphieu", void 0);
TblM28info = __decorate([
    (0, typeorm_1.Index)('PK_tblM28info', ['id'], { unique: true }),
    (0, typeorm_1.Entity)('tblM28info', { schema: 'dbo' })
], TblM28info);
exports.TblM28info = TblM28info;
//# sourceMappingURL=TblM28info.entity.js.map