import { combineReducers } from "redux";
import themesReducer from "./themesReducer";
import pluginReducer from "./pluginReducer";
import widgetsReducer from "./widgetsReducer";
import shortcodesReducer from "./shortcodesReducer";
import pageContentReducer from "./pageContentReducer";

const rootReducer = combineReducers({
    themes: themesReducer,
    plugins: pluginReducer,
    widgets: widgetsReducer,
    shortcodes: shortcodesReducer,
    pageContent: pageContentReducer

});

export default rootReducer;