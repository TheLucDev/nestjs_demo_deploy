"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuccessResponse = void 0;
class SuccessResponse {
    constructor(data = null, message = "success", success = true) {
        this.data = data;
        this.success = success;
        this.message = message;
    }
}
exports.SuccessResponse = SuccessResponse;
//# sourceMappingURL=successResponse.js.map