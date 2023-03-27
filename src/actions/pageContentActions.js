import wpApi from '../api/wpApi';

export const fetchPageContentRequest = () => ({
    type: 'FETCH_PAGE_CONTENT_REQUEST',
});

export const fetchPageContentSuccess = (content) => ({
    type: 'FETCH_PAGE_CONTENT_SUCCESS',
    payload: content,
});

export const fetchPageContentFailure = (error) => ({
    type: 'FETCH_PAGE_CONTENT_FAILURE',
    payload: error,
});

export const fetchPageContent = (postId) => async(dispatch) => {
    dispatch(fetchPageContentRequest());
    try {
        const response = await wpApi.get(`/wp/v2/posts?id=${postId}`);
        dispatch(fetchPageContentSuccess(response.data));
    } catch (error) {
        dispatch(fetchPageContentFailure(error.message));
    }
};