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
exports.TbUserPermission = void 0;
const typeorm_1 = require("typeorm");
const TbMenuApplication_entity_1 = require("./TbMenuApplication.entity");
let TbUserPermission = class TbUserPermission {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'UserName', length: 50 }),
    __metadata("design:type", String)
], TbUserPermission.prototype, "userName", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'IdMenu', length: 50 }),
    __metadata("design:type", String)
], TbUserPermission.prototype, "idMenu", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'ExecuteSelect', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TbUserPermission.prototype, "executeSelect", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'ExecuteInsert', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TbUserPermission.prototype, "executeInsert", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'ExecuteUpdate', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TbUserPermission.prototype, "executeUpdate", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'ExecuteDelete', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TbUserPermission.prototype, "executeDelete", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'ExecuteDuyet', default: () => '(0)' }),
    __metadata("design:type", Boolean)
], TbUserPermission.prototype, "executeDuyet", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TbMenuApplication_entity_1.TbMenuApplication, (tbMenuApplication) => tbMenuApplication.tbUserPermissions, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)([{ name: 'IdMenu', referencedColumnName: 'idMenu' }]),
    __metadata("design:type", TbMenuApplication_entity_1.TbMenuApplication)
], TbUserPermission.prototype, "idMenu2", void 0);
TbUserPermission = __decorate([
    (0, typeorm_1.Index)('PK_tbUserPermission', ['userName', 'idMenu'], { unique: true }),
    (0, typeorm_1.Entity)('tbUserPermission', { schema: 'dbo' })
], TbUserPermission);
exports.TbUserPermission = TbUserPermission;
//# sourceMappingURL=TbUserPermission.entity.js.map