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
exports.TblM01Plikn = void 0;
const typeorm_1 = require("typeorm");
const TblM01Plind23_entity_1 = require("./TblM01Plind23.entity");
let TblM01Plikn = class TblM01Plikn {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)('int', { primary: true, name: 'Id' }),
    __metadata("design:type", Number)
], TblM01Plikn.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { primary: true, name: 'Idphieu' }),
    __metadata("design:type", String)
], TblM01Plikn.prototype, "idphieu", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'tendonvi', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblM01Plikn.prototype, "tendonvi", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'chucvu', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblM01Plikn.prototype, "chucvu", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'congviec', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblM01Plikn.prototype, "congviec", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'tungay', nullable: true }),
    __metadata("design:type", Date)
], TblM01Plikn.prototype, "tungay", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'denngay', nullable: true }),
    __metadata("design:type", Date)
], TblM01Plikn.prototype, "denngay", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', nullable: true }),
    __metadata("design:type", Boolean)
], TblM01Plikn.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblM01Plind23_entity_1.TblM01Plind23, (tblM01Plind23) => tblM01Plind23.tblM01Plikns, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)([{ name: 'Idphieu', referencedColumnName: 'idphieu' }]),
    __metadata("design:type", TblM01Plind23_entity_1.TblM01Plind23)
], TblM01Plikn.prototype, "idphieu2", void 0);
TblM01Plikn = __decorate([
    (0, typeorm_1.Index)('PK_tblM01PLIKN', ['id', 'idphieu'], { unique: true }),
    (0, typeorm_1.Entity)('tblM01PLIKN', { schema: 'dbo' })
], TblM01Plikn);
exports.TblM01Plikn = TblM01Plikn;
//# sourceMappingURL=TblM01Plikn.entity.js.map