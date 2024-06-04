import { GetUserDto } from 'src/common/dto/user.dto';
import { UnitOfWork } from 'src/provider/unitOfWork';
export declare class UserService {
    private readonly uow;
    constructor(uow: UnitOfWork);
    GetUser(model: GetUserDto): Promise<any>;
    GetDetail(idUser: string): Promise<any>;
}
