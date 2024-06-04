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
exports.TblDmCapQuanly = void 0;
const typeorm_1 = require("typeorm");
let TblDmCapQuanly = class TblDmCapQuanly {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)('int', { primary: true, name: 'Id' }),
    __metadata("design:type", Number)
], TblDmCapQuanly.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Cap', nullable: true, length: 5 }),
    __metadata("design:type", String)
], TblDmCapQuanly.prototype, "cap", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Ten', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblDmCapQuanly.prototype, "ten", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', nullable: true }),
    __metadata("design:type", Boolean)
], TblDmCapQuanly.prototype, "status", void 0);
TblDmCapQuanly = __decorate([
    (0, typeorm_1.Index)('PK_tblDmcapQuanly', ['id'], { unique: true }),
    (0, typeorm_1.Entity)('tblDmCapQuanly', { schema: 'dbo' })
], TblDmCapQuanly);
exports.TblDmCapQuanly = TblDmCapQuanly;
//# sourceMappingURL=TblDmCapQuanly.entity.js.map