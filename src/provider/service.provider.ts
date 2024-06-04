import { AuthService } from 'src/service/auth.service';
import { MenuAdminServices } from 'src/service/menuAdmin.service';
import { UserService } from 'src/service/user.service';
// import { FunctionalService } from 'src/service/functional.service';

export const serviceProvider = [UserService, AuthService, MenuAdminServices];
