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
exports.TbContentConfig = void 0;
const typeorm_1 = require("typeorm");
let TbContentConfig = class TbContentConfig {
};
__decorate([
    (0, typeorm_1.Column)("varchar", { primary: true, name: "PK_String", length: 20 }),
    __metadata("design:type", String)
], TbContentConfig.prototype, "pkString", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "Title", length: 50 }),
    __metadata("design:type", String)
], TbContentConfig.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "DisplayOrder", default: () => "(0)" }),
    __metadata("design:type", Number)
], TbContentConfig.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "IsContentHTML", default: () => "(1)" }),
    __metadata("design:type", Boolean)
], TbContentConfig.prototype, "isContentHtml", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "IsSlide", default: () => "(0)" }),
    __metadata("design:type", Boolean)
], TbContentConfig.prototype, "isSlide", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "IsMenu", default: () => "(0)" }),
    __metadata("design:type", Boolean)
], TbContentConfig.prototype, "isMenu", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "IsProduct", default: () => "(0)" }),
    __metadata("design:type", Boolean)
], TbContentConfig.prototype, "isProduct", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "IsArticle", default: () => "(0)" }),
    __metadata("design:type", Boolean)
], TbContentConfig.prototype, "isArticle", void 0);
TbContentConfig = __decorate([
    (0, typeorm_1.Index)("PK_tbContentHtmlConfig", ["pkString"], { unique: true }),
    (0, typeorm_1.Entity)("tbContentConfig", { schema: "dbo" })
], TbContentConfig);
exports.TbContentConfig = TbContentConfig;
//# sourceMappingURL=TbContentConfig.entity.js.map