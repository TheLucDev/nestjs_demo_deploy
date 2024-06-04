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
exports.MenuAdminServices = void 0;
const common_1 = require("@nestjs/common");
const unitOfWork_1 = require("../provider/unitOfWork");
const common_utils_1 = require("../utils/common.utils");
let MenuAdminServices = class MenuAdminServices {
    constructor(uow) {
        this.uow = uow;
    }
    async GetMenuAdmin() {
        let query = this.uow.TbMenuAdminRepo().getAll();
        const total = await query.count();
        const docs = await query;
        const menuList = (0, common_utils_1.transformInputToMenu)(docs);
        return { menuList, total };
    }
};
MenuAdminServices = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [unitOfWork_1.UnitOfWork])
], MenuAdminServices);
exports.MenuAdminServices = MenuAdminServices;
//# sourceMappingURL=menuAdmin.service.js.map