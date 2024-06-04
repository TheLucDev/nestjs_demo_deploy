import { JwtService } from '@nestjs/jwt';
import { AuthLoginReq } from 'src/common/dto/auth-login.req';
import { UnitOfWork } from 'src/provider/unitOfWork';
export declare class AuthService {
    private readonly uow;
    private readonly jwtService;
    constructor(uow: UnitOfWork, jwtService: JwtService);
    Login(body: AuthLoginReq): Promise<{
        id: string;
        name: string;
        token: string;
    }>;
}
