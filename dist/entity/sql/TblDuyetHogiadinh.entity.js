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
exports.TblDuyetHogiadinh = void 0;
const typeorm_1 = require("typeorm");
let TblDuyetHogiadinh = class TblDuyetHogiadinh {
};
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "IdCap" }),
    __metadata("design:type", Number)
], TblDuyetHogiadinh.prototype, "idCap", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { primary: true, name: "Maho", length: 20 }),
    __metadata("design:type", String)
], TblDuyetHogiadinh.prototype, "maho", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "UserName",
        length: 50,
        default: () => "'system'",
    }),
    __metadata("design:type", String)
], TblDuyetHogiadinh.prototype, "userName", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "Ngayduyet", default: () => "getdate()" }),
    __metadata("design:type", Date)
], TblDuyetHogiadinh.prototype, "ngayduyet", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "Status", default: () => "(0)" }),
    __metadata("design:type", Boolean)
], TblDuyetHogiadinh.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Ghichu", nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblDuyetHogiadinh.prototype, "ghichu", void 0);
TblDuyetHogiadinh = __decorate([
    (0, typeorm_1.Index)("PK_tblDuyetHogiadinh", ["idCap", "maho"], { unique: true }),
    (0, typeorm_1.Entity)("tblDuyetHogiadinh", { schema: "dbo" })
], TblDuyetHogiadinh);
exports.TblDuyetHogiadinh = TblDuyetHogiadinh;
//# sourceMappingURL=TblDuyetHogiadinh.entity.js.map