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
exports.TtldBantinHtm = void 0;
const typeorm_1 = require("typeorm");
const TtldBantinHtMchitiet_entity_1 = require("./TtldBantinHtMchitiet.entity");
let TtldBantinHtm = class TtldBantinHtm {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'Idbantin' }),
    __metadata("design:type", Number)
], TtldBantinHtm.prototype, "idbantin", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Ten', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TtldBantinHtm.prototype, "ten", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Noidung', nullable: true, length: 500 }),
    __metadata("design:type", String)
], TtldBantinHtm.prototype, "noidung", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'Quy', nullable: true }),
    __metadata("design:type", Number)
], TtldBantinHtm.prototype, "quy", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'Nam', nullable: true }),
    __metadata("design:type", Number)
], TtldBantinHtm.prototype, "nam", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Nguon', nullable: true, length: 1000 }),
    __metadata("design:type", String)
], TtldBantinHtm.prototype, "nguon", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Banbientap', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TtldBantinHtm.prototype, "banbientap", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Dienthoai', nullable: true, length: 30 }),
    __metadata("design:type", String)
], TtldBantinHtm.prototype, "dienthoai", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Email', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TtldBantinHtm.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Website', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TtldBantinHtm.prototype, "website", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TtldBantinHtMchitiet_entity_1.TtldBantinHtMchitiet, (ttldBantinHtMchitiet) => ttldBantinHtMchitiet.idBantin2),
    __metadata("design:type", Array)
], TtldBantinHtm.prototype, "ttldBantinHtMchitiets", void 0);
TtldBantinHtm = __decorate([
    (0, typeorm_1.Index)('PK_ttldBantinHTM', ['idbantin'], { unique: true }),
    (0, typeorm_1.Entity)('ttldBantinHTM', { schema: 'dbo' })
], TtldBantinHtm);
exports.TtldBantinHtm = TtldBantinHtm;
//# sourceMappingURL=TtldBantinHtm.entity.js.map