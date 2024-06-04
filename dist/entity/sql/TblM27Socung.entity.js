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
exports.TblM27Socung = void 0;
const typeorm_1 = require("typeorm");
const TblM27Bangke_entity_1 = require("./TblM27Bangke.entity");
let TblM27Socung = class TblM27Socung {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'Idm27' }),
    __metadata("design:type", Number)
], TblM27Socung.prototype, "idm27", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'Ngay', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblM27Socung.prototype, "ngay", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Ten', length: 255 }),
    __metadata("design:type", String)
], TblM27Socung.prototype, "ten", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IdDonvi', length: 15 }),
    __metadata("design:type", String)
], TblM27Socung.prototype, "idDonvi", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Quyenso', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblM27Socung.prototype, "quyenso", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'Nam' }),
    __metadata("design:type", Number)
], TblM27Socung.prototype, "nam", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Manv', nullable: true, length: 15 }),
    __metadata("design:type", String)
], TblM27Socung.prototype, "manv", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Matinh', nullable: true, length: 2 }),
    __metadata("design:type", String)
], TblM27Socung.prototype, "matinh", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Mahuyen', nullable: true, length: 5 }),
    __metadata("design:type", String)
], TblM27Socung.prototype, "mahuyen", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Maxa', nullable: true, length: 8 }),
    __metadata("design:type", String)
], TblM27Socung.prototype, "maxa", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Mathon', nullable: true, length: 12 }),
    __metadata("design:type", String)
], TblM27Socung.prototype, "mathon", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder', default: () => '(1)' }),
    __metadata("design:type", Number)
], TblM27Socung.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'CreatedDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblM27Socung.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'CreatedBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblM27Socung.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ModifiredDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblM27Socung.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'ModifiredBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblM27Socung.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TblM27Socung.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TblM27Bangke_entity_1.TblM27Bangke, (tblM27Bangke) => tblM27Bangke.idm),
    __metadata("design:type", Array)
], TblM27Socung.prototype, "tblM27Bangkes", void 0);
TblM27Socung = __decorate([
    (0, typeorm_1.Index)('PK_tblM27Socung', ['idm27'], { unique: true }),
    (0, typeorm_1.Entity)('tblM27Socung', { schema: 'dbo' })
], TblM27Socung);
exports.TblM27Socung = TblM27Socung;
//# sourceMappingURL=TblM27Socung.entity.js.map