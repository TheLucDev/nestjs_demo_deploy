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
var Tree_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tree = void 0;
const typeorm_1 = require("typeorm");
let Tree = Tree_1 = class Tree {
};
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "nodeId" }),
    __metadata("design:type", Number)
], Tree.prototype, "nodeId", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar", { name: "name", nullable: true }),
    __metadata("design:type", String)
], Tree.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Tree_1, (tree) => tree.trees),
    (0, typeorm_1.JoinColumn)([{ name: "parentNodeId", referencedColumnName: "nodeId" }]),
    __metadata("design:type", Tree)
], Tree.prototype, "parentNode", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Tree_1, (tree) => tree.parentNode),
    __metadata("design:type", Array)
], Tree.prototype, "trees", void 0);
Tree = Tree_1 = __decorate([
    (0, typeorm_1.Index)("PK__Tree__92881BD35BE59E26", ["nodeId"], { unique: true }),
    (0, typeorm_1.Entity)("Tree", { schema: "dbo" })
], Tree);
exports.Tree = Tree;
//# sourceMappingURL=Tree.entity.js.map