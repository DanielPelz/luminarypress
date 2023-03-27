import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchShortcodes } from '../features/selectors';

const ShortcodeSelector = () => {
  const shortcodes = useSelector((state) => state.selectors.shortcodes);
  const loading = useSelector((state) => state.selectors.loading);
  const error = useSelector((state) => state.selectors.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShortcodes());
  }, [dispatch]);

  if (loading) {
    return <div>Loading shortcodes...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="shortcode-selector">
      <ul>
        {shortcodes.map((shortcode) => (
          <li key={shortcode.id}>{shortcode.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShortcodeSelector;
