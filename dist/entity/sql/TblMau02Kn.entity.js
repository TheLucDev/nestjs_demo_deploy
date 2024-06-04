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
exports.TblMau02Kn = void 0;
const typeorm_1 = require("typeorm");
const TblMau02Tt11_entity_1 = require("./TblMau02Tt11.entity");
let TblMau02Kn = class TblMau02Kn {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)('int', { primary: true, name: 'Id' }),
    __metadata("design:type", Number)
], TblMau02Kn.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { primary: true, name: 'Idphieu' }),
    __metadata("design:type", String)
], TblMau02Kn.prototype, "idphieu", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'tendonvi', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblMau02Kn.prototype, "tendonvi", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'chucvu', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblMau02Kn.prototype, "chucvu", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'congviec', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblMau02Kn.prototype, "congviec", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'tungay', nullable: true }),
    __metadata("design:type", Date)
], TblMau02Kn.prototype, "tungay", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'denngay', nullable: true }),
    __metadata("design:type", Date)
], TblMau02Kn.prototype, "denngay", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', nullable: true }),
    __metadata("design:type", Boolean)
], TblMau02Kn.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblMau02Tt11_entity_1.TblMau02Tt11, (tblMau02Tt11) => tblMau02Tt11.tblMau02Kns, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'Idphieu', referencedColumnName: 'idphieu' }]),
    __metadata("design:type", TblMau02Tt11_entity_1.TblMau02Tt11)
], TblMau02Kn.prototype, "idphieu2", void 0);
TblMau02Kn = __decorate([
    (0, typeorm_1.Index)('PK_tblMau02KN', ['id', 'idphieu'], { unique: true }),
    (0, typeorm_1.Entity)('tblMau02KN', { schema: 'dbo' })
], TblMau02Kn);
exports.TblMau02Kn = TblMau02Kn;
//# sourceMappingURL=TblMau02Kn.entity.js.map