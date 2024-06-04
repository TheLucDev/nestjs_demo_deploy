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
exports.TtldBantinchitietNd = void 0;
const typeorm_1 = require("typeorm");
let TtldBantinchitietNd = class TtldBantinchitietNd {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)('bigint', { primary: true, name: 'Id' }),
    __metadata("design:type", String)
], TtldBantinchitietNd.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { primary: true, name: 'IdOrder' }),
    __metadata("design:type", Number)
], TtldBantinchitietNd.prototype, "idOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder' }),
    __metadata("design:type", Number)
], TtldBantinchitietNd.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Tomtat', nullable: true, length: 300 }),
    __metadata("design:type", String)
], TtldBantinchitietNd.prototype, "tomtat", void 0);
__decorate([
    (0, typeorm_1.Column)('ntext', { name: 'Noidung', nullable: true }),
    __metadata("design:type", String)
], TtldBantinchitietNd.prototype, "noidung", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TtldBantinchitietNd.prototype, "status", void 0);
TtldBantinchitietNd = __decorate([
    (0, typeorm_1.Index)('PK_ttldBantinchitietND', ['id', 'idOrder'], { unique: true }),
    (0, typeorm_1.Entity)('ttldBantinchitietND', { schema: 'dbo' })
], TtldBantinchitietNd);
exports.TtldBantinchitietNd = TtldBantinchitietNd;
//# sourceMappingURL=TtldBantinchitietNd.entity.js.map