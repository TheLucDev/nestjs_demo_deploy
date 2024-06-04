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
exports.TblLogBackup = void 0;
const typeorm_1 = require("typeorm");
let TblLogBackup = class TblLogBackup {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "Id" }),
    __metadata("design:type", Number)
], TblLogBackup.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "BackupFile", nullable: true, length: 250 }),
    __metadata("design:type", String)
], TblLogBackup.prototype, "backupFile", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Description", nullable: true, length: 250 }),
    __metadata("design:type", String)
], TblLogBackup.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "CreatedBy", length: 50 }),
    __metadata("design:type", String)
], TblLogBackup.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "CreatedDate" }),
    __metadata("design:type", Date)
], TblLogBackup.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "ModifiredBy", length: 50 }),
    __metadata("design:type", String)
], TblLogBackup.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "ModifiredDate" }),
    __metadata("design:type", Date)
], TblLogBackup.prototype, "modifiredDate", void 0);
TblLogBackup = __decorate([
    (0, typeorm_1.Entity)("tblLogBackup", { schema: "dbo" })
], TblLogBackup);
exports.TblLogBackup = TblLogBackup;
//# sourceMappingURL=TblLogBackup.entity.js.map