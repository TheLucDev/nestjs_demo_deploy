// import { CommonController } from 'src/controller/common.controller';
import { UserController } from 'src/controller/user.controller';
import { AuthController } from 'src/controller/auth.controller';
import { MenuAdminController } from 'src/controller/menuAdmin.controller';

export const controllerProvider = [
  UserController,
  AuthController,
  MenuAdminController,
];
