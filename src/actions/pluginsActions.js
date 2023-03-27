 import wpApi from '../api/wpApi';


 export const fetchPluginsRequest = () => ({
     type: 'FETCH_PLUGINS_REQUEST',
 });

 export const fetchPluginsSuccess = (plugins) => ({
     type: 'FETCH_PLUGINS_SUCCESS',
     payload: plugins,
 });

 export const fetchPluginsFailure = (error) => ({
     type: 'FETCH_PLUGINS_FAILURE',
     payload: error,
 });

 export const fetchPlugins = () => async(dispatch) => {
     dispatch(fetchPluginsRequest());
     try {
         const response = await wpApi.get('/wp/v2/plugins');
         console.log('Response data:', response.data);

         dispatch(fetchPluginsSuccess(response.data));
     } catch (error) {
         dispatch(fetchPluginsFailure(error.message));
     }
 };