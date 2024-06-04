"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllerProvider = void 0;
const user_controller_1 = require("../controller/user.controller");
const auth_controller_1 = require("../controller/auth.controller");
const menuAdmin_controller_1 = require("../controller/menuAdmin.controller");
exports.controllerProvider = [
    user_controller_1.UserController,
    auth_controller_1.AuthController,
    menuAdmin_controller_1.MenuAdminController,
];
//# sourceMappingURL=controller.provider.js.map