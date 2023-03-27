const initialState = {
    plugins: [],
    loading: false,
    error: null,
}

export default function pluginReducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_PLUGINS_REQUEST':
            return {...state, loading: true, error: null };

        case 'FETCH_PLUGINS_SUCCESS':
            return {...state, loading: false, plugins: action.payload };

        case 'FETCH_PLUGINS_FAILURE':
            return {...state, loading: false, error: action.payload };

        default:
            return state;
    }
}