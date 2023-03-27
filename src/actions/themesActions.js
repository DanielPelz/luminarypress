import wpApi from '../api/wpApi';


export const fetchThemesRequest = () => ({
    type: 'FETCH_THEMES_REQUEST',
});

export const fetchThemesSuccess = (themes) => ({
    type: 'FETCH_THEMES_SUCCESS',
    payload: themes,
});

export const fetchThemesFailure = (error) => ({
    type: 'FETCH_THEMES_FAILURE',
    payload: error,
});

export const fetchThemes = () => async(dispatch) => {
    dispatch(fetchThemesRequest());
    try {
        const response = await wpApi.get('/wp/v2/themes');

        dispatch(fetchThemesSuccess(response.data));
    } catch (error) {
        dispatch(fetchThemesFailure(error.message));
    }
};