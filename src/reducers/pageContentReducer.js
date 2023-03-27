const initialState = {
    content: [],
    loading: false,
    error: null,
}

export default function pageContentReducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_PAGE_CONTENT_REQUEST':
            return {...state, loading: true, error: null };

        case 'FETCH_PAGE_CONTENT_SUCCESS':
            return {...state, loading: false, content: action.payload };

        case 'FETCH_PAGE_CONTENT_FAILURE':
            return {...state, loading: false, error: action.payload };

        default:
            return state;
    }
}