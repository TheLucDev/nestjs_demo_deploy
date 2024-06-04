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
exports.MenuAdminController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../common/auth/jwt-auth.guard");
const menuAdmin_service_1 = require("../service/menuAdmin.service");
let MenuAdminController = class MenuAdminController {
    constructor(menuAdminService) {
        this.menuAdminService = menuAdminService;
    }
    async GetAll() {
        return await this.menuAdminService.GetMenuAdmin();
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    (0, swagger_1.ApiOperation)({ summary: 'Danh sách Menu Admin' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MenuAdminController.prototype, "GetAll", null);
MenuAdminController = __decorate([
    (0, common_1.Controller)('MenuAdmin'),
    (0, swagger_1.ApiTags)('Menu Admin'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [menuAdmin_service_1.MenuAdminServices])
], MenuAdminController);
exports.MenuAdminController = MenuAdminController;
//# sourceMappingURL=menuAdmin.controller.js.map