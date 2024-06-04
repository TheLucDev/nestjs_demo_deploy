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
exports.SysConfig = void 0;
const typeorm_1 = require("typeorm");
let SysConfig = class SysConfig {
};
__decorate([
    (0, typeorm_1.Column)("int", { name: "IdOrder", nullable: true }),
    __metadata("design:type", Number)
], SysConfig.prototype, "idOrder", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { primary: true, name: "Name", length: 20 }),
    __metadata("design:type", String)
], SysConfig.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "Type", nullable: true, length: 50 }),
    __metadata("design:type", String)
], SysConfig.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Url", nullable: true, length: 255 }),
    __metadata("design:type", String)
], SysConfig.prototype, "url", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "ValueInterger", nullable: true }),
    __metadata("design:type", Number)
], SysConfig.prototype, "valueInterger", void 0);
__decorate([
    (0, typeorm_1.Column)("decimal", {
        name: "ValueNumber",
        nullable: true,
        precision: 18,
        scale: 2,
    }),
    __metadata("design:type", Number)
], SysConfig.prototype, "valueNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "ValueText", nullable: true, length: 255 }),
    __metadata("design:type", String)
], SysConfig.prototype, "valueText", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "Show", nullable: true }),
    __metadata("design:type", Boolean)
], SysConfig.prototype, "show", void 0);
SysConfig = __decorate([
    (0, typeorm_1.Index)("PK_sysConfig", ["name"], { unique: true }),
    (0, typeorm_1.Entity)("sysConfig", { schema: "dbo" })
], SysConfig);
exports.SysConfig = SysConfig;
//# sourceMappingURL=SysConfig.entity.js.map