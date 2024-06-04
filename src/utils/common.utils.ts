export function getFirstAndLastDay(input) {
  const year = Number(input.split('-')[0]);
  const month = Number(input.split('-')[1]);
  const firstDay = new Date(Date.UTC(year, month - 1, 1));
  const lastDay = new Date(Date.UTC(year, month, 0));
  return {
    firstDay: firstDay.toISOString().split('T')[0],
    lastDay: lastDay.toISOString().split('T')[0],
  };
}

export const ConvertAddRess = (data: any) => {
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

export const CheckEmpty = (value) => {
  if (
    value === null ||
    value?.toString().trim() === '' ||
    value === undefined
  ) {
    return true;
  } else {
    return false;
  }
};

export const transformInputToMenu = (input) => {
  const menuList = [];

  // Create a map to store menu items by their IDs
  const menuMap = new Map();

  // Iterate through each item in the input data
  for (const item of input) {
    const {
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
    } = item;

    // Create a new menu item
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

    // If the item has a parentId, find the corresponding menu item
    if (parentId !== null) {
      const parentMenu = menuMap.get(parentId);
      if (parentMenu) {
        parentMenu.children.push(menuItem);
      }
    } else {
      // If it doesn't have a parentId, add it to the menuList
      menuList.push(menuItem);
    }

    // Store the menu item in the map
    menuMap.set(idMenu, menuItem);
  }

  return menuList;
};
