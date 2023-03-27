import React from 'react';
import { useDispatch } from 'react-redux';
import { saveChanges, previewChanges, publishChanges, undoChanges, redoChanges } from '../actions/visualBuilderActions';


const Toolbar = () => {
    const dispatch = useDispatch();
  
    const handleSave = () => {
      dispatch(saveChanges());
    };
  
    const handlePreview = () => {
      dispatch(previewChanges());
    };
  
    const handlePublish = () => {
      dispatch(publishChanges());
    };
  
     const handleUndo = () => {
        dispatch(undoChanges());
    };
    
    const handleRedo = () => {
        dispatch(redoChanges());
    };
  
    return (
      <div className="toolbar">
        <button onClick={handleSave}>Save</button>
        <button onClick={handlePreview}>Preview</button>
        <button onClick={handlePublish}>Publish</button>
        <button onClick={handleUndo}>Undo</button>
        <button onClick={handleRedo}>Redo</button>
  
      </div>
    );
  };
  
  export default Toolbar;