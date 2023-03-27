import wpApi from '../api/wpApi';


export const fetchShortcodesRequest = () => ({
    type: 'FETCH_SHORTCODES_REQUEST',
});

export const fetchShortcodesSuccess = (shortcodes) => ({
    type: 'FETCH_SHORTCODES_SUCCESS',
    payload: shortcodes,
});

export const fetchShortcodesFailure = (error) => ({
    type: 'FETCH_SHORTCODES_FAILURE',
    payload: error,
});

export const fetchShortcodes = () => async(dispatch) => {
    dispatch(fetchShortcodesRequest());
    try {
        const response = await wpApi.get('/luminarypress/v1/shortcodes');
        console.log('Response data:', response.data);

        dispatch(fetchShortcodesSuccess(response.data));
    } catch (error) {
        dispatch(fetchShortcodesFailure(error.message));
    }
};