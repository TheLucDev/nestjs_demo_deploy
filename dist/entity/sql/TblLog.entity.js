"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TblLog = void 0;
const typeorm_1 = require("typeorm");
let TblLog = class TblLog {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "Id" }),
    __metadata("design:type", Number)
], TblLog.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "Date", default: () => "getdate()" }),
    __metadata("design:type", Date)
], TblLog.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Thread", length: 255 }),
    __metadata("design:type", String)
], TblLog.prototype, "thread", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Level", length: 512 }),
    __metadata("design:type", String)
], TblLog.prototype, "level", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Logger", length: 512 }),
    __metadata("design:type", String)
], TblLog.prototype, "logger", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Message", length: 4000 }),
    __metadata("design:type", String)
], TblLog.prototype, "message", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Exception", nullable: true, length: 4000 }),
    __metadata("design:type", String)
], TblLog.prototype, "exception", void 0);
TblLog = __decorate([
    (0, typeorm_1.Entity)("tblLog", { schema: "dbo" })
], TblLog);
exports.TblLog = TblLog;
//# sourceMappingURL=TblLog.entity.js.map