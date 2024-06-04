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
exports.TblDictionary = void 0;
const typeorm_1 = require("typeorm");
let TblDictionary = class TblDictionary {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)('int', { primary: true, name: 'Id' }),
    __metadata("design:type", Number)
], TblDictionary.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'Tablename', length: 50 }),
    __metadata("design:type", String)
], TblDictionary.prototype, "tablename", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'FieldName', length: 50 }),
    __metadata("design:type", String)
], TblDictionary.prototype, "fieldName", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Adress', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblDictionary.prototype, "adress", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'RepText', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TblDictionary.prototype, "repText", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', nullable: true }),
    __metadata("design:type", Boolean)
], TblDictionary.prototype, "status", void 0);
TblDictionary = __decorate([
    (0, typeorm_1.Index)('PK_tblDictionary', ['id', 'tablename', 'fieldName'], { unique: true }),
    (0, typeorm_1.Entity)('tblDictionary', { schema: 'dbo' })
], TblDictionary);
exports.TblDictionary = TblDictionary;
//# sourceMappingURL=TblDictionary.entity.js.map