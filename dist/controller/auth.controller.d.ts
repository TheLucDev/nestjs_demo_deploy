import { AuthLoginReq } from 'src/common/dto/auth-login.req';
import { AuthService } from 'src/service/auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(body: AuthLoginReq): Promise<{
        id: string;
        name: string;
        token: string;
    }>;
}
