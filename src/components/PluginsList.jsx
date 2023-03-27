import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPlugins } from '../actions/pluginsActions';

const PluginsList = ({ plugins, loading, error, fetchPlugins }) => {
    useEffect(() => {
        fetchPlugins();
    }, [fetchPlugins]);

    // Render plugins, hier werden die Plugins gerendert und die Fehlermeldungen und Ladeanzeige behandelt
    return (
        <div>
            <h2>Plugins List</h2>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <ul>
                {plugins.map((plugin, index) => (
                    <li key={index}>
                       <div>
                        <h3>{plugin.name}</h3>
                        <p>{plugin.description}</p>
                       </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => ({
    plugins: state.plugins.plugins,
    loading: state.plugins.loading,
    error: state.plugins.error,
});

const mapDispatchToProps = {
    fetchPlugins,
};

export default connect(mapStateToProps, mapDispatchToProps)(PluginsList);
