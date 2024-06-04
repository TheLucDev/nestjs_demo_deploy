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
exports.CheckFunctionalDto = exports.SearchBaseDto = exports.PaginateResDto = exports.GetOptionsProperty = exports.PaginateReqDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class PaginateReqDto {
    constructor() {
        this.page = 1;
        this.limit = 10;
    }
    Standardized() {
        this.page = Number(this.page);
        this.limit = Number(this.limit);
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], PaginateReqDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], PaginateReqDto.prototype, "limit", void 0);
exports.PaginateReqDto = PaginateReqDto;
class GetOptionsProperty {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], GetOptionsProperty.prototype, "property", void 0);
exports.GetOptionsProperty = GetOptionsProperty;
class PaginateResDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PaginateResDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PaginateResDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PaginateResDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], PaginateResDto.prototype, "data", void 0);
exports.PaginateResDto = PaginateResDto;
class SearchBaseDto {
    Validation() {
        this.limit = Number(this.limit) || 10;
        this.page = Number(this.page) || 1;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], SearchBaseDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], SearchBaseDto.prototype, "page", void 0);
exports.SearchBaseDto = SearchBaseDto;
class CheckFunctionalDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], CheckFunctionalDto.prototype, "functional_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CheckFunctionalDto.prototype, "user_id", void 0);
exports.CheckFunctionalDto = CheckFunctionalDto;
//# sourceMappingURL=common.dto.js.map