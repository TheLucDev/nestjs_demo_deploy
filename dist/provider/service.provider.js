"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceProvider = void 0;
const auth_service_1 = require("../service/auth.service");
const menuAdmin_service_1 = require("../service/menuAdmin.service");
const user_service_1 = require("../service/user.service");
exports.serviceProvider = [user_service_1.UserService, auth_service_1.AuthService, menuAdmin_service_1.MenuAdminServices];
//# sourceMappingURL=service.provider.js.map