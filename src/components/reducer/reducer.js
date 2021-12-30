function reducer(state, action) {
    const {type, payload} = action
    switch (type) {
        case 'addNewList':
            if (payload.id)
                return state.map(item => (item.id === payload.id) ? {
                    ...item,
                    name: payload.name,
                    desc: payload.desc,
                    items: payload.items
                } : item)
            else
                return ([...state, {
                    id: Math.random() * 1000,
                    name: payload.name,
                    desc: payload.desc,
                    items: payload.items
                },]);
        case 'deleteList':
            return state.filter(list => list.id !== payload.id);
        case 'changeActivation':
            return state.map(list => (list.id === payload.listId) ?
                {
                    ...list,
                    items: list.items.map(item => (item.id === payload.itemId) ? {
                        ...item,
                        complete: payload.complete
                    } : item)
                }
                : list)
        case 'deleteItem':
            return state.map(list => (list.id === payload.listId) ? {
                    ...list,
                    items: list.items.filter(item => item.id !== payload.itemId)
                }
                : list)
        case 'submitNewItem':
            if (payload.itemId) return state.map(list => (list.id === payload.listId) ? {
                ...list,
                items: list.items.map(item => (item.id === payload.itemId) ? {...item, title: payload.title} : item)
            } : list)
            else return state.map(list => (list.name === payload.name) ? {
                ...list,
                items: [...list.items, {id: Math.random() * 1000, title: payload.title, complete: payload.complete}]
            } : list)
        default:
            return console.log('default');

    }
}

export default reducer