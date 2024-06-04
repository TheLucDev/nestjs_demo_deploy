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
exports.TmpChitieuthongke = void 0;
const typeorm_1 = require("typeorm");
let TmpChitieuthongke = class TmpChitieuthongke {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)("int", { name: "Id" }),
    __metadata("design:type", Number)
], TmpChitieuthongke.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "Madonvi", length: 15 }),
    __metadata("design:type", String)
], TmpChitieuthongke.prototype, "madonvi", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Quy" }),
    __metadata("design:type", Number)
], TmpChitieuthongke.prototype, "quy", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Nam" }),
    __metadata("design:type", Number)
], TmpChitieuthongke.prototype, "nam", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "Matk", nullable: true, length: 10 }),
    __metadata("design:type", String)
], TmpChitieuthongke.prototype, "matk", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Noidung", nullable: true, length: 511 }),
    __metadata("design:type", String)
], TmpChitieuthongke.prototype, "noidung", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "Solieu",
        nullable: true,
        precision: 18,
        scale: 2,
    }),
    __metadata("design:type", Number)
], TmpChitieuthongke.prototype, "solieu", void 0);
TmpChitieuthongke = __decorate([
    (0, typeorm_1.Entity)("tmpChitieuthongke", { schema: "dbo" })
], TmpChitieuthongke);
exports.TmpChitieuthongke = TmpChitieuthongke;
//# sourceMappingURL=TmpChitieuthongke.entity.js.map