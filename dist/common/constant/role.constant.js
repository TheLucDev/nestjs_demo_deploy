"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupRoleView = exports.roleConstants = void 0;
exports.roleConstants = {
    USER_LIST: "USER_LIST",
    USER_VIEW: "USER_VIEW",
    USER_CREATE: "USER_CREATE",
    USER_EDIT: "USER_EDIT",
    USER_DELETE: "USER_DELETE",
    ROLE_LIST: "ROLE_LIST",
    ROLE_VIEW: "ROLE_VIEW",
    ROLE_CREATE: "ROLE_CREATE",
    ROLE_EDIT: "ROLE_EDIT",
    ROLE_DELETE: "ROLE_DELETE",
};
exports.groupRoleView = {
    'User': [exports.roleConstants.USER_LIST,
        exports.roleConstants.USER_VIEW,
        exports.roleConstants.USER_CREATE,
        exports.roleConstants.USER_EDIT,
        exports.roleConstants.USER_DELETE],
    'Role': [exports.roleConstants.ROLE_LIST,
        exports.roleConstants.ROLE_VIEW,
        exports.roleConstants.ROLE_CREATE,
        exports.roleConstants.ROLE_EDIT,
        exports.roleConstants.ROLE_DELETE],
};
//# sourceMappingURL=role.constant.js.map