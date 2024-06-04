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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const error_constant_1 = require("../common/constant/error.constant");
const logger_1 = require("../logger");
const unitOfWork_1 = require("../provider/unitOfWork");
let UserService = class UserService {
    constructor(uow) {
        this.uow = uow;
    }
    async GetUser(model) {
        let query = this.uow
            .TbUserRepo()
            .getAll()
            .where((u) => u.status)
            .equal(1);
        const { search, limit, page } = model;
        if (search != null) {
            query = query
                .or((x) => x.email)
                .contains(search)
                .or((x) => x.phone)
                .contains(search);
        }
        const total = await query.count();
        const pages = Math.ceil(total / limit);
        const docs = await query.skip((page - 1) * limit).take(limit);
        return { docs, total, pages, page };
    }
    async GetDetail(idUser) {
        try {
            let _entity = await this.uow
                .TbUserRepo()
                .getOne()
                .where((x) => x.idUser)
                .equal(idUser)
                .catch((e) => {
                throw e;
            });
            if (!_entity)
                throw new common_1.HttpException(error_constant_1.ErrorConstant.USER_NOT_FOUND, common_1.HttpStatus.CONFLICT);
            return {
                _entity,
            };
        }
        catch (error) {
            logger_1.logger.error(error);
            throw error;
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [unitOfWork_1.UnitOfWork])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map