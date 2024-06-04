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
exports.TbCustomer = void 0;
const typeorm_1 = require("typeorm");
let TbCustomer = class TbCustomer {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "bigint", name: "IdCustomer" }),
    __metadata("design:type", String)
], TbCustomer.prototype, "idCustomer", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "UserName", length: 50 }),
    __metadata("design:type", String)
], TbCustomer.prototype, "userName", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Password", length: 128 }),
    __metadata("design:type", String)
], TbCustomer.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "FullName", length: 200 }),
    __metadata("design:type", String)
], TbCustomer.prototype, "fullName", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Email", length: 50 }),
    __metadata("design:type", String)
], TbCustomer.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Address", nullable: true, length: 500 }),
    __metadata("design:type", String)
], TbCustomer.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Mobile", nullable: true, length: 50 }),
    __metadata("design:type", String)
], TbCustomer.prototype, "mobile", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "BirthDay", nullable: true }),
    __metadata("design:type", Date)
], TbCustomer.prototype, "birthDay", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "IsMale", nullable: true }),
    __metadata("design:type", Boolean)
], TbCustomer.prototype, "isMale", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "BHYT", nullable: true, length: 15 }),
    __metadata("design:type", String)
], TbCustomer.prototype, "bhyt", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "Effective", nullable: true }),
    __metadata("design:type", Date)
], TbCustomer.prototype, "effective", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "DisplayOrder", default: () => "(0)" }),
    __metadata("design:type", Number)
], TbCustomer.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "CreatedDate", default: () => "getdate()" }),
    __metadata("design:type", Date)
], TbCustomer.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "CreatedBy", nullable: true, length: 50 }),
    __metadata("design:type", String)
], TbCustomer.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "ModifiredDate", default: () => "getdate()" }),
    __metadata("design:type", Date)
], TbCustomer.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "ModifiredBy", nullable: true, length: 50 }),
    __metadata("design:type", String)
], TbCustomer.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "Status", default: () => "(1)" }),
    __metadata("design:type", Boolean)
], TbCustomer.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "IsLocked", default: () => "(0)" }),
    __metadata("design:type", Boolean)
], TbCustomer.prototype, "isLocked", void 0);
TbCustomer = __decorate([
    (0, typeorm_1.Index)("PK_tbl_Customer", ["idCustomer"], { unique: true }),
    (0, typeorm_1.Entity)("tbCustomer", { schema: "dbo" })
], TbCustomer);
exports.TbCustomer = TbCustomer;
//# sourceMappingURL=TbCustomer.entity.js.map