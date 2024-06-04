"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneratePasswdClass = exports.GetKeyByValue = exports.AddZeroBefore = exports.UniqueArrayItem = exports.UniqueArray = exports.FlattenObj = exports.TotalPrice = exports.Vat10 = exports.Vat8 = exports.GroupObjToExpandMenuCode = exports.ReplaceChar = exports.DataMapper = exports.FormatPhoneNumber = exports.TodayIsBirth = exports.JoinNotNull = exports.getNowUTCTime = exports.getUTCTime = exports.getGMTTime = void 0;
const moment = require("moment");
function getGMTTime(time, GMT = null) {
    if (!time) {
        return null;
    }
    if (typeof (time.getTime) !== 'function')
        time = new Date(time);
    if (GMT) {
        let gmtDate = new Date(time.getTime() - ((Number(GMT) * (-60)) * 60 * 1000));
        return gmtDate;
    }
    let gmtDate = new Date(time.getTime() - (time.getTimezoneOffset() * 60 * 1000));
    return gmtDate;
}
exports.getGMTTime = getGMTTime;
const getUTCTime = (time) => {
    if (!time) {
        return null;
    }
    if (typeof (time.getTime) !== 'function')
        time = new Date(time);
    let utcDate = new Date(time.getTime() - (time.getTimezoneOffset() * 60 * 1000 * (-1)));
    return utcDate;
};
exports.getUTCTime = getUTCTime;
const getNowUTCTime = () => {
    return (0, exports.getUTCTime)(new Date());
};
exports.getNowUTCTime = getNowUTCTime;
const JoinNotNull = (input, seperator = ' ') => {
    return input.map(x => x.trim()).filter(x => x != null && x !== '').join(seperator);
};
exports.JoinNotNull = JoinNotNull;
const TodayIsBirth = (birth_day) => {
    return birth_day === moment().format('YYYY-MM-DD');
};
exports.TodayIsBirth = TodayIsBirth;
const FormatPhoneNumber = (phone_number) => {
    return phone_number.substr(phone_number.length - 9);
};
exports.FormatPhoneNumber = FormatPhoneNumber;
function DataMapper(source, dest) {
    Object.keys(dest).forEach((key) => {
        if (source[key] == null)
            return;
        dest[key] = source[key];
    });
    return dest;
}
exports.DataMapper = DataMapper;
function ReplaceChar(ori, replaceBy, idx) {
    let newStringArray = ori.split("");
    newStringArray[idx] = replaceBy;
    return newStringArray.join("");
}
exports.ReplaceChar = ReplaceChar;
const GroupObjToExpandMenuCode = (array) => {
    var _a, _b, _c, _d, _e;
    const groupParentId = array.reduce((group, item) => {
        var _a;
        const { parent_id } = item;
        group[parent_id] = (_a = group[parent_id]) !== null && _a !== void 0 ? _a : [];
        group[parent_id].push(item);
        return group;
    }, {});
    const results = [];
    for (let [key, value] of Object.entries(groupParentId)) {
        if (Array.isArray(value)) {
            if (value.length === 1) {
                results.push(Object.assign(Object.assign({}, value[0]), { menu_expand_name: (_a = value[0]) === null || _a === void 0 ? void 0 : _a.menu_name }));
            }
            else if (value.length === 2) {
                results.push(Object.assign(Object.assign({}, value[0]), { menu_expand_name: ((_b = value[0]) === null || _b === void 0 ? void 0 : _b.menu_name) + ' ' + ((_c = value[1]) === null || _c === void 0 ? void 0 : _c.menu_name) }));
                results.push(Object.assign(Object.assign({}, value[1]), { menu_expand_name: ((_d = value[0]) === null || _d === void 0 ? void 0 : _d.menu_name) + ' ' + ((_e = value[1]) === null || _e === void 0 ? void 0 : _e.menu_name) }));
            }
        }
    }
    return results;
};
exports.GroupObjToExpandMenuCode = GroupObjToExpandMenuCode;
const Vat8 = (items) => {
    return items.filter(x => (x === null || x === void 0 ? void 0 : x.selling_tax_percentage) === 8).reduce((x, y) => x + ((y.byod_price * ((y === null || y === void 0 ? void 0 : y.selling_tax_percentage) / 100)) * y.quantity), 0);
};
exports.Vat8 = Vat8;
const Vat10 = (items) => {
    return items.filter(x => (x === null || x === void 0 ? void 0 : x.selling_tax_percentage) === 10).reduce((x, y) => x + ((y.byod_price * ((y === null || y === void 0 ? void 0 : y.selling_tax_percentage) / 100)) * y.quantity), 0);
};
exports.Vat10 = Vat10;
const TotalPrice = (items) => {
    return items.reduce((x, y) => x + (y.byod_price * y.quantity), 0);
};
exports.TotalPrice = TotalPrice;
const FlattenObj = (obj, parent, res = {}) => {
    for (let key in obj) {
        let propName = parent ? parent + '_' + key : key;
        if (typeof obj[key] == 'object') {
            (0, exports.FlattenObj)(obj[key], propName, res);
        }
        else {
            res[propName] = obj[key];
        }
    }
    return res;
};
exports.FlattenObj = FlattenObj;
const UniqueArray = (array) => {
    return array.filter((v, i, a) => a.findIndex(v2 => (v2.productItems.id === v.productItems.id && v2.type === v.type)) === i);
};
exports.UniqueArray = UniqueArray;
const UniqueArrayItem = (array) => {
    return array.filter((v, i, a) => a.findIndex(v2 => (v2.menu_code === v.menu_code)) === i);
};
exports.UniqueArrayItem = UniqueArrayItem;
const AddZeroBefore = (number, length = 6) => {
    let zeroString = '';
    for (let i = 0; i < length; i++) {
        zeroString += '0';
    }
    let res = (zeroString + number).slice(-(length));
    return res;
};
exports.AddZeroBefore = AddZeroBefore;
const GetKeyByValue = (obj, value) => {
    return Object.keys(obj).find(key => value === null || value === void 0 ? void 0 : value.includes(obj[key]));
};
exports.GetKeyByValue = GetKeyByValue;
class GeneratePasswdClass {
    constructor() {
        this.GeneratePassword = () => {
            var specials = `~!@#$%^&*`;
            var lowercase = 'abcdefghijklmnopqrstuvwxyz';
            var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            var numbers = '0123456789';
            var all = specials + lowercase + uppercase + numbers;
            var password = '';
            password += this.Pick(specials, 2, 2);
            password += this.Pick(lowercase, 1, 1);
            password += this.Pick(uppercase, 1, 1);
            password += this.Pick(numbers, 1, 1);
            password += this.Pick(all, 5, 5);
            password = this.Shuffle(password);
            return password;
        };
    }
    Pick(str, min, max) {
        var n, chars = '';
        if (typeof max === 'undefined') {
            n = min;
        }
        else {
            n = min + Math.floor(Math.random() * (max - min + 1));
        }
        for (var i = 0; i < n; i++) {
            chars += str.charAt(Math.floor(Math.random() * str.length));
        }
        return chars;
    }
    Shuffle(str) {
        var array = str.split('');
        var tmp, current, top = array.length;
        if (top)
            while (--top) {
                current = Math.floor(Math.random() * (top + 1));
                tmp = array[current];
                array[current] = array[top];
                array[top] = tmp;
            }
        return array.join('');
    }
}
exports.GeneratePasswdClass = GeneratePasswdClass;
//# sourceMappingURL=utils.js.map