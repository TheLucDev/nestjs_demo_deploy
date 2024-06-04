"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("./config");
const logger_1 = require("./logger");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const loggingError_interceptor_1 = require("./middleware/loggingError.interceptor");
const cookieParser = require("cookie-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix(config_1.config.BASE_PATH);
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Api document')
        .setDescription('The API description')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup(config_1.config.SWAGGER_PATH, app, document, {
        explorer: true,
        swaggerOptions: {
            docExpansion: 'none',
            filter: true,
            showRequestDuration: true,
            persistAuthorization: true,
        },
    });
    app.useGlobalInterceptors(new loggingError_interceptor_1.LoggingErrorInterceptor());
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.use(cookieParser());
    app.enableCors();
    const port = config_1.config.PORT;
    await app.listen(config_1.config.PORT, () => {
        logger_1.logger.info(`app listen port: ${port}`);
        logger_1.logger.info(`view swagger http://localhost:${port}${config_1.config.SWAGGER_PATH}`);
        console.log(`view swagger http://localhost:${port}${config_1.config.SWAGGER_PATH}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map