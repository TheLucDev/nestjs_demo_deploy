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
exports.TtldBantinHtMchitiet = void 0;
const typeorm_1 = require("typeorm");
const TtldBantinHtm_entity_1 = require("./TtldBantinHtm.entity");
let TtldBantinHtMchitiet = class TtldBantinHtMchitiet {
};
__decorate([
    (0, typeorm_1.Column)('int', { primary: true, name: 'IdBantin' }),
    __metadata("design:type", Number)
], TtldBantinHtMchitiet.prototype, "idBantin", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { primary: true, name: 'IdCode' }),
    __metadata("design:type", Number)
], TtldBantinHtMchitiet.prototype, "idCode", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Itemcode', nullable: true, length: 5 }),
    __metadata("design:type", String)
], TtldBantinHtMchitiet.prototype, "itemcode", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', {
        name: 'Quantity',
        precision: 18,
        scale: 2,
        default: () => '(0)',
    }),
    __metadata("design:type", Number)
], TtldBantinHtMchitiet.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'Status', default: () => '(0)' }),
    __metadata("design:type", Number)
], TtldBantinHtMchitiet.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Ghichu', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TtldBantinHtMchitiet.prototype, "ghichu", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Truyvan', nullable: true }),
    __metadata("design:type", String)
], TtldBantinHtMchitiet.prototype, "truyvan", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TtldBantinHtm_entity_1.TtldBantinHtm, (ttldBantinHtm) => ttldBantinHtm.ttldBantinHtMchitiets, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)([{ name: 'IdBantin', referencedColumnName: 'idbantin' }]),
    __metadata("design:type", TtldBantinHtm_entity_1.TtldBantinHtm)
], TtldBantinHtMchitiet.prototype, "idBantin2", void 0);
TtldBantinHtMchitiet = __decorate([
    (0, typeorm_1.Index)('PK_ttldBantinHTMchitiet', ['idBantin', 'idCode'], { unique: true }),
    (0, typeorm_1.Entity)('ttldBantinHTMchitiet', { schema: 'dbo' })
], TtldBantinHtMchitiet);
exports.TtldBantinHtMchitiet = TtldBantinHtMchitiet;
//# sourceMappingURL=TtldBantinHtMchitiet.entity.js.map