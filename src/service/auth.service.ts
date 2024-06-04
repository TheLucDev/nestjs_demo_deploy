import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
// import { compareSync } from 'bcryptjs';
import { ErrorConstant } from 'src/common/constant/error.constant';
import { AuthLoginReq } from 'src/common/dto/auth-login.req';
import { UnitOfWork } from 'src/provider/unitOfWork';

@Injectable()
export class AuthService {
  constructor(
    private readonly uow: UnitOfWork,
    private readonly jwtService: JwtService,
  ) {}

  async Login(body: AuthLoginReq) {
    const { password, userName } = body;
    let userEntity = await this.uow
      .TbUserRepo()
      .getOne()
      .where((x) => x.userName)
      .equal(userName)
      .and((x) => x.password)
      .equal(password);
    if (!userEntity)
      throw new HttpException(
        ErrorConstant.USER_NOT_FOUND,
        HttpStatus.FORBIDDEN,
      );
    // Check hash password
    // const hashPassword = await compareSync(password, userEntity.password);
    // if (!hashPassword)
    //   throw new HttpException(
    //     ErrorConstant.USER_NOT_FOUND,
    //     HttpStatus.FORBIDDEN,
    //   );

    const token = await this.jwtService
      .signAsync({ user_id: userEntity.idUser })
      .catch((e) => {
        throw e;
      });
    return { id: userEntity.idUser, name: userEntity.userName, token };
  }
}
