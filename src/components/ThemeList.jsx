import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchThemes } from "../actions/themesActions";

const ThemesList = ({ themes, loading, error, fetchThemes }) => {
  useEffect(() => {
    fetchThemes();
  }, [fetchThemes]);

  // hier werden die Themes gerendert und die Fehlermeldungen und Ladeanzeige behandelt
  return (
    <div>
      <h2>Themes</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {themes && (
        <ul>
          {themes.map((theme) => (
            <li key={theme.stylesheet}>{theme.name.rendered}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  themes: state.themes.themes,
  loading: state.themes.loading,
  error: state.themes.error,
});

const mapDispatchToProps = {
  fetchThemes,
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemesList);
