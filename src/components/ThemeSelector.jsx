import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchThemes } from '../actions/themeActions';

const ThemeSelector = () => {
  const themes = useSelector((state) => state.themes.themes);
  const loading = useSelector((state) => state.themes.loading);
  const error = useSelector((state) => state.themes.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchThemes());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="theme-selector">
      <ul>
        {themes.map((theme) => (
          <li key={theme.id}>{theme.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ThemeSelector;
