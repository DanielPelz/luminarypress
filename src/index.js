import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import App from './App';
import store from './store';

const rootElement = document.getElementById('root');
const postId = rootElement.dataset.postId;

ReactDOM.render(
  <Provider store={store}>
    <DndProvider backend={HTML5Backend}>
      <App postId={postId} />
    </DndProvider>
  </Provider>,
  rootElement
);