"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorResponse = void 0;
class ErrorResponse {
    constructor(message = "error", data = null, success = false) {
        this.data = data;
        this.success = success;
        this.message = message;
    }
}
exports.ErrorResponse = ErrorResponse;
//# sourceMappingURL=errorResponse.js.map