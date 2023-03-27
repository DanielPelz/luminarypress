import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchShortcodes } from '../actions/shortcodesActions';

const ShortcodesList = ({ shortcodes, loading, error, fetchShortcodes }) => {
  useEffect(() => {
    fetchShortcodes();
  }, [fetchShortcodes]);

//hier werden die Shortcodes gerendert und die Fehlermeldungen und Ladeanzeige behandelt
    return (
        <div>
            <h1>Shortcodes</h1>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {shortcodes.map((shortcode, index) => (
                <li key={index}>
                   <a>{shortcode}</a>
                </li>
            ))}
        </div>
    );
};

const mapStateToProps = (state) => ({
  shortcodes: state.shortcodes.shortcodes,
  loading: state.shortcodes.loading,
  error: state.shortcodes.error,
});

const mapDispatchToProps = {
  fetchShortcodes,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShortcodesList);
