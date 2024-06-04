import { GetUserDto } from 'src/common/dto/user.dto';
import { UserService } from 'src/service/user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    GetAll(model: GetUserDto): Promise<any>;
    GetDetail(idUser: string): Promise<any>;
}
