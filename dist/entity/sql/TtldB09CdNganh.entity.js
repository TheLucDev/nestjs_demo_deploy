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
exports.TtldB09CdNganh = void 0;
const typeorm_1 = require("typeorm");
let TtldB09CdNganh = class TtldB09CdNganh {
};
__decorate([
    (0, typeorm_1.Column)("varchar", { primary: true, name: "Madonvi", length: 15 }),
    __metadata("design:type", String)
], TtldB09CdNganh.prototype, "madonvi", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "Quy" }),
    __metadata("design:type", Number)
], TtldB09CdNganh.prototype, "quy", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "Nam" }),
    __metadata("design:type", Number)
], TtldB09CdNganh.prototype, "nam", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { primary: true, name: "Manhom", length: 4 }),
    __metadata("design:type", String)
], TtldB09CdNganh.prototype, "manhom", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "Solieu",
        nullable: true,
        precision: 18,
        scale: 2,
    }),
    __metadata("design:type", Number)
], TtldB09CdNganh.prototype, "solieu", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "NamQuy", nullable: true, length: 60 }),
    __metadata("design:type", String)
], TtldB09CdNganh.prototype, "namQuy", void 0);
TtldB09CdNganh = __decorate([
    (0, typeorm_1.Index)("PK_ttldB09CDNganh", ["manhom", "madonvi", "quy", "nam"], {
        unique: true,
    }),
    (0, typeorm_1.Entity)("ttldB09CDNganh", { schema: "dbo" })
], TtldB09CdNganh);
exports.TtldB09CdNganh = TtldB09CdNganh;
//# sourceMappingURL=TtldB09CdNganh.entity.js.map