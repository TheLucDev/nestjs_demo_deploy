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
exports.TblM27SocauCt = void 0;
const typeorm_1 = require("typeorm");
const TblM27Socau_entity_1 = require("./TblM27Socau.entity");
let TblM27SocauCt = class TblM27SocauCt {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)('int', { primary: true, name: 'Idcau27' }),
    __metadata("design:type", Number)
], TblM27SocauCt.prototype, "idcau27", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { primary: true, name: 'Id' }),
    __metadata("design:type", Number)
], TblM27SocauCt.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'Ngay', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TblM27SocauCt.prototype, "ngay", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'GroupId' }),
    __metadata("design:type", Number)
], TblM27SocauCt.prototype, "groupId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'thutu', nullable: true, length: 10 }),
    __metadata("design:type", String)
], TblM27SocauCt.prototype, "thutu", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Address', nullable: true, length: 10 }),
    __metadata("design:type", String)
], TblM27SocauCt.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Matk', nullable: true, length: 20 }),
    __metadata("design:type", String)
], TblM27SocauCt.prototype, "matk", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Chitieu', length: 255 }),
    __metadata("design:type", String)
], TblM27SocauCt.prototype, "chitieu", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Noidung', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblM27SocauCt.prototype, "noidung", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Header' }),
    __metadata("design:type", Boolean)
], TblM27SocauCt.prototype, "header", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status' }),
    __metadata("design:type", Boolean)
], TblM27SocauCt.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblM27Socau_entity_1.TblM27Socau, (tblM27Socau) => tblM27Socau.tblM27SocauCts, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'Idcau27', referencedColumnName: 'idcau27' }]),
    __metadata("design:type", TblM27Socau_entity_1.TblM27Socau)
], TblM27SocauCt.prototype, "idcau", void 0);
TblM27SocauCt = __decorate([
    (0, typeorm_1.Index)('PK_tblM27SocauCT', ['idcau27', 'id'], { unique: true }),
    (0, typeorm_1.Entity)('tblM27SocauCT', { schema: 'dbo' })
], TblM27SocauCt);
exports.TblM27SocauCt = TblM27SocauCt;
//# sourceMappingURL=TblM27SocauCt.entity.js.map