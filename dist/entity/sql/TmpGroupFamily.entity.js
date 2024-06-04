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
exports.TmpGroupFamily = void 0;
const typeorm_1 = require("typeorm");
const TmpFamily_entity_1 = require("./TmpFamily.entity");
let TmpGroupFamily = class TmpGroupFamily {
};
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "IdGroup" }),
    __metadata("design:type", Number)
], TmpGroupFamily.prototype, "idGroup", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "Kyhieu", nullable: true, length: 5 }),
    __metadata("design:type", String)
], TmpGroupFamily.prototype, "kyhieu", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Ten", nullable: true, length: 255 }),
    __metadata("design:type", String)
], TmpGroupFamily.prototype, "ten", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "Status", nullable: true }),
    __metadata("design:type", Boolean)
], TmpGroupFamily.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TmpFamily_entity_1.TmpFamily, (tmpFamily) => tmpFamily.idGroup2),
    __metadata("design:type", Array)
], TmpGroupFamily.prototype, "tmpFamilies", void 0);
TmpGroupFamily = __decorate([
    (0, typeorm_1.Index)("PK_tmpGroupFamily", ["idGroup"], { unique: true }),
    (0, typeorm_1.Entity)("tmpGroupFamily", { schema: "dbo" })
], TmpGroupFamily);
exports.TmpGroupFamily = TmpGroupFamily;
//# sourceMappingURL=TmpGroupFamily.entity.js.map