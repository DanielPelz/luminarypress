import './App.css';
import VisualBuilder from './VisualBuilder';

function App({ postId }) {

  return (
    <div className="App">
      <VisualBuilder postId={postId} />
    </div>
  );
}

export default App;