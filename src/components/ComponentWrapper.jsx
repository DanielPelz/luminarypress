import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectComponent, deselectComponent, deleteComponent } from '../actions/visualBuilderActions';
import TemplateComponent from './TemplateComponent';
import WidgetComponent from './WidgetComponent';
import ShortcodeComponent from './ShortcodeComponent';

const ComponentWrapper = ({ component }) => {
  const dispatch = useDispatch();
  const isSelected = useSelector((state) => state.selectedComponentId === component.id);
  const componentRef = useRef(null);

  useEffect(() => {
    if (isSelected && componentRef.current) {
      componentRef.current.focus();
    }
  }, [isSelected]);

  const handleSelect = (event) => {
    event.stopPropagation();
    dispatch(selectComponent(component.id));
  };

  const handleDeselect = (event) => {
    event.stopPropagation();
    dispatch(deselectComponent());
  };

  const handleDelete = (event) => {
    event.stopPropagation();
    dispatch(deleteComponent(component.id));
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Delete' && isSelected) {
      dispatch(deleteComponent(component.id));
    }
  };

  const handleBlur = () => {
    if (isSelected) {
      dispatch(deselectComponent());
    }
  };

  const handleFocus = (event) => {
    event.stopPropagation();
    dispatch(selectComponent(component.id));
  };

  const componentStyle = {
    position: 'absolute',
    left: component.left,
    top: component.top,
  };

  return (
    <div
      className={`component-wrapper ${isSelected ? 'selected' : ''}`}
      style={componentStyle}
      onClick={handleSelect}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
      onFocus={handleFocus}
      tabIndex="0"
      ref={componentRef}
    >
      {/* Render the actual component */}
      {component.type === 'template' && <TemplateComponent />}
      {component.type === 'widget' && <WidgetComponent />}
      {component.type === 'shortcode' && <ShortcodeComponent />}

      {/* Render editing options */}
      {isSelected && (
        <div className="editing-options">
          <button onClick={handleDeselect}>Deselect</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default ComponentWrapper;
