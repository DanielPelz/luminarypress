import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWidgets } from '../features/selectors';

const WidgetSelector = () => {
  const widgets = useSelector((state) => state.selectors.widgets);
  const loading = useSelector((state) => state.selectors.loading);
  const error = useSelector((state) => state.selectors.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWidgets());
  }, [dispatch]);

  if (loading) {
    return <div>Loading widgets...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="widget-selector">
      <ul>
        {widgets.map((widget, index) => (
          <li key={index}>{widget.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetSelector;
