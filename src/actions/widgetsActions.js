import wpApi from '../api/wpApi';

export const fetchWidgetsRequest = () => ({
    type: 'FETCH_WIDGETS_REQUEST',
});

export const fetchWidgetsSuccess = (widgets) => ({
    type: 'FETCH_WIDGETS_SUCCESS',
    payload: widgets,
});

export const fetchWidgetsFailure = (error) => ({
    type: 'FETCH_WIDGETS_FAILURE',
    payload: error,
});

export const fetchWidgets = () => async(dispatch) => {
    dispatch(fetchWidgetsRequest());
    try {
        const response = await wpApi.get('/luminarypress/v1/widgets');

        dispatch(fetchWidgetsSuccess(response.data));
    } catch (error) {
        dispatch(fetchWidgetsFailure(error.message));
    }
};