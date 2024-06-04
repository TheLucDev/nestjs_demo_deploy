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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitOfWork = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const typeorm_linq_repository_1 = require("typeorm-linq-repository");
const TbUser_entity_1 = require("../entity/sql/TbUser.entity");
const TbMenuAdmin_entity_1 = require("../entity/sql/TbMenuAdmin.entity");
let UnitOfWork = class UnitOfWork {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    TbUserRepo() {
        return (this.tbUsers ||
            (this.tbUsers = new typeorm_linq_repository_1.LinqRepository(this.dataSource, TbUser_entity_1.TbUser)));
    }
    TbMenuAdminRepo() {
        return (this.tbMenuAdmin ||
            (this.tbMenuAdmin = new typeorm_linq_repository_1.LinqRepository(this.dataSource, TbMenuAdmin_entity_1.TbMenuAdmin)));
    }
};
UnitOfWork = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.REQUEST }),
    __param(0, (0, typeorm_1.InjectDataSource)()),
    __metadata("design:paramtypes", [typeorm_2.DataSource])
], UnitOfWork);
exports.UnitOfWork = UnitOfWork;
//# sourceMappingURL=unitOfWork.js.map