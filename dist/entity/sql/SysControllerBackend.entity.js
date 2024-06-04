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
exports.SysControllerBackend = void 0;
const typeorm_1 = require("typeorm");
let SysControllerBackend = class SysControllerBackend {
};
__decorate([
    (0, typeorm_1.Column)("varchar", { primary: true, name: "IdController", length: 21 }),
    __metadata("design:type", String)
], SysControllerBackend.prototype, "idController", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Title", length: 150 }),
    __metadata("design:type", String)
], SysControllerBackend.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "CreatedDate", default: () => "getdate()" }),
    __metadata("design:type", Date)
], SysControllerBackend.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "CreatedBy",
        length: 50,
        default: () => "'System'",
    }),
    __metadata("design:type", String)
], SysControllerBackend.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "ModifiredDate", default: () => "getdate()" }),
    __metadata("design:type", Date)
], SysControllerBackend.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", {
        name: "ModifiredBy",
        length: 50,
        default: () => "N'System'",
    }),
    __metadata("design:type", String)
], SysControllerBackend.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "Status", default: () => "(1)" }),
    __metadata("design:type", Boolean)
], SysControllerBackend.prototype, "status", void 0);
SysControllerBackend = __decorate([
    (0, typeorm_1.Index)("PK_sysControllerBackend", ["idController"], { unique: true }),
    (0, typeorm_1.Entity)("sysControllerBackend", { schema: "dbo" })
], SysControllerBackend);
exports.SysControllerBackend = SysControllerBackend;
//# sourceMappingURL=SysControllerBackend.entity.js.map