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
exports.TbApiLink = void 0;
const typeorm_1 = require("typeorm");
let TbApiLink = class TbApiLink {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)('int', { primary: true, name: 'Id' }),
    __metadata("design:type", Number)
], TbApiLink.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'GroupId', nullable: true, length: 10 }),
    __metadata("design:type", String)
], TbApiLink.prototype, "groupId", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'LinkAPI', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TbApiLink.prototype, "linkApi", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Method', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TbApiLink.prototype, "method", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'RequesHeader', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TbApiLink.prototype, "requesHeader", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'AccessKey', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TbApiLink.prototype, "accessKey", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'SecretKey', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TbApiLink.prototype, "secretKey", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'AppName', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TbApiLink.prototype, "appName", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'PartnerCod', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TbApiLink.prototype, "partnerCod", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'PartnerCodeCus', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TbApiLink.prototype, "partnerCodeCus", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Authorization', nullable: true, length: 1000 }),
    __metadata("design:type", String)
], TbApiLink.prototype, "authorization", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status' }),
    __metadata("design:type", Boolean)
], TbApiLink.prototype, "status", void 0);
TbApiLink = __decorate([
    (0, typeorm_1.Index)('PK_tbApiLink', ['id'], { unique: true }),
    (0, typeorm_1.Entity)('tbApiLink', { schema: 'dbo' })
], TbApiLink);
exports.TbApiLink = TbApiLink;
//# sourceMappingURL=TbApiLink.entity.js.map