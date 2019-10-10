const initialState = {
    counter:1000
}

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case 'INCREMENT':
        return { ...state, counter: state.counter + 1 };
        case 'DECREMENT':
        return { ...state, counter: state.counter - 1 };
        case 'ADD':
        return { ...state, counter: state.counter + action.value };
        case 'REMOVE':
        return { ...state, counter: state.counter - action.value };
    }
    return state;
}

export default reducer;