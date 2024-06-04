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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const error_constant_1 = require("../common/constant/error.constant");
const unitOfWork_1 = require("../provider/unitOfWork");
let AuthService = class AuthService {
    constructor(uow, jwtService) {
        this.uow = uow;
        this.jwtService = jwtService;
    }
    async Login(body) {
        const { password, userName } = body;
        let userEntity = await this.uow
            .TbUserRepo()
            .getOne()
            .where((x) => x.userName)
            .equal(userName)
            .and((x) => x.password)
            .equal(password);
        if (!userEntity)
            throw new common_1.HttpException(error_constant_1.ErrorConstant.USER_NOT_FOUND, common_1.HttpStatus.FORBIDDEN);
        const token = await this.jwtService
            .signAsync({ user_id: userEntity.idUser })
            .catch((e) => {
            throw e;
        });
        return { id: userEntity.idUser, name: userEntity.userName, token };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [unitOfWork_1.UnitOfWork,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map