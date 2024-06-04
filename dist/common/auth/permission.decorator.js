"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Permission = void 0;
const common_1 = require("@nestjs/common");
const Permission = (...params) => (0, common_1.SetMetadata)('policy', params);
exports.Permission = Permission;
//# sourceMappingURL=permission.decorator.js.map