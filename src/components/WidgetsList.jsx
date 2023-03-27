import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchWidgets } from '../actions/widgetsActions';

const WidgetsList = ({ widgets, loading, error, fetchWidgets }) => {
  useEffect(() => {
    fetchWidgets();
  }, [fetchWidgets]);

  return (
        <div>
            <h2>Widgets List</h2>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {widgets.map((widget) => (
                <div key={widget.id_base}>
                    <h3>{widget.name}</h3>
                    <p>{widget.id_base}</p>
                </div>
            ))}
        </div>
    );
};

const mapStateToProps = (state) => ({
  widgets: state.widgets.widgets,
  loading: state.widgets.loading,
  error: state.widgets.error,
});

const mapDispatchToProps = {
  fetchWidgets,
};

export default connect(mapStateToProps, mapDispatchToProps)(WidgetsList);
