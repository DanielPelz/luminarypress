const initialState = {
    shortcodes: [],
    loading: false,
    error: null,
}

export default function shortcodesReducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_SHORTCODES_REQUEST':
            return {...state, loading: true, error: null };

        case 'FETCH_SHORTCODES_SUCCESS':
            return {...state, loading: false, shortcodes: action.payload };

        case 'FETCH_SHORTCODES_FAILURE':
            return {...state, loading: false, error: action.payload };

        default:
            return state;
    }
}