import { AuthService } from 'src/service/auth.service';
import { MenuAdminServices } from 'src/service/menuAdmin.service';
import { UserService } from 'src/service/user.service';
export declare const serviceProvider: (typeof MenuAdminServices | typeof UserService | typeof AuthService)[];
