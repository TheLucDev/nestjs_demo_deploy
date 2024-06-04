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
exports.TbContact = void 0;
const typeorm_1 = require("typeorm");
let TbContact = class TbContact {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "IdContact" }),
    __metadata("design:type", Number)
], TbContact.prototype, "idContact", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "Type", length: 4 }),
    __metadata("design:type", String)
], TbContact.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Name", length: 200 }),
    __metadata("design:type", String)
], TbContact.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Company", nullable: true, length: 50 }),
    __metadata("design:type", String)
], TbContact.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Address", nullable: true, length: 100 }),
    __metadata("design:type", String)
], TbContact.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "Phone", nullable: true, length: 50 }),
    __metadata("design:type", String)
], TbContact.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "Email", length: 150 }),
    __metadata("design:type", String)
], TbContact.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Contact", length: 4000 }),
    __metadata("design:type", String)
], TbContact.prototype, "contact", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Anwser", nullable: true }),
    __metadata("design:type", String)
], TbContact.prototype, "anwser", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "Reply", default: () => "(0)" }),
    __metadata("design:type", Boolean)
], TbContact.prototype, "reply", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "Status", default: () => "(1)" }),
    __metadata("design:type", Boolean)
], TbContact.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "CreatedDate", default: () => "getdate()" }),
    __metadata("design:type", Date)
], TbContact.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "CreatedBy",
        nullable: true,
        length: 50,
        default: () => "'System'",
    }),
    __metadata("design:type", String)
], TbContact.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "ModifiredDate", default: () => "getdate()" }),
    __metadata("design:type", Date)
], TbContact.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", {
        name: "ModifiredBy",
        nullable: true,
        length: 50,
        default: () => "N'System'",
    }),
    __metadata("design:type", String)
], TbContact.prototype, "modifiredBy", void 0);
TbContact = __decorate([
    (0, typeorm_1.Index)("PK_tbContact", ["idContact"], { unique: true }),
    (0, typeorm_1.Entity)("tbContact", { schema: "dbo" })
], TbContact);
exports.TbContact = TbContact;
//# sourceMappingURL=TbContact.entity.js.map