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
exports.QlcvDot = void 0;
const typeorm_1 = require("typeorm");
let QlcvDot = class QlcvDot {
};
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "IdDot" }),
    __metadata("design:type", Number)
], QlcvDot.prototype, "idDot", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Ten", length: 255 }),
    __metadata("design:type", String)
], QlcvDot.prototype, "ten", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "Ngay" }),
    __metadata("design:type", Date)
], QlcvDot.prototype, "ngay", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "Batdau" }),
    __metadata("design:type", Date)
], QlcvDot.prototype, "batdau", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "Ketthuc" }),
    __metadata("design:type", Date)
], QlcvDot.prototype, "ketthuc", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "Status", default: () => "(1)" }),
    __metadata("design:type", Boolean)
], QlcvDot.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Monitor" }),
    __metadata("design:type", Number)
], QlcvDot.prototype, "monitor", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "CreatedDate", default: () => "getdate()" }),
    __metadata("design:type", Date)
], QlcvDot.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "CreatedBy",
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], QlcvDot.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "ModifiredDate", default: () => "getdate()" }),
    __metadata("design:type", Date)
], QlcvDot.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "ModifiredBy",
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], QlcvDot.prototype, "modifiredBy", void 0);
QlcvDot = __decorate([
    (0, typeorm_1.Index)("PK_QLCV_Dot", ["idDot"], { unique: true }),
    (0, typeorm_1.Entity)("QLCV_Dot", { schema: "dbo" })
], QlcvDot);
exports.QlcvDot = QlcvDot;
//# sourceMappingURL=QlcvDot.entity.js.map