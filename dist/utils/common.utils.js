"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformInputToMenu = exports.CheckEmpty = exports.ConvertAddRess = exports.getFirstAndLastDay = void 0;
function getFirstAndLastDay(input) {
    const year = Number(input.split('-')[0]);
    const month = Number(input.split('-')[1]);
    const firstDay = new Date(Date.UTC(year, month - 1, 1));
    const lastDay = new Date(Date.UTC(year, month, 0));
    return {
        firstDay: firstDay.toISOString().split('T')[0],
        lastDay: lastDay.toISOString().split('T')[0],
    };
}
exports.getFirstAndLastDay = getFirstAndLastDay;
const ConvertAddRess = (data) => {
    const output = data.map(({ id, brand, name, min_stock, doorId, active }) => ({
        id,
        brand: brand,
        active: active,
        name: name,
        min_stock: min_stock,
        doorId: doorId,
    }));
    return output;
};
exports.ConvertAddRess = ConvertAddRess;
const CheckEmpty = (value) => {
    if (value === null ||
        (value === null || value === void 0 ? void 0 : value.toString().trim()) === '' ||
        value === undefined) {
        return true;
    }
    else {
        return false;
    }
};
exports.CheckEmpty = CheckEmpty;
const transformInputToMenu = (input) => {
    const menuList = [];
    const menuMap = new Map();
    for (const item of input) {
        const { idMenu, title, parentId, idController, idAction, controllerActive, href, displayOrder, groupLevel, createdDate, createdBy, modifiredDate, modifiredBy, status, } = item;
        const menuItem = {
            idMenu,
            title,
            parentId,
            idController,
            idAction,
            controllerActive,
            href,
            displayOrder,
            groupLevel,
            createdDate,
            createdBy,
            modifiredDate,
            modifiredBy,
            status,
            children: [],
        };
        if (parentId !== null) {
            const parentMenu = menuMap.get(parentId);
            if (parentMenu) {
                parentMenu.children.push(menuItem);
            }
        }
        else {
            menuList.push(menuItem);
        }
        menuMap.set(idMenu, menuItem);
    }
    return menuList;
};
exports.transformInputToMenu = transformInputToMenu;
//# sourceMappingURL=common.utils.js.map