"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const serve_static_1 = require("@nestjs/serve-static");
const typeorm_1 = require("@nestjs/typeorm");
const path_1 = require("path");
const jwt_strargety_1 = require("./common/auth/jwt.strargety");
const config_1 = require("./config");
const controller_provider_1 = require("./provider/controller.provider");
const service_provider_1 = require("./provider/service.provider");
const unitOfWork_1 = require("./provider/unitOfWork");
const sql = config_1.config.SQL;
console.log(sql);
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'public'),
            }),
            jwt_1.JwtModule.register({
                secret: config_1.config.AUTH.SECRET,
                signOptions: { expiresIn: config_1.config.AUTH.EXPIRES_IN },
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mssql',
                host: sql.HOST,
                port: Number(sql.PORT),
                username: sql.USERNAME,
                password: sql.PASSWORD,
                database: sql.DATABASE,
                entities: [(0, path_1.join)(__dirname, '/entity/sql/*.entity{.ts,.js}')],
                synchronize: false,
                options: {
                    encrypt: false,
                    trustServerCertificate: true,
                },
            }),
        ],
        controllers: [...controller_provider_1.controllerProvider],
        providers: [...service_provider_1.serviceProvider, jwt_strargety_1.JwtStrategy, unitOfWork_1.UnitOfWork],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map