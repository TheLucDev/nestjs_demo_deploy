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
exports.TbUser = void 0;
const typeorm_1 = require("typeorm");
const TbUserGroup_entity_1 = require("./TbUserGroup.entity");
let TbUser = class TbUser {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'IdUser' }),
    __metadata("design:type", String)
], TbUser.prototype, "idUser", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Manv', nullable: true, length: 15 }),
    __metadata("design:type", String)
], TbUser.prototype, "manv", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'UserName', unique: true, length: 50 }),
    __metadata("design:type", String)
], TbUser.prototype, "userName", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'Password', length: 128 }),
    __metadata("design:type", String)
], TbUser.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Name', length: 250 }),
    __metadata("design:type", String)
], TbUser.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Phone', nullable: true, length: 50 }),
    __metadata("design:type", String)
], TbUser.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Email', length: 150 }),
    __metadata("design:type", String)
], TbUser.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('nvarchar', { name: 'Address', nullable: true, length: 500 }),
    __metadata("design:type", String)
], TbUser.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'Birdthday', nullable: true }),
    __metadata("design:type", Date)
], TbUser.prototype, "birdthday", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'DisplayOrder', default: () => '(0)' }),
    __metadata("design:type", Number)
], TbUser.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'CreatedDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TbUser.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'CreatedBy',
        length: 50,
        default: () => "'SYSTEM'",
    }),
    __metadata("design:type", String)
], TbUser.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'ModifiredDate', default: () => 'getdate()' }),
    __metadata("design:type", Date)
], TbUser.prototype, "modifiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'ModifiredBy',
        length: 50,
        default: () => "'SYSTEM'",
    }),
    __metadata("design:type", String)
], TbUser.prototype, "modifiredBy", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'Status', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TbUser.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'IsAdmin', nullable: true, default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TbUser.prototype, "isAdmin", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'duyetbientap', nullable: true, default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TbUser.prototype, "duyetbientap", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', {
        name: 'duyetchuyentin',
        nullable: true,
        default: () => '(0)',
    }),
    __metadata("design:type", Boolean)
], TbUser.prototype, "duyetchuyentin", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', {
        name: 'duyetcapphong',
        nullable: true,
        default: () => '(0)',
    }),
    __metadata("design:type", Boolean)
], TbUser.prototype, "duyetcapphong", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'duyetgiamdoc', nullable: true, default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TbUser.prototype, "duyetgiamdoc", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'idCapduyet', default: () => '(0)' }),
    __metadata("design:type", Number)
], TbUser.prototype, "idCapduyet", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TbUserGroup_entity_1.TbUserGroup, (tbUserGroup) => tbUserGroup.tbUsers, {
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'IdUserGroup', referencedColumnName: 'idUserGroup' }]),
    __metadata("design:type", TbUserGroup_entity_1.TbUserGroup)
], TbUser.prototype, "idUserGroup", void 0);
TbUser = __decorate([
    (0, typeorm_1.Index)('PK_tbl_User', ['idUser'], { unique: true }),
    (0, typeorm_1.Index)('Uk_tbl_User_UserName', ['userName'], { unique: true }),
    (0, typeorm_1.Entity)('tbUser', { schema: 'dbo' })
], TbUser);
exports.TbUser = TbUser;
//# sourceMappingURL=TbUser.entity.js.map