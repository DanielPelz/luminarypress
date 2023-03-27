// Dieser Reducer ist für die Themes zuständig

// Import der Themes
const initialState = {
    themes: [],
    activeThemes: [],
    activeTheme: null,
    loading: false,
    error: null
}

// Reducer
export default function themesReducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_THEMES_REQUEST':
            return {...state, loading: true };

        case 'FETCH_THEMES_SUCCESS':
            return {...state, loading: false, themes: action.payload };

        case 'FETCH_THEMES_FAILURE':
            return {...state, loading: false, error: action.payload };

        case 'SET_ACTIVE_THEMES':
            return {...state, activeThemes: action.payload };


        default:
            return state;
    }
}