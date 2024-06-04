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
exports.TblM27Bangke = void 0;
const typeorm_1 = require("typeorm");
const TblM27Socung_entity_1 = require("./TblM27Socung.entity");
const TblM27Chitiet_entity_1 = require("./TblM27Chitiet.entity");
let TblM27Bangke = class TblM27Bangke {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'IdMaho', length: 20 }),
    __metadata("design:type", String)
], TblM27Bangke.prototype, "idMaho", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Diachi', length: 255 }),
    __metadata("design:type", String)
], TblM27Bangke.prototype, "diachi", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'Sothanhvien' }),
    __metadata("design:type", Number)
], TblM27Bangke.prototype, "sothanhvien", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Ghichu', length: 255 }),
    __metadata("design:type", String)
], TblM27Bangke.prototype, "ghichu", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder', default: () => '(1)' }),
    __metadata("design:type", Number)
], TblM27Bangke.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'CreatedDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblM27Bangke.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'CreatedBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblM27Bangke.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ModifiredDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblM27Bangke.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'ModifiredBy',
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblM27Bangke.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', default: () => '(1)' }),
    __metadata("design:type", Boolean)
], TblM27Bangke.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblM27Socung_entity_1.TblM27Socung, (tblM27Socung) => tblM27Socung.tblM27Bangkes, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'Idm27', referencedColumnName: 'idm27' }]),
    __metadata("design:type", TblM27Socung_entity_1.TblM27Socung)
], TblM27Bangke.prototype, "idm", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TblM27Chitiet_entity_1.TblM27Chitiet, (tblM27Chitiet) => tblM27Chitiet.idMaho),
    __metadata("design:type", Array)
], TblM27Bangke.prototype, "tblM27Chitiets", void 0);
TblM27Bangke = __decorate([
    (0, typeorm_1.Index)('PK_tblM27Bangke', ['idMaho'], { unique: true }),
    (0, typeorm_1.Entity)('tblM27Bangke', { schema: 'dbo' })
], TblM27Bangke);
exports.TblM27Bangke = TblM27Bangke;
//# sourceMappingURL=TblM27Bangke.entity.js.map