const initialState = {
    widgets: [],
    loading: false,
    error: null,
}

export default function widgetReducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_WIDGETS_REQUEST':
            return {...state, loading: true };
        case 'FETCH_WIDGETS_SUCCESS':
            return {...state, loading: false, widgets: action.payload };
        case 'FETCH_WIDGETS_FAILURE':
            return {...state, loading: false, error: action.payload };

        default:
            return state;
    }
}