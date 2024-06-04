"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActiveStatusDisplay = exports.GenderEnum = exports.ActiveStatusEnum = void 0;
var ActiveStatusEnum;
(function (ActiveStatusEnum) {
    ActiveStatusEnum[ActiveStatusEnum["Active"] = 1] = "Active";
    ActiveStatusEnum[ActiveStatusEnum["UnActive"] = 2] = "UnActive";
})(ActiveStatusEnum = exports.ActiveStatusEnum || (exports.ActiveStatusEnum = {}));
var GenderEnum;
(function (GenderEnum) {
    GenderEnum[GenderEnum["MALE"] = 1] = "MALE";
    GenderEnum[GenderEnum["FEMALE"] = 2] = "FEMALE";
})(GenderEnum = exports.GenderEnum || (exports.GenderEnum = {}));
exports.ActiveStatusDisplay = [
    { id: ActiveStatusEnum.Active, name: 'Active' },
    { id: ActiveStatusEnum.UnActive, name: 'UnActive' },
];
//# sourceMappingURL=common.enum.js.map