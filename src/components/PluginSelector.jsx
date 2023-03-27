import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPlugins } from '../features/selectors';

const PluginSelector = () => {
  const plugins = useSelector((state) => state.selectors.plugins);
  const loading = useSelector((state) => state.selectors.loading);
  const error = useSelector((state) => state.selectors.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlugins());
  }, [dispatch]);

  if (loading) {
    return <div>Loading plugins...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="plugin-selector">
      <ul>
        {plugins.map((plugin) => (
          <li key={plugin.id}>{plugin.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PluginSelector;
