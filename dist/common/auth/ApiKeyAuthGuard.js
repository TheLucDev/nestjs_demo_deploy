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
exports.ApiKeyAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("../../config");
const authen_constant_1 = require("../constant/authen.constant");
let ApiKeyAuthGuard = class ApiKeyAuthGuard {
    constructor() {
    }
    async canActivate(context) {
        let request = context.switchToHttp().getRequest();
        let apiKey = request.headers[authen_constant_1.authenConstants.xApiKey];
        if (apiKey === config_1.config.API_KEY)
            return request.user = authen_constant_1.authenConstants.autoCallUser;
        throw new common_1.UnauthorizedException();
    }
};
ApiKeyAuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ApiKeyAuthGuard);
exports.ApiKeyAuthGuard = ApiKeyAuthGuard;
//# sourceMappingURL=ApiKeyAuthGuard.js.map