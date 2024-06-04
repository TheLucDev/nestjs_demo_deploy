import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthLoginReq } from 'src/common/dto/auth-login.req';
import { logger } from 'src/logger';
import { AuthService } from 'src/service/auth.service';
import { UserService } from 'src/service/user.service';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(
    private authService: AuthService, // private userService: UserService,
  ) {}

  @Post('/login')
  @ApiOperation({ summary: 'Đăng nhập' })
  public async login(@Body() body: AuthLoginReq) {
    logger.info(`login request: ${JSON.stringify(body.userName)}`);
    const res = await this.authService.Login(body);
    // truong hop can info user
    // if (res) {
    //   const detail = await this.userService.GetDetail(res.id);
    //   return { auth: res, user: detail };
    // }
    // return;
    return res;
  }
}
