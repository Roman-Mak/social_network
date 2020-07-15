export const updateObjInArray = (items, itemId, newItemId, newObjProp) => {
    return items.map(item => {
        if (item[itemId] === newItemId) {
            return {...item, ...newObjProp}
        } else return item;
    })
};