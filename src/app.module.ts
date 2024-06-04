import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { JwtStrategy } from './common/auth/jwt.strargety';
import { config } from './config';
import { controllerProvider } from './provider/controller.provider';
import { serviceProvider } from './provider/service.provider';
import { UnitOfWork } from './provider/unitOfWork';

const sql = config.SQL;
console.log(sql);
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    JwtModule.register({
      secret: config.AUTH.SECRET,
      signOptions: { expiresIn: config.AUTH.EXPIRES_IN },
    }),

    TypeOrmModule.forRoot({
      type: 'mssql',
      host: sql.HOST,
      port: Number(sql.PORT),
      username: sql.USERNAME,
      password: sql.PASSWORD,
      database: sql.DATABASE,
      entities: [join(__dirname, '/entity/sql/*.entity{.ts,.js}')],
      synchronize: false, // Đặt `synchronize` thành false để tránh thay đổi cơ sở dữ liệu tự động
      options: {
        encrypt: false, // Tắt SSL
        trustServerCertificate: true, // Tùy chọn này có thể cần thiết để tắt xác thực chứng chỉ máy chủ
      },
    }),
  ],
  controllers: [...controllerProvider],
  providers: [...serviceProvider, JwtStrategy, UnitOfWork],
})
export class AppModule {}
