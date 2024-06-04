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
exports.TblDmchuyennganh = void 0;
const typeorm_1 = require("typeorm");
let TblDmchuyennganh = class TblDmchuyennganh {
};
__decorate([
    (0, typeorm_1.Column)("int", { name: "sott" }),
    __metadata("design:type", Number)
], TblDmchuyennganh.prototype, "sott", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "ma" }),
    __metadata("design:type", Number)
], TblDmchuyennganh.prototype, "ma", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "ten", nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblDmchuyennganh.prototype, "ten", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "show" }),
    __metadata("design:type", Boolean)
], TblDmchuyennganh.prototype, "show", void 0);
TblDmchuyennganh = __decorate([
    (0, typeorm_1.Index)("PK_tblDmchuyennganh", ["ma"], { unique: true }),
    (0, typeorm_1.Entity)("tblDmchuyennganh", { schema: "dbo" })
], TblDmchuyennganh);
exports.TblDmchuyennganh = TblDmchuyennganh;
//# sourceMappingURL=TblDmchuyennganh.entity.js.map