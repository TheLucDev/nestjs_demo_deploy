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
exports.EditUserDto = exports.CreateUserDto = exports.UpdateStaffDto = exports.UpdateDetailGroupRoleDto = exports.UpdateDetailStoreDto = exports.StaffActionEnum = exports.GetDetailDto = exports.GetUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const common_dto_1 = require("./common.dto");
class GetUserDto extends common_dto_1.SearchBaseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], GetUserDto.prototype, "search", void 0);
exports.GetUserDto = GetUserDto;
class GetDetailDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], GetDetailDto.prototype, "id", void 0);
exports.GetDetailDto = GetDetailDto;
var StaffActionEnum;
(function (StaffActionEnum) {
    StaffActionEnum["ADD"] = "ADD";
    StaffActionEnum["REMOVE"] = "REMOVE";
})(StaffActionEnum = exports.StaffActionEnum || (exports.StaffActionEnum = {}));
class UpdateDetailStoreDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateDetailStoreDto.prototype, "store_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, enum: StaffActionEnum }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(StaffActionEnum),
    __metadata("design:type", String)
], UpdateDetailStoreDto.prototype, "action", void 0);
exports.UpdateDetailStoreDto = UpdateDetailStoreDto;
class UpdateDetailGroupRoleDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateDetailGroupRoleDto.prototype, "groupRole_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, enum: StaffActionEnum }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(StaffActionEnum),
    __metadata("design:type", String)
], UpdateDetailGroupRoleDto.prototype, "action", void 0);
exports.UpdateDetailGroupRoleDto = UpdateDetailGroupRoleDto;
class UpdateStaffDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateStaffDto.prototype, "full_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateStaffDto.prototype, "phone_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateStaffDto.prototype, "birth_day", void 0);
exports.UpdateStaffDto = UpdateStaffDto;
class CreateUserDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "name", void 0);
exports.CreateUserDto = CreateUserDto;
class EditUserDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], EditUserDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], EditUserDto.prototype, "groupIds", void 0);
exports.EditUserDto = EditUserDto;
//# sourceMappingURL=user.dto.js.map